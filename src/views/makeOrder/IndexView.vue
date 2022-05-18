<style>
/* h1 {
    font-size: 2rem;
    text-align: justify;
} */
</style>
<template>
    <div class="container mx-auto gap-4 grid grid-cols-4 px-5 py-10">
        <div class="p-5 bg-white rounded-lg shadow-primary/25 shadow-lg"></div>
        <div
            class="
                p-5
                bg-white
                rounded-lg
                shadow-primary/25 shadow-lg
                col-span-3
            "
        >
            <h1 class="text-2xl sm:text-3xl md:text-4xl mb-4">
                По какому предмету нужен репититор ?
            </h1>
            
            <input
                type="text"
                class="
                    px-3
                    py-2
                    bg-primary/10
                    rounded-lg
                    w-full
                    sm:w-4/5
                    md:w-3/5
                    placeholder:text-primary/50
                    focus:outline-none
                    border border-primary/50
                    hover:border-primary/75
                    focus:border-primary focus:shadow-lg focus:shadow-primary/50
                    transition
                    duration-200
                    focus:animate-bounce
                "
                placeholder="Английский язык"
            />
        </div>
    </div>
    <div>
        <router-view> </router-view>
    </div>
</template>
<script setup>
import { getMe } from "@/api/auth";
import { get } from "@/api/categories";
import { useLogin } from "@/composables/auth";
import { onMounted, ref, toRefs } from "vue";
import { useRoute, useRouter } from "vue-router";

const { params } = useRoute();
const { category } = params;
// console.log(category);
// const data = getMe();
const onLoad = async () => {
    const { onLogin } = useLogin();
    // await onLogin({
    //     type: "executor",
    //     username: "+998903297989",
    //     password: "asdASD123",
    // });
    getMe().then(console.log);
    getMe().then(console.log);
    // get();
    // console.log('data in indexview', data);
};
// onMounted();
// await new Promise((resolve) => setTimeout(() => resolve(), 1000));
// const route = useRoute();
// const router = useRouter();
// const tab = ref(route.query._tab || "order");
// const changeTab = (val) => {
//     router.replace({ query: { _tab: (tab.value = val) } });
//     // router.push()
// };
// const tabIs = (val) => {
//     return tab.value == val;
// };

// const sortBy = ref(null);
</script>