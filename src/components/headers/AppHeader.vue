<style scoped>
.close {
  left: -100%;
}
.open {
  left: 0;
}
</style>
<script setup>
import { computed, ref } from "vue";
import CLogin from "@/components/auth/c-login";
import cRegister from "@/components/auth/c-register";
import { user, isAuthentificated } from "@/composables/auth";
import cUserMenu from "@/components/userMenu/c-user-menu";
import cLanguage from "@/components/userMenu/c-language";
import { useRoute } from "vue-router";
const showLoginModal = ref(false);
const showRegisterModal = ref(false);
const route = useRoute();
const headerType = computed(() => route.meta?.header || "secondary");
const navOpen = ref(false);
</script>
<template>
  <header
    class="sticky top-0 z-50 text-white"
    :class="{
      'bg-primary': headerType == 'secondary',
      'bg-white': headerType == 'primary',
    }"
  >
    <div class="container px-4 2xl:px-20 mx-auto flex items-stretch xl:py-3">
      <div
        class="
          flex
          z-20
          py-5
          xl:py-0
          justify-between
          w-full
          xl:w-auto
          items-center
        "
      >
        <router-link to="/" class="py-2 mr-12 my-auto w-36 md:w-40">
          <img
            v-if="navOpen == true"
            src="@/assets/logo-white.svg"
            alt=""
            class=""
          />
          <img
            v-else
            :src="
              require(`@/assets/logo${
                headerType == 'secondary' ? '-white' : ''
              }.svg`)
            "
            alt=""
            class=""
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
            <svg
              viewBox="0 0 28 28"
              class="fill-current text-black h-7 w-7"
              xmlns="http://www.w3.org/2000/svg"
              v-if="(navOpen = navOpen)"
            >
              <path
                d="M2.32129 2.32363C2.72582 1.9191 3.38168 1.9191 3.78621 2.32363L25.6966 24.234C26.1011 24.6385 26.1011 25.2944 25.6966 25.6989C25.2921 26.1035 24.6362 26.1035 24.2317 25.6989L2.32129 3.78854C1.91676 3.38402 1.91676 2.72815 2.32129 2.32363Z"
              />
              <path
                d="M25.6787 2.30339C25.2742 1.89887 24.6183 1.89887 24.2138 2.30339L2.30339 24.2138C1.89887 24.6183 1.89887 25.2742 2.30339 25.6787C2.70792 26.0832 3.36379 26.0832 3.76831 25.6787L25.6787 3.76831C26.0832 3.36379 26.0832 2.70792 25.6787 2.30339Z"
              />
            </svg>
            <svg
              v-else
              class="fill-current h-7 w-7"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384.97 384.97"
            >
              <g>
                <path
                  d="M12.03,84.212h360.909c6.641,0,12.03-5.39,12.03-12.03c0-6.641-5.39-12.03-12.03-12.03H12.03
                                C5.39,60.152,0,65.541,0,72.182C0,78.823,5.39,84.212,12.03,84.212z"
                />
                <path
                  d="M372.939,300.758H12.03c-6.641,0-12.03,5.39-12.03,12.03c0,6.641,5.39,12.03,12.03,12.03h360.909
                                c6.641,0,12.03-5.39,12.03-12.03C384.97,306.147,379.58,300.758,372.939,300.758z"
                />
                <path
                  d="M336.848,144.364c-22.4,0-41.059,15.375-46.425,36.091H12.03c-6.641,0-12.03,5.39-12.03,12.03s5.39,12.03,12.03,12.03
                                h278.393c5.366,20.716,24.025,36.091,46.425,36.091c26.575,0,48.121-21.546,48.121-48.121S363.423,144.364,336.848,144.364z
                                M336.848,216.545c-13.293,0-24.061-10.779-24.061-24.061c0-13.281,10.767-24.061,24.061-24.061s24.061,10.767,24.061,24.061
                                C360.909,205.766,350.142,216.545,336.848,216.545z"
                />
              </g>
            </svg>
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
        v-bind:class="{ close: !navOpen }"
      >
        <ul
          v-if="isAuthentificated"
          class="
            block
            mt-20
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
              :class="{
                '': headerType == 'secondary',
                'xl:text-primary text-white': headerType == 'primary',
              }"
            >
              <h-order></h-order>
              <span
                :class="{
                  '': headerType == 'secondary',
                  'xl:text-black text-white': headerType == 'primary',
                }"
              >
                Заказы
              </span>
            </router-link>
          </li>
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
                text-white
                sm:mt-0
                text-lg
                xl:mr-4
                py-3
                border-gray-50/25
              "
              :class="{
                '': headerType == 'secondary',
                'xl:text-primary text-white': headerType == 'primary',
              }"
            >
              <h-wallet></h-wallet>
              <span
                :class="{
                  '': headerType == 'secondary',
                  'xl:text-black text-white': headerType == 'primary',
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
              :class="{
                '': headerType == 'secondary',
                'xl:text-primary text-white': headerType == 'primary',
              }"
            >
              <h-account></h-account>
              <span
                :class="{
                  '': headerType == 'secondary',
                  'xl:text-black text-white': headerType == 'primary',
                }"
              >
                Анкета
              </span>
            </router-link>
          </li>
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
                text-white
                sm:mt-0
                text-lg
                xl:mr-4
                py-3
                border-gray-50/25
              "
              :class="{
                '': headerType == 'secondary',
                'xl:text-primary text-white': headerType == 'primary',
              }"
            >
              <h-support></h-support>
              <span
                :class="{
                  '': headerType == 'secondary',
                  'xl:text-black text-white': headerType == 'primary',
                }"
              >
                Поддержка
              </span>
            </router-link>
          </li>
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
                text-white
                sm:mt-0
                text-lg
                xl:mr-4
                py-3
                border-gray-50/25
              "
              :class="{
                '': headerType == 'secondary',
                'xl:text-primary text-white': headerType == 'primary',
              }"
            >
              <h-bonus></h-bonus>
              <span
                :class="{
                  '': headerType == 'secondary',
                  'xl:text-black text-white': headerType == 'primary',
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
            mt-20
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
              @click="showLoginModal = true"
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
              @click="showRegisterModal = true"
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
          >
            Служба поддержки
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
          >
            Частые вопросы
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
          >
            Условия использования
          </li>
          <li>
            <c-language></c-language>
          </li>
        </ul>
        <div
          class="xl:hidden flex items-center w-full justify-center py-3 mt-6"
        >
          <a class="mx-auto" href="#">
            <img class="w-32" src="@/assets/images/app.png" alt="" />
          </a>
          <a class="mx-auto" href="#">
            <img class="w-32" src="@/assets/images/play.png" alt="" />
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
