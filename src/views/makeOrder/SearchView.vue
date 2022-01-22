<template>
    <form @submit.prevent="submit"></form>
</template>
<script>
export default {
    setup() {
        const form = useForm({fields: [], rules: []});

        return { form };
    },
};
</script>