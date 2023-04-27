<script setup>
import carrousel from '../components/carrousel.vue'
</script>
<template>
    <span class="w-100">
        <p class="text-5xl text-center text-gray-700 py-10">SECCION ABOUT</p>
        <div class="grid grid-cols-1 w-100">
            <div v-for="(servicio, index) in servicios" :key="index" class="grid grid-cols-2 place-items-center">
                <div :class="index % 2 === 0 ? 'order-first sm:order-last' : 'order-last sm:order-first'" class="">
                    <img :src="servicio.image" alt="imagen" class="object-cover w-full h-full" />
                </div>
                <div :class="index % 2 === 0 ? 'order-last sm:order-first' : 'order-first sm:order-last'" class="">
                    <h1 class="text-4xl text-center text-teal-600 font-bold my-5">{{ servicio.title }}</h1>
                    <p class="text-xl mx-5 text-gray-500 whitespace-pre-wrap leading-10">{{ servicio.text }}</p>
                </div>
            </div>
        </div>

        <div>
            <h1 class="text-5xl text-center text-gray-700 my-10">Nuestra Vision </h1>
                    <carrousel />
        </div>

    </span>
</template>

<script>

export default {
    name: "GridComponent",
    data() {
        return {
            servicios: [
                {
                    title: "Quiénes Somos",
                    text: "Perro Feliz es una cadena de veterinarias en crecimiento que proporciona el cuidado de sus mascotas, diseñado para los propietarios de perros siempre activos.",
                    image: "https://img.freepik.com/free-photo/cute-dog-during-consultation_23-2149314348.jpg?w=740&t=st=1682631642~exp=1682632242~hmac=0bfac98385e019584114435bccb5740b45c44b112f79aeb4ca0d2b1610397ec1",
                },
                {
                    title: "Misión",
                    text: "Nuestra misión es brindar servicios veterinarios de alta calidad. Nos enfocamos en la prevención, diagnóstico y tratamiento de enfermedades en las mascotas, con el objetivo de prolongar su vida y mejorar su bienestar.",
                    image: "https://img.freepik.com/free-photo/veterinarian-taking-care-pet-dog_23-2149198648.jpg?w=740&t=st=1682631742~exp=1682632342~hmac=4552d2290c3a76975357662901ff73c1e4b2b98ce94560fbedf22975dff07068",
                },
                {
                    title: "Filosofia",
                    text:
                        `Nos comprometemos con la educación continua y el perfeccionamiento de técnicas y conocimientos, para ofrecer siempre una atención médica calificada y de calidad a nuestros clientes.\nTenemos una mirada protectora en cuanto a la fauna silvestre de nuestra provincia, realizamos colaboraciones y aportes para la conservación de la misma.Nuestra empresa es una asociación de respetados profesionales veterinarios de la región  que trabajan fuertemente priorizando la calidad del servicio.`,
                    image: "https://img.freepik.com/premium-photo/medical-student-smiling-camera-during-class_13339-297488.jpg?w=740",
                }
            ],
        };
    },
};
</script>
