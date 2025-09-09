<script setup lang="ts">
const { otherParam, changeParams } = useOtherParam();
const { page, changeQuery } = useQuery('/useAsyncData');

const method = computed(() => otherParam.value > 2 ? 'POST' : 'GET');

const { data } = await useAsyncData(
    '/api/result',
    () => $fetch('/api/result', {
        query: {
            page: page.value,
            otherParam: otherParam.value,
        },
        method: method.value
    }), {
        watch: [page, otherParam, method]
    }
)
</script>

<template>
<div>
    <pre>{{data}}</pre>
    <div class="join gap-2 mt-10">
        <button class="btn btn-primary join-item" @click="changeQuery(1)">Increment query</button>
        <button class="btn btn-primary join-item" @click="changeQuery(-1)">Decrement query</button>
        <button class="btn btn-primary join-item" @click="changeParams(1)">Increment params</button>
        <button class="btn btn-primary join-item" @click="changeParams(-1)">Decrement params</button>
    </div>
</div>
</template>

<style scoped>

</style>