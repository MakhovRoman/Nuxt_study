export default function (url: string) {
    const route = useRoute();
    const page = computed(() => Number(route.query.page ?? 0));

    const changeQuery = async (valueToAdd: number) => {
        await navigateTo({
            path: url,
            query: {
                page: page.value + valueToAdd
            }
        })
    }

    return { page, changeQuery };
}