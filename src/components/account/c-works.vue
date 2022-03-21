<template>
    <form  class="md:w-[30rem] w-auto">
        <h3 class="font-semibold block text-xl md:text-xl text-center mb-6">
            Добавить работу
        </h3>
        <hr class="mb-4 mt-1" />
        <div class="flex flex-col">
            <div class="">
                <div class="flex-1 mb-3">
                    <label for="">Название работы</label>
                    <input 
                        type="text" 
                        class="                
                            border
                            rounded-sm
                            focus:border-orange-500
                            py-2
                            px-6
                            focus:outline-none
                            w-full
                            font-medium
                            text-sm
                            md:text-md">
                </div>
                <div class="flex-1 mb-3">
                    <label for="">Комментарий к работе</label>
                    <input 
                        type="text" 
                        class="                
                            border
                            rounded-sm
                            focus:border-orange-500
                            py-2
                            px-6
                            focus:outline-none
                            w-full
                            font-medium
                            text-sm
                            md:text-md">
                </div>
                <div class="flex-1 mb-3">
                    <label for="">Добавте ссылку на работу</label>
                    <input 
                        type="text" 
                        class="                
                            border
                            rounded-sm
                            focus:border-orange-500
                            py-2
                            px-6
                            focus:outline-none
                            w-full
                            font-medium
                            text-sm
                            md:text-md">
                </div>
                <div class="flex-1 mb-3">
                    <label for="formFile" class="form-label inline-block mb-2 text-gray-700">... или/и прикрепите файл</label>
                    <input class="form-control
                    block
                    w-full
                    py-1.5
                    font-medium
                    text-sm
                    md:text-md
                    transition
                    ease-in-out" type="file" id="formFile">
                </div>

            </div>

        </div>
        <div class="py-4">
            <button
                type="submit"
                class="
                    select-none text-white rounded-md px-4 py-2 transition-all duration-200 shadow-lg transform scale-100 active:scale-95 bg-primary hover:bg-primary/80 disabled:bg-primary/50 shadow-primary/25
                "
                
            >
                <h-cloud-upload class="inline -mt-0.5"></h-cloud-upload>
                <span> Сохранить </span>

            </button>
        </div>
    </form>
</template>

<script setup>

</script>
