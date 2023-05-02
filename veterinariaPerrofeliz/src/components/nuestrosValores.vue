<script setup>
import { Motion, Presence } from "motion/vue";
import { ref, onMounted, onUnmounted } from 'vue';
const show = ref()
const show1 = ref()
const show2 = ref()
const show3 = ref()
const show4 = ref()

const handleResize = () => {
  show.value = window.innerWidth < 1280; 
  show1.value = window.innerWidth < 1280; 
  show2.value = window.innerWidth < 1280; 
  show3.value = window.innerWidth < 1280; 
  show4.value = window.innerWidth < 1280; 
};

onMounted(() => {
  handleResize();
  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});

</script>

<template>
  <div class="max-w-7xl pt-4 hidden xl:block">
    <button @click="show = !show" class="ml-[544px] mt-[535px] absolute z-40 transition ease-in-out duration-300">
      <button
        class="py-2 px-4 h-14 w-14 bg-[#446BE1] hover:scale-125 transition duration-300 text-white rounded-full absolute z-20">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 absolute mt-[11px] ml-[12px] left-0 top-0 fill-white"
          viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
          <path
            d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96v32V480H384V128 96 56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM96 96H64C28.7 96 0 124.7 0 160V416c0 35.3 28.7 64 64 64H96V96zM416 480h32c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H416V480zM224 208c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v48h48c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H288v48c0 8.8-7.2 16-16 16H240c-8.8 0-16-7.2-16-16V320H176c-8.8 0-16-7.2-16-16V272c0-8.8 7.2-16 16-16h48V208z" />
        </svg>
      </button>
      <!-- <p class="text-gray-600 font-md text-2xl absolute left-44 top-52 z-20 w-52 text-center mr-48">Quiénes somos</p> -->
    </button>
    <button @click="show1 = !show1" class="ml-[233px] mt-[255px] absolute transition ease-in-out duration-300">
      <button
        class="py-2 px-4 h-14 w-14 bg-[#7BBD64] hover:scale-125 transition duration-300 text-white rounded-full absolute z-20">
        <i class="fa-solid fa-star h-8  absolute top-0 left-0 ml-[11px] mt-[11px]"></i>
      </button>
      <!-- <p class="text-gray-600 font-md text-2xl absolute left-[-73px] top-[56px] z-20 w-52 text-center mr-48 pr-1">Filosofía
      </p> -->
    </button>
    <button @click="show2 = !show2" class="ml-[332px] mt-[430px] absolute">
      <button
        class="py-2 px-4 h-14 w-14 bg-[#F69F45] hover:scale-125 transition duration-300 text-white rounded-full absolute z-20 fill-white">
        <svg xmlns="http://www.w3.org/2000/svg" class=""
          viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
          <path
            d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm306.7 69.1L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
        </svg>
      </button>
      <!-- <p class="text-gray-600 font-md text-2xl absolute left-[-73px] top-14 z-20 w-52 text-center mr-48 pr-1">Misión</p>       -->
    </button>
    <button @click="show3 = !show3" class="ml-[878px] mt-[610px] absolute">
      <button
        class="py-2 px-4 h-14 w-14 bg-[#F1172F] hover:scale-125 transition duration-300 text-white rounded-full absolute z-20 fill-white">
        <svg xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
          <path
            d="M118.6 80c-11.5 0-21.4 7.9-24 19.1L57 260.3c20.5-6.2 48.3-12.3 78.7-12.3c32.3 0 61.8 6.9 82.8 13.5c10.6 3.3 19.3 6.7 25.4 9.2c3.1 1.3 5.5 2.4 7.3 3.2c.9 .4 1.6 .7 2.1 1l.6 .3 .2 .1 .1 0 0 0 0 0s0 0-6.3 12.7h0l6.3-12.7c5.8 2.9 10.4 7.3 13.5 12.7h40.6c3.1-5.3 7.7-9.8 13.5-12.7l6.3 12.7h0c-6.3-12.7-6.3-12.7-6.3-12.7l0 0 0 0 .1 0 .2-.1 .6-.3c.5-.2 1.2-.6 2.1-1c1.8-.8 4.2-1.9 7.3-3.2c6.1-2.6 14.8-5.9 25.4-9.2c21-6.6 50.4-13.5 82.8-13.5c30.4 0 58.2 6.1 78.7 12.3L481.4 99.1c-2.6-11.2-12.6-19.1-24-19.1c-3.1 0-6.2 .6-9.2 1.8L416.9 94.3c-12.3 4.9-26.3-1.1-31.2-13.4s1.1-26.3 13.4-31.2l31.3-12.5c8.6-3.4 17.7-5.2 27-5.2c33.8 0 63.1 23.3 70.8 56.2l43.9 188c1.7 7.3 2.9 14.7 3.5 22.1c.3 1.9 .5 3.8 .5 5.7v6.7V352v16c0 61.9-50.1 112-112 112H419.7c-59.4 0-108.5-46.4-111.8-105.8L306.6 352H269.4l-1.2 22.2C264.9 433.6 215.8 480 156.3 480H112C50.1 480 0 429.9 0 368V352 310.7 304c0-1.9 .2-3.8 .5-5.7c.6-7.4 1.8-14.8 3.5-22.1l43.9-188C55.5 55.3 84.8 32 118.6 32c9.2 0 18.4 1.8 27 5.2l31.3 12.5c12.3 4.9 18.3 18.9 13.4 31.2s-18.9 18.3-31.2 13.4L127.8 81.8c-2.9-1.2-6-1.8-9.2-1.8zM64 325.4V368c0 26.5 21.5 48 48 48h44.3c25.5 0 46.5-19.9 47.9-45.3l2.5-45.6c-2.3-.8-4.9-1.7-7.5-2.5c-17.2-5.4-39.9-10.5-63.6-10.5c-23.7 0-46.2 5.1-63.2 10.5c-3.1 1-5.9 1.9-8.5 2.9zM512 368V325.4c-2.6-.9-5.5-1.9-8.5-2.9c-17-5.4-39.5-10.5-63.2-10.5c-23.7 0-46.4 5.1-63.6 10.5c-2.7 .8-5.2 1.7-7.5 2.5l2.5 45.6c1.4 25.4 22.5 45.3 47.9 45.3H464c26.5 0 48-21.5 48-48z" />
        </svg>
      </button>
      <!-- <p class="text-gray-600 font-md text-2xl absolute left-[-73px] top-14 z-20 w-52 text-center mr-48 pr-1">Visión
      </p> -->

    </button>
    <button @click="show4 = !show4" class="ml-[210px] mt-[76px] absolute z-40 transition ease-in-out duration-300">
      <button
        class="py-2 px-4 h-14 w-14 bg-[#F35D6D] hover:scale-125 transition duration-300 text-white rounded-full absolute z-20">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 absolute mt-[13px] ml-[15px] left-0 top-0 fill-white"
          viewBox="0 0 384 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
          <path
            d="M297.2 248.9C311.6 228.3 320 203.2 320 176c0-70.7-57.3-128-128-128S64 105.3 64 176c0 27.2 8.4 52.3 22.8 72.9c3.7 5.3 8.1 11.3 12.8 17.7l0 0c12.9 17.7 28.3 38.9 39.8 59.8c10.4 19 15.7 38.8 18.3 57.5H109c-2.2-12-5.9-23.7-11.8-34.5c-9.9-18-22.2-34.9-34.5-51.8l0 0 0 0c-5.2-7.1-10.4-14.2-15.4-21.4C27.6 247.9 16 213.3 16 176C16 78.8 94.8 0 192 0s176 78.8 176 176c0 37.3-11.6 71.9-31.4 100.3c-5 7.2-10.2 14.3-15.4 21.4l0 0 0 0c-12.3 16.8-24.6 33.7-34.5 51.8c-5.9 10.8-9.6 22.5-11.8 34.5H226.4c2.6-18.7 7.9-38.6 18.3-57.5c11.5-20.9 26.9-42.1 39.8-59.8l0 0 0 0 0 0c4.7-6.4 9-12.4 12.7-17.7zM192 128c-26.5 0-48 21.5-48 48c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-44.2 35.8-80 80-80c8.8 0 16 7.2 16 16s-7.2 16-16 16zm0 384c-44.2 0-80-35.8-80-80V416H272v16c0 44.2-35.8 80-80 80z" />
        </svg>
      </button>
      <!-- <p class="text-gray-600 font-md text-2xl absolute left-44 top-52 z-20 w-52 text-center mr-48">Quiénes somos</p> -->
    </button>
  </div>

  <img src="@/assets/img/logo.png" class="px-24 md:px-48 lg:px-72 xl:hidden" alt="">

  <!-- VENTANAS MODALES -->
  <div class="space-y-2 xl:space-y-0 xl:my-0 mx-2 xl:mx-0">
  <Presence>
    <Motion v-if="show4" class="box bg-[#F35D6D] px-4 xl:px-0 xl:absolute mx-auto text-white z-50"
      :initial="{ opacity: 0, y: 50 }" :animate="{
          opacity: 1,
          y: 0,
          transition: { delay: 0.1 }
        }" :exit="{ opacity: 0, y: 50 }">
      <button class="hidden xl:block text-gray-900 absolute top-0 right-0 pr-10 pt-10 z-30 max-w-7xl"
        @click="show4 = !show4">
        <i class="fa-solid fa-angles-left text-white h-10 w-10 hover:scale-125 transition duration-300"></i>
      </button>
      <div class="grid grid-cols-1 xl:grid-cols-2">
        <div class="col-span-1 bg-white h-[300px] md:h-[500px] xl:h-[720px] order-last xl:order-first">
          <img src="@/assets/img/about3.webp" class="overflow-hidden object-cover h-full" alt="">
        </div>
        <div class="col-span-1 px-4 xl:px-16 pt-6 xl:pt-28 pb-8 xl:pb-0 xl:h-[720px]">
          <p class="font-bold font-[Rubik] py-4 text-4xl">UNA IDEA, UN EMPRENDIMIENTO</p>
          <div class="h-[2px] w-full bg-white"></div>
          <p class="text-2xl pt-4 font-[Rubik] font-light">Gerardo Moreno fundó Perro Feliz tras el regreso de uno de sus
            viajes en el
            que su mascota necesitó atención veterinaria urgente. Y dado el estricto horario de atención de las
            veterinarias de la región, decidió abrir su propia veterinaria enfocada en el bienestar animal, aplicando sus
            conocimientos como ingeniero. Dichos conocimientos también le permitieron crear el módulo sanitario para
            facilitar la atención a sus clientes. </p>
        </div>
      </div>
    </Motion>
  </Presence>
  <Presence>
    <Motion v-if="show1" class="box bg-[#7BBD64] px-4 xl:px-0 xl:absolute mx-auto text-white z-50" :initial="{ opacity: 0, x: 50 }"
      :animate="{
          opacity: 1,
          x: 0,
          transition: { delay: 0.1 }
        }" :exit="{ opacity: 0, x: -50 }">
      <button class="hidden xl:block text-gray-900 absolute top-0 right-0 pr-10 pt-10 z-30 max-w-7xl"
        @click="show1 = !show1">
        <i class="fa-solid fa-angles-left text-white h-10 w-10 hover:scale-125 transition duration-300"></i>
      </button>
      <div class="grid grid-cols-1 xl:grid-cols-2">
        <div class="col-span-1 bg-white h-[300px] md:h-[500px] xl:h-[720px] order-last xl:order-first">
          <img src="@/assets/img/about2.webp" class="overflow-hidden object-cover h-full" alt="">
        </div>
        <div class="col-span-1 px-4 xl:px-16 pt-6 xl:pt-48 pb-8 xl:pb-0 xl:h-[720px]">
          <p class="font-bold font-[Rubik] py-4 text-4xl">NUESTRA FILOSOFÍA</p>
          <div class="h-[2px] w-full bg-white"></div>
          <p class="text-2xl pt-4 font-[Rubik] font-light">Nos comprometemos con la educación continua y el
            perfeccionamiento de técnicas y
            conocimientos, para ofrecer siempre una atención médica calificada y de calidad a nuestros clientes.
          </p>
        </div>
      </div>
    </Motion>
  </Presence>
  <Presence>
    <Motion v-if="show2" class="box bg-[#F69F45] px-4 xl:px-0 xl:absolute mx-auto text-white z-50" :initial="{ opacity: 0, x: 50 }"
      :animate="{
          opacity: 1,
          x: 0,
          transition: { delay: 0.1 }
        }" :exit="{ opacity: 0, x: -50 }">
      <button class="hidden xl:block text-gray-900 absolute top-0 right-0 pr-10 pt-10 z-30 max-w-7xl"
        @click="show2 = !show2">
        <i class="fa-solid fa-angles-left text-white h-10 w-10 hover:scale-125 transition duration-300"></i>
      </button>
      <div class="grid grid-cols-1 xl:grid-cols-2">
        <div class="col-span-1 bg-white h-[300px] md:h-[500px] xl:h-[720px] order-last xl:order-first">
          <img src="@/assets/img/about1.webp" class="overflow-hidden object-cover h-full" alt="">
        </div>
        <div class="col-span-1 px-4 xl:px-16 pt-6 xl:pt-48 pb-8 xl:pb-0 xl:h-[720px]">
          <p class="font-bold font-[Rubik] py-4 text-4xl">NUESTRA MISIÓN</p>
          <div class="h-[2px] w-full bg-white"></div>
          <p class="text-2xl pt-4 font-[Rubik] font-light">Nuestra misión es brindar servicios veterinarios de alta
            calidad. Nos enfocamos en la prevención, diagnóstico y tratamiento de enfermedades en las mascotas, con el
            objetivo de prolongar su vida y mejorar su bienestar.
          </p>
        </div>
      </div>
    </Motion>
  </Presence>
  <Presence>
    <Motion v-if="show"
      class="box bg-blue-600 px-4 xl:px-0 xl:absolute mx-auto text-white z-50"
      :initial="{ opacity: 0, y: 50 }" :animate="{
          opacity: 1,
          y: 0,
          transition: { delay: 0.1 }
        }" :exit="{ opacity: 0, y: 50 }">
      <button class="hidden xl:block text-gray-900 absolute top-0 right-0 pr-10 pt-10 z-30 max-w-7xl"
        @click="show = !show">
        <i class="fa-solid fa-angles-left text-white h-10 w-10 hover:scale-125 transition duration-300"></i>
      </button>
      <div class="grid grid-cols-1 xl:grid-cols-2">
        <div class="col-span-1 bg-white h-[300px] md:h-[500px] xl:h-[720px] order-last xl:order-first">
          <img src="@/assets/img/aboutalt.webp" class="overflow-hidden object-cover h-full" alt="">
        </div>
        <div class="col-span-1 px-4 xl:px-16 pt-6 xl:pt-48 pb-8 xl:pb-0 xl:h-[720px]">
          <p class="font-bold font-[Rubik] py-4 text-4xl">QUIÉNES SOMOS</p>
          <div class="h-[2px] w-full bg-white"></div>
          <p class="text-2xl pt-4 font-[Rubik] font-light">Perro Feliz es una cadena de veterinarias en crecimiento que
            proporciona el cuidado necesario para la buena salud de sus mascotas, diseñado
            para los propietarios de perros siempre activos. </p>
        </div>
      </div>
    </Motion>
  </Presence>
  <Presence>
    <Motion v-if="show3" class="box bg-[#F1172F] px-4 xl:px-0 xl:absolute mx-auto text-white z-50" :initial="{ opacity: 0, y: 50 }"
      :animate="{
          opacity: 1,
          y: 0,
          transition: { delay: 0.1 }
        }" :exit="{ opacity: 0, y: 50 }">
      <button class="hidden xl:block text-gray-900 absolute top-0 right-0 pr-10 pt-10 z-30 max-w-7xl"
        @click="show3 = !show3">
        <i class="fa-solid fa-angles-left text-white h-10 w-10 hover:scale-125 transition duration-300"></i>
      </button>
      <div class="grid grid-cols-1 xl:grid-cols-2">
        <div class="col-span-1 bg-white h-[300px] md:h-[500px] xl:h-[720px] order-last xl:order-first">
          <img src="@/assets/img/about5.webp" class="overflow-hidden object-cover h-full" alt="">
        </div>
        <div class="col-span-1 px-4 xl:px-16 pt-6 xl:pt-16 pb-8 xl:pb-0 xl:h-[720px]">
          <p class="font-bold font-[Rubik] py-4 text-4xl">NUESTRA VISIÓN</p>
          <div class="h-[2px] w-full bg-white"></div>
          <p class="text-xl pt-4 font-[Rubik] font-light">
            Dentro de los objetivos a largo plazo de Perro Feliz tenemos:
          <ul class="list-disc list-outside ml-5 py-2 text-xl">
            <li>Expandirnos para ofrecer a nuestros clientes una nueva forma de atención especializada y de alta
              tecnología a
              nuestros queridos caninos.</li>
            <li>Ser la veterinaria líder en ofrecer servicios de salud preventiva y tratamiento de enfermedades en
              animales,
              trabajando en colaboración con nuestros clientes para lograr una vida saludable para sus mascotas.</li>
            <li>Implementar un sistema de consultas virtuales para abarcar todas las distintas zonas de la provincia a
              través
              de una aplicación móvil, que permita reuniones a distancia y consultoría.</li>
            <li>Expandir nuestros servicios para incluir la atención médica a animales exóticos.</li>
          </ul>
          </p>
        </div>
      </div>
    </Motion>
  </Presence>
</div>

  <img src="@/assets/img/about.png" class="relative rounded-2xl hidden xl:block" alt="">
  <br>
</template>
  
<style scoped>
@media (max-width: 3000px) {
  .box {
    border-radius: 5px;
    max-width: 80rem;
    width: 100%;
    height: 720px
  }
}
@media (max-width: 1280px) {
  .box {
    border-radius:5px;
    width: 100%;
    height: 100%;
    padding-bottom: 25px;
  }
}

img {
  width: 100%;
  z-index: 0;
}</style>