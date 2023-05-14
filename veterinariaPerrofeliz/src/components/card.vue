<script setup>
defineProps({
    title: String,
    img: String,
});
</script>
<template>
    <button class="border-2 shadow-xl rounded-md hover:scale-105 transition duration-300 m-2 overflow-hidden">
            <img :src=img class="max-w-[290px] w-full" alt="Card image">
            <p class="text-lg font-medium px-2 py-2 text-center text-teal-600">{{ title }}</p>
    </button>
</template>