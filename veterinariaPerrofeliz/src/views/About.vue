<script setup>
import nuestrosValores from '@/components/nuestrosValores.vue'
</script>
<template>
    <div class="max-w-7xl">
        <div class="title-line lg:mx-80 pt-8 pb-4">
            <p class="text-2xl md:text-3xl font-bold text-center text-teal-700">Conocénos</p>
        </div>
        <nuestrosValores />
    </div>
</template>

<style scoped>
.title-line {
    display: flex;
    align-items: center;
    justify-content: center;
}

.title-line::before,
.title-line::after {
    content: "";
    flex: 1;
    border-bottom: 3px solid rgb(13 148 136);
    margin: 0 1rem;
}
</style>
