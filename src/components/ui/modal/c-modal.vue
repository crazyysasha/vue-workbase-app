
<script setup>
	import { onBeforeUnmount, onMounted, ref, toRefs, useSlots, watch } from "vue";

	const props = defineProps({
		modelValue: {
			type: Boolean,
			default: false,
		},
	});

	const slots = useSlots();

	const { modelValue } = toRefs(props);

	const emit = defineEmits(["update:modelValue"]);

	const closeModal = () => {
		emit("update:modelValue", false);
	};

	const showModal = () => {
		emit("update:modelValue", true);
	};

	const onEscape = (e) => {
		e.preventDefault();
		e.stopPropagation();
		if (e.keyCode != 27) {
			return;
		}
		closeModal();
	};
	const onAfterEnterForContainer = (el) => {
		el.classList.add("backdrop-blur-sm");
	};
	const container = ref();
	onMounted(() => {
		container.value.addEventListener("wheel", function (e) {
			console.dir(e.target);
		});
	});
</script>
<template>
	<teleport to="body">
		<transition
			enter-from-class="backdrop backdrop-blur-0"
			enter-active-class="transition-all ease-in overflow-hidden duration-200"
			enter-to-class="backdrop-blur-sm"
			leave-from-class="backdrop-blur-sm"
			leave-active-class="transition-all ease-out overflow-hidden duration-200"
			leave-to-class="backdrop-blur-0"
			@after-enter="onAfterEnterForContainer"
		>
			<div
				v-show="modelValue"
				class="fixed inset-0 z-50"
				@wheel.stop
				ref="container"
			>
				<div class="fixed inset-0 flex overflow-auto py-10 px-4">
					<transition
						enter-from-class="scale-95 -translate-y-20"
						enter-active-class="transition-all ease-out duration-200 transform"
						enter-to-class="scale-100 translate-y-0"
						leave-from-class="scale-100 translate-y-0"
						leave-active-class="transition-all ease-in duration-200 transform"
						leave-to-class="scale-95 -translate-y-20"
					>
						<div
							v-show="modelValue"
							class="
								bg-white
								shadow-lg shadow-primary/50
								rounded-md
								border border-primary/25
								relative
								m-auto
							"
						>
							<div
								v-if="slots.header"
								class="p-4 border-b border-primary/25"
							>
								<slot :close="closeModal" name="header"></slot>
							</div>
							<div v-if="slots.default" class="p-4">
								<slot :close="closeModal" name="default"></slot>
							</div>
							<div
								v-if="slots.footer"
								class="p-4 border-t border-primary/25 flex"
							>
								<slot :close="closeModal" name="footer"></slot>
							</div>
						</div>
					</transition>
				</div>
			</div>
		</transition>
	</teleport>
</template>
