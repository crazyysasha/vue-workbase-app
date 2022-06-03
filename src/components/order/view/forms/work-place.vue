<template>
	<form @submit.prevent.stop="onSubmit">
		<ul>
			<li>
				<c-checkbox v-model="state.at_executor" :disabled="isLoading">
					У исполнителя
				</c-checkbox>
			</li>
			<li>
				<c-checkbox v-model="state.at_customer" :disabled="isLoading">
					У заказчика
				</c-checkbox>
			</li>
			<li>
				<c-checkbox v-model="state.is_online" :disabled="isLoading">
					Дистанционно
				</c-checkbox>
			</li>
		</ul>
		<div
			class="text-red-500"
			v-for="error in validator.at_customer.$errors"
			:key="error.$uid"
		>
			{{ error.$message }}
		</div>
		<div
			class="text-red-500"
			v-for="error in validator.is_online.$errors"
			:key="error.$uid"
		>
			{{ error.$message }}
		</div>
		<div
			class="text-red-500"
			v-for="error in validator.at_executor.$errors"
			:key="error.$uid"
		>
			{{ error.$message }}
		</div>

		<div class="flex justify-between mt-4">
			<c-button
				type="button"
				scheme="secondary"
				@click="onCancel"
				:loading="isLoading"
				:disabled="isLoading"
			>
				отмена
			</c-button>
			<c-button :loading="isLoading" :disabled="isLoading">
				сохранить
			</c-button>
		</div>
	</form>
</template>
<script setup>
	import useVuelidate from "@vuelidate/core";
	import { helpers, requiredIf, requiredUnless } from "@vuelidate/validators";
	import { reactive, toRefs, unref, watch } from "vue";

	const props = defineProps({
		defaultState: {
			type: Object,
		},
		updateHandlers: {
			type: Object,
			required: true,
		},
	});

	const { defaultState, updateHandlers } = toRefs(props);

	const { execute, isLoading, isLoaded, promise } = unref(updateHandlers);

	const emit = defineEmits(["cancel", "success"]);

	watch(defaultState, () => setStateWithDefaults());

	const state = reactive({
		at_executor: false,
		at_customer: false,
		is_online: false,
	});

	const setStateWithDefaults = () => {
		Object.assign(state, {
			at_executor: defaultState.value?.at_executor || false,
			at_customer: defaultState.value?.at_customer || false,
			is_online: defaultState.value?.is_online || false,
		});
	};
	setStateWithDefaults();

	const rules = {
		at_executor: {
			requiredIf: requiredIf(false),
		},
		at_customer: {
			requiredIf: requiredIf(false),
		},
		is_online: {
			requiredUnless: helpers.withMessage(
				"Выберите как минимум одно значение",
				() => state.at_customer || state.at_executor || state.is_online
			),
		},
	};

	const $externalResults = reactive({
		at_executor: [],
		at_customer: [],
		is_online: [],
	});

	watch(
		() => state.at_executor,
		() => {
			Object.assign($externalResults, { at_executor: [] });
		}
	);
	watch(
		() => state.at_customer,
		() => {
			Object.assign($externalResults, { at_customer: [] });
		}
	);
	watch(
		() => state.is_online,
		() => {
			Object.assign($externalResults, { is_online: [] });
		}
	);

	const validator = useVuelidate(rules, state, { $externalResults });

	const onSubmit = async () => {
		if (!(await validator.value.$validate())) return;

		await execute(state)
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
