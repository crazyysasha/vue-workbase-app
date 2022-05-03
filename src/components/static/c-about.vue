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
                        <span class="ml-1 text-sm font-medium text-gray-400 md:ml-2">О нас</span>
                        </div>
                    </li>
                </ol>
            </nav>
            <h2 class="text-3xl font-bold mb-10">Наша команда</h2>

            <div class="flex mb-24 rounded-lg overflow-hidden shadow-xl  card">
                <div class="px-6 py-8">
                    <div class="text-7xl text-blue-300 leading-5">”</div>
                    <div class="font-base text-lg">
                        Наши коллеги стоят для нас на первом месте. Нам всегда хотелось работать с молодыми и вдохновляющими ребятами, с теми, с кем можно сходить в разведку и вернуться в отличном настроении. Но, к сожалению, нам не удалось найти такой коллектив, поэтому мы объединились и создали наш DreamTeam, чтобы создать сообщество надежных исполнителей и заказчиков, которые могут доверять друг другу.
                    </div>
                    
                </div>
            </div>
            
            <div class="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                <div class="max-w-sm rounded overflow-hidden shadow-xl  card">
                    <img class="w-full" src="http://api.workbase.uz/storage/app/media/sss.png" alt="Sunset in the mountains">
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-1">Азиз Абдулхусейнов</div>
                     
                            <span class="inline-block mb-1 text-sm font-semibold text-primary  mr-2">Founder Workbase</span>
                      
                        <p class="text-gray-600  text-sm">
                            Наш идейный вдохновитель. Филигранно выполняет свою работу и требует того же от других. Локомотив технологий и анализа информации. Любит путешествовать и знакомится с новыми людьми. 
                        </p>
                    </div>
                    
                </div>
                <div class="max-w-sm overflow-hidden shadow-xl  rounded card">
                    <img class="w-full" src="http://api.workbase.uz/storage/app/media/ss.png" alt="Sunset in the mountains">
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-1">Мадина Ишмурадова</div>
                     
                            <span class="inline-block mb-1 text-sm font-semibold text-primary mr-2">Facilitator Workbase</span>
                      
                        <p class="text-gray-600 text-sm ">
                            Была в более чем 100 странах, где научилась договариваться с любыми представителями человеческой и других рас. Занимается продвижением сервиса и внешними связями. 
                        </p>
                    </div>
                </div>
                <div class="max-w-sm rounded overflow-hidden shadow-xl  card">
                    <img class="w-full" src="http://api.workbase.uz/storage/app/media/photo_2021-08-14_21-27-47.jpg" alt="Sunset in the mountains">
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-1">Раимов Александер</div>
                     
                            <span class="inline-block mb-1 text-sm font-semibold text-primary  mr-2">Team Leader Workbase</span>
                      
                        <p class="text-gray-600 text-sm">
                            Парень, с невероятным интелектом. Хочет достичь точности в ощущениях, чувствах, мыслях. Он понимает, что целое состоит из мельчайших деталей, поэтому так внимателен к мелочам, оттенкам, к малому. "Глупые довольствуются усреднёнными штампами."
                        </p>
                    </div>
                    
                </div>
                <div class="max-w-sm rounded overflow-hidden shadow-xl  card">
                    <img class="w-full" src="http://api.workbase.uz/storage/app/media/Artemio_Langepas.png" alt="Sunset in the mountains">
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-1">Батурин Артём</div>
                     
                            <span class="inline-block mb-1 text-sm font-semibold text-primary  mr-2">Marketing Workbase</span>
                      
                        <p class="text-gray-600 text-sm">
                            Машина работающая в режиме нон-стоп, которая подпитывается сильным любопытством. У него нет кнопки паузы и нет возможности снижения оборотов. Временами это утомляет, но в то же время избавит от скуки всех окружающих.
                        </p>
                    </div>
                    
                </div>

            </div>
            <div class="flex my-24 rounded-lg overflow-hidden shadow-xl  card">
                <div class="px-6 py-8">
                    <div class="text-7xl text-blue-300 leading-5">”</div>
                    <div class="font-base text-lg">
                       На этих фотографиях Вы видите лишь малую часть людей, которые каждый день делают сервис WorkBase лучше. Если Вы считаете себя замотивированным специалистом в своем направлении и хотите стать членом нашей команды, то добро пожаловать на борт WorkBase. Для этого Вам нужно всего лишь отправить Ваше CV на <a class="decoration-solid underline text-primary" href="mailto:hr@workbase.uz">hr@workbase.uz</a>. Вместе мы можем намного больше!
                    </div>
                    
                </div>
            </div>
            
        </div>
    </section>
</template>



