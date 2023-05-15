<template>
  <div class="space-y-3 py-2">
    <div class="title-line lg:mx-80">
      <p class="text-2xl md:text-3xl font-bold text-center text-teal-700 py-4">¡Bienvenido a Perro Feliz!</p>
    </div>
    <p class="text-xl md:text-2xl font-light text-gray-600 px-4 pb-4 md:text-center">Sitio web oficial de la cadena de veterinarias líder en nuestra región.</p>
  </div>
  <swiper :modules="modules" :slides-per-view="1" :space-between="25" navigation :pagination="{ clickable: true }"
    @swiper="onSwiper" @slideChange="onSlideChange" :autoplay="{
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }" class="cursor-grab rounded-md mx-4">
    <swiper-slide><img src="@/assets/img/a1.webp" class="w-full h-auto" alt=""></swiper-slide>
    <swiper-slide><img src="@/assets/img/a2.webp" class="w-full h-auto" alt=""></swiper-slide>
    <swiper-slide><img src="@/assets/img/a3.webp" class="w-full h-auto" alt=""></swiper-slide>
    ...
  </swiper>
</template>
<script>
// import Swiper core and required modules
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Import Swiper styles
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Autoplay, Navigation, Pagination, Scrollbar, A11y],
    };
  },
};
</script>
<style>
.title-line {
  display: flex;
  align-items: center;
  justify-content: center;
}

.title-line::before,
.title-line::after {
  content: "";
  flex: 1;
  border-bottom: 3px solid rgb(13 148 136);
  margin: 0 1rem;
}

:root {
  --swiper-theme-color: white !important
}

.swiper-pagination-bullet {
  width: var(--swiper-pagination-bullet-width, var(--swiper-pagination-bullet-size, 12px));
  height: var(--swiper-pagination-bullet-height, var(--swiper-pagination-bullet-size, 12px));
}</style>