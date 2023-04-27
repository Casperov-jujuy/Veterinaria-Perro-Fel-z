<script setup>
import { RouterLink, RouterView, useRouter } from 'vue-router'
import navbar from './components/navbar.vue'
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


  <footer class="mx-auto w-full bottom-0 relative">
    <div style="height: 300px; overflow: hidden;">
      <svg viewBox="0 -100 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;">

        <path d="M-18.34,46.88 C189.33,-66.59 210.21,73.53 503.10,42.94 L500.00,150.00 L0.00,150.00 Z"
          style="stroke: none; fill: #92E0E4;"></path>

      </svg>

    </div>
    <div class="bg-[#92E0E4] w-full pt-4">
      <div class="">
        <div class="max-w-7xl w-full mx-auto grid grid-cols-5 gap-24 justify-between text-[#535353] pb-5">
          <p class="leading-10 text-xl"><span class="font-bold">Nosotros</span><br>
            <a href="#">Sobre nosotros</a><br>
            <a href="#">Sucursales</a><br>
          </p>
          <p class="leading-10 text-xl"><span class="font-bold">Ayuda</span><br>
            <a href="#">Medios de pago</a><br>
            <a href="#">Preguntas frecuentes</a><br>
            <a href="#"> </a><br>
          </p>
          <p class="leading-10 text-xl"><span class="font-bold">Cuenta</span><br>
            <a href="#">Mis consultas</a><br>
            <a href="#">Vacunas</a><br>
          </p>

          <p class="mx-auto mt-8 col-span-2 leading-10 text-gray-800 text-2xl">
            <span class="font-bold">¡Seguínos!</span>
            <br>
            <span class="space-x-8 ml-2">
              <a href="#" class="mt-4 text-gray-700 hover:text-blue-700 transition duration-300">
                <i class="fa-brands fa-facebook h-9 mt-4"></i>
              </a>
              <a href="#" class="text-gray-700 hover:text-rose-700 transition duration-300">
                <i class="fa-brands fa-instagram h-9"></i>
              </a>
            </span>
          </p>
        </div>
      </div>
    </div>
    <div class="bottom-0 w-full text-center bg-[#0E6064] py-2 text-gray-200">
      <div class="max-w-7xl mx-auto inline-flex justify-between w-full">
        <p>Aviso Legal Política de Privacidad Política de Cookies Ajustes de Cookies</p>
        <p>Altos Juniors Software Services, S.A. 2023 - Todos los derechos reservados</p>
      </div>
    </div>
  </footer>
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
