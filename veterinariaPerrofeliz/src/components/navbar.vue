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
      <div class="text-gray-500 text-xl space-x-1 inline-flex w-full justify-between">
        <a @click="navigateToHome(0)" href="#" ><img alt="Vue logo" class="logo" src="@/assets/img/veterinaria.webp" width="170" height="125" />
        </a>
        <div>
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
  </div>
</template>

<script>

import { useRoute } from 'vue-router';
import router from '@/router'
export default {

  data() {
    return {
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
    this.navigateToHome(0)
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
</style>