<template>
    <div class="grid scroll-smooth lg:grid-cols-5 lg:gap-4 container mx-auto p-4 py-5 2xl:px-20">
        <div class="sticky  top-[5.25rem] bg-white p-4 py-5 mb-4
                    rounded-md z-10 shadow-md shadow-primary/25
                    lg:col-span-1 lg:p-0 lg:py-0 lg:mb-0 lg:bg-transparent lg:shadow-none">
            <div class="lg:sticky top-[7.25rem]">
                <ul class="flex flex-row lg:flex-col gap-3">
                    <li
                        class="
                            px-4
                            py-2
                            text-md text-primary
                            font-medium
                            cursor-pointer
                            rounded-md
                            transition-all
                            duration-300
                            hover:shadow-md
                            hover:shadow-primary/25
                            hover:bg-primary/40
                            hover:text-white
                        "
                        @click="Active = item.message"
                        :class="{
                            '!bg-primary': Active == item.message,
                            'text-white': Active == item.message,
                            'shadow-md': Active == item.message,
                            'shadow-primary/25': Active == item.message,
                        }"
                        v-for="item in items"
                        :key="item"
                        
                    >
                        <a href="#">
                            {{ item.message }}
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="col-span-4">
            <account-section class="mb-3" anchor="">
                <template #header>
                    <h2 class="text-2xl text-primary font-medium">Профиль</h2>
                    <p class="text-gray-500">
                        Так пользователи видят ваш профиль
                    </p>
                </template>
                <template #default>
                    <div class="flex flex-col md:flex-row">
                        <div class="rounded-full mx-auto md:mx-0">
                            <img
                                src="../assets/images/user.png"
                                class="
                                    w-32
                                    h-32
                                    scale-75
                                    hover:scale-100
                                    transition-all
                                    duration-200
                                "
                            />
                        </div>
                        <div
                            class="
                                flex flex-col
                                p-1
                                text-center
                                md:text-left
                                mx-auto
                                md:mx-0
                            "
                        >
                            <div class="text-orange-500 font-medium">
                                Заказчик
                            </div>
                            <h2 class="text-xl font-medium mb-2">
                                Sasha Raimov Doniyorovich
                            </h2>
                            <div class="text-green-600 leading-none mb-2">
                                <span
                                    class="
                                        w-2.5
                                        h-2.5
                                        rounded-full
                                        bg-green-600
                                        inline-block
                                    "
                                ></span>
                                Онлайн
                            </div>
                            <div class="mb-2">
                                <div
                                    class="
                                        p-1
                                        px-3
                                        rounded-full
                                        text-white
                                        bg-green-600
                                        inline-block
                                        leading-none
                                    "
                                >
                                    <svg
                                        class="w-5 h-5 inline-block"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M5 13l4 4L19 7"
                                        ></path></svg
                                    >Паспорт проверен
                                </div>
                            </div>
                        </div>
                    </div>
                </template>
                <template #footer>
                    <div
                        class="
                            gap-4
                            flex flex-wrap
                            justify-center
                            md:justify-start
                        "
                    >
                        <div class="">
                            <span>
                                <svg
                                    class="w-5 h-5 inline -mt-0.5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                                    ></path>
                                </svg>
                            </span>
                            <span> 55 Отзывов </span>
                        </div>
                        <div class="">
                            <span>
                                <svg
                                    class="w-5 h-5 inline text-yellow-400"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                                    ></path>
                                </svg>
                            </span>
                            <span> средняя оценка: 4.7 </span>
                        </div>
                        <!-- Данные пользователя проверены специалистами WorkBase -->
                    </div>
                </template>
            </account-section>
            <account-detail class="mb-3"></account-detail>
            <account-about class="mb-3"></account-about>
            <account-locations class="mb-3"></account-locations>
            <account-specialties class="mb-3"></account-specialties>
            <account-certificates class="mb-3"></account-certificates>
            <account-works class="mb-3"></account-works>
            <account-fileUpload class="mb-3"></account-fileUpload>
        </div>
    </div>
    <!-- <section class="bg-gray-100">
        <div class="container mx-auto px-2 md:px-4 2xl:px-20 py-2 md:py-4">
            <div class="flex text-gray-400">
                <div
                    class="
                        text-xs
                        cursor-pointer
                        sm:text-sm
                        md:text-md
                        lg:text-lg
                        py-2
                        px-4
                        rounded-md
                        mr-3
                        border
                        hover:border-orange-400 hover:text-orange-400
                    "
                    :class="{
                        'border-orange-400 bg-orange-400 text-white hover:text-white':
                            activeTab == 'anketa',
                    }"
                    @click="activeTab = 'anketa'"
                >
                    Анкета
                </div>

                <div
                    class="
                        text-xs
                        cursor-pointer
                        sm:text-sm
                        md:text-md
                        lg:text-lg
                        py-2
                        px-4
                        rounded-md
                        border
                        hover:border-orange-400 hover:text-orange-400
                    "
                    :class="{
                        'border-orange-400 bg-orange-400 text-white hover:text-white':
                            activeTab == 'settings',
                    }"
                    @click="activeTab = 'settings'"
                >
                    Настройки
                </div>
            </div>

            <div class="" v-show="activeTab == 'anketa'">
                <div class="md:flex">
                    <div
                        class="
                            p-5
                            md:p-6
                            lg:p-10
                            mt-4
                            mr-2
                            bg-white
                            rounded-md
                            lg:w-80
                        "
                    >
                        <div class="relative mt-3 mx-auto w-28 h-28">
                            <img
                                class="rounded-full w-28 h-28"
                                src="../assets/images/user.png"
                                alt=""
                            />
                            <div
                                class="
                                    absolute
                                    right-0
                                    bottom-3
                                    bg-white
                                    border border-blue-500
                                    text-blue-500
                                    rounded-full
                                    text-center
                                    w-7
                                    h-7
                                    flex
                                    justify-center
                                    cursor-pointer
                                    justify-items-center
                                "
                            >
                                <label
                                    class="m-auto w-full cursor-pointer"
                                    for="Avater"
                                >
                                    <input id="Avater" type="file" hidden />
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="#1e40af"
                                        class="m-auto w-4 h-4"
                                        viewBox="0 0 60 60"
                                    >
                                        <g>
                                            <path
                                                d="M55.201,15.5h-8.524l-4-10H17.323l-4,10H12v-5H6v5H4.799C2.152,15.5,0,17.652,0,20.299v29.368
                                                C0,52.332,2.168,54.5,4.833,54.5h50.334c2.665,0,4.833-2.168,4.833-4.833V20.299C60,17.652,57.848,15.5,55.201,15.5z M8,12.5h2v3H8
                                                V12.5z M58,49.667c0,1.563-1.271,2.833-2.833,2.833H4.833C3.271,52.5,2,51.229,2,49.667V20.299C2,18.756,3.256,17.5,4.799,17.5H6h6
                                                h2.677l4-10h22.646l4,10h9.878c1.543,0,2.799,1.256,2.799,2.799V49.667z"
                                            />
                                            <path
                                                d="M30,14.5c-9.925,0-18,8.075-18,18s8.075,18,18,18s18-8.075,18-18S39.925,14.5,30,14.5z M30,48.5c-8.822,0-16-7.178-16-16
                                                s7.178-16,16-16s16,7.178,16,16S38.822,48.5,30,48.5z"
                                            />
                                            <path
                                                d="M30,20.5c-6.617,0-12,5.383-12,12s5.383,12,12,12s12-5.383,12-12S36.617,20.5,30,20.5z M30,42.5c-5.514,0-10-4.486-10-10
                                                s4.486-10,10-10s10,4.486,10,10S35.514,42.5,30,42.5z"
                                            />
                                            <path
                                                d="M52,19.5c-2.206,0-4,1.794-4,4s1.794,4,4,4s4-1.794,4-4S54.206,19.5,52,19.5z M52,25.5c-1.103,0-2-0.897-2-2s0.897-2,2-2
                                                s2,0.897,2,2S53.103,25.5,52,25.5z"
                                            />
                                        </g>
                                    </svg>
                                </label>
                            </div>
                        </div>
                        <div class="text-center mt-4 font-medium">
                            <span
                                class="text-xs sm:text-sm md:text-md lg:text-lg"
                                >Женя</span
                            >
                        </div>
                        <div class="grid grid-cols-2 text-center mt-4">
                            <div
                                class="
                                    border-r-gray-500 border-r-2 border-dashed
                                    pr-2
                                "
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="#FFA500"
                                    viewBox="0 0 100 19.91"
                                >
                                    <g>
                                        <polygon
                                            points="12.33,7.61 9.98,0 7.62,7.61 0,7.61 6.17,12.31 3.81,19.91 9.98,15.21 16.15,19.91 13.79,12.31 19.96,7.61 "
                                        />
                                        <polygon
                                            points="32.35,7.61 29.99,0 27.63,7.61 20.01,7.61 26.18,12.31 23.82,19.91 29.99,15.21 36.16,19.91 33.8,12.31 39.97,7.61 "
                                        />
                                        <polygon
                                            points="52.36,7.61 50,0 47.64,7.61 40.02,7.61 46.19,12.31 43.83,19.91 50,15.21 56.17,19.91 53.81,12.31 59.98,7.61 "
                                        />
                                        <polygon
                                            points="72.37,7.61 70.01,0 67.65,7.61 60.03,7.61 66.2,12.31 63.84,19.91 70.01,15.21 76.18,19.91 73.82,12.31 79.99,7.61 "
                                        />
                                        <polygon
                                            points="90.02,0 87.67,7.61 80.04,7.61 86.21,12.31 83.85,19.91 90.02,15.21 96.19,19.91 93.83,12.31 100,7.61 92.38,7.61 "
                                        />
                                    </g>
                                </svg>
                                <p
                                    class="
                                        text-xs
                                        sm:text-sm
                                        md:text-md
                                        lg:text-lg
                                    "
                                >
                                    10 из 10
                                </p>
                            </div>
                            <div class="pl-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="m-auto"
                                    height="15.88px"
                                    fill="#FFA500"
                                    viewBox="0 0 25 19.91"
                                >
                                    <g>
                                        <path
                                            class="fil0"
                                            d="M23.92 19c-0.72,-0.28 -1.35,-0.77 -1.8,-1.4 1.77,-1.2 2.88,-2.91 2.88,-4.82 0,-2.08 -1.33,-3.94 -3.4,-5.14 -0.22,5.05 -5.58,8.65 -11.61,8.65 -0.51,0 -1.01,-0.02 -1.51,-0.07 1.57,1.87 4.39,3.11 7.6,3.11 1.17,0 2.29,-0.16 3.31,-0.47 0.92,0.86 2.23,1.28 3.55,1.01 0.35,-0.08 0.69,-0.19 1,-0.35 0.1,-0.05 0.16,-0.15 0.15,-0.27 0,-0.11 -0.07,-0.2 -0.17,-0.25z"
                                        />
                                        <path
                                            class="fil0"
                                            d="M19.98 7.33c0,-4.05 -4.47,-7.33 -9.99,-7.33 -5.52,0 -9.99,3.28 -9.99,7.33 0,2.13 1.24,4.05 3.22,5.39 -0.52,0.73 -1.24,1.29 -2.07,1.6 -0.11,0.04 -0.18,0.14 -0.18,0.25 -0.01,0.11 0.05,0.21 0.15,0.27 0.64,0.34 1.37,0.51 2.09,0.51 1.16,0 2.25,-0.45 3.07,-1.21 1.15,0.34 2.4,0.52 3.71,0.52 5.52,0 9.99,-3.28 9.99,-7.33z"
                                        />
                                    </g>
                                </svg>
                                <p
                                    class="
                                        text-xs
                                        sm:text-sm
                                        md:text-md
                                        lg:text-lg
                                    "
                                >
                                    20
                                </p>
                            </div>
                        </div>
                    </div>
                    <account-detail></account-detail>
                </div>

                <div class="p-5 md:p-6 lg:p-10 mt-4 bg-white rounded-md">
                    <div class="flex justify-between items-center">
                        <span
                            class="
                                text-xs
                                sm:text-sm
                                md:text-md
                                lg:text-lg
                                font-medium
                            "
                            >О себе:</span
                        >
                        <a
                            class="
                                rounded-md
                                bg-blue-950
                                text-center
                                w-8
                                h-8
                                flex
                                items-center
                                border border-white
                                cursor-pointer
                                hover:border-blue-700 hover:bg-blue-700
                                transition-all
                                duration-500
                            "
                            href="#"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-5 text-white m-auto w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                                />
                            </svg>
                        </a>
                    </div>

                    <div
                        class="
                            flex flex-col
                            md:flex-row
                            py-4
                            text-center
                            md:text-left md:justify-between
                            border-b
                        "
                    >
                        <div class="">
                            <span
                                class="
                                    text-xs
                                    sm:text-sm
                                    md:text-md
                                    lg:text-lg
                                    font-medium
                                    text-gray-400
                                "
                                >Образование:</span
                            >
                        </div>
                        <div class="">
                            <span
                                class="text-xs sm:text-sm md:text-md lg:text-lg"
                                >Высшее</span
                            >

                           <span class="text-xs sm:text-sm md:text-md lg:text-lg">Не указано</span>
                        </div>
                    </div>

                    <div
                        class="
                            flex flex-col
                            md:flex-row
                            py-4
                            text-center
                            md:text-left md:justify-between
                            border-b
                        "
                    >
                        <div class="">
                            <span
                                class="
                                    text-xs
                                    sm:text-sm
                                    md:text-md
                                    lg:text-lg
                                    font-medium
                                    text-gray-400
                                "
                                >Род деятельности:</span
                            >
                        </div>
                        <div class="">
                            <span
                                class="text-xs sm:text-sm md:text-md lg:text-lg"
                                >Предприниматель</span
                            >
                        </div>
                    </div>

                    <div
                        class="
                            flex flex-col
                            md:flex-row
                            py-4
                            text-center
                            md:text-left md:justify-between
                            border-b
                        "
                    >
                        <div class="">
                            <span
                                class="
                                    text-xs
                                    sm:text-sm
                                    md:text-md
                                    lg:text-lg
                                    font-medium
                                    text-gray-400
                                "
                                >Проверить ИНН:</span
                            >
                        </div>
                        <div class="">
                            <span class="text-xs sm:text-sm md:text-md lg:text-lg">3664069397</span>
                                <div class="md:inline-block">
                                    <a class=" bg-blue-100 rounded-md px-3 py-1 text-xs sm:text-sm md:text-md lg:text-lg ml-4 text-blue-400 hover:bg-blue-400 hover:text-blue-100 transition-all duration-500" href="#">Пройти сертификацию</a>
                                </div>
                            <span
                                class="text-xs sm:text-sm md:text-md lg:text-lg"
                                >Через
                            </span>
                            <a
                                class="
                                    text-blue-500
                                    decoration-500
                                    hover:underline-offset-4
                                    transition-all
                                    duration-500
                                "
                                href="#"
                                >Soliq.uz</a
                            >
                        </div>
                    </div>

                    <div
                        class="
                            flex flex-col
                            md:flex-row
                            py-4
                            text-center
                            md:text-left md:justify-between
                            border-b
                        "
                    >
                        <div class="">
                            <span
                                class="
                                    text-xs
                                    sm:text-sm
                                    md:text-md
                                    lg:text-lg
                                    font-medium
                                    text-gray-400
                                "
                                >Загрузите ваш паспорт:</span
                            >
                        </div>
                        <div
                            class="
                                flex flex-col
                                md:flex-row
                                text-center
                                md:text-left
                                justify-items-center
                                items-center
                            "
                        >
                            <div
                                class="
                                    rounded-md
                                    border border-blue-900
                                    my-3
                                    inline-block
                                    px-4
                                    py-5
                                    text-center
                                "
                            >
                                <div class="text-3xl">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="#1e40af"
                                        class="m-auto w-10 h-10 mb-3"
                                        viewBox="0 0 60 60"
                                    >
                                        <g>
                                            <path
                                                d="M55.201,15.5h-8.524l-4-10H17.323l-4,10H12v-5H6v5H4.799C2.152,15.5,0,17.652,0,20.299v29.368
                                                    C0,52.332,2.168,54.5,4.833,54.5h50.334c2.665,0,4.833-2.168,4.833-4.833V20.299C60,17.652,57.848,15.5,55.201,15.5z M8,12.5h2v3H8
                                                    V12.5z M58,49.667c0,1.563-1.271,2.833-2.833,2.833H4.833C3.271,52.5,2,51.229,2,49.667V20.299C2,18.756,3.256,17.5,4.799,17.5H6h6
                                                    h2.677l4-10h22.646l4,10h9.878c1.543,0,2.799,1.256,2.799,2.799V49.667z"
                                            />
                                            <path
                                                d="M30,14.5c-9.925,0-18,8.075-18,18s8.075,18,18,18s18-8.075,18-18S39.925,14.5,30,14.5z M30,48.5c-8.822,0-16-7.178-16-16
                                                    s7.178-16,16-16s16,7.178,16,16S38.822,48.5,30,48.5z"
                                            />
                                            <path
                                                d="M30,20.5c-6.617,0-12,5.383-12,12s5.383,12,12,12s12-5.383,12-12S36.617,20.5,30,20.5z M30,42.5c-5.514,0-10-4.486-10-10
                                                    s4.486-10,10-10s10,4.486,10,10S35.514,42.5,30,42.5z"
                                            />
                                            <path
                                                d="M52,19.5c-2.206,0-4,1.794-4,4s1.794,4,4,4s4-1.794,4-4S54.206,19.5,52,19.5z M52,25.5c-1.103,0-2-0.897-2-2s0.897-2,2-2
                                                    s2,0.897,2,2S53.103,25.5,52,25.5z"
                                            />
                                        </g>
                                    </svg>
                                </div>
                                <a
                                    class="
                                        rounded-md
                                        px-3
                                        py-1
                                        text-xs
                                        sm:text-sm
                                        md:text-md
                                        lg:text-lg
                                        bg-blue-900
                                        text-blue-100
                                        transition-all
                                        duration-500
                                    "
                                    href="#"
                                    @click="showVerificationModal = true"
                                >
                                    Добавить
                                </a>
                            </div>
                             <span class="mx-auto">
                                    <a 
                                        class="bg-blue-100 rounded-md px-3 py-1 
                                        text-xs sm:text-sm md:text-md lg:text-lg 
                                        mx-4 text-blue-400 hover:bg-blue-400 hover:text-blue-100 transition-all duration-500" 
                                        href="#">
                                            Пройти сертификацию
                                    </a>
                                </span> 
                        </div>
                    </div>
                </div>
            </div>

            <div class="pb-80" v-show="activeTab == 'settings'">
                <div class="p-5 mt-4 mr-2 bg-white rounded-md">
                    <h5
                        class="
                            text-sm
                            md:text-md
                            lg:text-base
                            2xl:text-lg
                            font-semibold
                            mb-3
                        "
                    >
                        Заполненность анкеты
                    </h5>
                    <div class="md:w-1/2 w-full bg-gray-200 rounded-full mb-3">
                        <div
                            class="
                                bg-blue-600
                                text-xl
                                font-medium
                                text-blue-100 text-center
                                p-0.5
                                leading-none
                                rounded-full
                            "
                            style="width: 45%"
                        >
                            45%
                        </div>
                    </div>
                    <h5
                        class="
                            text-sm
                            md:text-md
                            lg:text-base
                            2xl:text-lg
                            font-semibold
                            mb-3
                        "
                    >
                        Общие настройки анкеты
                    </h5>
                    <table class="border-collapse border border-slate-500 mb-3">
                        <tbody>
                            <tr>
                                <td class="border border-slate-700 py-2 px-3">
                                    Брать новые заказы
                                </td>
                                <td class="border border-slate-700 py-2 px-3">
                                    <div class="m-auto">
                                        <input
                                            @click="
                                                (isActive = !isActive),
                                                    (repair = !repair)
                                            "
                                            id="checkToggle1"
                                            type="checkbox"
                                            hidden
                                        />
                                        <label
                                            for="checkToggle1"
                                            class="
                                                flex
                                                justify-center
                                                items-center
                                            "
                                        >
                                            <div
                                                class="
                                                    relative
                                                    w-10
                                                    rounded-full
                                                    h-6
                                                    bg-gray-300
                                                    cursor-pointer
                                                "
                                                :class="{
                                                    'bg-gray-300': !isActive,
                                                    'bg-blue-975': isActive,
                                                }"
                                            >
                                                <div
                                                    class="
                                                        absolute
                                                        rounded-full
                                                        h-4
                                                        w-4
                                                        bg-white
                                                    "
                                                    :class="{
                                                        'left-1 top-1':
                                                            !isActive,
                                                        'right-1 top-1':
                                                            isActive,
                                                    }"
                                                ></div>
                                            </div>
                                        </label>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td class="border border-slate-700 py-2 px-3">
                                    Получать предложения от клиентов (анкета
                                    видна на сайте)
                                </td>
                                <td class="border border-slate-700 py-2 px-3">
                                    <div
                                        class="m-auto"
                                        x-data="{isActive: false}"
                                    >
                                        <input
                                            @click="
                                                (isActive = !isActive),
                                                    (repair = !repair)
                                            "
                                            id="checkToggle2"
                                            type="checkbox"
                                            hidden
                                        />
                                        <label
                                            for="checkToggle2"
                                            class="
                                                flex
                                                justify-center
                                                items-center
                                            "
                                        >
                                            <div
                                                class="
                                                    relative
                                                    w-10
                                                    rounded-full
                                                    h-6
                                                    bg-gray-300
                                                    cursor-pointer
                                                "
                                                :class="{
                                                    'bg-gray-300': !isActive,
                                                    'bg-blue-975': isActive,
                                                }"
                                            >
                                                <div
                                                    class="
                                                        absolute
                                                        rounded-full
                                                        h-4
                                                        w-4
                                                        bg-white
                                                    "
                                                    :class="{
                                                        'left-1 top-1':
                                                            !isActive,
                                                        'right-1 top-1':
                                                            isActive,
                                                    }"
                                                ></div>
                                            </div>
                                        </label>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td class="border border-slate-700 py-2 px-3">
                                    Получать звонки АТС-робота с предложениями
                                    заказов
                                </td>
                                <td class="border border-slate-700 py-2 px-3">
                                    <div
                                        class="m-auto"
                                        x-data="{isActive: false}"
                                    >
                                        <input
                                            @click="
                                                (isActive = !isActive),
                                                    (repair = !repair)
                                            "
                                            id="checkToggle3"
                                            type="checkbox"
                                            hidden
                                        />
                                        <label
                                            for="checkToggle3"
                                            class="
                                                flex
                                                justify-center
                                                items-center
                                            "
                                        >
                                            <div
                                                class="
                                                    relative
                                                    w-10
                                                    rounded-full
                                                    h-6
                                                    bg-gray-300
                                                    cursor-pointer
                                                "
                                                :class="{
                                                    'bg-gray-300': !isActive,
                                                    'bg-blue-975': isActive,
                                                }"
                                            >
                                                <div
                                                    class="
                                                        absolute
                                                        rounded-full
                                                        h-4
                                                        w-4
                                                        bg-white
                                                    "
                                                    :class="{
                                                        'left-1 top-1':
                                                            !isActive,
                                                        'right-1 top-1':
                                                            isActive,
                                                    }"
                                                ></div>
                                            </div>
                                        </label>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td class="border border-slate-700 py-2 px-3">
                                    Опубликовать расписание на сайте
                                </td>
                                <td class="border border-slate-700 py-2 px-3">
                                    <div
                                        class="m-auto"
                                        x-data="{isActive: false}"
                                    >
                                        <input
                                            @click="
                                                (isActive = !isActive),
                                                    (repair = !repair)
                                            "
                                            id="checkToggle4"
                                            type="checkbox"
                                            hidden
                                        />
                                        <label
                                            for="checkToggle4"
                                            class="
                                                flex
                                                justify-center
                                                items-center
                                            "
                                        >
                                            <div
                                                class="
                                                    relative
                                                    w-10
                                                    rounded-full
                                                    h-6
                                                    bg-gray-300
                                                    cursor-pointer
                                                "
                                                :class="{
                                                    'bg-gray-300': !isActive,
                                                    'bg-blue-975': isActive,
                                                }"
                                            >
                                                <div
                                                    class="
                                                        absolute
                                                        rounded-full
                                                        h-4
                                                        w-4
                                                        bg-white
                                                    "
                                                    :class="{
                                                        'left-1 top-1':
                                                            !isActive,
                                                        'right-1 top-1':
                                                            isActive,
                                                    }"
                                                ></div>
                                            </div>
                                        </label>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <h5
                        class="
                            text-sm
                            md:text-md
                            lg:text-base
                            2xl:text-lg
                            font-semibold
                            mb-3
                        "
                    >
                        Изменить пароль
                    </h5>
                    <div class="">
                        <h5
                            class="
                                text-sm
                                md:text-md
                                lg:text-base
                                2xl:text-lg
                                font-semibold
                                mb-3
                            "
                        >
                            <a href="" class="flex mb-2">
                                <svg
                                    class="w-8 h-8 mr-1"
                                    viewBox="0 0 32 32"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <rect height="1" width="12" x="10" y="29" />
                                    <rect height="1" width="12" x="10" y="2" />
                                    <rect height="1" width="9" x="13" y="20" />
                                    <rect height="1" width="2" x="10" y="20" />
                                    <rect height="1" width="9" x="13" y="23" />
                                    <rect height="1" width="2" x="10" y="23" />
                                    <rect
                                        height="1"
                                        transform="translate(9.5 41.5) rotate(-90)"
                                        width="20"
                                        x="15.5"
                                        y="15.5"
                                    />
                                    <path
                                        d="M22,2V3h2a1,1,0,0,1,1,1V6h1V4a2,2,0,0,0-2-2Z"
                                    />
                                    <rect
                                        height="1"
                                        transform="translate(-9.5 22.5) rotate(-90)"
                                        width="20"
                                        x="-3.5"
                                        y="15.5"
                                    />
                                    <path
                                        d="M10,2V3H8A1,1,0,0,0,7,4V6H6V4A2,2,0,0,1,8,2Z"
                                    />
                                    <path
                                        d="M22,30V29h2a1,1,0,0,0,1-1V26h1v2a2,2,0,0,1-2,2Z"
                                    />
                                    <path
                                        d="M10,30V29H8a1,1,0,0,1-1-1V26H6v2a2,2,0,0,0,2,2Z"
                                    />
                                    <path
                                        d="M20.67,15.2a5,5,0,0,0-9.34,0,4.46,4.46,0,0,0-.27,1.09,7.42,7.42,0,0,0,.94.64,3.8,3.8,0,0,1,.17-1.07,4,4,0,0,1,7.66,0A3.8,3.8,0,0,1,20,16.93a7.42,7.42,0,0,0,.94-.64A4.46,4.46,0,0,0,20.67,15.2Z"
                                    />
                                    <path
                                        d="M16,8a2,2,0,1,0,2,2A2,2,0,0,0,16,8Zm0,3a1,1,0,1,1,1-1A1,1,0,0,1,16,11Z"
                                    />
                                    <path
                                        d="M20.67,15.2a5,5,0,0,0-9.34,0,4.46,4.46,0,0,0-.27,1.09,7.42,7.42,0,0,0,.94.64,8,8,0,0,0,8,0,7.42,7.42,0,0,0,.94-.64A4.46,4.46,0,0,0,20.67,15.2ZM16,17a7,7,0,0,1-3.83-1.14,4,4,0,0,1,7.66,0A7,7,0,0,1,16,17Z"
                                    />
                                    <path
                                        d="M20.67,15.2a6,6,0,0,1-.84.66,4,4,0,0,0-7.66,0,6,6,0,0,1-.84-.66,5,5,0,0,1,9.34,0Z"
                                    />
                                </svg>
                                <span class="self-end"
                                    >Моя анкета на WorkBase.uz
                                </span>
                            </a>
                        </h5>
                        <h5
                            class="
                                text-sm
                                md:text-md
                                lg:text-base
                                2xl:text-lg
                                font-semibold
                                mb-3
                            "
                        >
                            <a href="" class="flex mb-2">
                                <svg
                                    class="w-8 h-8 mr-1"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M16.7928932,19.5 L14.1464466,16.8535534 C13.9511845,16.6582912 13.9511845,16.3417088 14.1464466,16.1464466 C14.3417088,15.9511845 14.6582912,15.9511845 14.8535534,16.1464466 L17.5,18.7928932 L20.1464466,16.1464466 C20.3417088,15.9511845 20.6582912,15.9511845 20.8535534,16.1464466 C21.0488155,16.3417088 21.0488155,16.6582912 20.8535534,16.8535534 L18.2071068,19.5 L20.8535534,22.1464466 C21.0488155,22.3417088 21.0488155,22.6582912 20.8535534,22.8535534 C20.6582912,23.0488155 20.3417088,23.0488155 20.1464466,22.8535534 L17.5,20.2071068 L14.8535534,22.8535534 C14.6582912,23.0488155 14.3417088,23.0488155 14.1464466,22.8535534 C13.9511845,22.6582912 13.9511845,22.3417088 14.1464466,22.1464466 L16.7928932,19.5 Z M14.0425135,13.5651442 C13.4188979,13.8445863 12.7275984,14 12,14 C11.2738711,14 10.5838946,13.8452135 9.96126583,13.5668358 L5.87929558,15.4222768 C5.34380416,15.665682 5,16.1996113 5,16.7878265 L5,17.5 C5,18.3284271 5.67157288,19 6.5,19 L11.5,19 C11.7761424,19 12,19.2238576 12,19.5 C12,19.7761424 11.7761424,20 11.5,20 L6.5,20 C5.11928813,20 4,18.8807119 4,17.5 L4,16.7878265 C4,15.8074678 4.57300693,14.9175857 5.46549264,14.5119103 L8.92215823,12.9406987 C7.75209123,12.0255364 7,10.6005984 7,9 C7,6.23857625 9.23857625,4 12,4 C14.7614237,4 17,6.23857625 17,9 C17,10.5929224 16.2551051,12.0118652 15.0946468,12.927497 L17.6966094,14.0402775 C17.9505071,14.1488619 18.0683068,14.4427117 17.9597225,14.6966094 C17.8511381,14.9505071 17.5572883,15.0683068 17.3033906,14.9597225 L14.0425135,13.5651442 L14.0425135,13.5651442 Z M12,13 C14.209139,13 16,11.209139 16,9 C16,6.790861 14.209139,5 12,5 C9.790861,5 8,6.790861 8,9 C8,11.209139 9.790861,13 12,13 Z"
                                    />
                                </svg>
                                <span class="self-end">Удалить</span>
                            </a>
                        </h5>
                        <h5
                            class="
                                text-sm
                                md:text-md
                                lg:text-base
                                2xl:text-lg
                                font-semibold
                                mb-3
                            "
                        >
                            <a href="" class="flex">
                                <svg
                                    class="w-8 h-8 mr-1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    x="0px"
                                    y="0px"
                                    viewBox="0 0 512 512"
                                >
                                    <g>
                                        <path
                                            d="M281.6,245.76c-11.29,0-20.48,9.185-20.48,20.48s9.19,20.48,20.48,20.48c11.29,0,20.48-9.185,20.48-20.48
                                                S292.89,245.76,281.6,245.76z"
                                        />
                                    </g>
                                    <g>
                                        <path
                                            d="M414.72,491.52V10.24c0-5.655-4.58-10.24-10.24-10.24H128v0.262c-2.237,0.003-4.445,0.476-6.25,1.868
                                                c-2.52,1.94-3.99,4.935-3.99,8.11v481.28H46.08V512H128c0.87,0,1.75-0.11,2.61-0.335l194.56-51.2
                                                c4.49-1.185,7.63-5.255,7.63-9.905V61.44c0-4.65-3.14-8.72-7.63-9.905L207.163,20.48H394.24v481.28
                                                c0,5.655,4.58,10.24,10.24,10.24h61.44v-20.48H414.72z M312.32,69.335v373.33l-174.08,45.81V23.525L312.32,69.335z"
                                        />
                                    </g>
                                </svg>
                                <span class="self-end">Выйти</span>
                            </a>
                        </h5>
                    </div>
                </div>
            </div>
        </div>
    </section> -->
    <c-modal v-model="showVerificationModal" v-slot="{ close }">
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
        <c-verification @successful="close"></c-verification>
    </c-modal>
</template>


<style>
</style>


<script setup>
import AccountSection from "@/components/account/account-section.vue";
import AccountDetail from "@/components/account/account-detail.vue";
import AccountAbout from "@/components/account/account-about.vue";
import AccountLocations from "@/components/account/account-locations.vue";
import AccountSpecialties from "@/components/account/account-specialties.vue";
import AccountCertificates from "@/components/account/account-certificates.vue";
import AccountWorks from "@/components/account/account-works.vue";
import AccountFileUpload from "@/components/account/account-fileUpload.vue";
import { ref } from "vue";
const Active = ref("Мой профиль");
const items = ref([
    { message: "Мой профиль" },
    { message: "Личные данные" },
    { message: "О себе" },
    { message: "Районы и адреса" },
    { message: "Специальности" },
]);
console.log(scroll);
</script>