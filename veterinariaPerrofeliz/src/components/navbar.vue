<template>
  <!-- ESTE NAVBAR NO ES MIO -> CREDITOS A https://github.com/frontendfunn/vuejs-navbar-component/blob/main/src/components/Navbar.vue -->
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
  <div class="border-y-2 h-[85px] pt-2">
    <div class="max-w-7xl mx-auto my-auto">
      <div class="text-gray-500 text-xl px-4 space-x-1 inline-flex w-full justify-between">
        <a @click="navigateToHome(0)" href="#"><img alt="Vue logo" class="logo" src="@/assets/img/veterinaria.webp"
            width="170" height="125" />
        </a>
        <button @click="showMenu = !showMenu" class="lg:hidden hover:scale-110 transition duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 my-auto fill-gray-600"
            viewBox="0 0 448 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
            <path
              d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
          </svg>
        </button>
        <!-- BARRA DE NAVEGACIÓN PANTALLAS GRANDES -->
        <div class="hidden lg:block">
          <ul class="my-auto menu">
            <div class="menu-indicator" :style="{ left: positionToMove, width: sliderWidth }"></div>
            <li class="menu-item" v-for="link in links" :key="link.id" @click="sliderIndicator(link.id, 0)"
              :ref="'menu-item_' + link.id">
              <RouterLink v-slot="{ route }" :to="`${link.to}`" class="menu-link" active-class=""
                :class="link.id === selectedIndex ? 'active' : null">
                <span>{{ link.text }}</span>
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- BARRA DE NAVEGACIÓN PARA MOVILES -->
    <transition name="bounce">
      <div v-if="showMenu" class="absolute border-t-2 w-full bg-white z-[2000] text-center space-y-4 shadow-xl">
        <ul class="my-auto mx-auto w-full py-6">
          <li class="py-6" v-for="link in links" :key="link.id">
            <RouterLink v-slot="{ route }" :to="`${link.to}`" @click="showMenu = !showMenu" class="text-2xl text-gray-600"
              active-class="font-bold text-[#208875] border-b-4 border-[#208875]"
              :class="link.id === selectedIndex ? 'active' : null">
              <span>{{ link.text }}</span>
            </RouterLink>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
import { Motion, Presence } from "motion/vue";
import { useRoute } from 'vue-router';
import router from '@/router';
import { ref } from 'vue';
export default {

  data() {
    return {
      showMenu: ref(false),
      sliderPosition: 0,
      selectedElementWidth: 0,
      selectedIndex: 0,
      links: [
        {
          id: 1,
          to: "/",
          text: "INICIO",
        },
        {
          id: 2,
          to: "/about",
          text: "NOSOTROS",
        },
        {
          id: 3,
          to: "/services",
          text: "SERVICIOS",
        },
        {
          id: 4,
          to: "/doctors",
          text: "ESPECIALISTAS",
        },
        {
          id: 5,
          to: "/contact",
          text: "CONTACTO",
        }
      ],
    };
  },
  mounted() {
    this.navigateToHome(6)
  },
  methods: {
    navigateToHome(desp) {
      router.push('/')
      this.sliderIndicator(1, desp)
    },
    sliderIndicator(id, add) {
      let el = this.$refs[`menu-item_${id}`][0];
      this.sliderPosition = el.offsetLeft + add;
      this.selectedElementWidth = el.offsetWidth;
      this.selectedIndex = id;
    },
  },
  computed: {
    positionToMove() {
      return this.sliderPosition + "px";
    },
    sliderWidth() {
      return this.selectedElementWidth + "px";
    },
  },
};
</script>

<style>
:root {
  --active-color: #208875;
  --link-text-color: #717171;
  --menu-background-color: #ffffff;
  --active-background-color: #ffffff;
}

/* ul */
.menu {
  padding-top: 19px;
  padding-bottom: 26px;
  position: relative;
  display: inline-flex;
  list-style-type: none;
  overflow: hidden;
  margin-bottom: -16px;
}

/* li */
.menu-item {
  display: inline-flex;
}

/* a */
.menu-link {
  padding-left: 1rem;
  padding-right: 1rem;
  display: inline-flex;
  align-items: center;
  color: var(--link-text-color);
  text-decoration: none;
}

.menu-link:hover,
.menu-link.active {
  color: var(--active-color);
  background-color: var(--active-background-color);
  font-weight: 500;
}

/* slider */
.menu-indicator {
  position: absolute;
  height: 0.30rem;
  background-color: var(--active-color);
  bottom: 0;
  left: 0;
  width: 3rem;
  transition: all ease 0.5s;
}
/* ANIMACION PARA LA NAVBAR DE VERSION MOVIL */
.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>