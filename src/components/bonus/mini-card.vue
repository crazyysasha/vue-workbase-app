<template>
    <div
        class="
            relative
            overflow-hidden
            bg-white
            rounded-md
            shadow-md shadow-primary/25
            mb-3
            py-4
            px-6
        "
    >
        <div class="mb-4 flex items-center justify-between">
            <h4 class="text-lg font-mediums">Бонусы:</h4>
            <div class="flex items-center">
                <span class="mr-1">4 000</span>
                <img
                    title="Work Coin"
                    src="@/assets/images/coin.svg"
                    class="w-5 cursor-help"
                    alt=""
                />
            </div>
        </div>
        <a href="#" class="mt-5 flex items-center text-blue-950">
            <span class="text-sm md:text-md leading-none">
                Потратить бонусы</span
            >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                ></path>
            </svg>
        </a>
        <img
            class="absolute w-20 h-16 -bottom-2 -right-2"
            src="@/assets/images/bonus.png"
            alt=""
        />
    </div>
</template>