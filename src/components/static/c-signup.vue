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
                    <div class="lg:w-6/12 py-20">
                              <div class="border-l-2 mt-10">
                                <!-- Card 1 -->
                                <div class="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-blue-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                                <!-- Dot Follwing the Left Vertical Line -->
                                <div class="w-5 h-5 bg-blue-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

                                <!-- Line that connecting the box with the vertical line -->
                                <div class="w-10 h-1 bg-blue-300 absolute -left-10 z-0"></div>

                                <!-- Content that showing in the box -->
                                <div class="flex items-center">
                                    <svg version="1.1" id="Capa_1" class="w-20 h-20 fill-white mr-5" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 489.003 489.003" style="enable-background:new 0 0 489.003 489.003;" xml:space="preserve">
                                        <g>
                                            <path d="M305.802,156.814c-33.8-19.5-88.4-19.5-122,0s-33.4,51.2,0.4,70.7s88.4,19.5,122,0
                                            C339.802,207.914,339.602,176.314,305.802,156.814z M290.302,187.514c-2.9,0.9-5.8,1.9-8.7,2.8c-1.8,0.5-2.9,0.6-3.7,0.2
                                            c-0.4-0.3-0.8-0.7-1.2-1.3c-1.9-3.1-4.8-5.8-8.7-8c-0.5-0.3-1.1-0.6-1.7-0.9c-1.3-0.7-2.5-1.2-4.1-1.6c-5.6-1.3-10.6,0.8-9.9,4.3
                                            c0.3,1.8,1.3,3.4,2.5,5.1c2,2.8,4.2,5.6,5.6,8.6c4.7,9.4-5.5,18.7-21.9,19.6c-5.9,0.3-11.5-0.4-16.7-2.1c-2.3-0.7-4-0.7-5.7,0.5
                                            c-1.7,1.1-3.6,2.1-5.4,3.1c-1.6,0.9-3.3,1-4.9,0.1c-1.2-0.6-2.3-1.3-3.5-1.9c-0.8-0.5-1.6-0.9-2.4-1.4c-1.7-1-1.5-2,0.1-3
                                            c1.3-0.8,2.6-1.5,3.8-2.3c2.9-1.7,2.9-1.8,0.5-3.7c-3-2.4-5.7-4.9-7.4-7.7c-1.3-2.2-1-2.7,2.5-3.9c2.6-0.8,5.1-1.7,7.7-2.5
                                            c1.9-0.6,3-0.7,3.8-0.3c0.5,0.3,0.8,0.7,1.2,1.4c1.7,3.2,4.6,6,8.1,8.7c0.6,0.5,1.3,0.9,1.9,1.3c1.9,1.1,4.1,1.9,6.6,2.5
                                            c6.5,1.5,12.3-1.1,11.7-5.2c-0.2-1.4-0.9-2.6-1.8-3.9c-2.2-3.3-5.1-6.4-6.6-9.9c-2.4-5.6-1.3-10.7,6.4-14.7c8.8-4.5,18.6-4.8,29-2
                                            c4.3,1.2,4.2,1.2,7.5-0.7c1.1-0.7,2.2-1.3,3.3-1.9c2.5-1.4,3.4-1.4,5.9,0c0.8,0.4,1.5,0.9,2.3,1.3c5.3,3,5.3,3,0.1,6.1
                                            c-3.7,2.1-3.7,2.1-0.6,4.6c2.4,1.9,4.3,3.9,5.7,6.1C292.702,186.014,292.302,186.914,290.302,187.514z M350.902,253.314
                                            c-9.3,5.4-24.4,5.4-33.8,0c-9.3-5.4-9.4-14.2-0.1-19.6c9.3-5.4,24.4-5.4,33.8,0C360.202,239.114,360.302,247.914,350.902,253.314z
                                            M172.902,150.514c-9.3,5.4-24.4,5.4-33.8,0c-9.4-5.4-9.4-14.2-0.1-19.6c9.3-5.4,24.4-5.4,33.8,0
                                            C182.102,136.314,182.202,145.114,172.902,150.514z M477.402,211.414l-266.5-153.9c-15.4-8.9-40.4-8.9-55.7,0l-142.9,83
                                            c-15.3,8.9-15.2,23.4,0.2,32.3l266.5,153.9c15.4,8.9,40.4,8.9,55.7,0l142.8-83C492.902,234.814,492.802,220.314,477.402,211.414z
                                            M337.602,297.414c-1.7-1.6-3.7-3.1-6.1-4.5c-15.6-9-40.9-9-56.4,0c-1.2,0.7-2.2,1.4-3.3,2.2l-206.9-119.5c2-0.8,3.9-1.7,5.7-2.7
                                            c15.5-9,15.4-23.6-0.2-32.6c-1.7-1-3.5-1.9-5.4-2.6l85.3-49.6c1.3,1.1,2.8,2.1,4.5,3.1c15.6,9,40.9,9,56.4,0c1.8-1,3.3-2.1,4.7-3.3
                                            l207.6,119.8c-2.8,1-5.3,2.1-7.7,3.5c-15.5,9-15.5,23.7,0.2,32.7c2.4,1.4,5.1,2.5,7.9,3.5L337.602,297.414z M5.502,203.614
                                            c6.8-3.5,17.3-3,23.8,0.8l278.6,160.8l150.6-87.6c6.5-3.8,17.2-3.8,23.8,0c6.6,3.8,6.6,10,0.1,13.8l-160.1,93
                                            c-7.8,4.6-20.6,4.6-28.5,0l-5.6-3.2l-3.9-2.3l-279.3-161.2C-1.798,213.814-1.698,207.314,5.502,203.614z M482.602,341.714
                                            l-160.1,93c-7.8,4.6-20.6,4.6-28.5,0l-5.5-3.2l-4-2.3l-279.3-161.2c-6.8-3.9-6.6-10.4,0.6-14.1c6.7-3.5,17.3-3,23.8,0.8
                                            l278.5,160.8l150.6-87.5c6.6-3.8,17.2-3.8,23.8,0C489.102,331.714,489.202,337.914,482.602,341.714z" />
                                        </g>
                                    </svg>
                                    <h1 class="text-xl font-bold">Достойный заработок</h1>
                                </div>
                                </div>

                                <!-- Card 2 -->
                                <div class="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-pink-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                                <!-- Dot Follwing the Left Vertical Line -->
                                <div class="w-5 h-5 bg-pink-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

                                <!-- Line that connecting the box with the vertical line -->
                                <div class="w-10 h-1 bg-pink-300 absolute -left-10 z-0"></div>

                                <!-- Content that showing in the box -->
                                <div class="flex items-center">
                                    <svg version="1.1" class="w-20 h-20 mr-5 fill-white" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 60 60" style="enable-background:new 0 0 60 60;" xml:space="preserve">
                                        <g>
                                            <path d="M30,0C13.458,0,0,13.458,0,30s13.458,30,30,30s30-13.458,30-30S46.542,0,30,0z M30,58C14.561,58,2,45.439,2,30
                                            S14.561,2,30,2s28,12.561,28,28S45.439,58,30,58z" />
                                            <path d="M30,6c-0.552,0-1,0.447-1,1v23H14c-0.552,0-1,0.447-1,1s0.448,1,1,1h16c0.552,0,1-0.447,1-1V7C31,6.447,30.552,6,30,6z" />
                                        </g>
                                    </svg>
                                    <h1 class="text-xl font-bold">Свободный график</h1>
                                </div>
                                </div>

                                <!-- Card 3 -->
                                <div class="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-green-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                                <!-- Dot Follwing the Left Vertical Line -->
                                <div class="w-5 h-5 bg-green-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

                                <!-- Line that connecting the box with the vertical line -->
                                <div class="w-10 h-1 bg-green-300 absolute -left-10 z-0"></div>

                                <!-- Content that showing in the box -->
                                <div class="flex items-center">
                                    <svg version="1.1" class="w-20 h-20 mr-5 fill-white" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 214.27 214.27" style="enable-background:new 0 0 214.27 214.27;" xml:space="preserve">
                                        <g>
                                            <path d="M196.926,55.171c-0.11-5.785-0.215-11.25-0.215-16.537c0-4.142-3.357-7.5-7.5-7.5c-32.075,0-56.496-9.218-76.852-29.01
                                            c-2.912-2.832-7.546-2.831-10.457,0c-20.354,19.792-44.771,29.01-76.844,29.01c-4.142,0-7.5,3.358-7.5,7.5
                                            c0,5.288-0.104,10.755-0.215,16.541c-1.028,53.836-2.436,127.567,87.331,158.682c0.796,0.276,1.626,0.414,2.456,0.414
                                            c0.83,0,1.661-0.138,2.456-0.414C199.36,182.741,197.954,109.008,196.926,55.171z M107.131,198.812
                                            c-76.987-27.967-75.823-89.232-74.79-143.351c0.062-3.248,0.122-6.396,0.164-9.482c30.04-1.268,54.062-10.371,74.626-28.285
                                            c20.566,17.914,44.592,27.018,74.634,28.285c0.042,3.085,0.102,6.231,0.164,9.477C182.961,109.577,184.124,170.844,107.131,198.812
                                            z" />
                                            <path d="M132.958,81.082l-36.199,36.197l-15.447-15.447c-2.929-2.928-7.678-2.928-10.606,0c-2.929,2.93-2.929,7.678,0,10.607
                                            l20.75,20.75c1.464,1.464,3.384,2.196,5.303,2.196c1.919,0,3.839-0.732,5.303-2.196l41.501-41.5
                                            c2.93-2.929,2.93-7.678,0.001-10.606C140.636,78.154,135.887,78.153,132.958,81.082z" />
                                        </g>
                                    </svg>
                                    <h1 class="text-xl font-bold">Безопасный сервис</h1>
                                </div>
                                </div>

                                <!-- Card 4 -->
                                <div class="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-purple-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                                <!-- Dot Follwing the Left Vertical Line -->
                                <div class="w-5 h-5 bg-purple-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

                                <!-- Line that connecting the box with the vertical line -->
                                <div class="w-10 h-1 bg-purple-300 absolute -left-10 z-0"></div>

                                <!-- Content that showing in the box -->
                                <div class="flex items-center">
                                    <svg version="1.1" class="w-20 h-20 mr-5 fill-white" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                                        <g>
                                            <g>
                                                <g>
                                                    <path d="M344.277,343.424c-0.819,0.708-20.011,17.707-20.011,49.109V435.2c0,4.71,3.814,8.533,8.533,8.533
                                                    c4.719,0,8.533-3.823,8.533-8.533v-42.667c0-23.33,13.594-35.738,14.566-36.634l59.733-59.733
                                                    c3.388-3.388,7.612-5.35,11.895-5.521c4.352-0.188,8.09,1.382,11.204,4.488c3.106,3.115,4.668,6.989,4.489,11.204
                                                    c-0.171,4.284-2.133,8.508-5.521,11.895L395.034,360.9c-3.337,3.337-3.337,8.73,0,12.066c3.336,3.337,8.73,3.337,12.066,0
                                                    l42.667-42.658c6.426-6.426,10.155-14.694,10.513-23.279c0.367-8.969-2.995-17.485-9.481-23.962
                                                    c-6.485-6.477-14.891-9.813-23.97-9.481c-8.576,0.358-16.845,4.087-23.262,10.513L344.277,343.424z" />
                                                    <path d="M93.867,435.2c2.185,0,4.369-0.836,6.033-2.5c3.337-3.337,3.337-8.73,0-12.066l-68.753-68.71
                                                    c-0.572-0.503-14.08-12.553-14.08-36.19v-128c0-9.412,7.654-17.067,17.067-17.067c9.412,0,17.067,7.654,17.067,17.067v67.558
                                                    c0,4.71,3.814,8.533,8.533,8.533s8.533-3.823,8.533-8.533v-67.558c0-18.825-15.309-34.133-34.133-34.133
                                                    C15.309,153.6,0,168.909,0,187.733v128c0,31.863,19.277,48.495,19.567,48.7L87.834,432.7
                                                    C89.498,434.364,91.682,435.2,93.867,435.2z" />
                                                    <path d="M51.721,307.029c0.358,8.585,4.087,16.853,10.513,23.27l42.667,42.667c3.337,3.337,8.73,3.337,12.066,0
                                                    c3.336-3.337,3.336-8.73,0-12.066L74.3,318.225c-3.388-3.379-5.35-7.603-5.521-11.887c-0.179-4.215,1.382-8.09,4.489-11.204
                                                    c3.115-3.106,6.878-4.676,11.204-4.488c4.284,0.171,8.508,2.133,11.895,5.521l60.134,60.109
                                                    c0.572,0.521,14.165,12.928,14.165,36.258V435.2c0,4.71,3.814,8.533,8.533,8.533s8.533-3.823,8.533-8.533v-42.667
                                                    c0-31.403-19.191-48.401-19.567-48.7L108.433,284.1c-6.417-6.426-14.686-10.155-23.262-10.513
                                                    c-9.114-0.316-17.493,3.004-23.97,9.481C54.716,289.545,51.354,298.061,51.721,307.029z" />
                                                    <path d="M256,110.933c9.412,0,17.067,7.654,17.067,17.067c0,4.71,3.814,8.533,8.533,8.533c4.719,0,8.533-3.823,8.533-8.533
                                                    c0-15.855-10.914-29.107-25.6-32.922v-1.212c0-4.71-3.814-8.533-8.533-8.533s-8.533,3.823-8.533,8.533v1.212
                                                    c-14.686,3.814-25.6,17.067-25.6,32.922c0,18.825,15.309,34.133,34.133,34.133c9.412,0,17.067,7.654,17.067,17.067
                                                    s-7.654,17.067-17.067,17.067c-9.412,0-17.067-7.654-17.067-17.067c0-4.71-3.814-8.533-8.533-8.533s-8.533,3.823-8.533,8.533
                                                    c0,15.855,10.914,29.107,25.6,32.922v1.212c0,4.71,3.814,8.533,8.533,8.533s8.533-3.823,8.533-8.533v-1.212
                                                    c14.686-3.814,25.6-17.067,25.6-32.922c0-18.825-15.309-34.133-34.133-34.133c-9.412,0-17.067-7.654-17.067-17.067
                                                    C238.933,118.588,246.588,110.933,256,110.933z" />
                                                    <path d="M196.267,460.8H59.733c-4.719,0-8.533,3.823-8.533,8.533v34.133c0,4.71,3.814,8.533,8.533,8.533s8.533-3.823,8.533-8.533
                                                    v-25.6h119.467v25.6c0,4.71,3.814,8.533,8.533,8.533s8.533-3.823,8.533-8.533v-34.133C204.8,464.623,200.986,460.8,196.267,460.8
                                                    z" />
                                                    <path d="M452.267,460.8H315.733c-4.719,0-8.533,3.823-8.533,8.533v34.133c0,4.71,3.814,8.533,8.533,8.533
                                                    s8.533-3.823,8.533-8.533v-25.6h119.467v25.6c0,4.71,3.814,8.533,8.533,8.533c4.719,0,8.533-3.823,8.533-8.533v-34.133
                                                    C460.8,464.623,456.986,460.8,452.267,460.8z" />
                                                    <path d="M256,34.133c-65.877,0-119.467,53.589-119.467,119.467S190.123,273.067,256,273.067S375.467,219.477,375.467,153.6
                                                    S321.877,34.133,256,34.133z M256,256c-56.465,0-102.4-45.935-102.4-102.4c0-56.465,45.935-102.4,102.4-102.4
                                                    s102.4,45.935,102.4,102.4C358.4,210.065,312.465,256,256,256z" />
                                                    <path d="M477.867,153.6c-18.825,0-34.133,15.309-34.133,34.133v67.558c0,4.71,3.814,8.533,8.533,8.533
                                                    c4.719,0,8.533-3.823,8.533-8.533v-67.558c0-9.412,7.654-17.067,17.067-17.067s17.067,7.654,17.067,17.067v128
                                                    c0,23.637-13.508,35.686-14.566,36.634L412.1,420.634c-3.337,3.337-3.337,8.73,0,12.066c1.664,1.664,3.849,2.5,6.033,2.5
                                                    c2.185,0,4.369-0.836,6.033-2.5l67.738-67.78c0.819-0.691,20.096-17.323,20.096-49.186v-128
                                                    C512,168.909,496.691,153.6,477.867,153.6z" />
                                                    <path d="M409.6,153.6C409.6,68.907,340.693,0,256,0S102.4,68.907,102.4,153.6S171.307,307.2,256,307.2S409.6,238.293,409.6,153.6
                                                    z M256,290.133c-75.281,0-136.533-61.252-136.533-136.533S180.719,17.067,256,17.067S392.533,78.319,392.533,153.6
                                                    S331.281,290.133,256,290.133z" />
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                    <h1 class="text-xl font-bold">Экономия на рекламе</h1>
                                </div>
                                </div>

      
                            </div>
                        <!-- <h2 class="text-center text-2xl mb-10 font-bold">Станьте исполнителем и выполняйте интересные задания от заказчиков
