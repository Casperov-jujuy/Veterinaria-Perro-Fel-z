<script setup>
import { RouterLink, RouterView, useRouter } from 'vue-router'
import router from '@/router';
import { ref, onMounted } from 'vue';
import { Motion, Presence } from "motion/vue";
import navbar from './components/navbar.vue'
// import componentFooter from './components/componentFooter.vue'
// import Loader from './components/Loader.vue'
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
import 'animate.css';
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/vue';
const isOpenM = ref(false)

function modalGroup() {
  isOpenM.value = true;
}

function closeModal() {
  isOpenM.value = false
}
function openModal() {
  isOpenM.value = true
}
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const mostrarGoTop = ref(false);
window.onscroll = () => {
  if (document.documentElement.scrollTop > 100) {
    mostrarGoTop.value = true;
  } else {
    mostrarGoTop.value = false;
  }
}

</script>

<template>
  <div class="font-[Rubik] h-screen">
    <!-- NAVBAR -->
    <header class="z-[100] relative bg-white">
      <Presence>
        <Motion class="" :initial="{ opacity: 0, y: -50 }" :animate="{
            opacity: 1,
            y: 0,
            transition: { delay: 0.1, duration: 1.5 }
          }" :exit="{ opacity: 0, y: 50 }">
          <navbar ref="navbarComponent"></navbar>
        </Motion>
      </Presence>
    </header>

    <!-- BOTON GO BACK TOP -->
    <div
      class="fixed right-[1rem] bottom-[3rem] md:right-[4rem] md:bottom-[4rem] w-[3.6rem] h-[3.6rem] z-[100]">
      <Presence>
        <Motion v-show="mostrarGoTop" :initial="{ opacity: 0, y: -50 }" :animate="{
            opacity: 1, y: 0,
            transition: { delay: 0.1, duration: 1.5 }
          }" :exit="{ opacity: 0, y: 50 }">
          <button @click="scrollToTop">
            <div class="py-4 px-[19px] mx-auto bg-teal-700 rounded-full cursor-pointer animate-pulse">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-[1.7rem] fill-white"
                viewBox="0 0 384 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path
                  d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
              </svg>
            </div>
          </button>
        </Motion>
      </Presence>
    </div>

    <!-- ACÁ SE RENDERIZA LAS RUTAS -->
    <RouterView v-slot="{ Component }">
      <Transition enter-active-class="animate__animated animate__fadeInUp"
        leave-active-class="animate__animated animate__fadeOutDown" mode="out-in">
        <component :is="Component" @modalGroup="modalGroup" class="mx-auto" />
      </Transition>
    </RouterView>


    <!-- ACÁ EMPIEZA EL FOOTER: PODRIA HABER SIDO UN COMPONENTE COMO SE VE ABAJO
       PERO LA DE COMUNICACION ENTRE COMPONENTES TE LA DEBO (tambien por razones de tiempo) -->
    <footer class="z-[-10] mx-auto w-full relative bottom-0 -mt-[200px] ">
      <div style="height: 300px; overflow: hidden;">
        <svg viewBox="0 -100 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;">

          <path d="M-18.34,46.88 C189.33,-66.59 210.21,73.53 503.10,42.94 L500.00,150.00 L0.00,150.00 Z"
            style="stroke: none; fill: #92E0E4;"></path>

        </svg>

      </div>
      <div class="bg-[#92E0E4] w-full">

        <!-- No sé cuál es la forma correcta de hacer uso de metodos de otro componente pero yo lo hice asi: -->
        <!-- Puse ref="algo" en el componente navbar y luego puedo invocar sus metodos con this.$refs.algo.METODO() -->
        <div class="">
          <div
            class="max-w-7xl w-full pt-4 md:pt-0 mx-auto px-12 sm:px-24 grid grid-cols-2 md:grid-cols-5 md:px-24 gap-4 md:gap-10 justify-between text-[#535353] pb-5">
            <div class="col-span-1 md:col-span-2 lg:col-span-1">
              <p class="leading-7 md:leading-10 md:text-xl w-full"><span class="font-bold">Nosotros</span><br>
                <button @click="$refs.navbarComponent.navigate('/about', 2, 0); scrollToTop();">

                  Sobre Nosotros
                </button><br>

                <button
                  @click="$refs.navbarComponent.navigate('/contact', 5, 0); scrollToTop(); ">Contacto</button><br>
              </p>
            </div>
            <div class="col-span-1 sm:col-span-2 lg:col-span-1">
              <p class="leading-7 md:leading-10 md:text-xl col-span-1"><span class="font-bold">Asistencia</span><br>
                <button
                  @click="$refs.navbarComponent.navigate('/services', 3, 0); scrollToTop(); ">Servicios</button><br>
                <button
                  @click="$refs.navbarComponent.navigate('/contact', 5, 0); scrollToTop(); ">Sucursales</button><br>
                <button
                  @click="$refs.navbarComponent.navigate('/doctors', 4, 0); scrollToTop(); ">Especialidades</button><br>

              </p>
            </div>
            <div class="col-start-5">
              <p class="mx-auto mt-8  -pt-26 lg:pt-6 md:pb-2 leading-10 text-gray-800 text-2xl">
                <span class="font-bold">¡Seguínos!</span>
              <div class="space-x-8 ml-2 inline-flex">
                <a href="#" class="text-gray-700 hover:text-blue-700 transition duration-300">
                  <i class="fa-brands fa-facebook h-9  "></i>
                </a>
                <a href="#" class="text-gray-700 hover:text-rose-700 transition duration-300">
                  <i class="fa-brands fa-instagram h-9"></i>
                </a>
              </div>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="bottom-0 w-full text-center bg-[#0E6064] py-2 text-gray-200">
        <div class="max-w-7xl mx-auto space-y-4 md:space-y-0 text-center w-full">
          <button @click=" openModal() ">
            <p>Altos Juniors Software Services, S.A. 2023 - Todos los derechos reservados</p>
          </button>
        </div>
      </div>
    </footer>

    <!-- MODAL PARA MOSTRAR LOS INTEGRANTES DEL GRUPO -->
    <TransitionRoot appear :show="isOpenM" as="template">
      <Dialog as="div" @close=" closeModal " class="relative z-[2100]">
        <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100"
          leave="duration-900 ease-in" leave-from="opacity-100" leave-to="opacity-0">
          <div class="fixed inset-0 bg-black bg-opacity-20" />
        </TransitionChild>

        <div class="font-[Rubik] fixed inset-0 overflow-y-auto">
          <div class="flex min-h-full items-center justify-center md:p-4 text-center">
            <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
              enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
              leave-to="opacity-0 scale-95">
              <DialogPanel
                class="w-full md:max-w-6xl transform overflow-hidden border-4 border-teal-600 bg-white p-6 pt-8 text-left align-middle shadow-xl transition-all">
                <DialogTitle
                  class="text-xl mx-auto lg:text-3xl font-bold leading-6 text-gray-700 md:flex space-x-4 px-8 border-2 border-teal-600">
                  <img src="@/assets/img/logoEmpresa.jpg" class="h-24 mx-auto md:mx-0 md:h-36 py-4" alt="">
                  <p class="my-auto"> - Altos Juniors Software Services S.A. 2023 - Group Nº19</p>
                </DialogTitle>
                <div class="md:pl-14">
                  <p class="text-2xl pt-4 font-medium text-gray-600">
                    <span class="underline font-bold">Integrantes de Altos Juniors:</span>
                  <div class="md:flex lg:space-x-60">
                    <ul class="list-disc list-outside ml-5 md:py-2 md:text-2xl">
                      <li>Montellano, Leandro Agustín</li>
                      <li>Mendez, Luis Sebastian</li>
                      <li>Mansilla, Daniel Agustín</li>
                      <li>Montaño, Facundo Nestor</li>
                      <li>Martinez, Maximiliano Joaquín</li>
                    </ul>
                    <ul class="list-disc list-outside ml-5 md:py-2 md:text-2xl">
                      <li>Flores, Hernan</li>
                      <li>Rodríguez, Victor Joaquín</li>
                      <li>Sanchez, Juan Pedro</li>
                      <li>Calle, Gustavo Javier</li>
                    </ul>
                  </div>
                  </p>
                </div>
                <div class="mt-4 flex justify-center">
                  <button type="button"
                    class="inline-flex justify-center rounded-sm border border-transparent bg-teal-600 px-4 py-2 text-xl font-medium text-white hover:bg-blue-700 hover:scale-105 transition duration-300"
                    @click=" closeModal ">
                    Cerrar
                  </button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>

    <!-- <componentFooter class="z-[-10] transition duration-300" /> -->

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
