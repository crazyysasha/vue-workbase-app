<script setup>
</script>
<template>
    <section class="bg-white relative py-12">
        <div class="mx-auto container px-4">
            <div class="md:grid grid-cols-3 container px-2 md:px-4 2xl:px-20 my-4">
                <div class="col-span-2">
                    <div class="bg-white rounded-md p-4 mx-1">
                        <div>
                            <h5 class="text-xs sm:text-sm md:text-md lg:text-lg font-semibold">Баланс: 100 000 сум</h5>
                        </div>
                        <div>
                            <div class="max-w-sm">
                                <form action="">
                                    <input name="number" class="my-3 h-8 sm:h-9 md:h-10 flex justify-items-center items-center 
                                        border border-gray-300 rounded-md py-2 px-3 
                                        text-gray-400 font-medium focus:outline-none
                                        w-full text-xs sm:text-sm md:text-md lg:text-lg" type="number" placeholder="Сумма">
                                    <div>
                                        <div class="my-3 h-8 sm:h-9 md:h-10 grid grid-cols-5 
                                            border border-gray-300 rounded-md px-3 relative
                                            w-full text-xs sm-text-sm md:text-md lg:text-lg">
                                            <div class="flex justify-between items-center justify-items-center col-span-4 md:col-span-3">
                                                <div>
                                                    <input type="checkbox" id="balance_check" x-model="cards" :value="1" hidden>
                                                    <label for="balance_check">
                                                        <div class="flex items-center text-center justify-center justify-items-centerr 
                                                        rounded-full bg-gray-300 w-3 h-3 sm:w-4 sm:h-4 md:h-5 md:w-5 cursor-pointer">
                                                            <div x-show="cards.includes('1')">
                                                                <div class="flex items-center text-center justify-center justify-items-center rounded-full bg-blue-950 w-3 h-3 sm:w-4 sm:h-4 md:h-5 md:w-5">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-2 h-2 sm:w-3 sm:h-3 md:h-4 md:w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                                                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </label>
                                                </div>
                                                <div class=" m-0 p-0">
                                                    <img class="w-9/12 md:w-full" src="http://api.workbase.uz/storage/app/media/visa.png" alt="">
                                                </div>
                                                <div class="">
                                                    <span>/</span>
                                                </div>
                                                <div>
                                                    <span class="font-bold text-xs sm:text-sm md:text-md lg:text-lg">* *</span>
                                                    <span class="hidden sm:inline-block font-bold text-xs sm:text-sm md:text-md lg:text-lg">* *</span>
                                                </div>
                                                <div class="">
                                                    <span> 6071</span>
                                                </div>
                                            </div>
                                            <div class="col-span-1 md:col-span-2 flex justify-end">
                                                <a class="my-auto" href="#">
                                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 sm:w-5 sm:h-5 md:h-6 md:w-6text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="my-3 h-8 sm:h-9 md:h-10 grid grid-cols-5 
                                            border border-gray-300 rounded-md px-3 relative
                                            w-full text-xs sm-text-sm md:text-md lg:text-lg">
                                            <div class="flex justify-between items-center justify-items-center col-span-4 md:col-span-3">
                                                <div>
                                                    <input type="checkbox" id="balance_check1" x-model="cards" :value="2" hidden>
                                                    <label for="balance_check1">
                                                        <div class="flex items-center text-center justify-center justify-items-centerr 
                                                        rounded-full bg-gray-300 w-3 h-3 sm:w-4 sm:h-4 md:h-5 md:w-5 cursor-pointer">
                                                            <div x-show="cards.includes('2')">
                                                                <div class="flex items-center text-center justify-center justify-items-center rounded-full bg-blue-950 w-3 h-3 sm:w-4 sm:h-4 md:h-5 md:w-5">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-2 h-2 sm:w-3 sm:h-3 md:h-4 md:w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                                                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </label>
                                                </div>
                                                <div class=" m-0 p-0">
                                                    <img class="w-9/12 md:w-full" src="http://api.workbase.uz/storage/app/media/visa.png" alt="">
                                                </div>
                                                <div class="">
                                                    <span>/</span>
                                                </div>
                                                <div>
                                                    <span class="font-bold text-xs sm:text-sm md:text-md lg:text-lg">* *</span>
                                                    <span class="hidden sm:inline-block font-bold text-xs sm:text-sm md:text-md lg:text-lg">* *</span>
                                                </div>
                                                <div class="">
                                                    <span> 6071</span>
                                                </div>
                                            </div>
                                            <div class="col-span-1 md:col-span-2 flex justify-end">
                                                <a class="my-auto" href="#">
                                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 sm:w-5 sm:h-5 md:h-6 md:w-6text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                        <a class="my-3 h-8 sm:h-9 md:h-10 flex justify-items-center justify-center items-center border border-gray-300 rounded-md px-3 relative w-full text-xs sm:text-sm md:text-md lg:text-lg" href="#">
                                            <span class="leading-none font-bold text-gray-300 text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl mr-3">+</span>
                                            <span class="text-gray-300">Добавить карту</span>
                                        </a>
                                        <a class="mt-5 w-full flex h-8 sm:h-9 md:h-10 text-white justify-center items-center bg-blue-975 transition-all duration-300 hover:bg-blue-950 font-medium rounded-full" href="#">
                                            <span class="text-xs sm:text-sm  md:text-md text-center lg:text-lg">Пополнить баланс</span>
                                        </a>
                                    </div>
                                </form>
                            </div>
                            <div class="md:w-1/2 mt-10 text-xs sm:text-sm md:text-md lg:text-lg">
                                <span>*Копия чека будет направлена на ваш
                                    мобильный номер и e-mail адрес.</span>
                            </div>
                            <div class="mt-10">
                                <span class="mx-3 font-medium text-xs sm:text-sm md:text-md lg:text-lg">Способы оплаты:</span>
                                <div class="mt-5 flex flex-wrap justify-center md:justify-start justify-items-center items-center">
                                    <div class="flex bg-blue-100 rounded-lg mx-3 my-1 justify-items-center items-center p-3 h-8 sm:h-10 md:h-11 lg:h-14 "><img class="w-10 sm:w-14 md:w-20" src="http://api.workbase.uz/storage/app/media/visabig.png" alt=""></div>
                                    <div class="flex bg-blue-100 rounded-lg mx-3 my-1 justify-items-center items-center p-3 h-8 sm:h-10 md:h-11 lg:h-14 "><img class="w-10 sm:w-14 md:w-20" src="http://api.workbase.uz/storage/app/media/payme.png" alt=""></div>
                                    <div class="flex bg-blue-100 rounded-lg mx-3 my-1 justify-items-center items-center p-3 h-8 sm:h-10 md:h-11 lg:h-14 "><img class="w-10 sm:w-14 md:w-20" src="http://api.workbase.uz/storage/app/media/click.png" alt=""></div>
                                    <div class="flex bg-blue-100 rounded-lg mx-3 my-1 justify-items-center items-center p-3 h-8 sm:h-10 md:h-11 lg:h-14 "><img class="w-10 sm:w-14 md:w-20" src="http://api.workbase.uz/storage/app/media/uzkartbig.png" alt=""></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-span-1">
                    <div class="bg-white rounded-md p-4 mx-1">
                        <h4 class="font-bold text-xs sm:text-sm md:text-md ">Дополнительно</h4>
                        <ul class="mt-5 text-xs sm:text-sm md:text-md ">
                            <li class="mt-3"><span>История транзакций</span></li>
                            <li class="mt-3"><span>Отчет об оказанных услугах</span></li>
                            <li class="mt-3"><span>Часто задаваемые вопросы по оплате</span></li>
                        </ul>
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
            <div class="m-auto text-center max-w-[60%]">
                Cервис работает бесплатно! <br> В скором времени для пользоваителй WorkBase будет доступна функция <b> "Безопасный плтаеж"</b> следите за новостями в наших соц сетях.
            </div>
        </div>
    </section>
</template>
