<script setup>
	import { computed, ref } from "vue";
	import CLogin from "@/components/auth/c-login";
	import cRegister from "@/components/auth/c-register";
	import { isAuthentificated } from "@/composables/auth";
	import cUserMenu from "@/components/userMenu/c-user-menu";
	import cLanguage from "@/components/userMenu/c-language";
	import { useRoute } from "vue-router";
	import { Autoplay } from "swiper";
	import { Swiper, SwiperSlide } from "swiper/vue";

	// Import Swiper styles
	import "swiper/css";

	const showLoginModal = ref(false);
	const showRegisterModal = ref(false);
	const route = useRoute();
	const headerType = computed(() => {
		return route.meta?.header || "secondary";
	});
	const navOpen = ref(false);
</script>
<style>
header .swiper-wrapper {
	@apply !ease-linear;
}
</style>
<template>
	<header
		class="sticky top-0 z-50 shadow-xl text-white mt-[-6px]"
		:class="{
			'bg-primary': headerType == 'secondary',
			'bg-white': headerType == 'primary',
		}"
	>
		<swiper
			:slides-per-view="1"
			:space-between="50"
			:speed="20000"
			:loop="true"
			:allowTouchMove="false"
			:autoplay="{
				delay: 0,
				disableOnInteraction: false,
			}"
			:modules="[Autoplay]"
			class="bg-orange-400"
		>
			<swiper-slide>Сервис работает в тестовом режиме!</swiper-slide>
		</swiper>
		<div
			class="container px-4 2xl:px-20 mx-auto flex items-stretchx xl:py-1 lg:h-[80px]"
		>
			<div
				class="
					flex
					py-2
					xl:py-0
					justify-between
					w-full
					xl:w-auto
					items-center
				"
			>
				<router-link to="/" class="py-2 mr-12 my-auto w-36 md:w-40">
					<img
						:src="
							require(`@/assets/logo${
								headerType == 'secondary' ? '-white' : ''
							}.svg`)
						"
					/>
				</router-link>
				<div class="block xl:hidden">
					<button
						v-on:click="navOpen = !navOpen"
						class="
							flex
							text-black
							items-center
							text-teal-lighter
							border-teal-light
							ml-auto
						"
					>
						<h-menu
							v-if="!navOpen"
							class="fill-current h-7 w-7"
							:class="{
								'text-black': headerType != 'secondary',
								'text-white': headerType == 'secondary',
							}"
						></h-menu>
						<h-x
							v-else
							class="fill-current h-7 w-7"
							:class="{
								'text-black': headerType != 'secondary',
								'text-white': headerType == 'secondary',
							}"
						></h-x>
					</button>
				</div>
			</div>
			<nav
				class="
					font-medium
					justify-between
					items-stretch
					block
					xl:flex
					bg-primary
					xl:bg-transparent
					absolute
					xl:static
					w-10/12
					inset-x-0
					h-screen
					xl:h-auto
					z-10
					transition-all
					duration-300
					ease-in-out
				"
				v-bind:class="{ '-left-full': !navOpen }"
			>
				<router-link
					to="/"
					class="inline-block mt-4 mx-3 md:hidden h-8 z-40"
				>
					<img
						class="w-full h-full object-contain"
						src="@/assets/logo-white.svg"
					/>
				</router-link>
				<ul
					v-if="isAuthentificated"
					class="
						block
						mt-0
						md:mt-4
						xl:mt-0 xl:flex
						items-center
						px-3
						xl:px-0 xl:pt-0
						pt-3
						gap-4
						z-30
					"
				>
					<li>
						<router-link
							to="/orders"
							class="
								no-underline
								xl:block
								flex
								mt-0
								xl:py-0 xl:border-0
								border-b
								sm:mt-0
								text-lg
								xl:mr-4
								py-3
								border-gray-50/25
							"
							@click="navOpen = !navOpen"
							:class="{
								'': headerType == 'secondary',
								'xl:text-primary text-white':
									headerType == 'primary',
							}"
						>
							<h-order></h-order>
							<span
								:class="{
									'': headerType == 'secondary',
									'xl:text-black text-white':
										headerType == 'primary',
								}"
							>
								Заказы
							</span>
						</router-link>
					</li>
					<li>
						<router-link
							to="/wallet"
							class="
								no-underline
								xl:block
								flex
								mt-0
								xl:py-0 xl:border-0
								border-b
								text-white
								sm:mt-0
								text-lg
								xl:mr-4
								py-3
								border-gray-50/25
							"
							@click="navOpen = !navOpen"
							:class="{
								'': headerType == 'secondary',
								'xl:text-primary text-white':
									headerType == 'primary',
							}"
						>
							<h-wallet></h-wallet>
							<span
								:class="{
									'': headerType == 'secondary',
									'xl:text-black text-white':
										headerType == 'primary',
								}"
							>
								Кошелёк
							</span>
						</router-link>
					</li>
					<li>
						<router-link
							to="/account"
							class="
								no-underline
								xl:block
								flex
								mt-0
								xl:py-0 xl:border-0
								border-b
								text-white
								sm:mt-0
								text-lg
								xl:mr-4
								py-3
								border-gray-50/25
							"
							@click="navOpen = !navOpen"
							:class="{
								'': headerType == 'secondary',
								'xl:text-primary text-white':
									headerType == 'primary',
							}"
						>
							<h-account></h-account>
							<span
								:class="{
									'': headerType == 'secondary',
									'xl:text-black text-white':
										headerType == 'primary',
								}"
							>
								Анкета
							</span>
						</router-link>
					</li>
					<li>
						<router-link
							to="/support"
							class="
								no-underline
								xl:block
								flex
								mt-0
								xl:py-0 xl:border-0
								border-b
								text-white
								sm:mt-0
								text-lg
								xl:mr-4
								py-3
								border-gray-50/25
							"
							@click="navOpen = !navOpen"
							:class="{
								'': headerType == 'secondary',
								'xl:text-primary text-white':
									headerType == 'primary',
							}"
						>
							<h-support></h-support>
							<span
								:class="{
									'': headerType == 'secondary',
									'xl:text-black text-white':
										headerType == 'primary',
								}"
							>
								Поддержка
							</span>
						</router-link>
					</li>
					<li>
						<router-link
							to="/bonus"
							class="
								no-underline
								xl:block
								flex
								mt-0
								xl:py-0 xl:border-0
								border-b
								text-white
								sm:mt-0
								text-lg
								xl:mr-4
								py-3
								border-gray-50/25
							"
							@click="navOpen = !navOpen"
							:class="{
								'': headerType == 'secondary',
								'xl:text-primary text-white':
									headerType == 'primary',
							}"
						>
							<h-bonus></h-bonus>
							<span
								:class="{
									'': headerType == 'secondary',
									'xl:text-black text-white':
										headerType == 'primary',
								}"
							>
								Бонусы
							</span>
						</router-link>
					</li>
				</ul>
				<ul
					v-if="isAuthentificated"
					class="
						block
						xl:mt-0 xl:flex
						items-center
						px-3
						xl:px-0 xl:pb-0
						pb-3
						gap-4
					"
				>
					<li>
						<c-user-menu></c-user-menu>
					</li>
					<li>
						<c-language></c-language>
					</li>
				</ul>
				<ul
					class="
						block
						mt-0
						md:mt-4
						xl:mt-0 xl:flex
						items-center
						px-3
						xl:ml-auto xl:px-0 xl:pt-0
						pt-3
						gap-4
					"
					v-else
				>
					<!--<li>
                         <button
                    type="button"
                    class="
                        flex
                        items-center
                        border-2 border-white
                        rounded-full
                        px-5
                        py-2
                        hover:bg-white hover:text-primary
                        transition
                        duration-200
                    "
                >
                    <h-location class="mr-2"></h-location>
                    г. Ташкент
                </button>                    </li> -->
					<li>
						<button
							@click="
								(showLoginModal = true), (navOpen = !navOpen)
							"
							type="button"
							class="
								flex
								items-center
								xl:border
								border-b
								w-full
								xl:w-auto xl:rounded-full
								border-gray-50/25
								text-white
								xl:px-5
								px-0
								xl:py-2
								py-3
								transition-all
								duration-300
								ease-out
								hover:ease-in
								xl:text-base
								text-lg
								outline-0
							"
							:class="{
								'xl:border-white xl:hover:bg-white xl:hover:text-primary':
									headerType == 'secondary',
								'xl:border-primary xl:hover:bg-primary xl:hover:text-white xl:text-black':
									headerType == 'primary',
							}"
						>
							<h-enter class="mr-2 xl:block hidden"></h-enter>
							Вход
						</button>
					</li>
					<li>
						<button
							@click="
								(showRegisterModal = true), (navOpen = !navOpen)
							"
							type="button"
							class="
								flex
								items-center
								xl:border
								border-b
								w-full
								xl:w-auto xl:rounded-full
								border-gray-50/25
								text-white
								xl:px-5
								px-0
								xl:py-2
								py-3
								transition-all
								duration-300
								ease-out
								hover:ease-in
								xl:text-base
								text-lg
								outline-0
							"
							:class="{
								'xl:border-white xl:hover:bg-white xl:hover:text-primary':
									headerType == 'secondary',
								'xl:border-primary xl:hover:bg-primary xl:hover:text-white xl:text-black':
									headerType == 'primary',
							}"
						>
							<h-pencil class="mr-2 xl:block hidden"></h-pencil>
							Регистрация
						</button>
					</li>
					<li
						class="
							xl:hidden
							flex
							items-center
							xl:border
							border-b
							w-full
							xl:w-auto xl:rounded-full
							border-gray-50/25
							text-white
							xl:px-5
							px-0
							xl:py-2
							py-3
							transition-all
							duration-300
							ease-out
							hover:ease-in
							xl:text-base
							text-lg
							outline-0
						"
						@click="navOpen = !navOpen"
					>
						<router-link to="/about" class="w-full h-full">
							О нас
						</router-link>
					</li>
					<li
						class="
							xl:hidden
							flex
							items-center
							xl:border
							border-b
							w-full
							xl:w-auto xl:rounded-full
							border-gray-50/25
							text-white
							xl:px-5
							px-0
							xl:py-2
							py-3
							transition-all
							duration-300
							ease-out
							hover:ease-in
							xl:text-base
							text-lg
							outline-0
						"
						@click="navOpen = !navOpen"
					>
						<router-link to="/faq" class="w-full h-full">
							Частые вопросы
						</router-link>
					</li>
					<li
						class="
							xl:hidden
							flex
							items-center
							xl:border
							border-b
							w-full
							xl:w-auto xl:rounded-full
							border-gray-50/25
							text-white
							xl:px-5
							px-0
							xl:py-2
							py-3
							transition-all
							duration-300
							ease-out
							hover:ease-in
							xl:text-base
							text-lg
							outline-0
						"
						@click="navOpen = !navOpen"
					>
						<router-link to="/legal" class="w-full h-full">
							Условия использования
						</router-link>
					</li>
					<li>
						<c-language></c-language>
					</li>
				</ul>
				<!-- <h3 class="text-center">Бесплатное мобильное приложение</h3> -->
				<div
					class="
						xl:hidden
						flex
						items-center
						w-full
						justify-center
						py-3
						mt-4
					"
				>
					
					<a class="mx-auto" href="#">
						<img
							class="w-32"
							src="@/assets/images/app.png"
							alt=""
						/>
					</a>
					<a class="mx-auto" href="#">
						<img
							class="w-32"
							src="@/assets/images/play.png"
							alt=""
						/>
					</a>
				</div>
			</nav>
		</div>
	</header>
	<c-modal
		v-model="showLoginModal"
		v-slot="{ close }"
		v-if="!isAuthentificated"
	>
		<button
			class="
				absolute
				top-3
				right-3
				bg-gray-300
				hover:bg-primary hover:text-white
				transition
				duration-200
				rounded-full
				p-2
			"
			@click="close"
		>
			<h-x class="w-3 h-3"></h-x>
		</button>
		<c-login @successful="close"></c-login>
	</c-modal>
	<c-modal
		v-model="showRegisterModal"
		v-slot="{ close }"
		v-if="!isAuthentificated"
	>
		<button
			class="
				absolute
				top-3
				right-3
				bg-gray-300
				hover:bg-primary hover:text-white
				transition
				duration-200
				rounded-full
				p-2
			"
			@click="close"
		>
			<h-x class="w-3 h-3"></h-x>
		</button>
		<c-register></c-register>
	</c-modal>
</template>
