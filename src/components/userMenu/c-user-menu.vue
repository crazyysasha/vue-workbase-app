<template>
    <div>
        <div class="relative">
            <button @click="show = !show" class="flex  items-center p-2 text-white">
                <div class="mr-3">
                    <img class="inline-block h-10 w-10 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
                </div>
                <span class="mr-1">Я заказчик</span>
                <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
            </button>
            <div v-show="show" class="absolute right-0  left-0 w-full py-2 mt-5 bg-primary rounded-md shadow-xl">
                <router-link to="/" class="flex px-4 py-2 text-base text-indigo-100 hover:bg-indigo-100 hover:mx-2 hover:px-2 hover:rounded hover:text-primary">
                  Я исполнитель
                </router-link>
                <router-link @click="onLogout" to="/" class="flex px-4 py-2 text-base text-indigo-100 hover:bg-indigo-100 hover:mx-2 hover:px-2 hover:rounded hover:text-primary">
                    Выход
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            show: false,
        };
    },
};

</script>
