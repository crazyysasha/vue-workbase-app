<template>
	<form
		@submit.prevent="onRegisterHandler"
		class="block max-w-[24rem] md:w-96"
	>
		<h3 class="block text-xl md:text-xl text-center mb-6">Регистрация</h3>
		<p
			v-if="registerErrorMessage"
			class="mb-6 text-red-500 font-thin text-sm"
		>
			{{ registerErrorMessage }}
		</p>

		<div class="flex flex-col">
			<c-input
				v-model="registerState.name"
				name="name"
				class="w-full"
				type="text"
				:valid="!registerValidator.name.$error"
			>
				Имя
			</c-input>
			<div class="mt-0.5 mb-3.5">
				<div
					class="text-red-500"
					v-for="error in registerValidator.name.$errors"
					:key="error.$uid"
				>
					{{ error.$message }}
				</div>
			</div>
			<c-input
				v-model="registerState.surname"
				name="surname"
				class="w-full"
				type="text"
				:valid="!registerValidator.surname.$error"
			>
				Фамилия
			</c-input>
			<div class="mt-0.5 mb-3.5">
				<div
					class="text-red-500"
					v-for="error in registerValidator.surname.$errors"
					:key="error.$uid"
				>
					{{ error.$message }}
				</div>
			</div>
			<c-input
				v-model="registerState.patronymic"
				name="patronymic"
				class="w-full"
				type="text"
				:valid="!registerValidator.patronymic.$error"
			>
				Отчество
			</c-input>
			<div class="mt-0.5 mb-3.5">
				<div
					class="text-red-500"
					v-for="error in registerValidator.patronymic.$errors"
					:key="error.$uid"
				>
					{{ error.$message }}
				</div>
			</div>
			<c-input
				v-model="registerState.username"
				name="username"
				class="w-full"
				type="text"
				:valid="!registerValidator.username.$error"
			>
				Номер телефона
			</c-input>
			<div class="mt-0.5 mb-3.5">
				<div
					class="text-red-500"
					v-for="error in registerValidator.username.$errors"
					:key="error.$uid"
				>
					{{ error.$message }}
				</div>
			</div>
			<c-input
				v-model="registerState.email"
				name="email"
				class="w-full"
				type="email"
				:valid="!registerValidator.email.$error"
			>
				Электронный почтовый адрес
			</c-input>
			<div class="mt-0.5 mb-3.5">
				<div
					class="text-red-500"
					v-for="error in registerValidator.email.$errors"
					:key="error.$uid"
				>
					{{ error.$message }}
				</div>
			</div>
			<c-input
				v-model="registerState.password"
				name="password"
				class="w-full"
				type="password"
				eye
				:valid="!registerValidator.password.$error"
			>
				Пароль
			</c-input>
			<div class="mt-0.5 mb-3.5">
				<div
					class="text-red-500"
					v-for="error in registerValidator.password.$errors"
					:key="error.$uid"
				>
					{{ error.$message }}
				</div>
			</div>
			<c-input
				v-model="registerState.passwordConfirmation"
				name="passwordConfirmation"
				class="w-full"
				type="password"
				eye
				:valid="!registerValidator.passwordConfirmation.$error"
			>
				Подтверждение пароля
			</c-input>
			<div class="mt-0.5 mb-3.5">
				<div
					class="text-red-500"
					v-for="error in registerValidator.passwordConfirmation
						.$errors"
					:key="error.$uid"
				>
					{{ error.$message }}
				</div>
			</div>
		</div>
		<div class="grid grid-cols-1 gap-4">
			<c-button
				value="executor"
				:disabled="isRegistering"
				:loading="isRegistering"
			>
				Зарегистрироваться как исполнитель
			</c-button>
			<c-button
				scheme="secondary"
				value="customer"
				:disabled="isRegistering"
				:loading="isRegistering"
			>
				Зарегистрироваться как заказчик
			</c-button>
		</div>
	</form>
</template>

<script setup>
	import { useRegister } from "@/composables/auth";
	import { ProfileType } from "@/utils/enums";
	import useVuelidate from "@vuelidate/core";
	import {
		email,
		helpers,
		required,
		requiredIf,
		sameAs,
	} from "@vuelidate/validators";
	import { or } from "@vueuse/core";
	import { reactive, ref, toRef, watch } from "vue";

	const emit = defineEmits(["successful"]);

	const { onRegister, isRegistering, isRegistered, profile } = useRegister();

	const registerState = reactive({
		name: "",
		surname: "",
		patronymic: "",
		username: "",
		email: "",
		password: "",
		passwordConfirmation: "",
		type: ProfileType.customer,
	});

	watch(
		() => registerState.name,
		() => {
			registerExternalResults.name = [];
		}
	);
	watch(
		() => registerState.surname,
		() => {
			registerExternalResults.surname = [];
		}
	);
	watch(
		() => registerState.patronymic,
		() => {
			registerExternalResults.patronymic = [];
		}
	);
	watch(
		() => registerState.username,
		() => {
			registerExternalResults.username = [];
		}
	);
	watch(
		() => registerState.email,
		() => {
			registerExternalResults.email = [];
		}
	);
	watch(
		() => registerState.password,
		() => {
			registerExternalResults.password = [];
		}
	);
	watch(
		() => registerState.passwordConfirmation,
		() => {
			registerExternalResults.passwordConfirmation = [];
		}
	);
	const registerRules = {
		name: {
			required: helpers.withMessage("Введите имя", required),
		},
		surname: {
			required: helpers.withMessage("Введите фамилию", required),
		},
		patronymic: {
			requiredIf: requiredIf(false),
		},
		username: {
			required: helpers.withMessage("Введите номер телефона", required),
		},
		email: {
			required: helpers.withMessage("Введите емэил", required),
			email: helpers.withMessage("Введите корректный емэил", email),
		},
		password: {
			required: helpers.withMessage("Укажите пароль", required),
		},
		passwordConfirmation: {
			sameAsPassword: helpers.withMessage(
				"Подтверждение пароля не совподает с паролем",
				sameAs(toRef(registerState, "password"))
			),
		},
		type: {
			required: helpers.withMessage("Укажите тип пользователя", required),
			in: helpers.withMessage(
				"Тип пользователя может быть только как заказчик или исполнитель",
				or(sameAs(ProfileType.customer), sameAs(ProfileType.executor))
			),
		},
	};

	const registerExternalResults = reactive({
		name: [],
		surname: [],
		patronymic: [],
		username: [],
		email: [],
		password: [],
		passwordConfirmation: [],
	});

	const registerValidator = useVuelidate(registerRules, registerState, {
		$externalResults: registerExternalResults,
	});
	const registerErrorMessage = ref();
	const onRegisterHandler = async () => {
		if (!(await registerValidator.value.$validate())) return;

		onRegister(registerState).catch(({ response }) => {
			const { type, fields, message } = response.data.error;

			if (type == "validation") {
				Object.assign(registerExternalResults, fields);
			}

			if (type == "auth") {
				registerErrorMessage.value = message;
			}
			throw new Error({ type, fields, message });
		});
		emit("successful", profile.value);
	};
</script>
