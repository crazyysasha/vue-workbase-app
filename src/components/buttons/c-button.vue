<template>
    <button>
        <slot></slot>
    </button>
</template>

<script>
export default {
    setup(props, { attrs }) {
        console.log( attrs['block'] );
    },
};
</script>

<style>
</style>