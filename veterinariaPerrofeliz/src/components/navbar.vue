<template>
  <!-- ESTE NAVBAR NO ES MIO -> CREDITOS A https://github.com/frontendfunn/vuejs-navbar-component/blob/main/src/components/Navbar.vue -->
  <div class="md:py-2 max-w-7xl mx-auto">
    <div class="flex justify-between mx-4 md:px-0">
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
      <div class="md:flex space-x-2">
        <p class="text-gray-500 text-lg my-auto">turnos@PerroFeliz.com </p>
        <p class="text-gray-500 text-lg my-auto hidden md:flex"> | </p>
        <p class="text-gray-500 text-lg my-auto text-center"> +543886547141 </p>
      </div>
    </div>
  </div>
  <div class="border-y-2 h-[85px] mx-auto">
    <div class="max-w-7xl mx-auto my-auto">
      <div class="text-gray-500 text-xl space-x-1 w-full h-[85px] md:inline-flex flex justify-between px-4 md:pb-0 md:px-0">
        <a @click="navigateToHome(0)" href="#"><img alt="Vue logo" class="logo pt-2" src="@/assets/img/veterinaria.webp"
            width="170" height="125" />
        </a>
        <!-- MENU RESPONSIVE -->
        <div class="md:hidden my-auto mr-0">
          <button id="menu" @click="menu()">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 fill-gray-700"
              viewBox="0 0 448 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
              <path
                d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
            </svg>
          </button>
        </div>

        <!-- ESTE ES LA LISTA CON LOS LINKS -->
            <div class="md:flex">
              <ul class="my-auto md:menu bg-white  md:flex opacity-0 md:opacity-100 top-[60px] left-[-600px] md:left-[0px] md:top-[0px] z-50 md:z-10 transition ease-in-out duration-300" id="lista">
                <div class="menu-indicator hidden md:flex" :style="{ left: positionToMove, width: sliderWidth }"></div>

                <li class="md:inline-flex" v-for="link in links" :key="link.id" @click="sliderIndicator(link.id, 0)"
                  :ref="'menu-item_' + link.id">
                  <RouterLink v-slot="{ route }" :to="`${link.to}`" @click="menuClick" class="menu-link" active-class=""
                    :class="link.id === selectedIndex ? 'active' : null">
                    <span>{{ link.text }}</span>
                  </RouterLink>
                </li>
              </ul>
            </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Motion, Presence } from "motion/vue";
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import router from '@/router'
export default {

  data() {
    return {
      showMenu: ref(true),
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
          text: "ACERCA DE",
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
    this.navigateToHome(7)
  },
  methods: {
    menu() {
      let list = document.querySelector('#lista');
      list.classList.toggle('left-[-600px]')
      list.classList.toggle('opacity-0')
      list.classList.toggle('opacity-100')
    },
    menuClick() {
      let list = document.querySelector('#lista');
      list.classList.add('opacity-0')
      list.classList.remove('opacity-100')
      list.classList.add('left-[-600px]')
    },
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
  list-style-type: none;
  overflow: hidden;
  margin-bottom: -16px;
}

/* a */
.menu-link {
  padding-left: 1rem;
  padding-right: 1rem;
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
</style>