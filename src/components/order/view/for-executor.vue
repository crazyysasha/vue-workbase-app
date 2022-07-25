<script setup>
	import ListContainer from "@/components/order/view/list/container.vue";
	import ListItem from "@/components/order/view/list/item.vue";
	import CreateConversationForm from "@/components/order/view/forms/create-conversation.vue";
	import { computed, ref, watch } from "vue";
	import { useRoute } from "vue-router";
	import useOrderModelInstance from "../composables/model-instance";
	import useProfile from "@/composables/profile";
	const route = useRoute();
	const activeTab = computed(
		() =>
			({ chat: "chat", order: "order" }[route?.hash?.substring(1)] || "order")
	);

	const { model, onCreateReply } = useOrderModelInstance();
	const { profile } = useProfile();
	const CreateConversationFormIsOpen = ref(false);

	const myReply = computed(() =>
		model.value?.replies?.find?.((r) => r.user_id == profile.value.id)
	);
</script>
<template>
	<div class="gap-4 grid md:grid-cols-7">
		<div class="md:col-span-2">
			<div class="rounded-lg bg-white shadow shadow-primary/25 p-7 mb-6">
				<a
					class="
						text-lg
						mb-3
						font-medium
						flex
						items-center
						justify-between
					"
					href="#order"
				>
					Заказ
				</a>
				<a
					class="
						text-lg
						mb-3
						font-medium
						flex
						items-center
						justify-between
					"
					href="javascript:jivo_api.open()"
				>
					Поддержка
				</a>
				<a
					class="
						text-lg
						font-medium
						flex
						items-center
						justify-between
					"
					href="#chat"
				>
					Чаты
				</a>
			</div>
		</div>
		<div class="md:col-span-5" v-show="activeTab == 'order'">
			<div class="rounded-lg bg-white shadow shadow-primary/25 p-4 mb-6">
				<!-- <div v-if="getOrderIsLoading" class="pt-1.5 pb-0.5 mb-5">
					<div
						class="h-6 w-96 bg-primary/10 rounded-md animate-pulse"
					></div>
				</div> -->
				<div class="px-4">
					<h2 class="text-2xl text-primary font-medium mb-5">
						<!-- {{ title }}  -->Образование и Репетиторство
					</h2>
					<p class="mb-4">
						Lorem ipsum dolor sit, amet consectetur adipisicing
						elit.
					</p>
				</div>

				<div>
					<list-item title="Вид услуги">
						<template #subtitle>
							<div class="line-clamp-2">
								{{ service }}
							</div>
							<div>
								<div class="text-left">
									<div class="line-clamp-2">
										Английский язык, Общий английский
									</div>
								</div>
							</div>
						</template>
					</list-item>
					<list-item title="Описание">
						<template #subtitle>
							<div class="line-clamp-2">
								<p
									v-for="(
										text, index
									) in model?.description?.split('\n', 2)"
									:key="`description-${index}`"
								>
									{{ text }}
								</p>
							</div>
						</template>
					</list-item>
					<list-item title="Стоимость услуги">
						<template #subtitle>
							<div class="line-clamp-2">
								<div v-html="displayedPrice"></div>
							</div>
						</template>
					</list-item>
					<list-item title="Место встречи">
						<template #subtitle>
							<div class="line-clamp-2">
								<!-- {{ workPlace }} -->
							</div>
						</template>
					</list-item>
					<!-- v-if="model?.at_customer" -->
					<list-item title="Адрес заказчика">
						<template #subtitle>
							<div class="line-clamp-2">
								<!-- {{ address }} -->
							</div>
						</template>
					</list-item>
					<list-item title="Время">
						<template #subtitle>
							<div class="line-clamp-2">
								<!-- {{ displayedTime }} -->
							</div>
						</template>
					</list-item>
					<list-item title="Номер заказа">
						<template #subtitle>
							<div class="line-clamp-2">
								{{ route?.params?.orderId }}
							</div>
						</template>
					</list-item>
				</div>
				<div class="flex flex-col mt-4" v-if="!!!myReply">
					<div class="flex" v-show="!CreateConversationFormIsOpen">
						<c-button
							class="ml-auto"
							@click="CreateConversationFormIsOpen = true"
						>
							Откликнутся
						</c-button>
					</div>
					<CreateConversationForm
						v-show="CreateConversationFormIsOpen"
						@success="CreateConversationFormIsOpen = false"
						@cancel="CreateConversationFormIsOpen = false"
					></CreateConversationForm>
				</div>
				<div class="mt-4" v-else>
					Вы оставили отклик в
					<span class="text-primary">
						{{
							new Date(myReply.created_at)
								?.toLocaleString()
								?.replace("/", ".")
								?.replace(",", " г.")
								?.slice(0, -3)
						}}
					</span>
				</div>
			</div>
		</div>
		<div class="md:col-span-5" v-show="activeTab == 'chat'">
			<div class="rounded-lg bg-white shadow shadow-primary/25 p-7 mb-6">
				<div class="w-full">
					<div
						class="
							flex
							items-center
							border-b border-gray-300
							pl-3
							py-3
						"
					>
						<img
							class="h-16 w-16 rounded-full object-cover"
							src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
							alt="username"
						/>
						<div class="">
							<span class="block ml-2 font-bold text-lg">
								Мубаракшин Амаль
							</span>
							<div class="text-xs ml-2 flex items-center">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="h-3 w-3 mr-1"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									stroke-width="2"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
									/>
								</svg>
								<span>4.7 - 7 отзывов</span>
							</div>
							<div class="text-green-600 ml-2 leading-none mb-2">
								<span
									class="
										w-2.5
										h-2.5
										rounded-full
										bg-green-600
										inline-block
									"
								></span>
								Онлайн
							</div>
						</div>
					</div>
					<div
						class="
							w-full
							min-h-[400px]
							overflow-y-auto
							py-10
							relative
						"
					>
						<ul>
							<li class="clearfix2">
								<div class="w-full flex justify-start">
									<div
										class="
											bg-gray-100
											rounded
											px-5
											py-2
											my-2
											relative
											max-w-[300px]
										"
									>
										<span class="block">Привет!</span>
										<span
											class="
												block
												text-gray-500 text-xs text-right
											"
											>10:30</span
										>
									</div>
								</div>
								<div class="w-full flex justify-end">
									<div
										class="
											bg-gray-100
											rounded
											px-5
											py-2
											my-2
											relative
											max-w-[300px]
										"
									>
										<span class="block">Добрый день</span>
										<span
											class="
												block
												text-gray-500 text-xs text-left
											"
											>10:32</span
										>
									</div>
								</div>
								<div class="w-full flex justify-end">
									<div
										class="
											bg-gray-100
											rounded
											px-5
											py-2
											my-2
											relative
											max-w-[300px]
										"
									>
										<span class="block"
											>Как ваши дела?</span
										>
										<span
											class="
												block
												text-gray-500 text-xs text-left
											"
											>10:32</span
										>
									</div>
								</div>
								<div class="w-full flex justify-start">
									<div
										class="
											bg-gray-100
											rounded
											px-5
											py-2
											my-2
											relative
											max-w-[300px]
										"
									>
										<span class="block">Круто)</span>
										<span
											class="
												block
												text-gray-500 text-xs text-right
											"
											>10:42</span
										>
									</div>
								</div>
							</li>
						</ul>
					</div>

					<div
						class="
							w-full
							py-3
							px-3
							flex
							items-center
							justify-between
							border-t border-gray-300
						"
					>
						<button class="outline-none focus:outline-none">
							<svg
								class="text-gray-400 h-6 w-6 hover:text-primary"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
								/>
							</svg>
						</button>

						<input
							placeholder="Сообщение"
							class="
								py-2
								mx-3
								pl-5
								block
								w-full
								rounded-full
								bg-gray-100
								outline-none
								border border-gray-100
								focus:border focus:border-primary
							"
							type="text"
							name="message"
							required
						/>

						<button
							class
							text-gray-500="outline-none focus:outline-none"
							type="submit"
						>
							<svg
								class="
									text-gray-400
									h-7
									w-7
									origin-center
									transform
									rotate-90
									hover:text-primary
								"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"
								/>
							</svg>
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
