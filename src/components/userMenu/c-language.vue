<template>
    <div>
        <div id="language" class="relative">
            <button @click="show = !show" class="flex my-2 border-2 hover:bg-primary hover:text-white transition duration-200 rounded-full items-center px-3 py-2 text-white">
                <span class="mr-1">RU</span>
                <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
            </button>
            <div v-show="show" class="absolute right-0 left-0 w-full py-2 mt-5 bg-primary rounded-md shadow-xl">
                <router-link to="/" class="flex justify-center px-4 py-2 text-base text-indigo-100 hover:bg-indigo-100 hover:mx-2 hover:px-2 hover:rounded hover:text-primary">
                    UZ
                </router-link>
                <router-link to="/" class="flex justify-center px-4 py-2 text-base text-indigo-100 hover:bg-indigo-100 hover:mx-2 hover:px-2 hover:rounded hover:text-primary">
                    En
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
