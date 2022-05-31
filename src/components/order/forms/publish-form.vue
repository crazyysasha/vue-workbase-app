<script setup>
	import useCategoryApi from "@/composables/categories/instance";
	import { useRouter } from "vue-router";
	import { onMounted, reactive, ref, toRef, toRefs, watch } from "vue";
	import BaseForm from "./base-form.vue";
	import { isAuthentificated, useLogin, useRegister } from "@/composables/auth";
	import { ProfileType } from "@/utils/enums";
	import {
		email,
		helpers,
		required,
		requiredIf,
		sameAs,
	} from "@vuelidate/validators";
	import useVuelidate from "@vuelidate/core";
	import { or } from "@vueuse/core";
	import { usePublishOrderApi } from "@/composables/orders/instance&storage";

	const props = defineProps({
		categorySlug: {},
		serviceSlugs: {},
	});
	const { categorySlug, serviceSlugs } = toRefs(props);
	const {
		onGetWhenNotLoaded: onGetCategoryWhenNotLoaded,
		isLoading: categoryIsLoading,
		category,
	} = useCategoryApi();

	onMounted(async () => {
		await onGetCategoryWhenNotLoaded(categorySlug.value);
	});

	const router = useRouter();
	const { onPublish, isPublishing, isPublished, currentDraftedOrder } =
		usePublishOrderApi(categorySlug.value);

	const onSubmit = async () => {
		await onPublish().catch(({ response }) => {
			console.dir(response);
		});
		router.push("/");
	};

	const { onRegister, isRegistering, isRegistered } = useRegister();

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
		});
	};

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
			required: helpers.withMessage("Введите номер телефона", required),
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
	const onLoginHandler = async () => {
		if (!(await loginValidator.value.$validate())) return;
		onLogin(loginState).catch(({ response }) => {
			const { type, fields, message } = response.data.error;
			if (type == "validation") {
				Object.assign(loginExternalResults, fields);
			}
			if (type == "auth") {
				loginErrorMessage.value = message;
			}
		});
	};

	const back = () => {
		router.back();
	};

	const isLoginForm = ref(true);

	const fullname = ref(
		`${profile?.value?.name} ${profile?.value?.surname} ${profile?.value?.patronymic}`
	);
</script>
<template>
	<BaseForm @submit="onSubmit" :class="{ 'animate-pulse': isPublishing }">
		<template #header>
			<div class="pt-1.5 pb-0.5" v-if="categoryIsLoading">
				<div
					class="h-6 w-96 bg-primary/10 rounded-lg animate-pulse"
				></div>
			</div>
			<h1 class="text-2xl text-primary" v-else>
				<span v-if="!isAuthentificated">
					Почти все готово, осталось авторизоваться в системе!
				</span>
				<span v-else-if="isRegistered">
					Вы успешно зарегистрировались, опубликуйте заказ!
				</span>
				<span v-else-if="isLogined">
					Вы успешно авторизовались, опубликуйте заказ!
				</span>
				<span v-else> Все готово, опубликуйте заказ! </span>
			</h1>
			<div v-if="categoryIsLoading" class="pt-1.5 pb-0.5">
				<div
					class="h-4 w-64 bg-primary/10 rounded-md animate-pulse"
				></div>
			</div>
			<p class="text-orange-500">{{ category.name }}</p>
		</template>
		<div v-if="isAuthentificated" class="max-w-[24rem]">
			<h3 class="text-primary mb-3 text-2xl">
				Опубликовать заказ под именем
			</h3>
			<c-input v-model="fullname" name="fullname" class="w-full" disabled>
				ФИО
			</c-input>
		</div>
		<form
			@submit.prevent="onLoginHandler"
			v-else-if="isLoginForm"
			class="max-w-[24rem]"
		>
			<h3 class="text-primary mb-3 text-2xl">Авторизация</h3>
			<div class="text-red-500 mt-2 mb-3">
				{{ loginErrorMessage }}
			</div>
			<c-input
				v-model="loginState.username"
				placeholder="+998901234567"
				name="username"
				class="w-full"
				:valid="!loginValidator.username.$error"
			>
				Номер телефона
			</c-input>
			<div class="mt-0.5 mb-3.5">
				<div
					class="text-red-500"
					v-for="error in loginValidator.username.$errors"
					:key="error.$uid"
				>
					{{ error.$message }}
				</div>
			</div>
			<c-input
				v-model="loginState.password"
				name="password"
				class="w-full"
				type="password"
				:valid="!loginValidator.password.$error"
				eye
			>
				Пароль
			</c-input>
			<div class="mt-0.5 mb-3.5">
				<div
					class="text-red-500"
					v-for="error in loginValidator.password.$errors"
					:key="error.$uid"
				>
					{{ error.$message }}
				</div>
			</div>
			<c-button
				class="w-full"
				:disabled="isLogining"
				:loading="isLogining"
			>
				Войти
			</c-button>
			<p class="mt-3 mb-3">
				Еще нет аккаунта?
				<a
					@click="isLoginForm = false"
					class="
						text-primary
						hover:text-primary/75 hover:cursor-pointer
					"
				>
					Зарегистрируйтесь!
				</a>
			</p>
		</form>

		<form @submit.prevent="onRegisterHandler" v-else class="max-w-[24rem]">
			<h3 class="text-primary mb-3 text-2xl">Регистрация</h3>
			<div class="text-red-500 mt-2 mb-3">
				{{ registerErrorMessage }}
			</div>
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
				:valid="!registerValidator.password.$error"
				eye
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
				:valid="!registerValidator.passwordConfirmation.$error"
				eye
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
			<c-button
				class="w-full"
				:disabled="isRegistering"
				:loading="isRegistering"
			>
				Зарегистрироваться
			</c-button>
			<p class="mt-3 mb-3">
				Уже имеется аккаунт?
				<a
					@click="isLoginForm = true"
					class="
						text-primary
						hover:text-primary/75 hover:cursor-pointer
					"
				>
					Авторизуйтесь!
				</a>
			</p>
		</form>
		<template #footer>
			<c-button
				scheme="secondary"
				type="button"
				@click="back"
				:disabled="isPublishing"
			>
				Назад
			</c-button>
			<c-button :disabled="!isAuthentificated || isPublishing">
				Опубликовать
			</c-button>
		</template>
	</BaseForm>
</template>

