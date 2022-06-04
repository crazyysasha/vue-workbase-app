<script setup>
	import { useRouter } from "vue-router";
	import { onMounted, reactive, ref, toRef, toRefs, watch } from "vue";
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

	const isLoginForm = ref(false);

	const fullname = ref(
		`${profile?.value?.name} ${profile?.value?.surname} ${profile?.value?.patronymic}`
	);
</script>
<template>
	<section
		class="
			gradient-form
			bg-gray-200
			flex
			justify-center
			items-center
			flex-wrap
			h-full
			g-6
			text-gray-800
		"
	>
		<div class="xl:w-full">
			<div class="block bg-white shadow-lg rounded-lg h-full">
				<div class="lg:flex lg:flex-wrap g-0">
					<div class="lg:w-6/12 px-4 md:px-0">
						<div class="md:p-12 md:mx-6">
							<div
								class="
									max-w-md
									w-full
									space-y-8
									p-10
									bg-white
									rounded-xl
									z-10
								"
							>
								<div class="text-center">
									<img
										class="mx-auto w-48 mb-2"
										src="http://api.workbase.uz/storage/app/media/logo-color.png"
										alt="logo"
									/>
									<p class="mt-2 text-sm text-gray-600">
										Зарегистрируйтесь как специалист,
										заполнив форму:
									</p>
								</div>
								<form
									@submit.prevent="onRegisterHandler"
									class="block w-full"
									v-if="!isLoginForm"
								>
									<h3
										class="
											block
											text-xl
											md:text-xl
											text-center
											mb-6
										"
									>
										Регистрация
									</h3>
									<p
										v-if="registerErrorMessage"
										class="
											mb-6
											text-red-500
											font-thin
											text-sm
										"
									>
										{{ registerErrorMessage }}
									</p>

									<div class="flex flex-col">
										<c-input
											v-model="registerState.name"
											name="name"
											class="w-full"
											type="text"
											:valid="
												!registerValidator.name.$error
											"
										>
											Имя
										</c-input>
										<div class="mt-0.5 mb-3.5">
											<div
												class="text-red-500"
												v-for="error in registerValidator
													.name.$errors"
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
											:valid="
												!registerValidator.surname
													.$error
											"
										>
											Фамилия
										</c-input>
										<div class="mt-0.5 mb-3.5">
											<div
												class="text-red-500"
												v-for="error in registerValidator
													.surname.$errors"
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
											:valid="
												!registerValidator.patronymic
													.$error
											"
										>
											Отчество
										</c-input>
										<div class="mt-0.5 mb-3.5">
											<div
												class="text-red-500"
												v-for="error in registerValidator
													.patronymic.$errors"
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
											:valid="
												!registerValidator.username
													.$error
											"
										>
											Номер телефона
										</c-input>
										<div class="mt-0.5 mb-3.5">
											<div
												class="text-red-500"
												v-for="error in registerValidator
													.username.$errors"
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
											:valid="
												!registerValidator.email.$error
											"
										>
											Электронный почтовый адрес
										</c-input>
										<div class="mt-0.5 mb-3.5">
											<div
												class="text-red-500"
												v-for="error in registerValidator
													.email.$errors"
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
											:valid="
												!registerValidator.password
													.$error
											"
										>
											Пароль
										</c-input>
										<div class="mt-0.5 mb-3.5">
											<div
												class="text-red-500"
												v-for="error in registerValidator
													.password.$errors"
												:key="error.$uid"
											>
												{{ error.$message }}
											</div>
										</div>
										<c-input
											v-model="
												registerState.passwordConfirmation
											"
											name="passwordConfirmation"
											class="w-full"
											type="password"
											eye
											:valid="
												!registerValidator
													.passwordConfirmation.$error
											"
										>
											Подтверждение пароля
										</c-input>
										<div class="mt-0.5 mb-3.5">
											<div
												class="text-red-500"
												v-for="error in registerValidator
													.passwordConfirmation
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
											<span
												class="
													flex
													items-center
													justify-center
												"
												><svg
													xmlns="http://www.w3.org/2000/svg"
													class="h-6 w-6"
													fill="none"
													viewBox="0 0 24 24"
													stroke="currentColor"
													stroke-width="2"
												>
													<path
														stroke-linecap="round"
														stroke-linejoin="round"
														d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
													></path>
												</svg>
												Зарегистрироваться
											</span>
										</c-button>
									</div>
									<p class="mt-3 mb-3">
										Уже имеется аккаунт?
										<a
											@click="isLoginForm = true"
											class="
												text-primary
												hover:text-primary/75
												hover:cursor-pointer
											"
										>
											Авторизуйтесь!
										</a>
									</p>
								</form>
								<form
									@submit.prevent="onLoginHandler"
									v-else
									class="max-w-[24rem]"
								>
									<h3 class="text-primary mb-3 text-2xl">
										Авторизация
									</h3>
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
											v-for="error in loginValidator
												.username.$errors"
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
											v-for="error in loginValidator
												.password.$errors"
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
												hover:text-primary/75
												hover:cursor-pointer
											"
										>
											Зарегистрируйтесь!
										</a>
									</p>
								</form>
							</div>
						</div>
					</div>
					<div class="lg:w-6/12 py-20">
						<div class="md:border-l-2 mt-10">
							<!-- Card 1 -->
							<div
								class="
									transform
									transition
									cursor-pointer
									hover:-translate-y-2
									md:ml-10
									ml-0
									relative
									flex
									items-center
									px-6
									py-4
									bg-blue-600
									text-white
									rounded
									mb-10
									flex-col
									md:flex-row
									space-y-4
									md:space-y-0
								"
							>
								<!-- Dot Follwing the Left Vertical Line -->
								<div
									class="
										w-5
										h-5
										bg-blue-600
										absolute
										-left-10
										transform
										-translate-x-2/4
										rounded-full
										z-10
										mt-2
										md:mt-0
									"
								></div>

								<!-- Line that connecting the box with the vertical line -->
								<div
									class="
										w-10
										h-1
										bg-blue-300
										absolute
										-left-10
										z-0
									"
								></div>

								<!-- Content that showing in the box -->
								<div class="flex items-center">
									<svg
										version="1.1"
										id="Capa_1"
										class="w-20 h-20 fill-white mr-5"
										xmlns="http://www.w3.org/2000/svg"
										xmlns:xlink="http://www.w3.org/1999/xlink"
										x="0px"
										y="0px"
										viewBox="0 0 489.003 489.003"
										style="
											enable-background: new 0 0 489.003
												489.003;
										"
										xml:space="preserve"
									>
										<g>
											<path
												d="M305.802,156.814c-33.8-19.5-88.4-19.5-122,0s-33.4,51.2,0.4,70.7s88.4,19.5,122,0
                                            C339.802,207.914,339.602,176.314,305.802,156.814z M290.302,187.514c-2.9,0.9-5.8,1.9-8.7,2.8c-1.8,0.5-2.9,0.6-3.7,0.2
                                            c-0.4-0.3-0.8-0.7-1.2-1.3c-1.9-3.1-4.8-5.8-8.7-8c-0.5-0.3-1.1-0.6-1.7-0.9c-1.3-0.7-2.5-1.2-4.1-1.6c-5.6-1.3-10.6,0.8-9.9,4.3
                                            c0.3,1.8,1.3,3.4,2.5,5.1c2,2.8,4.2,5.6,5.6,8.6c4.7,9.4-5.5,18.7-21.9,19.6c-5.9,0.3-11.5-0.4-16.7-2.1c-2.3-0.7-4-0.7-5.7,0.5
                                            c-1.7,1.1-3.6,2.1-5.4,3.1c-1.6,0.9-3.3,1-4.9,0.1c-1.2-0.6-2.3-1.3-3.5-1.9c-0.8-0.5-1.6-0.9-2.4-1.4c-1.7-1-1.5-2,0.1-3
                                            c1.3-0.8,2.6-1.5,3.8-2.3c2.9-1.7,2.9-1.8,0.5-3.7c-3-2.4-5.7-4.9-7.4-7.7c-1.3-2.2-1-2.7,2.5-3.9c2.6-0.8,5.1-1.7,7.7-2.5
                                            c1.9-0.6,3-0.7,3.8-0.3c0.5,0.3,0.8,0.7,1.2,1.4c1.7,3.2,4.6,6,8.1,8.7c0.6,0.5,1.3,0.9,1.9,1.3c1.9,1.1,4.1,1.9,6.6,2.5
                                            c6.5,1.5,12.3-1.1,11.7-5.2c-0.2-1.4-0.9-2.6-1.8-3.9c-2.2-3.3-5.1-6.4-6.6-9.9c-2.4-5.6-1.3-10.7,6.4-14.7c8.8-4.5,18.6-4.8,29-2
                                            c4.3,1.2,4.2,1.2,7.5-0.7c1.1-0.7,2.2-1.3,3.3-1.9c2.5-1.4,3.4-1.4,5.9,0c0.8,0.4,1.5,0.9,2.3,1.3c5.3,3,5.3,3,0.1,6.1
                                            c-3.7,2.1-3.7,2.1-0.6,4.6c2.4,1.9,4.3,3.9,5.7,6.1C292.702,186.014,292.302,186.914,290.302,187.514z M350.902,253.314
                                            c-9.3,5.4-24.4,5.4-33.8,0c-9.3-5.4-9.4-14.2-0.1-19.6c9.3-5.4,24.4-5.4,33.8,0C360.202,239.114,360.302,247.914,350.902,253.314z
                                            M172.902,150.514c-9.3,5.4-24.4,5.4-33.8,0c-9.4-5.4-9.4-14.2-0.1-19.6c9.3-5.4,24.4-5.4,33.8,0
                                            C182.102,136.314,182.202,145.114,172.902,150.514z M477.402,211.414l-266.5-153.9c-15.4-8.9-40.4-8.9-55.7,0l-142.9,83
                                            c-15.3,8.9-15.2,23.4,0.2,32.3l266.5,153.9c15.4,8.9,40.4,8.9,55.7,0l142.8-83C492.902,234.814,492.802,220.314,477.402,211.414z
                                            M337.602,297.414c-1.7-1.6-3.7-3.1-6.1-4.5c-15.6-9-40.9-9-56.4,0c-1.2,0.7-2.2,1.4-3.3,2.2l-206.9-119.5c2-0.8,3.9-1.7,5.7-2.7
                                            c15.5-9,15.4-23.6-0.2-32.6c-1.7-1-3.5-1.9-5.4-2.6l85.3-49.6c1.3,1.1,2.8,2.1,4.5,3.1c15.6,9,40.9,9,56.4,0c1.8-1,3.3-2.1,4.7-3.3
                                            l207.6,119.8c-2.8,1-5.3,2.1-7.7,3.5c-15.5,9-15.5,23.7,0.2,32.7c2.4,1.4,5.1,2.5,7.9,3.5L337.602,297.414z M5.502,203.614
                                            c6.8-3.5,17.3-3,23.8,0.8l278.6,160.8l150.6-87.6c6.5-3.8,17.2-3.8,23.8,0c6.6,3.8,6.6,10,0.1,13.8l-160.1,93
                                            c-7.8,4.6-20.6,4.6-28.5,0l-5.6-3.2l-3.9-2.3l-279.3-161.2C-1.798,213.814-1.698,207.314,5.502,203.614z M482.602,341.714
                                            l-160.1,93c-7.8,4.6-20.6,4.6-28.5,0l-5.5-3.2l-4-2.3l-279.3-161.2c-6.8-3.9-6.6-10.4,0.6-14.1c6.7-3.5,17.3-3,23.8,0.8
                                            l278.5,160.8l150.6-87.5c6.6-3.8,17.2-3.8,23.8,0C489.102,331.714,489.202,337.914,482.602,341.714z"
											/>
										</g>
									</svg>
									<h1 class="text-xl font-bold">
										Достойный заработок
									</h1>
								</div>
							</div>

							<!-- Card 2 -->
							<div
								class="
									transform
									transition
									cursor-pointer
									hover:-translate-y-2
									md:ml-10
									ml-0
									relative
									flex
									items-center
									px-6
									py-4
									bg-pink-600
									text-white
									rounded
									mb-10
									flex-col
									md:flex-row
									space-y-4
									md:space-y-0
								"
							>
								<!-- Dot Follwing the Left Vertical Line -->
								<div
									class="
										w-5
										h-5
										bg-pink-600
										absolute
										-left-10
										transform
										-translate-x-2/4
										rounded-full
										z-10
										mt-2
										md:mt-0
									"
								></div>

								<!-- Line that connecting the box with the vertical line -->
								<div
									class="
										w-10
										h-1
										bg-pink-300
										absolute
										-left-10
										z-0
									"
								></div>

								<!-- Content that showing in the box -->
								<div class="flex items-center">
									<svg
										version="1.1"
										class="w-20 h-20 mr-5 fill-white"
										id="Capa_1"
										xmlns="http://www.w3.org/2000/svg"
										xmlns:xlink="http://www.w3.org/1999/xlink"
										x="0px"
										y="0px"
										viewBox="0 0 60 60"
										style="enable-background: new 0 0 60 60"
										xml:space="preserve"
									>
										<g>
											<path
												d="M30,0C13.458,0,0,13.458,0,30s13.458,30,30,30s30-13.458,30-30S46.542,0,30,0z M30,58C14.561,58,2,45.439,2,30
                                            S14.561,2,30,2s28,12.561,28,28S45.439,58,30,58z"
											/>
											<path
												d="M30,6c-0.552,0-1,0.447-1,1v23H14c-0.552,0-1,0.447-1,1s0.448,1,1,1h16c0.552,0,1-0.447,1-1V7C31,6.447,30.552,6,30,6z"
											/>
										</g>
									</svg>
									<h1 class="text-xl font-bold">
										Свободный график
									</h1>
								</div>
							</div>

							<!-- Card 3 -->
							<div
								class="
									transform
									transition
									cursor-pointer
									hover:-translate-y-2
									md:ml-10
									ml-0
									relative
									flex
									items-center
									px-6
									py-4
									bg-green-600
									text-white
									rounded
									mb-10
									flex-col
									md:flex-row
									space-y-4
									md:space-y-0
								"
							>
								<!-- Dot Follwing the Left Vertical Line -->
								<div
									class="
										w-5
										h-5
										bg-green-600
										absolute
										-left-10
										transform
										-translate-x-2/4
										rounded-full
										z-10
										mt-2
										md:mt-0
									"
								></div>

								<!-- Line that connecting the box with the vertical line -->
								<div
									class="
										w-10
										h-1
										bg-green-300
										absolute
										-left-10
										z-0
									"
								></div>

								<!-- Content that showing in the box -->
								<div class="flex items-center">
									<svg
										version="1.1"
										class="w-20 h-20 mr-5 fill-white"
										id="Capa_1"
										xmlns="http://www.w3.org/2000/svg"
										xmlns:xlink="http://www.w3.org/1999/xlink"
										x="0px"
										y="0px"
										viewBox="0 0 214.27 214.27"
										style="
											enable-background: new 0 0 214.27
												214.27;
										"
										xml:space="preserve"
									>
										<g>
											<path
												d="M196.926,55.171c-0.11-5.785-0.215-11.25-0.215-16.537c0-4.142-3.357-7.5-7.5-7.5c-32.075,0-56.496-9.218-76.852-29.01
                                            c-2.912-2.832-7.546-2.831-10.457,0c-20.354,19.792-44.771,29.01-76.844,29.01c-4.142,0-7.5,3.358-7.5,7.5
                                            c0,5.288-0.104,10.755-0.215,16.541c-1.028,53.836-2.436,127.567,87.331,158.682c0.796,0.276,1.626,0.414,2.456,0.414
                                            c0.83,0,1.661-0.138,2.456-0.414C199.36,182.741,197.954,109.008,196.926,55.171z M107.131,198.812
                                            c-76.987-27.967-75.823-89.232-74.79-143.351c0.062-3.248,0.122-6.396,0.164-9.482c30.04-1.268,54.062-10.371,74.626-28.285
                                            c20.566,17.914,44.592,27.018,74.634,28.285c0.042,3.085,0.102,6.231,0.164,9.477C182.961,109.577,184.124,170.844,107.131,198.812
                                            z"
											/>
											<path
												d="M132.958,81.082l-36.199,36.197l-15.447-15.447c-2.929-2.928-7.678-2.928-10.606,0c-2.929,2.93-2.929,7.678,0,10.607
                                            l20.75,20.75c1.464,1.464,3.384,2.196,5.303,2.196c1.919,0,3.839-0.732,5.303-2.196l41.501-41.5
                                            c2.93-2.929,2.93-7.678,0.001-10.606C140.636,78.154,135.887,78.153,132.958,81.082z"
											/>
										</g>
									</svg>
									<h1 class="text-xl font-bold">
										Безопасный сервис
									</h1>
								</div>
							</div>

							<!-- Card 4 -->
							<div
								class="
									transform
									transition
									cursor-pointer
									hover:-translate-y-2
									md:ml-10
									ml-0
									relative
									flex
									items-center
									px-6
									py-4
									bg-purple-600
									text-white
									rounded
									mb-10
									flex-col
									md:flex-row
									space-y-4
									md:space-y-0
								"
							>
								<!-- Dot Follwing the Left Vertical Line -->
								<div
									class="
										w-5
										h-5
										bg-purple-600
										absolute
										-left-10
										transform
										-translate-x-2/4
										rounded-full
										z-10
										mt-2
										md:mt-0
									"
								></div>

								<!-- Line that connecting the box with the vertical line -->
								<div
									class="
										w-10
										h-1
										bg-purple-300
										absolute
										-left-10
										z-0
									"
								></div>

								<!-- Content that showing in the box -->
								<div class="flex items-center">
									<svg
										version="1.1"
										class="w-20 h-20 mr-5 fill-white"
										id="Layer_1"
										xmlns="http://www.w3.org/2000/svg"
										xmlns:xlink="http://www.w3.org/1999/xlink"
										x="0px"
										y="0px"
										viewBox="0 0 512 512"
										style="
											enable-background: new 0 0 512 512;
										"
										xml:space="preserve"
									>
										<g>
											<g>
												<g>
													<path
														d="M344.277,343.424c-0.819,0.708-20.011,17.707-20.011,49.109V435.2c0,4.71,3.814,8.533,8.533,8.533
                                                    c4.719,0,8.533-3.823,8.533-8.533v-42.667c0-23.33,13.594-35.738,14.566-36.634l59.733-59.733
                                                    c3.388-3.388,7.612-5.35,11.895-5.521c4.352-0.188,8.09,1.382,11.204,4.488c3.106,3.115,4.668,6.989,4.489,11.204
                                                    c-0.171,4.284-2.133,8.508-5.521,11.895L395.034,360.9c-3.337,3.337-3.337,8.73,0,12.066c3.336,3.337,8.73,3.337,12.066,0
                                                    l42.667-42.658c6.426-6.426,10.155-14.694,10.513-23.279c0.367-8.969-2.995-17.485-9.481-23.962
                                                    c-6.485-6.477-14.891-9.813-23.97-9.481c-8.576,0.358-16.845,4.087-23.262,10.513L344.277,343.424z"
													/>
													<path
														d="M93.867,435.2c2.185,0,4.369-0.836,6.033-2.5c3.337-3.337,3.337-8.73,0-12.066l-68.753-68.71
                                                    c-0.572-0.503-14.08-12.553-14.08-36.19v-128c0-9.412,7.654-17.067,17.067-17.067c9.412,0,17.067,7.654,17.067,17.067v67.558
                                                    c0,4.71,3.814,8.533,8.533,8.533s8.533-3.823,8.533-8.533v-67.558c0-18.825-15.309-34.133-34.133-34.133
                                                    C15.309,153.6,0,168.909,0,187.733v128c0,31.863,19.277,48.495,19.567,48.7L87.834,432.7
                                                    C89.498,434.364,91.682,435.2,93.867,435.2z"
													/>
													<path
														d="M51.721,307.029c0.358,8.585,4.087,16.853,10.513,23.27l42.667,42.667c3.337,3.337,8.73,3.337,12.066,0
                                                    c3.336-3.337,3.336-8.73,0-12.066L74.3,318.225c-3.388-3.379-5.35-7.603-5.521-11.887c-0.179-4.215,1.382-8.09,4.489-11.204
                                                    c3.115-3.106,6.878-4.676,11.204-4.488c4.284,0.171,8.508,2.133,11.895,5.521l60.134,60.109
                                                    c0.572,0.521,14.165,12.928,14.165,36.258V435.2c0,4.71,3.814,8.533,8.533,8.533s8.533-3.823,8.533-8.533v-42.667
                                                    c0-31.403-19.191-48.401-19.567-48.7L108.433,284.1c-6.417-6.426-14.686-10.155-23.262-10.513
                                                    c-9.114-0.316-17.493,3.004-23.97,9.481C54.716,289.545,51.354,298.061,51.721,307.029z"
													/>
													<path
														d="M256,110.933c9.412,0,17.067,7.654,17.067,17.067c0,4.71,3.814,8.533,8.533,8.533c4.719,0,8.533-3.823,8.533-8.533
                                                    c0-15.855-10.914-29.107-25.6-32.922v-1.212c0-4.71-3.814-8.533-8.533-8.533s-8.533,3.823-8.533,8.533v1.212
                                                    c-14.686,3.814-25.6,17.067-25.6,32.922c0,18.825,15.309,34.133,34.133,34.133c9.412,0,17.067,7.654,17.067,17.067
                                                    s-7.654,17.067-17.067,17.067c-9.412,0-17.067-7.654-17.067-17.067c0-4.71-3.814-8.533-8.533-8.533s-8.533,3.823-8.533,8.533
                                                    c0,15.855,10.914,29.107,25.6,32.922v1.212c0,4.71,3.814,8.533,8.533,8.533s8.533-3.823,8.533-8.533v-1.212
                                                    c14.686-3.814,25.6-17.067,25.6-32.922c0-18.825-15.309-34.133-34.133-34.133c-9.412,0-17.067-7.654-17.067-17.067
                                                    C238.933,118.588,246.588,110.933,256,110.933z"
													/>
													<path
														d="M196.267,460.8H59.733c-4.719,0-8.533,3.823-8.533,8.533v34.133c0,4.71,3.814,8.533,8.533,8.533s8.533-3.823,8.533-8.533
                                                    v-25.6h119.467v25.6c0,4.71,3.814,8.533,8.533,8.533s8.533-3.823,8.533-8.533v-34.133C204.8,464.623,200.986,460.8,196.267,460.8
                                                    z"
													/>
													<path
														d="M452.267,460.8H315.733c-4.719,0-8.533,3.823-8.533,8.533v34.133c0,4.71,3.814,8.533,8.533,8.533
                                                    s8.533-3.823,8.533-8.533v-25.6h119.467v25.6c0,4.71,3.814,8.533,8.533,8.533c4.719,0,8.533-3.823,8.533-8.533v-34.133
                                                    C460.8,464.623,456.986,460.8,452.267,460.8z"
													/>
													<path
														d="M256,34.133c-65.877,0-119.467,53.589-119.467,119.467S190.123,273.067,256,273.067S375.467,219.477,375.467,153.6
                                                    S321.877,34.133,256,34.133z M256,256c-56.465,0-102.4-45.935-102.4-102.4c0-56.465,45.935-102.4,102.4-102.4
                                                    s102.4,45.935,102.4,102.4C358.4,210.065,312.465,256,256,256z"
													/>
													<path
														d="M477.867,153.6c-18.825,0-34.133,15.309-34.133,34.133v67.558c0,4.71,3.814,8.533,8.533,8.533
                                                    c4.719,0,8.533-3.823,8.533-8.533v-67.558c0-9.412,7.654-17.067,17.067-17.067s17.067,7.654,17.067,17.067v128
                                                    c0,23.637-13.508,35.686-14.566,36.634L412.1,420.634c-3.337,3.337-3.337,8.73,0,12.066c1.664,1.664,3.849,2.5,6.033,2.5
                                                    c2.185,0,4.369-0.836,6.033-2.5l67.738-67.78c0.819-0.691,20.096-17.323,20.096-49.186v-128
                                                    C512,168.909,496.691,153.6,477.867,153.6z"
													/>
													<path
														d="M409.6,153.6C409.6,68.907,340.693,0,256,0S102.4,68.907,102.4,153.6S171.307,307.2,256,307.2S409.6,238.293,409.6,153.6
                                                    z M256,290.133c-75.281,0-136.533-61.252-136.533-136.533S180.719,17.067,256,17.067S392.533,78.319,392.533,153.6
                                                    S331.281,290.133,256,290.133z"
													/>
												</g>
											</g>
										</g>
									</svg>
									<h1 class="text-xl font-bold">
										Экономия на рекламе
									</h1>
								</div>
							</div>
						</div>
						<!-- <h2 class="text-center text-2xl mb-10 font-bold">Станьте исполнителем и выполняйте интересные задания от заказчиков
