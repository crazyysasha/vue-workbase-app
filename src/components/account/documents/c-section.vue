<template>
	<section class="bg-white rounded-md shadow-md shadow-primary/25">
		<div class="p-4">
			<div class="">
				<h2 class="font-medium text-2xl text-primary">
					Сертификаты и дипломы
				</h2>
				<p class="text-gray-500">Загрузите ваши документы</p>
			</div>
			<div
				class="
					md:grid
					grid-cols-1
					md:grid-cols-2
					lg:grid-cols-3
					gap-4
					mt-5
				"
			>
				<div
					class="
						border-dashed border border-gray-300
						hover:border-solid
						transition
						duration-700
						ease-in-out
						rounded-md
						p-4
						text-center
						cursor-pointer
						shadow-md shadow-primary/25
						hover:shadow-primary/30
						flex flex-col
						justify-center
						mb-3
						h-40
					"
				>
					<div
						class="
							flex
							justify-center
							items-center
							text-center
							bg-gray-300
							mx-auto
							w-10
							h-10
							text-white
							rounded-full
						"
					>
						<div class="">
							<svg
								class="w-6 h-6 stroke-primary"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								stroke-width="2"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
								/>
							</svg>
						</div>
					</div>
					<div class="">
						<p class="text-gray-400 m-auto">Добавить документ</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
	import useProfile from "@/composables/profile";
	import { onMounted, ref } from "vue";
	import AccountSection from "../account-section.vue";
	import WbButton from "../wb-button.vue";
	import WbSelect from "../wb-select.vue";

	const isActiveRapair = ref(false);
	const isAddNew = ref(true);

	const { onGet } = useProfile();

	const { promise, isLoading } = onGet();
	onMounted(async () => {
		if (isLoading.value) {
			console.log("waiting");
			await promise.value;
			console.log("waited");
		}
	});
</script>