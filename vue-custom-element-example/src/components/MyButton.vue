<template>
    <button @click="clickHandler">click me</button>
</template>

<script>
    export default {
        name: "MyButton",
        methods: {
            clickHandler() {
                this.$emit('click');
            }
        }
    }
</script>

<style scoped>

</style>