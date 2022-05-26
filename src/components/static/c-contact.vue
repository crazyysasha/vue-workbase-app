<script setup>
</script>

<template>
    <section class="bg-white pb-12">
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
                        <span class="ml-1 text-sm font-medium text-gray-400 md:ml-2">Контакты</span>
                        </div>
                    </li>
                </ol>
            </nav>
            <div class="mb-12">
                <h2 class="text-3xl font-bold mb-6">Контакты</h2>
                <div class="mb-6">
                    Наша служба работает для Вас каждый день 24/7. <br>
                    Ответим на любые вопросы и пожелания в чате.<br>
                    Вы также можете позвонить по нашему номеру  <a class="decoration-solid underline text-primary" href="tel:+998 91 010 2112"> +998 91 010 2112</a>

                </div>
                <a class="text-white bg-gradient-to-r from-orange-400 via-orange-500 to-orange-400 hover:bg-gradient-to-br  shadow-lg shadow-orange-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center " href="javascript:jivo_api.open()">
                    Написать в поддержку
                </a>
            </div>
            <div class="flex flex-wrap mb-4 ">
                <div class="p-6 max-w-xs mr-4 mb-4 bg-white rounded-lg border border-gray-300 shadow-md ">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Для СМИ и PR-служб</h5>
                    <p class="font-normal text-gray-700">Для сотрудничества в направлении PR и СМИ</p>
                    <a href="mailto:pr@workbase.uz" class="inline-flex decoration-1 underline items-center py-2 text-md font-medium text-center text-gray-900 ">
                        pr@workbase.uz
                    </a>
                </div>
                <div class="p-6 max-w-xs mr-4 mb-4 bg-white rounded-lg border border-gray-300 shadow-md ">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Для партнёров</h5>
                    <p class="font-normal text-gray-700">Для потенциальных партнеров, инвесторов, фондов и бизнес-ангелов</p>
                    <a href="mailto:partner@workbase.uz" class="inline-flex decoration-1 underline items-center py-2 text-md font-medium text-center text-gray-900 ">
                        partner@workbase.uz
                    </a>
                </div>
            </div>
            <div class="flex flex-wrap mb-8 ">
                <div class="p-6 max-w-xs mr-4 mb-4 bg-white rounded-lg border border-gray-300 shadow-md ">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Для контрагентов</h5>
                    <p class="font-normal text-gray-700">Для размещения рекламы и связи  с отделом маркетинга и продаж</p>
                    <a href="mailto:marketing@workbase.uz" class="inline-flex decoration-1 underline items-center py-2 text-md font-medium text-center text-gray-900 ">
                        marketing@workbase.uz
                    </a>
                </div>
                <div class="p-6 max-w-xs mr-4 mb-4 bg-white rounded-lg border border-gray-300 shadow-md ">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Для соискателей</h5>
                    <p class="font-normal text-gray-700">Для самых замотивированных специалистов. Хотите стать членом нашей команды? Добро пожаловать на борт WorkBase.</p>
                    <a href="mailto:hr@workbase.uz" class="inline-flex decoration-1 underline items-center py-2 text-md font-medium text-center text-gray-900 ">
                        hr@workbase.uz
                    </a>
                </div>
            </div>
            <div class="mb-12">
                <h2 class="text-2xl font-bold">Реквизиты</h2>
                Юридический адрес: 
                100170, Республика Узбекистан, г. Ташкент, Мирзо-Улугбекский район, массив Буз-1, дом 2, кв. 2.<br>
                Телефон: +998 91 010 2112 <br>
                Почта: info@workbase.uz <br>
                ИНН: 309522847 <br>
            </div>

        </div>
    </section>
</template>