<script setup>
import { RouterLink, RouterView, useRouter } from 'vue-router'
import { ref } from 'vue';
import { Motion, Presence } from "motion/vue";
import navbar from './components/navbar.vue'
import componentFooter from './components/componentFooter.vue'
import Loader from './components/Loader.vue'
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
import 'animate.css';

</script>

<template>
  <div class="font-[Rubik] h-screen">
  <header class="mx-auto bg-white">
    <navbar />
  </header>

  <RouterView v-slot="{ Component }">
    <Transition enter-active-class="animate__animated animate__fadeInUp"
      leave-active-class="animate__animated animate__fadeOutDown" mode="out-in">
      <component :is="Component" class="mx-auto" />
    </Transition>
  </RouterView>
  <componentFooter class="z-[-10] transition duration-300" />
  
</div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,400;0,500;0,700;1,100;1,400;1,500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,400;0,500;0,700;1,100;1,400;1,500&family=Rubik:wght@300;500&display=swap');

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
