<template>
    <swiper :navigation="true" :modules="modules" class="mySwiper my-10">
        <swiper-slide v-for="(objetivo, index) in objetivos" :key="index">
            <div :class="'w-full h-[32rem]  bg-cover bg-center bg-[url('+objetivo.image+')]'">
                <div class="w-full h-full flex flex-col justify-center items-center backdrop-blur-sm">
                    <div class="flex justify-center items-center bg-black bg-opacity-50 h-1/2 w-full">
                        <h1 class="px-20 mt-5 text-center text-3xl text-white font-semibold drop-shadow-lg leading-10">
                            {{objetivo.text}}
                        </h1>

                    </div>
                </div>
            </div>
        </swiper-slide>
    </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    data() {
        return {
            objetivos: [
                {
                    text: "Expandirnos para ofrecer a nuestros clientes una nueva forma de atención especializada y de alta tecnología a nuestros queridos caninos",
                    image: "https://img.freepik.com/free-photo/close-up-man-woman-with-cat_23-2149304290.jpg?w=740&t=st=1682636296~exp=1682636896~hmac=a18a4288559a56d0fb215f496f91798abbcf77c66719a71636bd6e811da0fd16"
                },
                {
                    text: "Ser la veterinaria líder en ofrecer servicios de salud preventiva y tratamiento de enfermedades en animales, trabajando en colaboración con nuestros clientes para lograr una vida saludable para sus mascotas.",
                    image: "https://img.freepik.com/free-photo/cute-dog-during-consultation_23-2149314354.jpg?w=740&t=st=1682637742~exp=1682638342~hmac=9d2398f6cd11421f5d840a5cb163772360fd9da1794d7f3cd48237df9c8b4b15"
                },
                {
                    text: "Implementar un sistema de consultas virtuales para abarcar todas las distintas zonas de la provincia a través de una aplicación móvil, que permita reuniones a distancia y consultoría.",
                    image: "https://img.freepik.com/free-photo/doctor-holding-tablet-e-health-concept-business-concept_1384-176.jpg?w=740&t=st=1682636230~exp=1682636830~hmac=ba44dfbc6630be113afe3aa0833098d98944c8c739a67e495d83c47a79e60230"
                },
                {
                    text: "Expandir nuestros servicios para incluir la atención médica a animales exóticos.",
                    image: "https://img.freepik.com/premium-photo/doctor-woman-veterinarian-examining-green-quaker-parrot_116407-18862.jpg?w=740"
                }
            ]

        }
    },
    setup() {
        return {
            modules: [Navigation],
        };
    },
};
</script>
