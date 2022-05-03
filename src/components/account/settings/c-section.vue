<template>
    <section
        class="
            bg-white
            rounded-md
            shadow-md shadow-primary/25
            relative
            overflow-hidden
        "
    >
        <div class="p-4">
            <div class="">
                <h2 class="font-medium text-2xl text-primary">Настройки</h2>
                <p class="text-gray-500">Управляйте своим профилем прямо тут</p>
            </div>
            <div class="flex flex-wrap gap-4 mt-5">
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
                                                    bg-blue-975
                                                "
                                            >
                                                <div
                                                    class="
                                                        absolute
                                                        rounded-full
                                                        h-4
                                                        w-4
                                                        bg-white
                                                        right-1
                                                        top-1
                                                    "
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
                                                    bg-blue-975
                                                "
                                            >
                                                <div
                                                    class="
                                                        absolute
                                                        rounded-full
                                                        h-4
                                                        w-4
                                                        bg-white
                                                        right-1
                                                        top-1
                                                    "
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
                                                    bg-blue-975
                                                "
                                            >
                                                <div
                                                    class="
                                                        absolute
                                                        rounded-full
                                                        h-4
                                                        w-4
                                                        bg-white
                                                        right-1
                                                        top-1
                                                    "
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
                                    <div class="m-auto">
                                        <input
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
                                                    bg-blue-975
                                                "
                                            >
                                                <div
                                                    class="
                                                        absolute
                                                        rounded-full
                                                        h-4
                                                        w-4
                                                        bg-white
                                                        right-1
                                                        top-1
                                                    "
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
        <div
            class="
                absolute
                inset-0
                backdrop-blur-[2px]
                text-primary
                font-medium
                text-3xl
                flex
            "
        >
            <div class="m-auto max-w-lg text-center p-4">
                Данный функционал находится на стадии разработки
            </div>
        </div>
    </section>
</template>

<script setup>
</script>