<script setup lang="ts">
const { data, status, error, refresh, clear } = await useAsyncData(
    'mountains',
    () => $fetch('https://api.nuxtjs.dev/mountains')
)

console.log(data, status, error, refresh, clear)
</script>

<template>

</template>

<style scoped>

</style>