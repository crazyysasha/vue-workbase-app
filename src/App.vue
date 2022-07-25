<template>
	<!-- TODO: в дальнейшем для темной темы будем использовать этот цвет "dark:bg-slate-900" -->
	<div
		class="
			min-h-screen
			max-h-screen
			overflow-auto
			bg-gray-100
			flex flex-col
			scroll-smooth
		"
	>
		<app-header></app-header>
		<router-view class="flex-1 scroll-mt-96" id="page"></router-view>
		<app-footer class="mt-auto"></app-footer>
	</div>
</template>
<script setup>
	import AppHeader from "@/components/headers/AppHeader.vue";
	import AppFooter from "@/components/footer/AppFooter.vue";
	import useSetttings from "@/composables/settings.js";
	import { onMounted, ref, watch } from "vue";
	import { usePusher } from "@/composables/pusher";
	import useProfile from "./composables/profile";
	import { isAuthentificated } from "./composables/auth";
	import { PrivateChannel } from "pusher-js";
	const { exec, isLoaded } = useSetttings();

	onMounted(async () => {
		if (!isLoaded.value) await exec();
	});

	const { pusher } = usePusher();
	// onMounted(async () => {
	// 	const channel = pusher.subscribe("presence-users");
	// 	channel.bind("pusher:subscription_succeeded", (members) =>
	// 		console.dir(members)
	// 	);
	// });

	const { profile } = useProfile();

	const subscribe = () => {
		const channel = pusher.subscribe(
			`private-user.notifications.${profile.value.id}`
		);
		
		channel.bind("conversation-created", (data) => {
			console.log(data);
		});
	};
	const unsubscribe = () => {
		pusher.allChannels().forEach((channel) => {
			if (channel.name.startsWith("private")) {
				pusher.unsubscribe(channel.name);
			}
		});
	};

	onMounted(() => {
		if (isAuthentificated.value) {
			subscribe();
		}
	});
	watch(isAuthentificated, () => {
		if (isAuthentificated.value) subscribe();
		else unsubscribe();
	});
</script>