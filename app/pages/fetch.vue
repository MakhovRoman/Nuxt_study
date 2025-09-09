<script setup lang="ts">
type User = {
    userId: number;
    id: number;
    title: string;
    body: string;
}

const dataURL = 'https://jsonplaceholder.typicode.com/posts';

const list = ref<User[]>([]);
const count = ref(0);

//TODO: закомментировать чтобы не вызывались при SSR
// const data = await fetchWithCount();
// list.value = data.slice(0, 3);

async function fetchWithCount(): Promise<User[]> {
    count.value++;

    const side = import.meta.server ? 'server' : 'client';
    console.log(count.value, side);

    return $fetch(dataURL);
}

async function handleGetData() {
    const res = await fetchWithCount();

    list.value = res;
}
</script>

<template>
    <div>
        <button class="btn btn-primary" @click="handleGetData">Press on my, baby</button>
        <ul class="list bg-base-100 rounded-box shadow-md">
            <li v-for="item in list" class="list-row">
                <div class="flex flex-col">
                    <h3 class="text-xl">{{item.title}}</h3>
                    <p class="text-xs text-secondary">{{item.body}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>