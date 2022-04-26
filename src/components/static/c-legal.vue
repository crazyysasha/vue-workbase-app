<script setup>
</script>
<style scoped>
</style>
<template>
    <section class="bg-white py-12 md:min-h-[500px] min-h-[auto]">
        <div class="mx-auto container px-4">
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
            </ul>
        </div>
    </section>
</template>
