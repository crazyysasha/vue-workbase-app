<script setup>
	import { useRouter } from "vue-router";

	const emit = defineEmits(["onSubmit"]);
	const router = useRouter();
	const onSubmit = (e) => emit("onSubmit", e);
	const back = () => {
		router.back();
	};
</script>
<template>
	<form
		class="
			flex flex-col
			relative
			w-full
			min-h-full
			rounded-lg
			bg-white
			shadow shadow-primary/25
			overflow-clip
		"
		@submit.prevent="onSubmit"
	>
		<div class="p-4">
			<slot name="header"> </slot>
		</div>
		<div class="px-4 flex-1 min-h-[18rem]">
			<slot> </slot>
		</div>

		<div
			class="
				p-4
				sticky
				bottom-0
				bg-white
				flex
				justify-between
				z-40
				drop-shadow-lg
			"
		>
			<slot name="footer">
				<c-button scheme="secondary" type="button" @click="back">
					отмена
				</c-button>
				<c-button> продолжить </c-button>
			</slot>
		</div>
	</form>
</template>

