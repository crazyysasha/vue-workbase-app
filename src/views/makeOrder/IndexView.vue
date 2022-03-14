<template>
    <div>
        <button @click="onLoad">load</button>
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