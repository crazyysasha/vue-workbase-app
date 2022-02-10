<template>
  
        <section class="section-banner relative flex w-full items-center justify-center">
            <div class="bg-black bg-opacity-40 h-full w-full z-10 absolute block"></div>
            <div class="w-full absolute h-full block">
                <video class="object-cover object-center h-full w-full" src="../assets/temp/videobg.webm" autoplay allowfullscreen muted loop></video>
            </div>
            <div class="container z-30">
                <h1 class="md:text-5xl text-2xl font-semibold text-white leading-3">Работа в Узбекистане</h1>
                <p class="text-md md:text-2xl font-normal md:my-10 my-5 text-white">538 603 клиента доверили дела WorkBase</p>
                

                <ul class="flex flex-wrap mt-10 text-white text-sm text-xl">
                    <li class="mr-5 my-2 md:text-xl text-sm md:inline-block"><a
                            class="border-b border-white hover:border-transparent transition-all duration-500" href="#">#
                            создание сайтов</a></li>
                    <li class="mr-5 my-2 md:text-xl text-sm md:inline-block"><a
                            class="border-b border-white hover:border-transparent transition-all duration-500" href="#"># выгул
                            собак</a></li>
                    <li class="mr-5 my-2 md:text-xl text-sm md:inline-block"><a
                            class="border-b border-white hover:border-transparent transition-all duration-500" href="#"># ремонт
                            под ключ</a></li>
                    <li class="mr-5 my-2 md:text-xl text-sm md:inline-block"><a
                            class="border-b border-white hover:border-transparent transition-all duration-500" href="#">#
                            математика дистанционно</a></li>
                </ul>
            </div>
        </section>
        <section class="flex w-full items-center justify-center pt-12">
            <div class="container">
                <div class="text-center sm:text-left pb-8">
                    <h2 class="text-xl md:text-3xl text-gray-900 font-medium">
                        В <span class="text-blue-800">Ташкенте работает</span> 325 779 специалистов, 205 469 дистанционно
                    </h2>
                </div>
                <div class="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-7 py-5">
                    <div class="bg-white rounded-xl px-8 py-6 flex flex-col">
                        <div class="flex items-center mb-5">
                            <div class="p-3 rounded-full bg-gray-100">
                                <img src="../assets/temp/icon-service.svg" class="h-9 w-9" alt="">
                            </div>

                            <div class="ml-2">
                                <h3 class="md:text-xl font-medium text-sm">
                                    <a href="#">
                                        Репетиторы
                                    </a>
                                </h3>
                                <span class="text-gray-300">(2)</span>
                            </div>
                        </div>
                        <div class="mt-2">
                            <ul class="mb-5">
                               
                                <li class="mb-2">
                                    <a class="flex items-center" href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 mr-2" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M5 13l4 4L19 7" />
                                        </svg>
                                        Актёрское мастерство
                                    </a>
                                </li>
                                <li class="mb-2">
                                    <a class="flex items-center" href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 mr-2" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M5 13l4 4L19 7" />
                                        </svg>
                                        Английский язык
                                    </a>
                                </li>
                                <li class="mb-2">
                                    <a class="flex items-center" href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 mr-2" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M5 13l4 4L19 7" />
                                        </svg>
                                         Арабский язык
                                    </a>
                                </li>
                                <li class="mb-2">
                                    <a class="flex items-center" href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 mr-2" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M5 13l4 4L19 7" />
                                        </svg>
                                        Аренда учебных помещений
                                    </a>
                                </li>
                                <li class="mb-2">
                                    <a class="flex items-center" href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 mr-2" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M5 13l4 4L19 7" />
                                        </svg>
                                        Биология
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div class="border-t border-dashed pt-3 border-gray-400 mt-auto">
                            <a href="{{ 'vue/order/make' | page({'category': category.slug }) }}" class="text-blue-900 flex items-center">
                                Все категории
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-900 ml-2" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                        </div>
          
                    </div>
                    <div class="bg-white rounded-xl px-8 py-6 flex flex-col">
                        <div class="flex items-center mb-5">
                            <div class="p-3 rounded-full bg-gray-100">
                                <img src="../assets/temp/icon-service.svg" class="h-9 w-9" alt="">
                            </div>

                            <div class="ml-2">
                                <h3 class="md:text-xl font-medium text-sm">
                                    <a href="#">
                                        Репетиторы
                                    </a>
                                </h3>
                                <span class="text-gray-300">(2)</span>
                            </div>
                        </div>
                        <div class="mt-2">
                            <ul class="mb-5">
                               
                                <li class="mb-2">
                                    <a class="flex items-center" href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 mr-2" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M5 13l4 4L19 7" />
                                        </svg>
                                        Актёрское мастерство
                                    </a>
                                </li>
                                <li class="mb-2">
                                    <a class="flex items-center" href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 mr-2" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M5 13l4 4L19 7" />
                                        </svg>
                                        Английский язык
                                    </a>
                                </li>
                                <li class="mb-2">
                                    <a class="flex items-center" href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 mr-2" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M5 13l4 4L19 7" />
                                        </svg>
                                         Арабский язык
                                    </a>
                                </li>
                                <li class="mb-2">
                                    <a class="flex items-center" href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 mr-2" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M5 13l4 4L19 7" />
                                        </svg>
                                        Аренда учебных помещений
                                    </a>
                                </li>
                                <li class="mb-2">
                                    <a class="flex items-center" href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 mr-2" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M5 13l4 4L19 7" />
                                        </svg>
                                        Биология
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div class="border-t border-dashed pt-3 border-gray-400 mt-auto">
                            <a href="{{ 'vue/order/make' | page({'category': category.slug }) }}" class="text-blue-900 flex items-center">
                                Все категории
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-900 ml-2" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                        </div>
          
                    </div>
                    <div class="bg-white rounded-xl px-8 py-6 flex flex-col">
                        <div class="flex items-center mb-5">
                            <div class="p-3 rounded-full bg-gray-100">
                                <img src="../assets/temp/icon-service.svg" class="h-9 w-9" alt="">
                            </div>

                            <div class="ml-2">
                                <h3 class="md:text-xl font-medium text-sm">
                                    <a href="#">
                                        Репетиторы
                                    </a>
                                </h3>
                                <span class="text-gray-300">(2)</span>
                            </div>
                        </div>
                        <div class="mt-2">
                            <ul class="mb-5">
                               
                                <li class="mb-2">
                                    <a class="flex items-center" href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 mr-2" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M5 13l4 4L19 7" />
                                        </svg>
                                        Актёрское мастерство
                                    </a>
                                </li>
                                <li class="mb-2">
                                    <a class="flex items-center" href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 mr-2" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M5 13l4 4L19 7" />
                                        </svg>
                                        Английский язык
                                    </a>
                                </li>
                                <li class="mb-2">
                                    <a class="flex items-center" href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 mr-2" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M5 13l4 4L19 7" />
                                        </svg>
                                         Арабский язык
                                    </a>
                                </li>
                                <li class="mb-2">
                                    <a class="flex items-center" href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 mr-2" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M5 13l4 4L19 7" />
                                        </svg>
                                        Аренда учебных помещений
                                    </a>
                                </li>
                                <li class="mb-2">
                                    <a class="flex items-center" href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 mr-2" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M5 13l4 4L19 7" />
                                        </svg>
                                        Биология
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div class="border-t border-dashed pt-3 border-gray-400 mt-auto">
                            <a href="{{ 'vue/order/make' | page({'category': category.slug }) }}" class="text-blue-900 flex items-center">
                                Все категории
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-900 ml-2" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                        </div>
          
                    </div>
                    <div class="bg-white rounded-xl px-8 py-6 flex flex-col">
                        <div class="flex items-center mb-5">
                            <div class="p-3 rounded-full bg-gray-100">
                                <img src="../assets/temp/icon-service.svg" class="h-9 w-9" alt="">
                            </div>

                            <div class="ml-2">
                                <h3 class="md:text-xl font-medium text-sm">
                                    <a href="#">
                                        Репетиторы
                                    </a>
                                </h3>
                                <span class="text-gray-300">(2)</span>
                            </div>
                        </div>
                        <div class="mt-2">
                            <ul class="mb-5">
                               
                                <li class="mb-2">
                                    <a class="flex items-center" href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 mr-2" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M5 13l4 4L19 7" />
                                        </svg>
                                        Актёрское мастерство
                                    </a>
                                </li>
                                <li class="mb-2">
                                    <a class="flex items-center" href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 mr-2" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M5 13l4 4L19 7" />
                                        </svg>
                                        Английский язык
                                    </a>
                                </li>
                                <li class="mb-2">
                                    <a class="flex items-center" href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 mr-2" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M5 13l4 4L19 7" />
                                        </svg>
                                         Арабский язык
                                    </a>
                                </li>
                                <li class="mb-2">
                                    <a class="flex items-center" href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 mr-2" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M5 13l4 4L19 7" />
                                        </svg>
                                        Аренда учебных помещений
                                    </a>
                                </li>
                                <li class="mb-2">
                                    <a class="flex items-center" href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 mr-2" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M5 13l4 4L19 7" />
                                        </svg>
                                        Биология
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div class="border-t border-dashed pt-3 border-gray-400 mt-auto">
                            <a href="{{ 'vue/order/make' | page({'category': category.slug }) }}" class="text-blue-900 flex items-center">
                                Все категории
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-900 ml-2" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                        </div>
          
                    </div>
                    <div class="bg-white rounded-xl px-8 py-6 flex flex-col">
                        <div class="flex items-center mb-5">
                            <div class="p-3 rounded-full bg-gray-100">
                                <img src="../assets/temp/icon-service.svg" class="h-9 w-9" alt="">
                            </div>

                            <div class="ml-2">
                                <h3 class="md:text-xl font-medium text-sm">
                                    <a href="#">
                                        Репетиторы
                                    </a>
                                </h3>
                                <span class="text-gray-300">(2)</span>
                            </div>
                        </div>
                        <div class="mt-2">
                            <ul class="mb-5">
                               
                                <li class="mb-2">
                                    <a class="flex items-center" href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 mr-2" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M5 13l4 4L19 7" />
                                        </svg>
                                        Актёрское мастерство
                                    </a>
                                </li>
                                <li class="mb-2">
                                    <a class="flex items-center" href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 mr-2" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M5 13l4 4L19 7" />
                                        </svg>
                                        Английский язык
                                    </a>
                                </li>
                                <li class="mb-2">
                                    <a class="flex items-center" href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 mr-2" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M5 13l4 4L19 7" />
                                        </svg>
                                         Арабский язык
                                    </a>
                                </li>
                                <li class="mb-2">
                                    <a class="flex items-center" href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 mr-2" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M5 13l4 4L19 7" />
                                        </svg>
                                        Аренда учебных помещений
                                    </a>
                                </li>
                                <li class="mb-2">
                                    <a class="flex items-center" href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 mr-2" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M5 13l4 4L19 7" />
                                        </svg>
                                        Биология
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div class="border-t border-dashed pt-3 border-gray-400 mt-auto">
                            <a href="{{ 'vue/order/make' | page({'category': category.slug }) }}" class="text-blue-900 flex items-center">
                                Все категории
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-900 ml-2" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                        </div>
          
                    </div>
                    <div class="bg-white rounded-xl px-8 py-6 flex flex-col">
                        <div class="flex items-center mb-5">
                            <div class="p-3 rounded-full bg-gray-100">
                                <img src="../assets/temp/icon-service.svg" class="h-9 w-9" alt="">
                            </div>

                            <div class="ml-2">
                                <h3 class="md:text-xl font-medium text-sm">
                                    <a href="#">
                                        Репетиторы
                                    </a>
                                </h3>
                                <span class="text-gray-300">(2)</span>
                            </div>
                        </div>
                        <div class="mt-2">
                            <ul class="mb-5">
                               
                                <li class="mb-2">
                                    <a class="flex items-center" href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 mr-2" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M5 13l4 4L19 7" />
                                        </svg>
                                        Актёрское мастерство
                                    </a>
                                </li>
                                <li class="mb-2">
                                    <a class="flex items-center" href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 mr-2" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M5 13l4 4L19 7" />
                                        </svg>
                                        Английский язык
                                    </a>
                                </li>
                                <li class="mb-2">
                                    <a class="flex items-center" href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 mr-2" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M5 13l4 4L19 7" />
                                        </svg>
                                         Арабский язык
                                    </a>
                                </li>
                                <li class="mb-2">
                                    <a class="flex items-center" href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 mr-2" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M5 13l4 4L19 7" />
                                        </svg>
                                        Аренда учебных помещений
                                    </a>
                                </li>
                                <li class="mb-2">
                                    <a class="flex items-center" href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 mr-2" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M5 13l4 4L19 7" />
                                        </svg>
                                        Биология
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div class="border-t border-dashed pt-3 border-gray-400 mt-auto">
                            <a href="{{ 'vue/order/make' | page({'category': category.slug }) }}" class="text-blue-900 flex items-center">
                                Все категории
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-900 ml-2" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                        </div>
          
                    </div>
                    <div class="bg-white rounded-xl px-8 py-6 flex flex-col">
                        <div class="flex items-center mb-5">
                            <div class="p-3 rounded-full bg-gray-100">
                                <img src="../assets/temp/icon-service.svg" class="h-9 w-9" alt="">
                            </div>

                            <div class="ml-2">
                                <h3 class="md:text-xl font-medium text-sm">
                                    <a href="#">
                                        Репетиторы
                                    </a>
                                </h3>
                                <span class="text-gray-300">(2)</span>
                            </div>
                        </div>
                        <div class="mt-2">
                            <ul class="mb-5">
                               
                                <li class="mb-2">
                                    <a class="flex items-center" href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 mr-2" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M5 13l4 4L19 7" />
                                        </svg>
                                        Актёрское мастерство
                                    </a>
                                </li>
                                <li class="mb-2">
                                    <a class="flex items-center" href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 mr-2" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M5 13l4 4L19 7" />
                                        </svg>
                                        Английский язык
                                    </a>
                                </li>
                                <li class="mb-2">
                                    <a class="flex items-center" href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 mr-2" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M5 13l4 4L19 7" />
                                        </svg>
                                         Арабский язык
                                    </a>
                                </li>
                                <li class="mb-2">
                                    <a class="flex items-center" href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 mr-2" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M5 13l4 4L19 7" />
                                        </svg>
                                        Аренда учебных помещений
                                    </a>
                                </li>
                                <li class="mb-2">
                                    <a class="flex items-center" href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 mr-2" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M5 13l4 4L19 7" />
                                        </svg>
                                        Биология
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div class="border-t border-dashed pt-3 border-gray-400 mt-auto">
                            <a href="{{ 'vue/order/make' | page({'category': category.slug }) }}" class="text-blue-900 flex items-center">
                                Все категории
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-900 ml-2" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                        </div>
          
                    </div>
                    <div class="bg-white rounded-xl px-8 py-6 flex flex-col">
                        <div class="flex items-center mb-5">
                            <div class="p-3 rounded-full bg-gray-100">
                                <img src="../assets/temp/icon-service.svg" class="h-9 w-9" alt="">
                            </div>

                            <div class="ml-2">
                                <h3 class="md:text-xl font-medium text-sm">
                                    <a href="#">
                                        Репетиторы
                                    </a>
                                </h3>
                                <span class="text-gray-300">(2)</span>
                            </div>
                        </div>
                        <div class="mt-2">
                            <ul class="mb-5">
                               
                                <li class="mb-2">
                                    <a class="flex items-center" href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 mr-2" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M5 13l4 4L19 7" />
                                        </svg>
                                        Актёрское мастерство
                                    </a>
                                </li>
                                <li class="mb-2">
                                    <a class="flex items-center" href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 mr-2" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M5 13l4 4L19 7" />
                                        </svg>
                                        Английский язык
                                    </a>
                                </li>
                                <li class="mb-2">
                                    <a class="flex items-center" href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 mr-2" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M5 13l4 4L19 7" />
                                        </svg>
                                         Арабский язык
                                    </a>
                                </li>
                                <li class="mb-2">
                                    <a class="flex items-center" href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 mr-2" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M5 13l4 4L19 7" />
                                        </svg>
                                        Аренда учебных помещений
                                    </a>
                                </li>
                                <li class="mb-2">
                                    <a class="flex items-center" href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 mr-2" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M5 13l4 4L19 7" />
                                        </svg>
                                        Биология
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div class="border-t border-dashed pt-3 border-gray-400 mt-auto">
                            <a href="{{ 'vue/order/make' | page({'category': category.slug }) }}" class="text-blue-900 flex items-center">
                                Все категории
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-900 ml-2" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                        </div>
          
                    </div>
                    <div class="bg-white rounded-xl px-8 py-6 flex flex-col">
                        <div class="flex items-center mb-5">
                            <div class="p-3 rounded-full bg-gray-100">
                                <img src="../assets/temp/icon-service.svg" class="h-9 w-9" alt="">
                            </div>

                            <div class="ml-2">
                                <h3 class="md:text-xl font-medium text-sm">
                                    <a href="#">
                                        Репетиторы
                                    </a>
                                </h3>
                                <span class="text-gray-300">(2)</span>
                            </div>
                        </div>
                        <div class="mt-2">
                            <ul class="mb-5">
                               
                                <li class="mb-2">
                                    <a class="flex items-center" href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 mr-2" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M5 13l4 4L19 7" />
                                        </svg>
                                        Актёрское мастерство
                                    </a>
                                </li>
                                <li class="mb-2">
                                    <a class="flex items-center" href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 mr-2" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M5 13l4 4L19 7" />
                                        </svg>
                                        Английский язык
                                    </a>
                                </li>
                                <li class="mb-2">
                                    <a class="flex items-center" href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 mr-2" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M5 13l4 4L19 7" />
                                        </svg>
                                         Арабский язык
                                    </a>
                                </li>
                                <li class="mb-2">
                                    <a class="flex items-center" href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 mr-2" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M5 13l4 4L19 7" />
                                        </svg>
                                        Аренда учебных помещений
                                    </a>
                                </li>
                                <li class="mb-2">
                                    <a class="flex items-center" href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 mr-2" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M5 13l4 4L19 7" />
                                        </svg>
                                        Биология
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div class="border-t border-dashed pt-3 border-gray-400 mt-auto">
                            <a href="{{ 'vue/order/make' | page({'category': category.slug }) }}" class="text-blue-900 flex items-center">
                                Все категории
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-900 ml-2" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                        </div>
          
                    </div>
                </div>
            </div>
        </section>
 
        <section class="bg-gray-50 py-5">
            <div class="container md:flex items-center justify-between px-2 md:px-4 2xl:px-20 mx-auto">
                <div class="">
                    <h2 class="text-sm md:text-md  lg:text-2xl text-center md:text-left font-medium mb-8">Для максимального <br> удобства, скачайте <br> бесплатное <span class="text-blue-800">мобильное <br> приложение.</span></h2>
                    <div class="flex justify-center md:justify-start">
                        <a class="mr-4 transition-all duration-500 transform hover:scale-110" href="#"><img class="w-30 h-10"
                                src="" alt=""></a>
                        <a class="transition-all duration-500 transform hover:scale-110" href="#"><img class="w-30 h-10"
                                src="" alt=""></a>
                    </div>
                </div>
                <div class="relative mx-auto w-5/12 mt-5 lg:my-0">
                    <div class="swiper mySwiper w-full">
                        <div class="swiper-wrapper mx-auto">
                            <div class="swiper-slide"><img src="" alt=""></div>
                            <div class="swiper-slide"><img src="" alt=""></div>
                            <div class="swiper-slide"><img src="" alt=""></div>
                        </div>
                    </div>
                      <swiper
                        :modules="modules"
                        :slides-per-view="1"
                        :space-between="50"
                        :autoplay="1000"
                        :effect="fade"
                        navigation
                        :pagination="{ clickable: true }"
                        :scrollbar="{ draggable: true }"
                        @swiper="onSwiper"
                        @slideChange="onSlideChange"
                    >
                        <swiper-slide>Slide 1</swiper-slide>
                        <swiper-slide>Slide 2</swiper-slide>
                        <swiper-slide>Slide 3</swiper-slide>
                        ...
                    </swiper>
                </div>
            </div>
        </section>
        <footer class="bg-gray-700 py-6 flex w-full items-center justify-center">
            <div class="container">
                <!-- <div class="flex flex-col md:flex-row items-center text-center md:text-left md:justify-between border-b border-2-gray-200 pb-6">
                    <h3 class="text-gray-200 text-sm ms:text-md md:text-lg lg:text-xl font-semibold">
                        Скачайте наше бесплатное приложение на смартфон!
                    </h3>
                    <div class="md:flex first:mr-5"  >
                        <a href="{{ this.theme.Android }}" class="mr-2">
                            <img class="" src="{{'assets/images/app.png' | theme}}" alt="">
                        </a>
                        <a href="{{ this.theme.Ios }}" class="">
                            <img class="" src="{{'assets/images/play.png' | theme}}" alt="">
                        </a>
                    </div>
                </div> -->
                <div class="md:grid md:grid-cols-3 text-sm md:text-lg font-medium text-center md:text-left text-gray-200 pb-5">
                    <div class="">
                        <ul>
                            <li class="my-3 text-xs sm:text-sm md:text-md lg:text-lg "><a class="hover:text-blue-300"  href="#">Специалистам</a></li>
                            <li class="my-3 text-xs sm:text-sm md:text-md lg:text-lg"><a  class="hover:text-blue-300" href="#">Стать специалистом</a></li>
                        </ul>
                    </div>
                    <div class="">
                        <ul>
                            <li class="my-3 text-xs sm:text-sm md:text-md lg:text-lg ">
                                <a class="hover:text-blue-300"  href="#">
                                    Заказчикам
                                </a>
                            </li>
                            <li class="my-3 text-xs sm:text-sm md:text-md lg:text-lg">
                                <a  class="hover:text-blue-300" href="#">
                                    Создать заявк
                                </a>
                            </li>
                            <li class="my-3 text-xs sm:text-sm md:text-md lg:text-lg">
                                <a  class="hover:text-blue-300" href="#">
                                    Инструкция по оплате
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="">
                        <ul>
                            <li class="my-3 text-xs sm:text-sm md:text-md lg:text-lg ">
                                <a class="hover:text-blue-300"  href="#">
                                    О компании
                                </a>
                            </li>
                            <li class="my-3 text-xs sm:text-sm md:text-md lg:text-lg ">
                                <a class="hover:text-blue-300"  href="#">
                                    Служба поддержки
                                </a>
                            </li>
                            <li class="my-3 text-xs sm:text-sm md:text-md lg:text-lg">
                                <a  class="hover:text-blue-300" href="#">
                                    Частые вопросы
                                </a>
                            </li>
                            <li class="my-3 text-xs sm:text-sm md:text-md lg:text-lg">
                                <a  class="hover:text-blue-300" href="#">
                                    Условия использования
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="md:grid text-center md:text-left font-medium text-sm md:text-lg grid-cols-3 text-gray-200">
                    <div class="my-2">
                        <ul>
                            <li class="text-xs sm:text-sm md:text-md lg:text-lg ">
                                <span>
                                    © 2022. Все права защищены
                                </span>  
                            </li>
                        </ul>
                    </div>
                    <div class="my-2">
                        <ul class="flex items-center justify-center md:justify-start">
                            
                                <li class="mr-5">
                                    <a  target="_blank" href="{{ social.link }}">
                                        <img class="transition-all duration-500 transform hover:scale-110" src="#" alt="">
                                    </a>
                                </li>
    
                        </ul>
                    </div>
                    <div class="my-2">
                        <ul>
                            <li class="text-xs sm:text-sm md:text-md lg:text-lg ">
                                <a href="#">Разработка сайта: <span class="hover:text-blue-300">BigSoft</span></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
</template>


<style>
    .section-banner {
        height: calc(85vh - 76px);
    }
    
    @media only screen and (max-width: 600px) {
        .section-banner {
            height: calc(70vh - 76px)
        }
    }
</style>


<script setup>
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import 'swiper/css';

    const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
    };
    
</script>
                var swiper = new Swiper('.mySwiper', {
                    autoplay: {
                        delay: 5000,
                    },
                    effect: 'fade'
                });
                var swiper = new Swiper('.swiper_clue', {
                    loop: true,
                    autoplay: {
                        delay: 5000,
                    },
                    cubeEffect: {
                        shadow: false,
                    },
                    navigation: {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    },
                });