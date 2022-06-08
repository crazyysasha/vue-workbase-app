<template>
	<form @submit.prevent.stop="onSubmit">
		<div class="grid grid-cols-2 gap-4">
			<div>
				<c-input
					type="number"
					name="price-min"
					class="w-full"
					v-model="state.price_min"
					:valid="!validator.price_min.$error"
					:loading="onUpdateOrderIsLoading"
					:disabled="onUpdateOrderIsLoading"
				>
					Укажите минимальную стоимость услуги
					<template #prefix>От:</template>
				</c-input>
				<div class="mt-1 mb-4">
					<div
						class="text-red-500"
						v-for="error in validator.price_min.$errors"
						:key="error.$uid"
					>
						{{ error.$message }}
					</div>
				</div>
			</div>
			<div>
				<c-input
					type="number"
					name="price-max"
					class="w-full"
					v-model="state.price_max"
					:valid="!validator.price_max.$error"
					:loading="onUpdateOrderIsLoading"
					:disabled="onUpdateOrderIsLoading"
				>
					Укажите максимальную стоимость услуги
					<template #prefix>До:</template>
				</c-input>
				<div class="mt-1 mb-4">
					<div
						class="text-red-500"
						v-for="error in validator.price_max.$errors"
						:key="error.$uid"
					>
						{{ error.$message }}
					</div>
				</div>
			</div>
		</div>
		<div class="flex justify-between">
			<c-button
				type="button"
				scheme="secondary"
				@click="onCancel"
				:loading="onUpdateOrderIsLoading"
				:disabled="onUpdateOrderIsLoading"
			>
				отмена
			</c-button>
			<c-button
				:loading="onUpdateOrderIsLoading"
				:disabled="onUpdateOrderIsLoading"
			>
				сохранить
			</c-button>
		</div>
	</form>
</template>

<script setup>
	import useVuelidate from "@vuelidate/core";
	import {
		helpers,
		minLength,
		required,
		requiredIf,
	} from "@vuelidate/validators";
	import { reactive, toRefs, unref, watch, watchEffect } from "vue";
	import useOrderModelInstance from "../../composables/model-instance";

	const emit = defineEmits(["cancel", "success"]);

	const { model, onUpdate } = useOrderModelInstance();

	watch(model, () => setStateWithDefaults());

	const state = reactive({ price_min: "", price_max: "" });

	const setStateWithDefaults = () => {
		console.log(model.value);
		Object.assign(state, {
			price_min: model.value?.price_min || "",
			price_max: model.value?.price_max || "",
		});
	};

	setStateWithDefaults();

	const rules = {
		price_min: {
			requiredIf: helpers.withMessage("", requiredIf(false)),
		},
		price_max: {
			required: helpers.withMessage("Укажите максимальную цену", required),
		},
	};

	const $externalResults = reactive({ price_min: [], price_max: [] });

	watch(
		() => state.price_min,
		() => {
			Object.assign($externalResults, { price_min: [] });
		}
	);
	watch(
		() => state.price_max,
		() => {
			Object.assign($externalResults, { price_max: [] });
		}
	);

	const validator = useVuelidate(rules, state, { $externalResults });

	const {
		onUpdateOrderIsLoading,
		onUpdateOrderIsLoaded,
		onUpdateOrderPromise,
		onUpdateOrderExecute,
	} = onUpdate();

	const onSubmit = async () => {
		if (!(await validator.value.$validate())) return;

		await onUpdateOrderExecute(model.value.id, {
			price_min: state.price_min || 0,
			price_max: state.price_max || 0,
		})
			.then((order) => emit("success", order))
			.catch(({ type, fields, message }) => {
				if (type == "validation") Object.assign($externalResults, fields);
				else alert(message);
				throw { error, fields, message };
			});
	};

	const onCancel = () => {
		setStateWithDefaults();
		emit("cancel");
	};
</script>
