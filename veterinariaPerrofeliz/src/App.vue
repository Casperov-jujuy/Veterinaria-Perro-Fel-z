<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="max-w-7xl mx-auto">
    <div class="inline-flex py-4 ">
      <img alt="Vue logo" class="logo" src="@/assets/img/3636172.png" width="125" height="125" />
      <p class="text-blue-900 text-4xl font-bold my-auto pl-10"> Web de Veterinaria en construcción</p>
    </div>
    <div class="text-blue-900 text-xl space-x-1 border-y-2 py-2">
        <RouterLink class="hover:text-white hover:bg-blue-700 px-5 py-2 transition duration-500" to="/">Inicio</RouterLink>
        <RouterLink class="hover:text-white hover:bg-blue-700 px-5 py-2" to="/about">Acerca de</RouterLink>

        <RouterLink class="hover:text-white hover:bg-blue-700 px-5 py-2" to="/contacto">Contacto</RouterLink>
    </div>
  </header>

  <RouterView class="max-w-7xl mx-auto"/>

  <footer class="max-w-7xl mx-auto">
    <p class="text-center border-y-2 border-indigo-700">Pie de página</p>
  </footer>
</template>

<style scoped>
</style>
