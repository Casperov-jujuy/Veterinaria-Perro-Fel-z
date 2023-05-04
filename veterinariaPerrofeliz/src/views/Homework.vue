<script setup>
    import { Motion, Presence } from "motion/vue";
    import { ref } from 'vue';
    const show = ref(false)
    const show1 = ref(false)
    const show2 = ref(false)
    const show3 = ref(false)
</script>
<template>
    <div class="mx-auto w-full max-w-7xl">
        <div class="title-line lg:mx-80">
            <p class="text-2xl md:text-3xl font-bold text-center text-teal-700 py-10">Actividad Nº2 - Altos Juniors</p>
        </div>
        <p class="text-xl md:text-2xl font-light text-gray-600 px-4">Desarrollo de la actividad Nº2 de la materia
            Organización Empresarial y Modelos de Negocio. Grupo Altos Juniors G19.
        </p>
        <div class="title-line lg:mx-80 ">
            <p class="text-2xl md:text-3xl font-bold text-center text-teal-700 py-10">Consigna Nº3 - FODA</p>
        </div>
        <div class="bg-gray-200 max-w-7xl flex justify-center py-48">
            <div class="circle scale-[2]">
                <button class="cursor-pointer" @click="show = !show">
                    <div class="quarter yellow hover:scale-110 transition duration-300">
                        <img src="@/assets/img/muscle.png" class="h-11 fixed top-0 left-0 ml-6 mt-6" alt="">
                    </div>
                </button>
                <button class="cursor-pointer" @click="show1 = !show1">
                    <div class="quarter orange hover:scale-110 transition duration-300">
                        <img src="@/assets/img/idea.png" class="h-9 fixed top-0 right-0 mr-8 mt-6" alt="">
                    </div>
                </button>
                <button class="cursor-pointer" @click="show3 = !show3">
                    <div class="quarter bordo hover:scale-110 transition duration-300">
                        <img src="@/assets/img/danger.png" class="h-10 fixed bottom-0 right-0 mr-7 mb-9" alt="">
                    </div>
                </button>
                <button class="cursor-pointer" @click="show2 = !show2">
                    <div class="quarter pink hover:scale-110 transition duration-300">
                        <img src="@/assets/img/chain.png" class="h-8 fixed bottom-0 left-0 ml-7 mb-9" alt="">
                    </div>
                </button>
                <div class="cut"><img src="@/assets/img/logo.webp" class="rounded-full" alt=""></div>
            </div>
        </div>

        <div class="title-line lg:mx-80 ">
            <p class="text-2xl md:text-3xl font-bold text-center text-teal-700 py-10">Consigna Nº5</p>
        </div>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
            
        <!-- MODALES -->
        <Presence>
            <Motion v-if="show" class="max-w-7xl bg-[#e65454] top-[418px] sm:top-[425px] sm:h-[585px] absolute text-white z-50"
                :initial="{ opacity: 0, scale: 0 }" :animate="{ opacity: 1, scale: 1,
                    transition: { delay: 0.1,duration:0.75 } }" :exit="{ opacity: 0, scale: 0.6 }">
                <button class="block text-gray-900 absolute top-0 right-0 pr-10 pt-10 z-30 max-w-7xl"
                    @click="show = !show">
                    <i class="fa-solid fa-angles-left text-white h-10 w-10 hover:scale-125 transition duration-300"></i>
                </button>
                <div class="grid grid-cols-1 xl:grid-cols-2">
                    <div class="col-span-2 px-4 xl:px-16 pt-6 xl:pt-28 pb-8 xl:pb-0 xl:h-[720px]">
                        <p class="font-bold font-[Rubik] py-4 text-2xl md:text-4xl">FORTALEZAS</p>
                        <div class="h-[2px] w-full bg-white"></div>
                        <p class="text-xl pt-4 font-[Rubik] font-light">
                            Dentro de los objetivos a largo plazo de Perro Feliz tenemos:
                        <ul class="list-disc list-outside ml-5 py-2 text-xl">
                            <li>Expandirnos para ofrecer a nuestros clientes una nueva forma de atención especializada y
                                de alta
                                tecnología a
                                nuestros queridos caninos.</li>
                            <li>Ser la veterinaria líder en ofrecer servicios de salud preventiva y tratamiento de
                                enfermedades en
                                animales,
                                trabajando en colaboración con nuestros clientes para lograr una vida saludable para sus
                                mascotas.</li>
                            <li>Implementar un sistema de consultas virtuales para abarcar todas las distintas zonas de
                                la provincia a
                                través
                                de una aplicación móvil, que permita reuniones a distancia y consultoría.</li>
                            <li>Expandir nuestros servicios para incluir la atención médica a animales exóticos.</li>
                        </ul>
                        </p>
                    </div>
                </div>
            </Motion>
        </Presence>
        <Presence>
            <Motion v-if="show1" class="max-w-7xl bg-[#19ab97] top-[418px] sm:top-[425px] sm:h-[585px] absolute text-white z-50"
                :initial="{ opacity: 0, scale: 0 }" :animate="{ opacity: 1, scale: 1,
                    transition: { delay: 0.1,duration:0.75 } }" :exit="{ opacity: 0, scale: 0.6 }">
                <button class="block text-gray-900 absolute top-0 right-0 pr-10 pt-10 z-30 max-w-7xl"
                    @click="show1 = !show1">
                    <i class="fa-solid fa-angles-left text-white h-10 w-10 hover:scale-125 transition duration-300"></i>
                </button>
                <div class="grid grid-cols-1 xl:grid-cols-2">
                    <div class="col-span-2 px-4 xl:px-16 pt-6 xl:pt-28 pb-8 xl:pb-0 xl:h-[720px]">
                        <p class="font-bold font-[Rubik] py-4 text-2xl md:text-4xl">OPORTUNIDADES</p>
                        <div class="h-[2px] w-full bg-white"></div>
                        <p class="text-xl pt-4 font-[Rubik] font-light">
                            Dentro de los objetivos a largo plazo de Perro Feliz tenemos:
                        <ul class="list-disc list-outside ml-5 py-2 text-xl">
                            <li>Expandirnos para ofrecer a nuestros clientes una nueva forma de atención especializada y
                                de alta
                                tecnología a
                                nuestros queridos caninos.</li>
                            <li>Ser la veterinaria líder en ofrecer servicios de salud preventiva y tratamiento de
                                enfermedades en
                                animales,
                                trabajando en colaboración con nuestros clientes para lograr una vida saludable para sus
                                mascotas.</li>
                            <li>Implementar un sistema de consultas virtuales para abarcar todas las distintas zonas de
                                la provincia a
                                través
                                de una aplicación móvil, que permita reuniones a distancia y consultoría.</li>
                            <li>Expandir nuestros servicios para incluir la atención médica a animales exóticos.</li>
                        </ul>
                        </p>
                    </div>
                </div>
            </Motion>
        </Presence>
        <Presence>
            <Motion v-if="show2" class="max-w-7xl bg-[#f8813c] top-[418px] sm:top-[425px] sm:h-[585px] absolute text-white z-50"
                :initial="{ opacity: 0, scale: 0 }" :animate="{ opacity: 1, scale: 1,
                    transition: { delay: 0.1,duration:0.75 } }" :exit="{ opacity: 0, scale: 0.6 }">
                <button class="block text-gray-900 absolute top-0 right-0 pr-10 pt-10 z-30 max-w-7xl"
                    @click="show2 = !show2">
                    <i class="fa-solid fa-angles-left text-white h-10 w-10 hover:scale-125 transition duration-300"></i>
                </button>
                <div class="grid grid-cols-1 xl:grid-cols-2">
                    <div class="col-span-2 px-4 xl:px-16 pt-6 xl:pt-28 pb-8 xl:pb-0 xl:h-[720px]">
                        <p class="font-bold font-[Rubik] py-4 text-2xl md:text-4xl">DEBILIDADES</p>
                        <div class="h-[2px] w-full bg-white"></div>
                        <p class="text-xl pt-4 font-[Rubik] font-light">
                            Dentro de los objetivos a largo plazo de Perro Feliz tenemos:
                        <ul class="list-disc list-outside ml-5 py-2 text-xl">
                            <li>Expandirnos para ofrecer a nuestros clientes una nueva forma de atención especializada y
                                de alta
                                tecnología a
                                nuestros queridos caninos.</li>
                            <li>Ser la veterinaria líder en ofrecer servicios de salud preventiva y tratamiento de
                                enfermedades en
                                animales,
                                trabajando en colaboración con nuestros clientes para lograr una vida saludable para sus
                                mascotas.</li>
                            <li>Implementar un sistema de consultas virtuales para abarcar todas las distintas zonas de
                                la provincia a
                                través
                                de una aplicación móvil, que permita reuniones a distancia y consultoría.</li>
                            <li>Expandir nuestros servicios para incluir la atención médica a animales exóticos.</li>
                        </ul>
                        </p>
                    </div>
                </div>
            </Motion>
        </Presence>
        <Presence>
            <Motion v-if="show3" class="max-w-7xl bg-[#d24373] top-[418px] sm:top-[425px] sm:h-[585px] absolute text-white z-50"
                :initial="{ opacity: 0, scale: 0 }" :animate="{ opacity: 1, scale: 1,
                    transition: { delay: 0.1,duration:0.75 } }" :exit="{ opacity: 0, scale: 0.6 }">
                <button class="block text-gray-900 absolute top-0 right-0 pr-10 pt-10 z-30 max-w-7xl"
                    @click="show3 = !show3">
                    <i class="fa-solid fa-angles-left text-white h-10 w-10 hover:scale-125 transition duration-300"></i>
                </button>
                <div class="grid grid-cols-1 xl:grid-cols-2">
                    <div class="col-span-2 px-4 xl:px-16 pt-6 xl:pt-28 pb-8 xl:pb-0 xl:h-[720px]">
                        <p class="font-bold font-[Rubik] py-4 text-2xl md:text-4xl">AMENAZAS</p>
                        <div class="h-[2px] w-full bg-white"></div>
                        <p class="text-xl pt-4 font-[Rubik] font-light">
                            Dentro de los objetivos a largo plazo de Perro Feliz tenemos:
                        <ul class="list-disc list-outside ml-5 py-2 text-xl">
                            <li>Expandirnos para ofrecer a nuestros clientes una nueva forma de atención especializada y
                                de alta
                                tecnología a
                                nuestros queridos caninos.</li>
                            <li>Ser la veterinaria líder en ofrecer servicios de salud preventiva y tratamiento de
                                enfermedades en
                                animales,
                                trabajando en colaboración con nuestros clientes para lograr una vida saludable para sus
                                mascotas.</li>
                            <li>Implementar un sistema de consultas virtuales para abarcar todas las distintas zonas de
                                la provincia a
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
</template>
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

    button {
        border: none;
        background: transparent;
        padding: 0;
        margin: 0;
        display: flex;
        width: auto;
        height: auto;
        line-height: normal;
        overflow: visible;
        cursor: pointer;

    }

    .circle {
        position: relative;
        width: 200px;
        height: 200px;

    }

    .quarter {
        position: absolute;
        border-radius: 50%;
        width: 200px;
        height: 200px;
    }

    .quarter.yellow {
        background: #e65454;
        clip: rect(0px, 100px, 100px, 0px);
        width: 200px;
    }

    .quarter.orange {
        background: #19ab97;
        clip: rect(0px, 200px, 100px, 100px);
        width: 200px;
    }

    .quarter.bordo {
        background: #d24373;
        clip: rect(100px, 200px, 200px, 100px);
        width: 200px;
    }

    .quarter.pink {
        background: #f8813c;
        clip: rect(100px, 100px, 200px, 0px);
        width: 200px;
    }

    .cut {
        position: absolute;
        top: 25%;
        left: 25%;
        width: 50%;
        height: 50%;
        background-color: white;
        border-radius: 50%;
        pointer-events: none;

    }
</style>