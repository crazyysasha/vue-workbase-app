
<script setup>
	import { computed, onMounted, reactive, toRefs } from "vue";
	import { useRoute, useRouter } from "vue-router";
	import useOrderModel from "@/composables/orders/model";
	import AccordionContainer from "@/components/order/view/accordion/container.vue";
	import AccordionItem from "@/components/order/view/accordion/item.vue";
	import useVuelidate from "@vuelidate/core";
	import { helpers, minLength } from "@vuelidate/validators";
	import DescriptionForm from "@/components/order/view/forms/description.vue";
	import PriceForm from "@/components/order/view/forms/price.vue";
	import WorkPlaceForm from "@/components/order/view/forms/work-place.vue";
	import AddressForm from "@/components/order/view/forms/address.vue";
	import ServicesForm from "@/components/order/view/forms/services.vue";
	import TimeForm from "@/components/order/view/forms/time.vue";

	const props = defineProps({
		orderId: { type: [Number, String] },
	});

	const { orderId } = toRefs(props);

	const { onGet, model, onUpdate, onDelete } = useOrderModel(orderId.value);

	const {
		execute: getOrderExecute,
		isLoading: getOrderIsLoading,
		isLoaded: getOrderIsLoaded,
		promise: getOrderPromise,
	} = onGet({
		with: ["services", "category", "replies", "trashed"],
		count: ["replies", "services"],
	});
	const updateHandlers = onUpdate();

	const {
		execute: updateOrderExecute,
		isLoading: updateOrderIsLoading,
		isLoaded: updateOrderIsLoaded,
	} = updateHandlers;

	const {
		execute: deleteOrderExecute,
		isLoading: deleteOrderIsLoading,
		isLoaded: deleteOrderIsLoaded,
	} = onDelete();

	const router = useRouter();
	const route = useRoute();
	onMounted(async () => {
		await getOrderExecute().catch(({ type, message, description }) => {
			if (type == "validation") {
				return;
			}

			if (type == "not_found") {
				router.replace({
					name: "404",
					params: {
						pathMatch: route.path.substring(1).split("/"),
						message,
						description,
					},
				});
			}
		});
	});

	const title = computed(() => {
		if (!!!model.value) {
			return null;
		}
		const { name, category, services } = model.value;
		if (!!name) {
			return name;
		}
		return `${category?.name}`;
	});
	const service = computed(() => {
		if (!!!model.value) {
			return null;
		}
		const { name, services } = model.value;
		if (!!name) {
			return name;
		}
		return `${services?.[services?.length - 1]?.name}`;
	});

	const displayedTime = computed(() => {
		if (!!!model.value) {
			return null;
		}
		const { started_at, ended_at } = model.value;

		return `${new Date(started_at)
			?.toLocaleString()
			?.replace("/", ".")
			?.replace(",", " г.")
			?.slice(0, -3)}  ${new Date(ended_at)
			?.toLocaleString()
			?.replace("/", ".")
			?.replace(",", " г.")
			?.slice(0, -3)}`;
	});

	const displayedPrice = computed(() => {
		if (!!!model.value) return null;

		const { price, price_min, price_max, is_ranged_price } = model.value;

		if (!!price && !!!is_ranged_price)
			return `<span class="text-primary">${price}</span> сум за услугу`;

		if (!!price_min)
			return `От <span class="text-primary">${price_min}</span> до <span class="text-primary">${price_max}</span> сум за услугу`;
		if (!!price_max)
			return `До <span class="text-primary">${price_max}</span> сум за услугу`;

		return "Договорная";
	});

	const workPlace = computed(() => {
		if (!!!model.value) return null;

		const { at_executor, at_customer, is_online } = model.value;
		let text = "";
		if (at_executor) {
			text += "У исполнителя";
		}
		if (at_customer) {
			text += at_executor ? ", у заказчика" : "У заказчика";
		}
		if (is_online) {
			text += at_executor || at_customer ? ", онлайн" : "Онлайн";
		}
		return text;
	});

	const address = computed(() => {
		if (!!!model.value) return null;

		const { address } = model.value;

		return address;
	});
