<template>
	<router-link
		:to="to"
		class="
			bg-white
			rounded-md
			shadow-md shadow-primary/25
			p-4
			mb-3
			hover:shadow-primary/50
			transition-all
			duration-300
			flex
			items-start
			flex-col
			md:flex-row
		"
	>
		<div class="">
			<h2 class="text-2xl text-primary font-medium">
				Электрика. Монтаж проводки
			</h2>
			<div class="text-md my-4">
				<p>
					Установка розеток 3шт, установка выключателей 4шт. У нас в
					квартире ремонт нужен грамотный и компетентный специалист
				</p>
			</div>
			<ul
				class="
					flex flex-col
					md:flex-row
					justify-between
					text-xs
					md:text-sm
					text-gray-400
				"
			>
				<li class="flex items-center">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5 mr-2 stroke-red-500"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="2"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
						/>
					</svg>
					<span>17 нояб 13:00-14:00...</span>
				</li>
				<li class="flex items-center">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5 mr-2 stroke-red-500"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="2"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
						/>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
						/>
					</svg>
					<span>г. Ташкент, Юнусабад</span>
				</li>
				<li class="flex items-center">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5 mr-2 stroke-red-500"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="2"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
						/>
					</svg>
					<span>Телефон не подтвержден</span>
				</li>
			</ul>
		</div>

		<div class="text-right">
			<span class="text-gray-400 text-sm md:text-md inline-block"
				>Создан: сегодня 11:55</span
			>
			<span
				class="
					font-medium
					text-blue-950 text-sm
					md:text-md
					inline-block
				"
				>От 200 000 сум</span
			>
			<span
				class="
					font-medium
					text-blue-950 text-sm
					md:text-md
					inline-block
				"
				>До 150 000 сум</span
			>
		</div>
	</router-link>
</template>

<script setup>
	import { computed, toRefs } from "vue";

	const props = defineProps({
		id: { type: [String, Number] },
		name: { type: [String] },
		description: { type: [String] },
		category: {
			type: Object,
			required: true,
		},
	});

	const { id, name, description } = toRefs(props);
	
	const title = computed(() => {
		if (name.value) {
			return name.value;
		}
		return description.value;
	});
	
	const to = computed(() => {
		return {
			name: "order.view",
			params: { id: id.value || 0 },
		};
	});
</script>
