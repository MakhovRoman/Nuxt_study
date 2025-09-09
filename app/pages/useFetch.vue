<script setup lang="ts">
const { otherParam, changeParams } = useOtherParam();
const { page, changeQuery } = useQuery();

const method = computed(() => otherParam.value > 2 ? 'POST' : 'GET');

//TODO: когда Nuxt видит в useFetch реактивные источники, он автоматически следит
//TODO: за их изменениями и перезапускает запрос
const { data } = await useFetch('/api/result', {
    query: {
        page,
        otherParam,
    },
    method,
})

function useOtherParam() {
    const otherParam = ref(1);
    const changeParams = (valueToAdd: number) => {
        otherParam.value += valueToAdd;
    };

    return { otherParam, changeParams };
}

function useQuery() {
    const route = useRoute();
    const page = computed(() => Number(route.query.page ?? 0));

    const changeQuery = async (valueToAdd: number) => {
        await navigateTo({
            path: '/useFetch',
            query: {
                page: page.value + valueToAdd
            }
        })
    }

    return { page, changeQuery };
}
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