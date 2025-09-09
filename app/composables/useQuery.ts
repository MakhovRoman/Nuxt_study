export default function () {
    const route = useRoute();
    const page = computed(() => Number(route.query.page ?? 0));

    const changeQuery = async (valueToAdd: number) => {
        await navigateTo({
            path: '/useAsyncData',
            query: {
                page: page.value + valueToAdd
            }
        })
    }

    return { page, changeQuery };
}