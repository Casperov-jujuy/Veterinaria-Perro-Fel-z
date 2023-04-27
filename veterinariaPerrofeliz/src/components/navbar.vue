<template>
  <!-- ESTE NAVBAR NO ES MIO -> CREDITOS A https://github.com/frontendfunn/vuejs-navbar-component/blob/main/src/components/Navbar.vue -->
  <ul class="my-auto menu">
    <div
      class="menu-indicator"
      :style="{ left: positionToMove, width: sliderWidth }"
    ></div>
    <li
      class="menu-item"
      v-for="link in links"
      :key="link.id"
      @click="sliderIndicator(link.id)"
      :ref="'menu-item_' + link.id"
    >
      <RouterLink
        v-slot="{route}"
        :to="`${link.to}`"
        class="menu-link"
        active-class="text-blue-700 font-bold"
        :class="link.id === selectedIndex ? 'active' : null"
      > 
        <span>{{ link.text }}</span>
      </RouterLink>
    </li>
  </ul>
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
          to: "/contact",
          text: "CONTACTO",
        }
      ],
    };
  },
  mounted() {
    this.navigateToAbout()
  },
  methods: {     
    navigateToAbout() {
      router.push('/')
      this.sliderIndicator(1)
    },
    sliderIndicator(id) {
      let el = this.$refs[`menu-item_${id}`][0];
      this.sliderPosition = el.offsetLeft;
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
  padding-bottom: 24px;
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