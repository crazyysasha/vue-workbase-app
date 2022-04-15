<template>
    <section class="bg-white rounded-md shadow-md shadow-primary/25">
        <div class="p-4">
            <slot name="header"></slot>
        </div>
        <div class="p-4">
            <slot></slot>
        </div>

        <div
            class="p-4 border-t border-primary/25 text-primary"
            v-if="$slots.footer"
        >
            <slot name="footer"></slot>
        </div>
    </section>
</template>