в удобное для вас время.</h2>
                        <div class="grid sm:grid-cols-2 md:grid-cols-2 gap-4 mb-10">
                            <div class="text-center">
                                <div class="rounded-full mb-3 bg-orange-400 text-4xl w-32 h-32 flex justify-center items-center text-white mx-auto">

                                </div>
                                
                                <span class="text-xl"> Достойный заработок
                                    </span>
                            </div>
                            <div class="text-center">
                                <div class="rounded-full mb-3 bg-orange-400 text-4xl w-32 h-32 flex justify-center items-center text-white mx-auto">
                                    
                                </div>
                                <span class="text-xl"> 
                                    </span>
                            </div>
                            <div class="text-center">
                                <div class="rounded-full mb-3 bg-orange-400 text-4xl w-32 h-32 flex justify-center items-center text-white mx-auto">
                                    
                                </div>
                                <span class="text-xl"> 
                                    </span>
                            </div>
                            <div class="text-center">
                                <div class="rounded-full mb-3 bg-orange-400 text-4xl w-32 h-32 flex justify-center items-center text-white mx-auto">
                                    
                                </div>
                                <span class="text-xl"> 
                                    </span>
                            </div>
                        </div>
                        <h2 class="text-center text-2xl mb-10 font-bold">
                            "Work Base" оможет найти новых клиентов и зарабатывать на выполнении любых услуг.
                        </h2> -->
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>