в удобное для вас время.</h2>
                        <div class="grid sm:grid-cols-2 md:grid-cols-2 gap-4 mb-10">
                            <div class="text-center">
                                <div class="rounded-full mb-3 bg-orange-400 text-4xl w-32 h-32 flex justify-center items-center text-white mx-auto">

                                </div>
                                
                                <span class="text-xl"> Достойный заработок
                                    </span>
                            </div>
                            <div class="text-center">
                                <div class="rounded-full mb-3 bg-orange-400 text-4xl w-32 h-32 flex justify-center items-center text-white mx-auto">
                                    
                                </div>
                                <span class="text-xl"> 
                                    </span>
                            </div>
                            <div class="text-center">
                                <div class="rounded-full mb-3 bg-orange-400 text-4xl w-32 h-32 flex justify-center items-center text-white mx-auto">
                                    
                                </div>
                                <span class="text-xl"> 
                                    </span>
                            </div>
                            <div class="text-center">
                                <div class="rounded-full mb-3 bg-orange-400 text-4xl w-32 h-32 flex justify-center items-center text-white mx-auto">
                                    
                                </div>
                                <span class="text-xl"> 
                                    </span>
                            </div>
                        </div>
                        <h2 class="text-center text-2xl mb-10 font-bold">
                            "Work Base" оможет найти новых клиентов и зарабатывать на выполнении любых услуг.
                        </h2> -->
					</div>
				</div>
			</div>
		</div>
	</section>
</template>