</script>
<template>
	<section class="py-12">
		<div class="container px-4 mx-auto gap-4 grid md:grid-cols-7">
			<div class="md:col-span-2">
				<div
					class="
						rounded-lg
						bg-white
						shadow shadow-primary/25
						p-7
						mb-6
					"
				>
					<a
						class="
							text-lg
							mb-3
							font-medium
							flex
							items-center
							justify-between
						"
						href="#"
					>
						Заказ
						<span class="font-normal text-base text-gray-400">
							36 просмотров
						</span>
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
						href="#"
					>
						Специалисты
						<span class="font-normal text-base text-gray-400">
							4511
						</span>
					</a>
				</div>
				<div
					class="
						rounded-lg
						bg-white
						shadow shadow-primary/25
						py-7
						px-5
						mb-10
					"
				>
					<h2 class="text-lg mb-3 font-medium px-2">
						Отклики по заказу
					</h2>
					<a
						href="#"
						class="
							flex
							items-center
							space-x-4
							mb-2
							hover:bg-gray-100
							p-2
							rounded-md
						"
					>
						<img
							class="w-10 h-10 rounded-full"
							src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
							alt=""
						/>
						<div>
							<div class="font-medium">Меринков Валерий</div>
							<div class="text-xs m-0 flex items-center">
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
								<span>5.0 - 5 отзывов</span>
							</div>
						</div>
					</a>
					<a
						href="#"
						class="
							flex
							space-x-4
							mb-2
							hover:bg-gray-100
							p-2
							rounded-md
						"
					>
						<img
							class="w-10 h-10 rounded-full"
							src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
							alt=""
						/>
						<div>
							<div class="font-medium">Мубаракшин Амаль</div>
							<div class="text-xs m-0 flex items-center">
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
						</div>
					</a>
					<button
						class="
							text-center
							w-full
							flex
							items-center
							justify-center
						"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-5 w-5 mr-1"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
							/>
						</svg>
						Показать все
					</button>
				</div>
			</div>
			<div class="md:col-span-5">
				<div
					class="
						rounded-lg
						bg-white
						shadow shadow-primary/25
						p-7
						mb-6
					"
				>
					<div v-if="getOrderIsLoading" class="pt-1.5 pb-0.5 mb-5">
						<div
							class="
								h-6
								w-96
								bg-primary/10
								rounded-md
								animate-pulse
							"
						></div>
					</div>
					<h2 class="text-2xl text-primary font-medium mb-5" v-else>
						{{ title }}
					</h2>
					<div v-if="getOrderIsLoading" class="pt-1.5 pb-0.5">
						<div
							class="
								h-4
								mb-4
								w-full
								bg-primary/10
								rounded-md
								animate-pulse
							"
						></div>
					</div>
					<p class="mb-4" v-else>
						Откликнуться могут специалисты, которым вы напишете и
						которые уже видели заказ
					</p>
					<accordion-container v-slot="{ expanded, onExpand }">
						<accordion-item
							:index="1"
							:expanded="expanded"
							@on-expand="onExpand"
							title="Вид услуги"
						>
							<template #subtitle>
								<div class="line-clamp-2">
									{{ service }}
								</div>
							</template>
							<div class="p-4 pt-6">
								<services-form
									@cancel="onExpand(null)"
									:default-state="model"
									:updateHandlers="updateHandlers"
									@success="onExpand(null)"
								>
								</services-form>
							</div>
						</accordion-item>
						<accordion-item
							:index="2"
							:expanded="expanded"
							@on-expand="onExpand"
							title="Описание"
						>
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
							<div class="p-4 pt-6">
								<description-form
									@cancel="onExpand(null)"
									:default-state="model"
									:updateHandlers="updateHandlers"
									@success="onExpand(null)"
								>
								</description-form>
							</div>
						</accordion-item>
						<accordion-item
							:index="3"
							:expanded="expanded"
							@on-expand="onExpand"
							title="Cтоимость услуги"
						>
							<template #subtitle>
								<div v-html="displayedPrice"></div>
							</template>
							<div class="p-4 pt-6">
								<price-form
									@cancel="onExpand(null)"
									:default-state="model"
									:updateHandlers="updateHandlers"
									@success="onExpand(null)"
								>
								</price-form>
							</div>
						</accordion-item>
						<accordion-item
							:index="4"
							:expanded="expanded"
							@on-expand="onExpand"
							title="Место встречи"
						>
							<template #subtitle>
								<div>
									{{ workPlace }}
								</div>
							</template>
							<div class="p-4 pt-6">
								<work-place-form
									@cancel="onExpand(null)"
									:default-state="model"
									:updateHandlers="updateHandlers"
									@success="onExpand(null)"
								>
								</work-place-form>
							</div>
						</accordion-item>
						<accordion-item
							:index="5"
							:expanded="expanded"
							@on-expand="onExpand"
							title="Адрес заказчика"
							v-if="model?.at_customer"
						>
							<template #subtitle>
								<div>
									{{ address }}
								</div>
							</template>
							<div class="p-4 pt-6">
								<address-form
									@cancel="onExpand(null)"
									:default-state="model"
									:updateHandlers="updateHandlers"
									@success="onExpand(null)"
								>
								</address-form>
							</div>
						</accordion-item>
						<accordion-item
							:index="6"
							:expanded="expanded"
							@on-expand="onExpand"
							title="Время"
						>
							<template #subtitle>
								<div class="flex">
									{{ displayedTime }}
								</div>
							</template>
							<div class="p-4 pt-6">
								<TimeForm
									@cancel="onExpand(null)"
									:default-state="model"
									:updateHandlers="updateHandlers"
									@success="onExpand(null)"
								>
								</TimeForm>
							</div>
						</accordion-item>
					</accordion-container>
					<div class="flex mt-4">
						<c-button
							@click="deleteOrderExecute"
							scheme="danger"
							class="flex items-center ml-auto"
							:loading="
								deleteOrderIsLoading ||
								updateOrderIsLoading ||
								getOrderIsLoading
							"
							:disabled="
								deleteOrderIsLoading ||
								updateOrderIsLoading ||
								getOrderIsLoading
							"
						>
							<h-x class="h-4 w-4 mr-2"> </h-x>
							Удалить заказ
						</c-button>
					</div>
				</div>
				<!-- <div
	
	
					class="
						flex flex-row
						rounded-lg
						bg-white
						shadow shadow-primary/25
						p-7
						mb-6
					"
				>
					<div class="">
						<img
							class="w-40 h-40 rounded-full object-cover"
							src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
							alt="User"
						/>
					</div>

					<div class="px-6">
						<div class="">
							<a class="mb-2" href="#">
								<h2 class="text-lg font-semibold mr-2">
									Меринков Валерий
								</h2>
							</a>
							<div class="text-green-600 leading-none mb-2">
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

						<div>
							<div class="flex flex-row space-x-2">
								<div class="text-xs m-0 flex items-center">
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
										></path>
									</svg>
									<span>4.7 - 7 отзывов</span>
								</div>
							</div>

							<div
								class="
									mt-2
									flex flex-row
									items-center
									space-x-5
								"
							>
								на сервисе с 2021 г.
							</div>
							<div class="flex items-center">
								<h-badge-check
									class="h-6 w-6 mr-1 text-green-600"
								></h-badge-check>
								Номер, почта и соцсети подтверждены
							</div>
						</div>
						
					</div>
				</div> -->
			</div>
		</div>
	</section>
</template>
