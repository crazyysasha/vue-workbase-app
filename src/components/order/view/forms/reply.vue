<script setup>
	import useVuelidate from "@vuelidate/core";
	import { helpers, minLength, required } from "@vuelidate/validators";
	import { reactive } from "vue";
	import useOrderModelInstance from "../../composables/model-instance";
	const emit = defineEmits(["success", "cancel"]);
	const state = reactive({ content: "" });
	const rules = {
		content: {
			required: helpers.withMessage(
				"Напишите сообщение для отклика",
				required
			),
			minLength: helpers.withMessage(
				"Минимальное количество символов: 5",
				minLength(5)
			),
		},
	};
	const $externalResults = reactive({ content: [] });

	const validator = useVuelidate(rules, state, { $externalResults });

	const { model, onCreateReply } = useOrderModelInstance();

	const {
		onCreateReplyToOrderIsLoading,
		onCreateReplyToOrderIsLoaded,
		onCreateReplyToOrderPromise,
		onCreateReplyToOrderExecute,
	} = onCreateReply();

	const onSubmit = async () => {
		if (!(await validator.value.$validate())) return;
		await onCreateReplyToOrderExecute(model.value?.id, state).catch(
			({ type, message, fields }) => {
				if (type == "validation") {
					return Object.assign($externalResults, {
						content: fields.content || [],
					});
				}
				throw { type, message, fields };
			}
		);
		emit("success");
	};
	console.log(model.value);
	const onCancel = () => emit("cancel");
</script>

<template>
	<form @submit.prevent="onSubmit">
		<h1 class="text-2xl text-primary mb-4">Откликнутся на данный заказ</h1>
		<div>
			<c-textarea
				v-model="state.content"
				name="content"
				class="w-full"
				:valid="!validator.content.$error"
			>
				Ваше сообщение
			</c-textarea>
			<div
				class="mb-3 text-red-500"
				v-for="error in validator.content.$errors"
				:key="error.$uid"
			>
				{{ error.$message }}
			</div>
		</div>
		<div class="flex justify-between mt-4">
			<c-button
				scheme="secondary"
				type="button"
				@click="onCancel"
				:loading="onCreateReplyToOrderIsLoading"
				:disabled="onCreateReplyToOrderIsLoading"
			>
				отмена
			</c-button>
			<c-button
				:loading="onCreateReplyToOrderIsLoading"
				:disabled="onCreateReplyToOrderIsLoading"
			>
				откликнуться
			</c-button>
		</div>
	</form>
</template>

