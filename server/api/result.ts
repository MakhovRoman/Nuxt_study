export default defineEventHandler((event) => {
    const { page, otherParam } = getQuery(event);
    return {
        text: 'This is example endpoint',
        page,
        otherParam,
        method: event.method,
    }
})