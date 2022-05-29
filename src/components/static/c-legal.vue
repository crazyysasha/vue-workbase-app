<script setup>
</script>
<style scoped>
</style>
<template>
    <section class="bg-white pb-12 md:min-h-[500px] min-h-[auto]">
        <div class="mx-auto container px-4">
            <nav class="flex py-12" aria-label="Breadcrumb">
                <ol class="inline-flex items-center space-x-1 md:space-x-3">
                    <li class="inline-flex items-center">
                            <router-link to="/" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900">
                            <svg class="mr-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                            Главная
                        </router-link>
                    </li>
                    <li aria-current="page">
                        <div class="flex items-center">
                        <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                        <span class="ml-1 text-sm font-medium text-gray-400 md:ml-2">Условия использования</span>
                        </div>
                    </li>
                </ol>
            </nav>
            <h2 class="text-3xl font-bold mb-6">Правовые документы</h2>
            <ul class="list-disc pl-5">
                <li>
                    <router-link
                        to="/termsofuse"
                        class="
                            underline decoration-1 text-lg
                        "
                    >
                        Политика конфиденциальности
                    </router-link>
                </li>
                <li>
                    <a href="http://api.workbase.uz/storage/app/media/Law_on_personal_data_in_the_Republic_of_Uzbekistan.pdf" class="underline decoration-1 text-lg">Закон о персональных данных в Республике Узбекистан </a>
                </li>
                <li>
                    <router-link
                        to="/usage"
                        class="
                            underline decoration-1 text-lg
                        "
                    >
                        Пользовательское соглашение
                    </router-link>
                </li>
                <li>
                    <router-link
                        to="/patent"
                        class="
                            underline decoration-1 text-lg
                        "
                    >
                        Патент
                    </router-link>
                </li>
            </ul>
        </div>
    </section>
</template>
