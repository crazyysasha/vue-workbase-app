<script setup>
	import useConversations from "@/composables/chat/conversations/collection";
	import useVuelidate from "@vuelidate/core";
	import { helpers, minLength, required } from "@vuelidate/validators";
	import { computed, reactive } from "vue";
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

	const { model } = useOrderModelInstance();
	const { onCreate } = useConversations();
	const {
		isLoading: onCreateConversationIsLoading,
		isLoaded: onCreateConversationIsLoaded,
		execute: onCreateConversationExecute,
		promise: onCreateConversationPromise,
	} = onCreate();

	const onSubmit = async () => {
		if (!(await validator.value.$validate())) return;
		const conversation = await onCreateConversationExecute().catch(
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

	const isLoading = computed(() => {
		return onCreateConversationIsLoading.value;
	});
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
				:loading="isLoading"
				:disabled="isLoading"
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
				:loading="isLoading"
				:disabled="isLoading"
			>
				отмена
			</c-button>
			<c-button :loading="isLoading" :disabled="isLoading">
				откликнуться
			</c-button>
		</div>
	</form>
</template>

