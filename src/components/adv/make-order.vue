<script setup>
	import {
		Autoplay,
		EffectFade,
		Navigation,
		Pagination,
		Scrollbar,
		A11y,
	} from "swiper";

	import { Swiper, SwiperSlide } from "swiper/vue";

	import "swiper/css";
	import "swiper/css/navigation";
	import "swiper/css/autoplay";
	import "swiper/css/effect-fade";
	import { objectPick } from "@vueuse/core";

	const props = defineProps({
		category: {},
		index: {
			type: Number,
			required: true,
		},
	});

	const banners = {
		"obrazovanie-i-repetitorstvo": [
			"http://api.workbase.uz/storage/app/media/banners/tutors/1.jpg",
			"http://api.workbase.uz/storage/app/media/banners/tutors/2.jpg",
			"http://api.workbase.uz/storage/app/media/banners/tutors/3.jpg",
			"http://api.workbase.uz/storage/app/media/banners/tutors/4.jpg",
		],
		"mastera-po-remontu": [
			"http://api.workbase.uz/storage/app/media/banners/masters/1.jpg",
			"http://api.workbase.uz/storage/app/media/banners/masters/2.jpg",
			"http://api.workbase.uz/storage/app/media/banners/masters/3.jpg",
			"http://api.workbase.uz/storage/app/media/banners/masters/4.jpg",
		],
		"zdorove-i-krasota": [
			"http://api.workbase.uz/storage/app/media/banners/beauty/1.jpg",
			"http://api.workbase.uz/storage/app/media/banners/beauty/2.jpg",
			"http://api.workbase.uz/storage/app/media/banners/beauty/3.jpg",
			"http://api.workbase.uz/storage/app/media/banners/beauty/4.jpg",
		],
		"vrachi-i-meditsina": [
			"http://api.workbase.uz/storage/app/media/banners/doctors/1.jpg",
			"http://api.workbase.uz/storage/app/media/banners/doctors/2.jpg",
			"http://api.workbase.uz/storage/app/media/banners/doctors/3.jpg",
			"http://api.workbase.uz/storage/app/media/banners/doctors/4.jpg",
		],
		"it-i-frilansery": [
			"http://api.workbase.uz/storage/app/media/banners/it/1.jpg",
			"http://api.workbase.uz/storage/app/media/banners/it/2.jpg",
			"http://api.workbase.uz/storage/app/media/banners/it/3.jpg",
			"http://api.workbase.uz/storage/app/media/banners/it/4.jpg",
		],
		"domashniy-personal": [
			"http://api.workbase.uz/storage/app/media/banners/staff/1.jpg",
			"http://api.workbase.uz/storage/app/media/banners/staff/2.jpg",
			"http://api.workbase.uz/storage/app/media/banners/staff/3.jpg",
			"http://api.workbase.uz/storage/app/media/banners/staff/4.jpg",
		],
		"bukhgaltery-i-yuristy": [
			"http://api.workbase.uz/storage/app/media/banners/accountants/1.jpg",
			"http://api.workbase.uz/storage/app/media/banners/accountants/2.jpg",
			"http://api.workbase.uz/storage/app/media/banners/accountants/3.jpg",
			"http://api.workbase.uz/storage/app/media/banners/accountants/4.jpg",
		],
		artisty: [
			"http://api.workbase.uz/storage/app/media/banners/artists/1.jpg",
			"http://api.workbase.uz/storage/app/media/banners/artists/2.jpg",
			"http://api.workbase.uz/storage/app/media/banners/artists/3.jpg",
			"http://api.workbase.uz/storage/app/media/banners/artists/4.jpg",
		],
	};
</script>
<template>
	<div
		class="my-4 overflow-hidden rounded-md shadow-md shadow-primary/25 mb-3"
	>
		<div class="w-full">
			<div class="relative">
				<swiper
					:slides-per-view="1"
					:space-between="0"
					:modules="[EffectFade, Autoplay]"
					:loop="true"
					:effect="'fade'"
					:autoplay="{
						delay: 7000,
						disableOnInteraction: false,
					}"
					@swiper="() => {}"
					@slideChange="() => {}"
				>
					<swiper-slide
						v-for="banner in banners?.[category]?.slice(
							index,
							index + 2
						) || []"
						:key="banner"
					>
						<img
							class="w-full object-cover rounded-md"
							:src="banner"
						/>
					</swiper-slide>
				</swiper>
			</div>
		</div>
	</div>
</template>