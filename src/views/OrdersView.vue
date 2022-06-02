<script setup>
	import { ref } from "vue";
	import BonusMiniCard from "@/components/bonus/mini-card.vue";
	import OrderInMap from "@/components/orders/in-map.vue";
	import OrderFilterPanel from "@/components/orders/filter-panel.vue";
	import ProfileChangeTypeWidget from "@/components/profile/type-widget.vue";
	import AdvWidget from "@/components/adv/filter-widget.vue";
	import OrderCard from "@/components/orders/card.vue";
</script>

<template>
	<div class="mx-auto container px-4 grid grid-cols-4 gap-4 py-4">
		<div class="col-span-1">
			<div class="mb-4">
				<BonusMiniCard></BonusMiniCard>
				<OrderInMap></OrderInMap>
				<OrderFilterPanel></OrderFilterPanel>
				<ProfileChangeTypeWidget></ProfileChangeTypeWidget>
				<div
					class="bg-white p-4 rounded-md shadow-md shadow-primary/25"
				>
					<h3 class="text-sm md:text-md font-medium my-2">
						Администрация
					</h3>
					<h3 class="text-sm md:text-md font-medium my-2">
						Безопасный платеж
					</h3>
				</div>
				<AdvWidget></AdvWidget>
			</div>
		</div>
		<div class="col-span-3">
			<div
				class="
					hidden
					md:flex
					justify-between
					lg:justify-start
					text-gray-500
					p-4
					sticky
					top-24
					bg-white
					shadow-md shadow-primary/25
					rounded-md
				"
			>
				<a
					class="
						text-xs
						cursor-pointer
						sm:text-sm
						md:text-md
						lg:text-base
						py-2
						px-6
						rounded-md
						mr-3
						border
						hover:border-orange-400 hover:text-orange-400
					"
					href="#"
				>
					Новые
				</a>
				<a
					class="
						text-xs
						cursor-pointer
						sm:text-sm
						md:text-md
						lg:text-base
						py-2
						px-6
						rounded-md
						mr-3
						border
						hover:border-orange-400 hover:text-orange-400
					"
					href="#"
				>
					<span> Открытые </span>
				</a>
				<a
					class="
						text-xs
						cursor-pointer
						sm:text-sm
						md:text-md
						lg:text-base
						py-2
						px-6
						rounded-md
						mr-3
						border
						hover:border-orange-400 hover:text-orange-400
					"
					href="#"
				>
					<span> В работе </span>
				</a>
				<a
					class="
						text-xs
						cursor-pointer
						sm:text-sm
						md:text-md
						lg:text-base
						py-2
						px-6
						rounded-md
						mr-3
						border
						hover:border-orange-400 hover:text-orange-400
					"
					href="#"
				>
					<span> Выполненные </span>
				</a>
				<a
					class="
						text-xs
						cursor-pointer
						sm:text-sm
						md:text-md
						lg:text-base
						py-2
						px-6
						rounded-md
						mr-3
						border
						hover:border-orange-400 hover:text-orange-400
					"
					href="#"
				>
					<span> Архив </span>
				</a>
			</div>

			<div class="md:hidden">
				<div
					class="
						flex
						items-center
						text-center
						justify-between
						p-4
						bg-white
						rounded-md
						my-2
						text-gray-400
					"
				>
					<div class="flex flex-col items-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-4 w-4 sm:h-6 ms:w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg>
						<span class="text-2xs sm:text-xs font-medium"
							>Новые</span
						>
					</div>
					<div class="flex flex-col items-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-4 w-4 sm:h-6 ms:w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
							/>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
							/>
						</svg>
						<span class="text-2xs sm:text-xs font-medium"
							>Открытые</span
						>
					</div>
					<div class="flex flex-col items-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-4 w-4 sm:h-6 ms:w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
							/>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
							/>
						</svg>
						<span class="text-2xs sm:text-xs font-medium"
							>В работе</span
						>
					</div>
					<div class="flex flex-col items-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-4 w-4 sm:h-6 ms:w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
							/>
						</svg>
						<span class="text-2xs sm:text-xs font-medium"
							>Выполненные</span
						>
					</div>
					<div class="flex flex-col items-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-4 w-4 sm:h-6 ms:w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
							/>
						</svg>
						<span class="text-2xs sm:text-xs font-medium">
							Архив
						</span>
					</div>
				</div>
			</div>
			<div class="mt-4">
				<div>
					<OrderCard
						:="{
							description: 'asdas',
							category: {
								id: 1,
								name: 'a',
							},
						}"
					></OrderCard>
				</div>
			</div>
		</div>
	</div>
</template>
