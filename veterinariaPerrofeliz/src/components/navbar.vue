<template>
  <!-- ESTE NAVBAR NO ES MIO -> CREDITOS A https://github.com/frontendfunn/vuejs-navbar-component/blob/main/src/components/Navbar.vue -->
  <div class="md:py-2 max-w-7xl mx-auto">
    <div class="inline-flex justify-between w-full px-4">
      <div class="space-x-3 my-auto">
        <a href="#" class="text-gray-700 hover:text-blue-700 transition duration-300">
          <i class="fa-brands fa-facebook h-4 md:h-6"></i>
        </a>
        <a href="#" class="text-gray-700 hover:text-rose-700 transition duration-300">
          <i class="fa-brands fa-instagram h-4 md:h-6"></i>
        </a>
        <a href="#" class="text-gray-700 hover:text-green-700 transition duration-300">
          <i class="fa-brands fa-whatsapp h-4 md:h-6"></i>
        </a>
      </div>
      <p class="text-gray-500 md:text-lg text-[12px] my-auto "> turnos@PerroFeliz.com | +543886547141</p>
    </div>
  </div>
  <div class="border-y-2 h-[85px] pt-2">
    <div class="max-w-7xl mx-auto my-auto">
      <div class="text-gray-500 text-xl px-4 space-x-1 inline-flex w-full justify-between">
        <a @click="navigate('/', 1, 0)" href="#"><img alt="Vue logo" class="logo" src="@/assets/img/veterinaria.webp"
            width="170" height="125" />
        </a>
        <!-- <hamburguer @click="toggleMenu" class="px-4 py-2 h-[50px]">
          
          
        </hamburguer> -->
        <div @click="toggleMenu();" class="cursor-pointer lg:hidden pb-4 pr-4 transition duration-300">
          <button ref="menutoggle" class="flex toggle w-full cursor-pointer pt-8 pr-10" >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
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
            <RouterLink v-slot="{ route }" :to="`${link.to}`" @click="toggleMenu()" class="text-2xl text-gray-600"
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
import { ref, onMounted } from 'vue';
export default {
  data() {
    const route = useRoute()
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
        },
        {
          id: 6,
          to: "/homework",
          text: "📚✨",
        }
      ],
    };
  },
  mounted() {
    window.addEventListener('popstate', this.handleBackButton)
    this.navigate('/', 1, 6)
  },
  methods: {
    handleBackButton() {
      // Aquí puedes hacer algo cuando el usuario hace clic en el botón "Atrás"
      console.log('El usuario hizo clic en el botón "Atrás"');
      this.sliderIndicator(this.$route.meta.id, 0);
    },
    navigate(url, id, desp) {
      router.push(url)
      this.sliderIndicator(id, desp)
    },
    sliderIndicator(id, add) {
      let el = this.$refs[`menu-item_${id}`][0];
      this.sliderPosition = el.offsetLeft + add;
      this.selectedElementWidth = el.offsetWidth;
      this.selectedIndex = id;
    },
    saludar(){
        alert('ola')
    },
    toggleMenu() {
      this.showMenu = !this.showMenu;
      this.$refs.menutoggle.classList.toggle('active');
    }
  },
  beforeUnmount() {
    window.removeEventListener('popstate', this.handleBackButton)
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

/* MENU HAMBURGUER */
.toggle {
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 2px;
}

.toggle span {
  position: absolute;
  width: 60px;
  height: 4px;
  background: rgb(15 118 110);
  border-radius: 3px;
  transition: 0.5s;
}

.toggle span:nth-child(1) {
  transform: translateY(-15px);
  width: 35px;
  left: 20px;
}

.toggle.active span:nth-child(1) {
  width: 40px;
  transform: translateY(0px) rotate(45deg);
  transition-delay: 0.125seg;
}

.toggle span:nth-child(2) {
  transform: translateY(15px);
  width: 20px;
  left: 35px;
}

.toggle.active span:nth-child(2) {
  width: 40px;
  transform: translateY(0px) translateX(-14px) rotate(315deg);
  transition-delay: 0.25seg;
}

.toggle span:nth-child(3) {
  width: 30px;
  left: 25px;
}

.toggle.active span:nth-child(3) {
  transform: translateX(60px);
}</style>