<script setup>
import { RouterLink, RouterView, useRouter } from 'vue-router'
import navbar from './components/navbar.vue'
import componentFooter from './components/componentFooter.vue'
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js'; 
import 'animate.css';
</script>

<template>
  <header class="mx-auto">
    <div class="py-2 max-w-7xl mx-auto">
      <div class="inline-flex justify-between w-full">
        <div class="space-x-3 my-auto">
          <a href="#" class="text-gray-700 hover:text-blue-700 transition duration-300">
            <i class="fa-brands fa-facebook h-6"></i>
          </a>
          <a href="#" class="text-gray-700 hover:text-rose-700 transition duration-300">
            <i class="fa-brands fa-instagram h-6"></i>
          </a>
          <a href="#" class="text-gray-700 hover:text-green-700 transition duration-300">
            <i class="fa-brands fa-whatsapp h-6"></i>
          </a>
        </div>
        <p class="text-gray-500 text-lg  my-auto"> turnos@PerroFeliz.com | +543886547141</p>
      </div>
    </div>
    <div class="border-y-2 pt-2">
      <div class="max-w-7xl mx-auto my-auto">
        <div class="text-gray-500 text-xl space-x-1 inline-flex w-full justify-between">
          <RouterLink to="/"><img alt="Vue logo" class="logo" src="@/assets/img/veterinaria.png" width="170"
              height="125" />
          </RouterLink>
          <div>
            <navbar />
          </div>
        </div>
      </div>
    </div>
  </header>

  <RouterView v-slot="{ Component }">
        <Transition           
          enter-active-class="animate__animated animate__fadeInUp"
          leave-active-class="animate__animated animate__fadeOutDown" 
          mode="out-in">          
          <component :is="Component" class="max-w-7xl mx-auto" />
        </Transition>
  </RouterView>

<componentFooter/>
  
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,400;0,500;0,700;1,100;1,400;1,500&display=swap');

header {
  font-family: 'Roboto', sans-serif;
}

/*  Animacion del router */
.fade-enter-active,
.fade-leave-active {
  transition: .3s ease all;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateY(2em);
}
</style>
