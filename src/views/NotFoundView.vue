<script setup>
	import { computed } from "vue";
	const props = defineProps({
		message: {
			type: String,
			required: false,
		},
		description: {
			type: String,
			required: false,
		},
	});

	const message = computed(() => {
		if (props.message) return props.message;

		return "Страница не найдена";
	});

	const description = computed(() => {
		if (props.description) return props.description;

		return "Но специалиста мы вам наверняка найдем!";
	});
</script>
<template>
	<div class="flex items-center justify-center container mx-auto">
		<div class="px-4 lg:py-12">
			<div class="lg:gap-4 lg:flex">
				<div
					class="
						flex flex-col
						items-center
						justify-center
						md:py-24
						lg:py-32
					"
				>
					<h1 class="font-bold text-blue-900 text-9xl">404</h1>
					<p
						class="
							mb-2
							text-2xl
							font-semibold
							text-center text-gray-800
							md:text-3xl
						"
					>
						<span class="text-orange-400">Упс!</span>
						{{ message }} :(
					</p>
					<p class="mb-8 text-center text-gray-500 md:text-lg">
						{{ description }}
					</p>
					<router-link
						:to="{ name: 'home' }"
						class="
							px-6
							py-2
							text-sm
							font-semibold
							text-blue-800
							bg-blue-100
						"
					>
						На главную
					</router-link>
				</div>
				<div class="mt-4">
					<img
						src="@/assets/images/fon404.png"
						alt="img"
						class="object-cover w-full h-full"
					/>
				</div>
			</div>
		</div>
	</div>
</template>