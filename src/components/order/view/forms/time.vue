<template>
	<form @submit.prevent.stop="onSubmit">
		<div class="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-4">
			<div class="flex-initial sm:flex-1 md:flex-initial lg:flex-1">
				<label for="startedAtField" class="mb-2 inline-block">
					Дата и время начала работы:
				</label>
				<input
					id="startedAtField"
					type="datetime-local"
					v-model="state.started_at"
					:min="new Date().toISOString().slice(0, -8)"
					class="
						block
						w-full
						px-4
						py-1.5
						rounded-md
						bg-primary/10
						border border-primary/10
						hover:border-primary/50
						focus:border-primary focus:outline-none
					"
				/>
				<div
					class="text-red-500"
					v-for="error in validator.started_at.$errors"
					:key="error.$uid"
				>
					{{ error.$message }}
				</div>
			</div>
			<div class="flex-0 sm:flex-1 md:flex-0 lg:flex-1">
				<label for="endedAtField" class="mb-2 inline-block">
					Дата и время завершения работы:
				</label>
				<input
					id="endedAtField"
					type="datetime-local"
					v-model="state.ended_at"
					:min="
						(state.stated_at
							? new Date(state.stated_at)
							: new Date()
						)
							.toISOString()
							.slice(0, -8)
					"
					class="
						block
						w-full
						px-4
						py-1.5
						rounded-md
						bg-primary/10
						border border-primary/10
						hover:border-primary/50
						focus:border-primary focus:outline-none
					"
				/>

				<div
					class="text-red-500"
					v-for="error in validator.ended_at.$errors"
					:key="error.$uid"
				>
					{{ error.$message }}
				</div>
			</div>
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
	import {
		helpers,
		required,
		requiredIf,
		requiredUnless,
	} from "@vuelidate/validators";
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
		started_at: false,
		ended_at: false,
	});

	const setStateWithDefaults = () => {
		Object.assign(state, {
			started_at: defaultState.value?.started_at
				? new Date(defaultState.value?.started_at)
						.toISOString()
						.slice(0, -8)
				: null,
			ended_at: defaultState.value?.started_at
				? new Date(defaultState.value?.ended_at)
						.toISOString()
						.slice(0, -8)
				: null,
		});
	};
	setStateWithDefaults();

	const rules = {
		started_at: {
			required: helpers.withMessage("Укажите дату", required),
			minValue: helpers.withMessage(
				"Время начала должна быть больше текущей",
				(value) => {
					return new Date(value) > new Date();
				}
			),
		},
		ended_at: {
			required: helpers.withMessage("Укажите дату", required),
			minValueRef: helpers.withMessage(
				"Время завершения должна быть больше времени началы",
				(value) => {
					return new Date(value) > new Date(state.started_at);
				}
			),
		},
	};

	const $externalResults = reactive({
		started_at: [],
		ended_at: [],
	});

	watch(
		() => state.started_at,
		() => {
			Object.assign($externalResults, { started_at: [] });
		}
	);
	watch(
		() => state.ended_at,
		() => {
			Object.assign($externalResults, { ended_at: [] });
		}
	);

	const validator = useVuelidate(rules, state, { $externalResults });

	const onSubmit = async () => {
		if (!(await validator.value.$validate())) return;

		await execute({
			started_at: new Date(state.started_at)
				.toISOString()
				.slice(0, -5)
				.replace("T", " "),
			ended_at: new Date(state.ended_at)
				.toISOString()
				.slice(0, -5)
				.replace("T", " "),
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
