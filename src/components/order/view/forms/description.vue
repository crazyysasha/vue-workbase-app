<template>
	<form @submit.prevent.stop="onSubmit">
		<c-textarea
			name="description"
			class="w-full"
			v-model="state.description"
			:valid="!validator.description.$error"
			:loading="onUpdateOrderIsLoading"
			:disabled="onUpdateOrderIsLoading"
		>
			Дополнительные пожелания
		</c-textarea>
		<div class="mt-1 mb-4">
			<div
				class="text-red-500"
				v-for="error in validator.description.$errors"
				:key="error.$uid"
			>
				{{ error.$message }}
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
				>сохранить</c-button
			>
		</div>
	</form>
</template>

<script setup>
	import useVuelidate from "@vuelidate/core";
	import { helpers, minLength } from "@vuelidate/validators";
	import { reactive, watch } from "vue";
	import useOrderModelInstance from "../../composables/model-instance";

	const emit = defineEmits(["cancel", "success"]);

	const { model, onUpdate } = useOrderModelInstance();

	watch(model, () => setStateWithDefaults());

	const state = reactive({ description: "" });

	const setStateWithDefaults = () => {
		Object.assign(state, {
			description: model.value?.description || "",
		});
	};

	setStateWithDefaults();

	const rules = {
		description: {
			minLength: helpers.withMessage(
				"Минимальное количество символов: 5",
				minLength(5)
			),
		},
	};

	const $externalResults = reactive({ description: [] });

	watch(
		() => state.description,
		() => {
			Object.assign($externalResults, { description: [] });
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

		await onUpdateOrderExecute(model.value.id, state)
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
