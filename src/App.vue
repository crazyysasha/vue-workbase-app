<template>
    <div class="min-h-screen bg-gray-100">
        <site-header></site-header>
        <div class="">
            <router-view v-slot="{ Component }">
                <template v-if="Component">
                    <transition mode="out-in">
                        <keep-alive>
                            <suspense>
                                <component :is="Component"></component>
                                <template #fallback>
                                    <div>Loading...</div>
                                </template>
                            </suspense>
                        </keep-alive>
                    </transition>
                </template>
            </router-view>
        </div>
    </div>
</template>
<script setup>
import SiteHeader from "@/components/headers/SiteHeader.vue";
import user from "./composables/user/useUser";
user;
</script>