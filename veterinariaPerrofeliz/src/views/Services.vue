<script setup>
import carrousel from '../components/carrousel.vue'
</script>
<template>
    <span class="w-100">
        <p class="text-5xl text-center text-gray-700 py-10">NUESTROS SERVICIOS</p>
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

        

    </span>
</template>

<script>

export default {
    name: "GridComponent",
    data() {
        return {
            servicios: [
                {
                    title: "Consultoría Médica",
                    text: "Sabemos que tu mascota es más que un simple animal, es un miembro más de tu familia. En Perro Feliz, ofrecemos consultas médicas para asegurarnos de que tu perro esté siempre saludable y feliz. Nuestro equipo de veterinarios altamente capacitados evaluarán a tu mascota y brindarán asesoramiento sobre su salud, siempre con el bienestar de tu perro en mente.",
                    image: "",
                },
                {
                    title: "Tratamiento Médico",
                    text: "Tu perro merece lo mejor cuando se trata de su salud, y en Perro Feliz estamos comprometidos a proporcionar tratamientos médicos de alta calidad para mantener a tu mascota saludable y feliz. Nuestro equipo de veterinarios expertos evaluará a tu perro y prescribirá el tratamiento adecuado para tratar cualquier problema de salud que pueda presentarse, brindando un cuidado de primera clase para tu perro.",
                    image: "https://img.freepik.com/free-photo/veterinarian-taking-care-pet-dog_23-2149198648.jpg?w=740&t=st=1682631742~exp=1682632342~hmac=4552d2290c3a76975357662901ff73c1e4b2b98ce94560fbedf22975dff07068",
                },
                {
                    title: "Servicio Vacunatorio",
                    text:
                        `Como dueño responsable, sabes que la prevención es clave para la salud de tu perro. En Perro Feliz, ofrecemos un servicio vacunatorio completo que ayudará a proteger a tu mascota de enfermedades infecciosas. Nuestro equipo de veterinarios te guiará para determinar el calendario de vacunación adecuado para tu perro, asegurándote de que tu mascota esté siempre protegida`,
                    image: "https://img.freepik.com/premium-photo/medical-student-smiling-camera-during-class_13339-297488.jpg?w=740",
                },
                {
                    title: "Eutanasia",
                    text:
                        `Sabemos lo difícil que puede ser tomar decisiones importantes sobre la salud de tu mascota, y en Perro Feliz, estamos aquí para apoyarte. Nuestro servicio de eutanasia es realizado con compasión y respeto, garantizando que tu perro no sufra durante el proceso. Nos aseguramos de que tanto tú como tu perro reciban la atención y el apoyo que merecen en este difícil momento.`,
                    image: "",
                },
                {
                    title: "Peluquería Canina",
                    text:
                        `En Perro Feliz, sabemos que la higiene es fundamental para la salud y felicidad de tu perro. Nuestro servicio de peluquería canina ofrece una amplia gama de servicios para mantener a tu mascota limpia, cómoda y feliz. Desde baños relajantes hasta cortes de pelo con estilo, nuestro equipo de expertos en peluquería canina hará que tu perro se sienta como una estrella de cine`,
                    image: "",
                },
                {
                    title: "Aseo (Acicalamiento)",
                    text:
                        `Gerardo Moreno, nuestro fundador y presidente, ideó un sistema contenedor de clientes patentado de Perro Feliz que facilita su transporte y posterior acicalado de la mascota que está siendo atendida. 
`,
                    image: "",
                },
            ],
        };
    },
};
</script>