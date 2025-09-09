<script setup lang="ts">
defineProps({
    link: String,
    label: String,
})
</script>

<template>
    <li class="menu-item bg-base-100 rounded-md">
        <a :href="link" class="text-2xl font-semibold">{{label}}</a>
    </li>
</template>

<style scoped>

</style>