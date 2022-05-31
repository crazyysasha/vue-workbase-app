<template>
	<form @submit.prevent="onLoginHandler" class="block max-w-[24rem] md:w-96">
		<h3 class="block text-xl md:text-xl text-center mb-6">Авторизация</h3>
		<p v-if="loginErrorMessage" class="mb-6 text-red-500 font-thin text-sm">
			{{ loginErrorMessage }}
		</p>

		<div class="flex flex-col mb-4">
			<c-input
				v-model="loginState.username"
				name="username"
				:valid="!loginValidator.username.$error"
				placeholder="+998901234567"
				class="w-full"
			>
				Номер телефона
			</c-input>
			<div class="mb-3 font-thin text-red-500">
				<div
					v-for="error in loginValidator.username.$errors"
					v-bind:key="error.$uid"
				>
					{{ error.$message }}
				</div>
			</div>
			<c-input
				v-model="loginState.password"
				name="password"
				:valid="!loginValidator.password.$error"
				type="password"
				placeholder="Пароль"
				eye
				class="w-full"
			>
				Пароль
			</c-input>
			<div class="mb-3 font-thin text-red-500">
				<div
					v-for="error in loginValidator.password.$errors"
					v-bind:key="error.$uid"
				>
					{{ error.$message }}
				</div>
			</div>
		</div>
		<div class="grid grid-cols-1 gap-4">
			<c-button
				value="executor"
				:disabled="isLogining"
				:loading="isLogining"
			>
				Войти как исполнитель
			</c-button>
			<c-button
				scheme="secondary"
				value="customer"
				:disabled="isLogining"
				:loading="isLogining"
			>
				Войти как заказчик
			</c-button>
		</div>
	</form>
</template>

<script setup>
	import { useLogin } from "@/composables/auth";
	import { ProfileType } from "@/utils/enums";
	import useVuelidate from "@vuelidate/core";
	import { helpers, required, sameAs } from "@vuelidate/validators";
	import { or } from "@vueuse/core";
	import { reactive, ref, watch } from "vue";

	const emit = defineEmits(["successful"]);

	const { onLogin, isLogining, profile, isLogined } = useLogin();

	const loginState = reactive({
		username: "",
		password: "",
		type: ProfileType.customer,
	});

	watch(
		() => loginState.username,
		() => {
			loginExternalResults.username = [];
		}
	);
	watch(
		() => loginState.password,
		() => {
			loginExternalResults.password = [];
		}
	);
	watch(
		() => loginState.type,
		() => {
			loginExternalResults.type = [];
		}
	);

	const loginRules = reactive({
		username: {
			required: helpers.withMessage("Введите номер телефона", required),
		},
		password: {
			required: helpers.withMessage("Введите пароль", required),
		},
		type: {
			in: helpers.withMessage(
				"Тип пользователя может быть только как заказчик или исполнитель",
				or(sameAs(ProfileType.customer), sameAs(ProfileType.executor))
			),
		},
	});
	const loginExternalResults = reactive({
		username: [],
		password: [],
		type: [],
	});

	const loginValidator = useVuelidate(loginRules, loginState, {
		$externalResults: loginExternalResults,
	});

	const loginErrorMessage = ref();

	const onLoginHandler = async (event) => {
		const type = event.submitter.value;
		Object.assign(loginState, { type });
		if (!(await loginValidator.value.$validate())) return;
		await onLogin(loginState).catch(({ response }) => {
			const { type, fields, message } = response.data.error;
			if (type == "validation") {
				Object.assign(loginExternalResults, fields);
			}
			if (type == "auth") {
				loginErrorMessage.value = message;
			}
			throw new Error({ type, fields, message });
		});
		emit("successful", profile.value);
	};
</script>