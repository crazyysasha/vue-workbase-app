
<script setup>
	import { computed, toRefs, watch } from "vue";
	const props = defineProps({
		expanded: {
			type: Number,
			default: null,
		},
		index: {
			type: Number,
			required: true,
		},
		title: {
			type: String,
		},
		subtitle: {
			type: String,
		},
		body: {
			type: String,
		},
		disabled: {
			type: Boolean,
			default: false,
		},
	});
	const { expanded, index, disabled } = toRefs(props);

	const emit = defineEmits(["on-expand"]);

	const onExpand = () => {
		if (isExpanded.value) {
			return emit("on-expand", null);
		}
		return emit("on-expand", index.value);
	};

	const isExpanded = computed(() => expanded.value == index.value);

	const isDisabled = computed(() => disabled.value);

	const onTransitionEnter = (el) => {
		el.style.height = `${el.scrollHeight}px`;
	};
	const onBeforeTransitionEnter = (el) => {
		el.style.height = 0;
	};
	const onAfterTransitionEnter = (el) => {
		el.style.height = "auto";
	};
	const onTransitionLeave = (el) => {
		el.style.height = 0;
	};
	const onBeforeTransitionLeave = (el) => {
		el.style.height = `${el.scrollHeight}px`;
	};
	const onAfterTransitionLeave = (el) => {
		el.style.height = `auto`;
	};
</script>
<template>
	<div
		:class="{
			'hover:bg-primary/10': isDisabled || !isExpanded,
			'border-transparent': !isExpanded,
			'!bg-gray-50': isExpanded && isDisabled,
			'!my-2': isExpanded,
		}"
		class="
			flex flex-col
			transition-all
			duration-200
			border
			rounded-md
			overflow-hidden
			my-1
		"
	>
		<button
			class="
				flex
				px-4
				py-2
				transition
				duration-200
				justify-between
				items-center
				border-b
				focus:outline-none
			"
			@click="isDisabled || onExpand()"
			:class="{
				'hover:bg-primary/10 border-primary/50': isExpanded,
				' border-transparent': !isExpanded,
			}"
		>
			<div class="flex flex-col">
				<div>
					<h3
						class="
							text-primary
							transition-all
							duration-200
							text-left
						"
						:class="{
							'text-xl': isExpanded,
							'text-2xl': !isExpanded,
						}"
					>
						{{ title }}
					</h3>
				</div>
				<div>
					<transition
						enter-active-class="transition-all duration-200 overflow-hidden"
						leave-active-class="transition-all duration-200 overflow-hidden"
						@before-enter="onBeforeTransitionEnter"
						@enter="onTransitionEnter"
						@after-enter="onAfterTransitionEnter"
						@leave="onTransitionLeave"
						@before-leave="onBeforeTransitionLeave"
						@after-leave="onAfterTransitionLeave"
					>
						<div v-show="!isExpanded" class="text-left">
							<slot name="subtitle">
								{{ subtitle }}
							</slot>
						</div>
					</transition>
				</div>
			</div>
			<div>
				<h-chevron-down
					class="h-6 w-6 transition duration-200 text-primary"
					:class="{
						'-rotate-180': isExpanded,
					}"
				>
				</h-chevron-down>
			</div>
		</button>
		<transition
			enter-active-class="transition-all duration-200 overflow-hidden"
			leave-active-class="transition-all duration-200 overflow-hidden"
			@before-enter="onBeforeTransitionEnter"
			@enter="onTransitionEnter"
			@after-enter="onAfterTransitionEnter"
			@leave="onTransitionLeave"
			@before-leave="onBeforeTransitionLeave"
			@after-leave="onAfterTransitionLeave"
		>
			<div v-show="isExpanded">
				<slot> {{ body }} </slot>
			</div>
		</transition>
	</div>
</template>
