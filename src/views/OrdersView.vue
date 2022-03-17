<template>
<section class="bg-gray-100 py-12">
    <div class="mx-auto container px-4">
        <div class="hidden md:flex justify-between lg:justify-start py-2  text-gray-500">
                <a 
                    class="                        
                        text-xs
                        cursor-pointer
                        sm:text-sm
                        md:text-md
                        lg:text-base
                        py-2
                        px-6
                        rounded-md
                        mr-3
                        border
                        hover:border-orange-400 
                        hover:text-orange-400" 
                    href="#"
                    @click="activeTab = 'new'"
                    :class="{
                        'border-orange-400 bg-orange-400 text-white hover:text-white':
                            activeTab == 'new',
                    }">

                        Новые

                </a>
                <a 
                    class="                        
                        text-xs
                        cursor-pointer
                        sm:text-sm
                        md:text-md
                        lg:text-base
                        py-2
                        px-6
                        rounded-md
                        mr-3
                        border
                        hover:border-orange-400 
                        hover:text-orange-400" 
                    href="#"
                    @click="activeTab = 'open'"
                    :class="{
                        'border-orange-400 bg-orange-400 text-white hover:text-white':
                            activeTab == 'open',
                    }">
                    <span>
                        Открытые
                    </span>
                </a>
                <a 
                    class="                        
                        text-xs
                        cursor-pointer
                        sm:text-sm
                        md:text-md
                        lg:text-base
                        py-2
                        px-6
                        rounded-md
                        mr-3
                        border
                        hover:border-orange-400 
                        hover:text-orange-400" 
                    href="#"
                    @click="activeTab = 'inWork'"
                    :class="{
                        'border-orange-400 bg-orange-400 text-white hover:text-white':
                            activeTab == 'inWork',
                    }">
                    <span>
                        В работе
                    </span>
                </a>
                <a 
                    class="                        
                        text-xs
                        cursor-pointer
                        sm:text-sm
                        md:text-md
                        lg:text-base
                        py-2
                        px-6
                        rounded-md
                        mr-3
                        border
                        hover:border-orange-400 
                        hover:text-orange-400" 
                    href="#"
                    @click="activeTab = 'completed'"
                    :class="{
                        'border-orange-400 bg-orange-400 text-white hover:text-white':
                            activeTab == 'completed',
                    }">
                    <span>
                        Выполненные
                    </span>
                </a>
                <a 
                    class="                        
                        text-xs
                        cursor-pointer
                        sm:text-sm
                        md:text-md
                        lg:text-base
                        py-2
                        px-6
                        rounded-md
                        mr-3
                        border
                        hover:border-orange-400 
                        hover:text-orange-400" 
                    href="#"
                @click="activeTab = 'archive'"
                :class="{
                    'border-orange-400 bg-orange-400 text-white hover:text-white':
                activeTab == 'archive',
                }">
                    <span>
                        Архив
                    </span>
                </a>
        </div>

        <div class="md:hidden">
            <div class="flex items-center text-center justify-between p-4 bg-white rounded-md my-2 text-gray-400">
                <div 
                    class="flex flex-col items-center"
                    v-show="activeTab == 'new'">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 sm:h-6 ms:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span class="text-2xs sm:text-xs font-medium">Новые</span>
                </div>
                <div 
                    class="flex flex-col items-center"
                    :class="{ 'text-black ': Tab === 2 }" 
                    @click="Tab = 2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 sm:h-6 ms:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    <span class="text-2xs sm:text-xs font-medium">Открытые</span>
                </div>
                <div 
                    class="flex flex-col items-center"
                    :class="{ 'text-black ': Tab === 3 }" 
                    @click="Tab = 3">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 sm:h-6 ms:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                    </svg>
                    <span class="text-2xs sm:text-xs font-medium">В работе</span>
                </div>
                <div 
                    class="flex flex-col items-center"
                    :class="{ 'text-black ': Tab === 4 }" 
                    @click="Tab = 4">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 sm:h-6 ms:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                    <span class="text-2xs sm:text-xs font-medium">Выполненные</span>
                </div>
                <div 
                    class="flex flex-col items-center"
                    :class="{ 'text-black ': Tab === 5 }" 
                    @click="Tab = 5">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 sm:h-6 ms:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                    </svg>
                    <span class="text-2xs sm:text-xs font-medium">
                        Архив
                    </span>
                </div>

            </div>
        </div>


        <div class="lg:grid grid-cols-3 mt-4">


            <div class="col-span-2 mr-0 lg:mr-4">
               <div class="">

                    <div v-show="activeTab == 'new'">
                        <div class="bg-white rounded-md shadow-md shadow-primary/25 mb-3 py-4 px-6 hover:shadow-primary/50 transition-all duration-300 ">
                            <a href="#" class="">
                                <div class="flex flex-col md:flex-row">
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
                                        <ul class="flex flex-col md:flex-row justify-between text-xs md:text-sm text-gray-400">
                                            <li class="flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 stroke-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                <span>17 нояб 13:00-14:00...</span>
                                            </li>
                                            <li class="flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 stroke-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                                <span>г. Ташкент, Юнусабад</span>
                                            </li>
                                            <li class="flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 stroke-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span>Телефон подтвержден</span>
                                            </li>
                                        </ul>
                                    </div>
            
                                    <div class="text-right">
                                        <span class="text-gray-400 text-sm md:text-md inline-block">Создан: сегодня 11:55</span>
                                        <span class="font-medium text-blue-950 text-sm md:text-md inline-block">От 200 000 сум</span>
                                        <span class="font-medium text-blue-950 text-sm md:text-md inline-block">До 150 000 сум</span>
                                    </div>
                                </div>
                            </a>
            
            
                        </div>
            
                        <div class="bg-white rounded-md shadow-md shadow-primary/25 mb-3 py-4 px-6 hover:shadow-primary/50 transition-all duration-300 ">
                            <a href="#" class="">
                                <div class="flex items-start flex-col md:flex-row">
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
                                        <ul class="flex flex-col md:flex-row justify-between text-xs md:text-sm text-gray-400">
                                            <li class="flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 stroke-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                <span>17 нояб 13:00-14:00...</span>
                                            </li>
                                            <li class="flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 stroke-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                                <span>г. Ташкент, Юнусабад</span>
                                            </li>
                                            <li class="flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 stroke-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                <span>Телефон не подтвержден</span>
                                            </li>
                                        </ul>
                                    </div>
            
                                    <div class="text-right">
                                        <span class="text-gray-400 text-sm md:text-md inline-block">Создан: сегодня 11:55</span>
                                        <span class="font-medium text-blue-950 text-sm md:text-md inline-block">От 200 000 сум</span>
                                        <span class="font-medium text-blue-950 text-sm md:text-md inline-block">До 150 000 сум</span>
                                    </div>
                                </div>
                            </a>
            
            
                        </div>
                        <div class="bg-white rounded-md shadow-md shadow-primary/25 mb-3 py-4 px-6 hover:shadow-primary/50 transition-all duration-300 ">
                            <a href="#" class="">
                                <div class="flex items-start flex-col md:flex-row">
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
                                        <ul class="flex flex-col md:flex-row justify-between text-xs md:text-sm text-gray-400">
                                            <li class="flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 stroke-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                <span>17 нояб 13:00-14:00...</span>
                                            </li>
                                            <li class="flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 stroke-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                                <span>г. Ташкент, Юнусабад</span>
                                            </li>
                                            <li class="flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 stroke-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                <span>Телефон не подтвержден</span>
                                            </li>
                                        </ul>
                                    </div>
            
                                    <div class="text-right">
                                        <span class="text-gray-400 text-sm md:text-md inline-block">Создан: сегодня 11:55</span>
                                        <span class="font-medium text-blue-950 text-sm md:text-md inline-block">От 200 000 сум</span>
                                        <span class="font-medium text-blue-950 text-sm md:text-md inline-block">До 150 000 сум</span>
                                    </div>
                                </div>
                            </a>
            
            
                        </div>
                        <div class="bg-white rounded-md shadow-md shadow-primary/25 mb-3 py-4 px-6 hover:shadow-primary/50 transition-all duration-300 ">
                            <a href="#" class="">
                                <div class="flex items-start flex-col md:flex-row">
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
                                        <ul class="flex flex-col md:flex-row justify-between text-xs md:text-sm text-gray-400">
                                            <li class="flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 stroke-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                <span>17 нояб 13:00-14:00...</span>
                                            </li>
                                            <li class="flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 stroke-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                                <span>г. Ташкент, Юнусабад</span>
                                            </li>
                                            <li class="flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 stroke-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                <span>Телефон не подтвержден</span>
                                            </li>
                                        </ul>
                                    </div>
            
                                    <div class="text-right">
                                        <span class="text-gray-400 text-sm md:text-md inline-block">Создан: сегодня 11:55</span>
                                        <span class="font-medium text-blue-950 text-sm md:text-md inline-block">От 200 000 сум</span>
                                        <span class="font-medium text-blue-950 text-sm md:text-md inline-block">До 150 000 сум</span>
                                    </div>
                                </div>
                            </a>
            
            
                        </div>
                    </div>

                    <div v-show="activeTab == 'open'">
                        <div class="">
                            <div class="bg-white rounded-md shadow-md shadow-primary/25 mb-3 py-4 px-6">
                                <div class="flex items-start flex-col md:flex-row justify-between">
                                    <div class="">
                                        <h2 class="text-2xl text-primary font-medium">
                                            Электрика. Монтаж проводки 
                                        </h2>
                                        <ul class="flex flex-col justify-between text-xs md:text-sm text-gray-400 mt-4">
                                            <li class="flex items-center mb-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 stroke-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                <span>02 дек 17:30-20:00...</span>
                                            </li>
                                            <li class="flex items-center mb-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 stroke-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                                <span>г. Ташкент, Чиланзар</span>
                                            </li>
                                            <li class="flex items-center mb-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 stroke-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span>Телефон подтвержден</span>
                                            </li>
                                            <li class="flex items-center mb-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 stroke-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span>Отклик отправлен</span>
                                            </li>
                                        </ul>
                                    </div>
            
                                    <div class="text-right">
                                        <span class="text-gray-400 text-sm md:text-md mb-1 block">Создан: сегодня 11:55</span>
                                        <span class="font-medium text-blue-950 text-sm md:text-md mb-1 block">До 150 000 сум</span>
                                    </div>
                                </div>
                            </div>


                            <div class="bg-white rounded-md shadow-md shadow-primary/25 mb-3 py-4 px-6">
                                <div class="flex items-start flex-col md:flex-row justify-between">
                                    <div class="">
                                        <h2 class="text-2xl text-primary font-medium">
                                            Электрика. Монтаж проводки 
                                        </h2>
                                        <ul class="flex flex-col justify-between text-xs md:text-sm text-gray-400 mt-4">
                                            <li class="flex items-center mb-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 stroke-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                <span>02 дек 17:30-20:00...</span>
                                            </li>
                                            <li class="flex items-center mb-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 stroke-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                                <span>г. Ташкент, Чиланзар</span>
                                            </li>
                                            <li class="flex items-center mb-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 stroke-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span>Телефон подтвержден</span>
                                            </li>
                                            <li class="flex items-center mb-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 stroke-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span>Отклик отправлен</span>
                                            </li>
                                        </ul>
                                    </div>
            
                                    <div class="text-right">
                                        <span class="text-gray-400 text-sm md:text-md mb-1 block">Создан: сегодня 11:55</span>
                                        <span class="font-medium text-blue-950 text-sm md:text-md mb-1 block">До 150 000 сум</span>
                                    </div>
                                </div>
                            </div>
            
            
                        </div>
                    </div>

                    <div v-show="activeTab == 'inWork'">
                        <div class="">
                            <div class="bg-white rounded-md shadow-md shadow-primary/25 mb-3 py-4 px-6">
                                <div class="flex items-start flex-col md:flex-row justify-between">
                                    <div class="">
                                        <h2 class="text-2xl text-primary font-medium">
                                            Электрика. Монтаж проводки 
                                        </h2>
                                        <ul class="flex flex-col justify-between text-xs md:text-sm text-gray-400 mt-4">
                                            <li class="flex items-center mb-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 stroke-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                <span>02 дек 17:30-20:00...</span>
                                            </li>
                                            <li class="flex items-center mb-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 stroke-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                                <span>г. Ташкент, Чиланзар</span>
                                            </li>
                                            <li class="flex items-center mb-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 stroke-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span>Телефон подтвержден</span>
                                            </li>
                                            <li class="flex items-center mb-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 stroke-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span>Отклик отправлен</span>
                                            </li>
                                        </ul>
                                    </div>
            
                                    <div class="text-right">
                                        <span class="text-gray-400 text-sm md:text-md mb-1 block">Создан: сегодня 11:55</span>
                                        <span class="font-medium text-blue-950 text-sm md:text-md mb-1 block">До 150 000 сум</span>
                                    </div>
                                </div>
                            </div>


                            <div class="bg-white rounded-md shadow-md shadow-primary/25 mb-3 py-4 px-6">
                                <div class="flex items-start flex-col md:flex-row justify-between">
                                    <div class="">
                                        <h2 class="text-2xl text-primary font-medium">
                                            Электрика. Монтаж проводки 
                                        </h2>
                                        <ul class="flex flex-col justify-between text-xs md:text-sm text-gray-400 mt-4">
                                            <li class="flex items-center mb-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 stroke-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                <span>02 дек 17:30-20:00...</span>
                                            </li>
                                            <li class="flex items-center mb-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 stroke-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                                <span>г. Ташкент, Чиланзар</span>
                                            </li>
                                            <li class="flex items-center mb-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 stroke-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span>Телефон подтвержден</span>
                                            </li>
                                            <li class="flex items-center mb-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 stroke-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span>Отклик отправлен</span>
                                            </li>
                                        </ul>
                                    </div>
            
                                    <div class="text-right">
                                        <span class="text-gray-400 text-sm md:text-md mb-1 block">Создан: сегодня 11:55</span>
                                        <span class="font-medium text-blue-950 text-sm md:text-md mb-1 block">До 150 000 сум</span>
                                    </div>
                                </div>
                            </div>
            
            
                        </div>
                    </div>
                    
                    <div v-show="activeTab == 'completed'">
                        <div class="">
                            <div class="bg-white rounded-md shadow-md shadow-primary/25 mb-3 py-4 px-6">
                                <div class="flex items-start flex-col md:flex-row justify-between">
                                    <div class="">
                                        <h2 class="text-2xl text-primary font-medium">
                                            Электрика. Монтаж проводки 
                                        </h2>
                                        <ul class="flex flex-col justify-between text-xs md:text-sm text-gray-400 mt-4">
                                            <li class="flex items-center mb-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 stroke-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                <span>02 дек 17:30-20:00...</span>
                                            </li>
                                            <li class="flex items-center mb-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 stroke-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                                <span>г. Ташкент, Чиланзар</span>
                                            </li>
                                            <li class="flex items-center mb-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 stroke-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span>Телефон подтвержден</span>
                                            </li>
                                            <li class="flex items-center mb-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 stroke-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span>Отклик отправлен</span>
                                            </li>
                                            <li class="flex justify-center w-1/2 items-center text-xs text-green-500 px-1 py-1 border border-green-500 rounded-md">
                                                Завершен
                                            </li>
                                        </ul>
                                    </div>
            
                                    <div class="text-right">
                                        <span class="text-gray-400 text-sm md:text-md mb-1 block">Создан: сегодня 11:55</span>
                                        <span class="font-medium text-blue-950 text-sm md:text-md mb-1 block">До 150 000 сум</span>

                                    </div>
                                </div>
                            </div>


                            <div class="bg-white rounded-md shadow-md shadow-primary/25 mb-3 py-4 px-6">
                                <div class="flex items-start flex-col md:flex-row justify-between">
                                    <div class="">
                                        <h2 class="text-2xl text-primary font-medium">
                                            Электрика. Монтаж проводки 
                                        </h2>
                                        <ul class="flex flex-col justify-between text-xs md:text-sm text-gray-400 mt-4">
                                            <li class="flex items-center mb-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 stroke-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                <span>02 дек 17:30-20:00...</span>
                                            </li>
                                            <li class="flex items-center mb-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 stroke-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                                <span>г. Ташкент, Чиланзар</span>
                                            </li>
                                            <li class="flex items-center mb-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 stroke-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span>Телефон подтвержден</span>
                                            </li>
                                            <li class="flex items-center mb-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 stroke-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span>Отклик отправлен</span>
                                            </li>
                                            <li class="flex justify-center w-1/2 items-center text-xs text-green-500 px-1 py-1 border border-green-500 rounded-md">
                                                Завершен
                                            </li>
                                        </ul>
                                    </div>
            
                                    <div class="text-right">
                                        <span class="text-gray-400 text-sm md:text-md mb-1 block">Создан: сегодня 11:55</span>
                                        <span class="font-medium text-blue-950 text-sm md:text-md mb-1 block">До 150 000 сум</span>

                                    </div>
                                </div>
                            </div>
            
            
                        </div>
                    </div>

                    <div v-show="activeTab == 'archive'">
                        <div class="">
                            <div class="bg-white rounded-md shadow-md shadow-primary/25 mb-3 py-4 px-6">
                                <div class="flex items-start flex-col md:flex-row justify-between">
                                    <div class="">
                                        <h2 class="text-2xl text-primary font-medium">
                                            Электрика. Монтаж проводки 
                                        </h2>
                                        <ul class="flex flex-col justify-between text-xs md:text-sm text-gray-400 mt-4">
                                            <li class="flex items-center mb-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 stroke-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                <span>02 дек 17:30-20:00...</span>
                                            </li>
                                            <li class="flex items-center mb-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 stroke-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                                <span>г. Ташкент, Чиланзар</span>
                                            </li>
                                            <li class="flex items-center mb-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 stroke-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span>Телефон подтвержден</span>
                                            </li>
                                            <li class="flex items-center mb-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 stroke-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span>Отклик отправлен</span>
                                            </li>
                                            <li class="flex justify-center w-1/2 items-center text-xs text-green-500 px-1 py-1 border border-green-500 rounded-md">
                                                Завершен
                                            </li>
                                        </ul>
                                    </div>
            
                                    <div class="text-right">
                                        <span class="text-gray-400 text-sm md:text-md mb-1 block">Создан: сегодня 11:55</span>
                                        <span class="font-medium text-blue-950 text-sm md:text-md mb-1 block">До 150 000 сум</span>

                                    </div>
                                </div>
                            </div>


                            <div class="bg-white rounded-md shadow-md shadow-primary/25 mb-3 py-4 px-6">
                                <div class="flex items-start flex-col md:flex-row justify-between">
                                    <div class="">
                                        <h2 class="text-2xl text-primary font-medium">
                                            Электрика. Монтаж проводки 
                                        </h2>
                                        <ul class="flex flex-col justify-between text-xs md:text-sm text-gray-400 mt-4">
                                            <li class="flex items-center mb-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 stroke-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                <span>02 дек 17:30-20:00...</span>
                                            </li>
                                            <li class="flex items-center mb-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 stroke-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                                <span>г. Ташкент, Чиланзар</span>
                                            </li>
                                            <li class="flex items-center mb-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 stroke-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span>Телефон подтвержден</span>
                                            </li>
                                            <li class="flex items-center mb-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 stroke-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span>Отклик отправлен</span>
                                            </li>
                                            <li class="flex justify-center w-1/2 items-center text-xs text-green-500 px-1 py-1 border border-green-500 rounded-md">
                                                Завершен
                                            </li>
                                        </ul>
                                    </div>
            
                                    <div class="text-right">
                                        <span class="text-gray-400 text-sm md:text-md mb-1 block">Создан: сегодня 11:55</span>
                                        <span class="font-medium text-blue-950 text-sm md:text-md mb-1 block">До 150 000 сум</span>

                                    </div>
                                </div>
                            </div>
            
            
                        </div>
                    </div>
               </div>
            </div>

            <div class="col-span-1">
                <div class="mb-4">

                    <div v-show="activeTab == 'new'" class="">

                        <div class="relative overflow-hidden bg-white rounded-md shadow-md shadow-primary/25 mb-3 py-4 px-6 ">
                            <div class="mb-4 flex items-center justify-between">
                                <h4 class="text-lg font-mediums">Бонусы:</h4>
                                <div class="flex items-center">
                                    <span class="mr-1">4 000</span>
                                    <img title="Work Coin" src="@/assets/images/coin.svg" class="w-5 cursor-help" alt="">
                                </div>   
                            </div>
                            <a href="#" class="mt-5 flex items-center text-blue-950">
                                <span class="text-sm md:text-md leading-none"> Потратить бонусы</span>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                </svg>
                            </a>
                            <img class="absolute w-20 h-16 -bottom-2 -right-2" src="@/assets/images/bonus.png" alt="">
                        </div>

                        <div class="bg-white rounded-md shadow-md shadow-primary/25 mb-3 py-4 px-6 flex items-center justify-between my-4">
                            <span class="text-sm md:text-md">Заказы на карте</span>
                            <a href="https://www.google.com/maps/">
                                <img src="@/assets/images/google-maps.png" class="" alt="">
                            </a>
                        </div>

                        <div class="bg-white rounded-md shadow-md shadow-primary/25 mb-3 py-4 px-6 ">
                            <div class="flex justify-between text-sm md:text-md">
                                <h3>Фильтр</h3>
                                <a class="text-blue-600" href="#">
                                    Сбросить
                                </a>
                            </div>
                            <div class="mt-4">
                                <div class="flex justify-between text-sm md:text-md">
                                    <h3>Город</h3>
                                    <a class="text-blue-600" href="#">Как в анкете</a>
                                </div>
                                <div class="mt-4">
                                    <a href="#" class="inline-block">
                                        <div class="flex items-center border-2 border:white hover:border-gray-200 bg-gray-200 hover:bg-white focus:text-gray-200  rounded-full py-1 px-4 text-center">
                                            <span class="mr-2 text-md md:text-xl font-bold text-blue-300">+</span>
                                            <span class="text-sm md:text-md">Добавить</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div class="mt-4">
                                <div>
                                    <h3 class="text-sm md:text-md">Район</h3>
                                </div>
                                <div class="mt-4">
                                    <a href="#" class="inline-block">
                                        <div class="flex items-center border-2 border:white hover:border-gray-200 bg-gray-200 hover:bg-white focus:text-gray-200  rounded-full py-1 px-4 text-center">
                                            <span class="mr-2 text-md md:text-xl font-bold text-blue-300">+</span>
                                            <span class="text-sm md:text-md">Добавить</span>
                                        </div>
                                    </a> 
                                </div>
                            </div>
                            <div class="mt-4">
                                <div>
                                    <h3 class="text-sm md:text-md">Вид работы</h3>
                                </div>
                                <div class="mt-4">
                                    <a href="#" class="inline-block">
                                        <div class="flex items-center border-2 border-white bg-gray-200 hover:bg-white hover:border-gray-200 rounded-full py-2 px-4 text-center">
                                            <span class="text-sm md:text-md">Монтаж и подключение</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div>
                                <div class="mt-4">
                                    <a href="#" class="inline-block">
                                        <div class="flex items-center border-2 border:white hover:border-gray-200 bg-gray-200 hover:bg-white focus:text-gray-200  rounded-full py-1 px-4 text-center">
                                            <span class="mr-2 text-md md:text-xl font-bold text-blue-300">+</span>
                                            <span class="text-sm md:text-md">Добавить</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <hr class="my-7">
                            <div class="flex ">
                                <a 
                                    class="bg-blue-800 transition-all duration-200 hover:bg-blue-950 font-medium py-2 px-5 rounded-full
                                            text-white text-xs  sm:text-sm md:text-md lg:text-lg" 
                                    href="#">
                                    Применить фильтр
                                </a>
                            </div>
        
                        </div>

                    </div>

                    <div v-show="activeTab == 'open'" class="">
                        <div>
                            <div class="relative overflow-hidden bg-white rounded-md shadow-md shadow-primary/25 mb-3 py-4 px-6">
                                <div class="mb-4 flex items-center justify-between">
                                    <h4 class="text-lg font-mediums">Бонусы:</h4>
                                    <div class="flex items-center">
                                        <span class="mr-1">4 000</span>
                                        <img title="Work Coin" src="@/assets/images/coin.svg" class="w-5 cursor-help" alt="">
                                    </div>   
                                </div>
                                <a href="#" class="mt-5 flex items-center text-blue-950">
                                    <span class="text-sm md:text-md leading-none"> Потратить бонусы</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                    </svg>
                                </a>
                                <img class="absolute w-20 h-16 -bottom-2 -right-2" src="@/assets/images/bonus.png" alt="">
                            </div>
                            <div class="bg-white p-4 rounded-md my-4">
                                <p class="text-sm md:text-md font-medium">
                                    В этом разделе заказы, на которые вы откликнулись или которые вам предложили клиенты
                                </p>
                                <a href="#" class="mt-5 flex items-center text-blue-950">
                                    <span class="text-sm md:text-md leading-none">Подробнее</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                    </svg>
                                </a>
                            </div>

                   

                            <div class="bg-white p-4 rounded-md">
                                <h3 class="text-sm md:text-md font-medium my-2">Администрация</h3>
                                <h3 class="text-sm md:text-md font-medium my-2">Безопасный платеж</h3>
                            </div>

                            <div class="my-4">
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
                                            @swiper="onSwiper"
                                            @slideChange="onSlideChange"
                                        >
                                            <swiper-slide>
                                                <img class="w-full h-44 rounded-md" src="@/assets/images/el-banner1.jpg" alt="" />
                                            </swiper-slide>
                                            <swiper-slide>
                                                <img class="w-full h-44 rounded-md" src="@/assets/images/el-banner6.jpg" alt="" />
                                            </swiper-slide>
                                            <swiper-slide>
                                                <img class="w-full h-44 rounded-md" src="@/assets/images/el-banner5.jpg" alt="" />
                                            </swiper-slide>
                                        </swiper>                                                
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div v-show="activeTab == 'inWork'" class="">
                        <div>
                        <div>
                            <div class="relative overflow-hidden bg-white p-4 rounded-md">
                                <div class="mb-4 flex items-center justify-between">
                                    <h4 class="text-lg font-mediums">Бонусы:</h4>
                                    <div class="flex items-center">
                                        <span class="mr-1">4 000</span>
                                        <img title="Work Coin" src="@/assets/images/coin.svg" class="w-5 cursor-help" alt="">
                                    </div>   
                                </div>
                                <a href="#" class="mt-5 flex items-center text-blue-950">
                                    <span class="text-sm md:text-md leading-none"> Потратить бонусы</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                    </svg>
                                </a>
                                <img class="absolute w-20 h-16 -bottom-2 -right-2" src="@/assets/images/bonus.png" alt="">
                            </div>
                            <div class="bg-white p-4 rounded-md my-4">
                                <p class="text-sm md:text-md font-medium">
                                    В этом разделе заказы, на которые вы откликнулись или которые вам предложили клиенты
                                </p>
                                <a href="#" class="mt-5 flex items-center text-blue-950">
                                    <span class="text-sm md:text-md leading-none">Подробнее</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                    </svg>
                                </a>
                            </div>

                   

                            <div class="bg-white p-4 rounded-md">
                                <h3 class="text-sm md:text-md font-medium my-2">Администрация</h3>
                                <h3 class="text-sm md:text-md font-medium my-2">Безопасный платеж</h3>
                            </div>

                            <div class="my-4">
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
                                            @swiper="onSwiper"
                                            @slideChange="onSlideChange"
                                        >
                                            <swiper-slide>
                                                <img class="w-full h-44 rounded-md" src="@/assets/images/el-banner1.jpg" alt="" />
                                            </swiper-slide>
                                            <swiper-slide>
                                                <img class="w-full h-44 rounded-md" src="@/assets/images/el-banner6.jpg" alt="" />
                                            </swiper-slide>
                                            <swiper-slide>
                                                <img class="w-full h-44 rounded-md" src="@/assets/images/el-banner5.jpg" alt="" />
                                            </swiper-slide>
                                        </swiper>                                                
                                    </div>
                                </div>
                            </div>

                        </div>

                        </div>
                    </div>

                    <div v-show="activeTab == 'completed'" class="">
                                                <div>
                            <div class="relative overflow-hidden bg-white p-4 rounded-md">
                                <div class="mb-4 flex items-center justify-between">
                                    <h4 class="text-lg font-mediums">Бонусы:</h4>
                                    <div class="flex items-center">
                                        <span class="mr-1">4 000</span>
                                        <img title="Work Coin" src="@/assets/images/coin.svg" class="w-5 cursor-help" alt="">
                                    </div>   
                                </div>
                                <a href="#" class="mt-5 flex items-center text-blue-950">
                                    <span class="text-sm md:text-md leading-none"> Потратить бонусы</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                    </svg>
                                </a>
                                <img class="absolute w-20 h-16 -bottom-2 -right-2" src="@/assets/images/bonus.png" alt="">
                            </div>
                            <div class="bg-white p-4 rounded-md my-4">
                                <p class="text-sm md:text-md font-medium">
                                    В этом разделе заказы, на которые вы откликнулись или которые вам предложили клиенты
                                </p>
                                <a href="#" class="mt-5 flex items-center text-blue-950">
                                    <span class="text-sm md:text-md leading-none">Подробнее</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                    </svg>
                                </a>
                            </div>

                   

                            <div class="bg-white p-4 rounded-md">
                                <h3 class="text-sm md:text-md font-medium my-2">Администрация</h3>
                                <h3 class="text-sm md:text-md font-medium my-2">Безопасный платеж</h3>
                            </div>

                            <div class="my-4">
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
                                            @swiper="onSwiper"
                                            @slideChange="onSlideChange"
                                        >
                                            <swiper-slide>
                                                <img class="w-full h-44 rounded-md" src="@/assets/images/el-banner1.jpg" alt="" />
                                            </swiper-slide>
                                            <swiper-slide>
                                                <img class="w-full h-44 rounded-md" src="@/assets/images/el-banner6.jpg" alt="" />
                                            </swiper-slide>
                                            <swiper-slide>
                                                <img class="w-full h-44 rounded-md" src="@/assets/images/el-banner5.jpg" alt="" />
                                            </swiper-slide>
                                        </swiper>                                                
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div v-show="activeTab == 'archive'" class="">
                                                <div>
                            <div class="relative overflow-hidden bg-white p-4 rounded-md">
                                <div class="mb-4 flex items-center justify-between">
                                    <h4 class="text-lg font-mediums">Бонусы:</h4>
                                    <div class="flex items-center">
                                        <span class="mr-1">4 000</span>
                                        <img title="Work Coin" src="@/assets/images/coin.svg" class="w-5 cursor-help" alt="">
                                    </div>   
                                </div>
                                <a href="#" class="mt-5 flex items-center text-blue-950">
                                    <span class="text-sm md:text-md leading-none"> Потратить бонусы</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                    </svg>
                                </a>
                                <img class="absolute w-20 h-16 -bottom-2 -right-2" src="@/assets/images/bonus.png" alt="">
                            </div>
                            <div class="bg-white p-4 rounded-md my-4">
                                <p class="text-sm md:text-md font-medium">
                                    В этом разделе заказы, на которые вы откликнулись или которые вам предложили клиенты
                                </p>
                                <a href="#" class="mt-5 flex items-center text-blue-950">
                                    <span class="text-sm md:text-md leading-none">Подробнее</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                    </svg>
                                </a>
                            </div>

                   

                            <div class="bg-white p-4 rounded-md">
                                <h3 class="text-sm md:text-md font-medium my-2">Администрация</h3>
                                <h3 class="text-sm md:text-md font-medium my-2">Безопасный платеж</h3>
                            </div>

                            <div class="my-4">
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
                                            @swiper="onSwiper"
                                            @slideChange="onSlideChange"
                                        >
                                            <swiper-slide>
                                                <img class="w-full h-44 rounded-md" src="@/assets/images/el-banner1.jpg" alt="" />
                                            </swiper-slide>
                                            <swiper-slide>
                                                <img class="w-full h-44 rounded-md" src="@/assets/images/el-banner6.jpg" alt="" />
                                            </swiper-slide>
                                            <swiper-slide>
                                                <img class="w-full h-44 rounded-md" src="@/assets/images/el-banner5.jpg" alt="" />
                                            </swiper-slide>
                                        </swiper>                                                
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

</template>


<style>

</style>


<script setup>
import { ref } from "vue";
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

const onSwiper = (swiper) => {
    console.log(swiper);
};
const onSlideChange = () => {
    console.log("slide change");
};
const activeTab = ref("new");
</script>