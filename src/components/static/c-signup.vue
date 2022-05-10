<script setup>
</script>
<template>
    <section class="gradient-form bg-gray-200 flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
        <div class="xl:w-full">
            <div class="block bg-white shadow-lg rounded-lg h-full">
                <div class="lg:flex lg:flex-wrap g-0">
                    <div class="lg:w-6/12 px-4 md:px-0">
                        <div class="md:p-12 md:mx-6">
                            <div class="max-w-md w-full space-y-8 p-10 bg-white rounded-xl z-10">
                                <div class="text-center">
                                    <img class="mx-auto w-48 mb-2" src="http://api.workbase.uz/storage/app/media/logo-color.png" alt="logo" />
                                    <p class="mt-2 text-sm text-gray-600">Зарегистрируйтесь как специалист, заполнив форму:</p>
                                </div>

                                <form class="mt-8 space-y-6" action="#" method="POST">
                                    <input type="hidden" name="remember" value="true">
                                    <!-- <div class="relative">
                                        <label class="text-sm font-bold text-gray-700 tracking-wide">Фамилия</label>
                                        <input class=" w-full text-base py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" type="text" placeholder="Введите вашу Фамилию">
                                    </div> -->
                                    <div class="relative">
                                        <!-- <div class="absolute right-0 bottom-0 mb-2">
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                class="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                            </svg>
                                        </div> -->
                                        <label class="text-sm font-bold text-gray-700 tracking-wide">Имя</label>
                                        <input class=" w-full text-base py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" type="text" placeholder="Введите ваше имя">
                                    </div>
                                    <!-- <div class="relative">
                                        <label class="text-sm font-bold text-gray-700 tracking-wide">Очество</label>
                                        <input class=" w-full text-base py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" type="text" placeholder="Введите ваше Отчесвто">
                                    </div> -->
                                    <div class="relative">
                                        <label class="text-sm font-bold text-gray-700 tracking-wide">Телефон</label>
                                        <input class=" w-full text-base py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" type="tel" placeholder="Введите ваш номер телефона">
                                    </div>
                                    <div class="relative">
                                        <label class="text-sm font-bold text-gray-700 tracking-wide">Email</label>
                                        <input class=" w-full text-base py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" type="email" placeholder="Вветиде вашу почту">
                                    </div>
                                    <div class="mt-8 content-center">
                                        <label class="text-sm font-bold text-gray-700 tracking-wide">
                                            Пароль
                                        </label>
                                        <input class="w-full content-center text-base py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" type="password" placeholder="Создайте пароль">
                                    </div>
                                    <div class="mt-8 content-center">
                                        <label class="text-sm font-bold text-gray-700 tracking-wide">
                                            Подтверждение пароля
                                        </label>
                                        <input class="w-full content-center text-base py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" type="password" placeholder="Повторите пароль">
                                    </div>
                                    <!-- <div class="">
                                            <div class="text-sm">
                                                <a href="#" class="font-medium mb-2 text-indigo-500 hover:text-indigo-500">
                                                    Условия использования
                                                </a>
                                            </div>
                                            <div class="flex items-center">
                                                <input id="remember_me" name="remember_me" type="checkbox" class="h-4 w-4 bg-indigo-500 focus:ring-indigo-400 border-gray-300 rounded">
                                                <label for="remember_me" class="ml-2 block text-sm text-gray-900">
                                                    Соглашаюсь с условиями использования
                                                </label>
                                            </div>
                                        
                                    </div> -->
                                    <div>
                                        <button type="submit" class="w-full select-none text-white rounded-md px-4 py-2 transition-all duration-200 shadow-lg transform scale-100 bg-primary hover:bg-primary/80 disabled:bg-primary/50 shadow-primary/25 active:scale-95">
                                            <span class="flex items-center justify-center"> 
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                </svg>
                                                Зарегистрироваться
                                            </span>
                                        </button>
                                    </div>
                                    <div class="flex items-center justify-center space-x-2">
                                        <span class="h-px w-16 bg-gray-300"></span>
                                        <span class="text-gray-500 font-normal">или</span>
                                        <span class="h-px w-16 bg-gray-300"></span>
                                    </div>
                                    <div class="flex flex-row justify-center items-center space-x-3">
                                        <span class="w-11 h-11 items-center justify-center inline-flex rounded-full font-bold text-lg  text-white  bg-blue-900 hover:shadow-lg cursor-pointer transition ease-in duration-300">
                                            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 310 310" class="w-5 h-5 fill-white" xml:space="preserve">
                                                <g id="XMLID_834_">
                                                    <path id="XMLID_835_" d="M81.703,165.106h33.981V305c0,2.762,2.238,5,5,5h57.616c2.762,0,5-2.238,5-5V165.765h39.064
                                                    c2.54,0,4.677-1.906,4.967-4.429l5.933-51.502c0.163-1.417-0.286-2.836-1.234-3.899c-0.949-1.064-2.307-1.673-3.732-1.673h-44.996
                                                    V71.978c0-9.732,5.24-14.667,15.576-14.667c1.473,0,29.42,0,29.42,0c2.762,0,5-2.239,5-5V5.037c0-2.762-2.238-5-5-5h-40.545
                                                    C187.467,0.023,186.832,0,185.896,0c-7.035,0-31.488,1.381-50.804,19.151c-21.402,19.692-18.427,43.27-17.716,47.358v37.752H81.703
                                                    c-2.762,0-5,2.238-5,5v50.844C76.703,162.867,78.941,165.106,81.703,165.106z" />
                                                </g>
                                            </svg>
                                        </span>
                                        <span class="w-11 h-11 items-center justify-center inline-flex rounded-full font-bold text-lg  text-white bg-blue-600 hover:shadow-lg cursor-pointer transition ease-in duration-300">
                                            <svg class="w-5 h-5 fill-white" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M41.4193 7.30899C41.4193 7.30899 45.3046 5.79399 44.9808 9.47328C44.8729 10.9883 43.9016 16.2908 43.1461 22.0262L40.5559 39.0159C40.5559 39.0159 40.3401 41.5048 38.3974 41.9377C36.4547 42.3705 33.5408 40.4227 33.0011 39.9898C32.5694 39.6652 24.9068 34.7955 22.2086 32.4148C21.4531 31.7655 20.5897 30.4669 22.3165 28.9519L33.6487 18.1305C34.9438 16.8319 36.2389 13.8019 30.8426 17.4812L15.7331 27.7616C15.7331 27.7616 14.0063 28.8437 10.7686 27.8698L3.75342 25.7055C3.75342 25.7055 1.16321 24.0823 5.58815 22.459C16.3807 17.3729 29.6555 12.1786 41.4193 7.30899Z" />
                                            </svg>
                                        </span>
                                        <span class="w-11 h-11 items-center justify-center inline-flex rounded-full font-bold text-lg  text-white bg-blue-400 hover:shadow-lg cursor-pointer transition ease-in duration-300">
                                            <svg class="w-5 h-5 fill-white" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 304.36 304.36"  xml:space="preserve">
                                                <g id="XMLID_1_">
                                                    <path id="XMLID_807_" d="M261.945,175.576c10.096,9.857,20.752,19.131,29.807,29.982
                                                    c4,4.822,7.787,9.798,10.684,15.394c4.105,7.955,0.387,16.709-6.746,17.184l-44.34-0.02c-11.436,0.949-20.559-3.655-28.23-11.474
                                                    c-6.139-6.253-11.824-12.908-17.727-19.372c-2.42-2.642-4.953-5.128-7.979-7.093c-6.053-3.929-11.307-2.726-14.766,3.587
                                                    c-3.523,6.421-4.322,13.531-4.668,20.687c-0.475,10.441-3.631,13.186-14.119,13.664c-22.414,1.057-43.686-2.334-63.447-13.641
                                                    c-17.422-9.968-30.932-24.04-42.691-39.971C34.828,153.482,17.295,119.395,1.537,84.353C-2.01,76.458,0.584,72.22,9.295,72.07
                                                    c14.465-0.281,28.928-0.261,43.41-0.02c5.879,0.086,9.771,3.458,12.041,9.012c7.826,19.243,17.402,37.551,29.422,54.521
                                                    c3.201,4.518,6.465,9.036,11.113,12.216c5.142,3.521,9.057,2.354,11.476-3.374c1.535-3.632,2.207-7.544,2.553-11.434
                                                    c1.146-13.383,1.297-26.743-0.713-40.079c-1.234-8.323-5.922-13.711-14.227-15.286c-4.238-0.803-3.607-2.38-1.555-4.799
                                                    c3.564-4.172,6.916-6.769,13.598-6.769h50.111c7.889,1.557,9.641,5.101,10.721,13.039l0.043,55.663
                                                    c-0.086,3.073,1.535,12.192,7.07,14.226c4.43,1.448,7.35-2.096,10.008-4.905c11.998-12.734,20.561-27.783,28.211-43.366
                                                    c3.395-6.852,6.314-13.968,9.143-21.078c2.096-5.276,5.385-7.872,11.328-7.757l48.229,0.043c1.43,0,2.877,0.021,4.262,0.258
                                                    c8.127,1.385,10.354,4.881,7.844,12.817c-3.955,12.451-11.65,22.827-19.174,33.251c-8.043,11.129-16.645,21.877-24.621,33.072
                                                    C252.26,161.544,252.842,166.697,261.945,175.576L261.945,175.576z M261.945,175.576" />
                                                </g>
                                            </svg>
                                        </span>
                                        <span class="w-11 h-11 items-center justify-center inline-flex rounded-full font-bold text-lg  text-white bg-red-300 hover:shadow-lg cursor-pointer transition ease-in duration-300">
                                            <svg class="w-5 h-5 fill-white" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                                                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                                            </svg>
                                        </span>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="lg:w-6/12 flex items-center bg-cover bg-no-repeat bg-center" style="
                background-image: url('http://api.workbase.uz/storage/app/media/sincerely-media-3KEFp35FVB0-unsplash.jpg');
              ">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>