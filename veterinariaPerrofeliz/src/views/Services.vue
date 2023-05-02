<script setup>
import imagen1 from '@/assets/img/service1.webp';
import imagen2 from '@/assets/img/service2.webp';
import imagen3 from '@/assets/img/service3.webp';
import imagen4 from '@/assets/img/service4.webp';
import imagen5 from '@/assets/img/service5.webp';
import imagen6 from '@/assets/img/service6.webp';

</script>
<template>
    <div class="w-full">
        <span class="">
            <div class="title-line lg:mx-80">
                <p class="text-2xl md:text-3xl font-bold text-center text-teal-700 py-10">Nuestros Servicios</p>
            </div>
            <div class=" w-100 pb-6">
                <div v-for="(servicio, index) in servicios" :key="index" class="grid md:grid-cols-2">
                    <div :class="index % 2 === 0 ? 'order-last md:order-last' : 'order-last md:order-first'" class="">
                        <img :src='`${servicio.image}`' alt="imagen" class="object-cover w-full h-full" />
                    </div>
                    <div class="py-10 bg-gray-200">
                        <h1 class="text-2xl mx-8 text-teal-700 font-bold my-5">{{ servicio.title }}</h1>
                        <p class="text-xl font-light mx-8 text-gray-600 whitespace-pre-wrap leading-10">{{ servicio.text }}</p>
                    </div>
                </div>
            </div>
        </span>
    </div>
</template>
<style scoped>
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
</style>

<script>

export default {
    name: "GridComponent",
    data() {
        return {
            servicios: [
                {
                    title: "Consultoría Médica",
                    text: "Sabemos que tu mascota es más que un simple animal, es un miembro más de tu familia. En Perro Feliz, ofrecemos consultas médicas para asegurarnos de que tu perro esté siempre saludable y feliz. Nuestro equipo de veterinarios altamente capacitados evaluarán a tu mascota y brindarán asesoramiento sobre su salud, siempre con el bienestar de tu perro en mente.",
                    image: imagen1,
                },
                {
                    title: "Tratamiento Médico",
                    text: "Tu perro merece lo mejor cuando se trata de su salud, y en Perro Feliz estamos comprometidos a proporcionar tratamientos médicos de alta calidad para mantener a tu mascota saludable y feliz. Nuestro equipo de veterinarios expertos evaluará a tu perro y prescribirá el tratamiento adecuado para tratar cualquier problema de salud que pueda presentarse, brindando un cuidado de primera clase para tu perro.",
                    image: imagen2,
                },
                {
                    title: "Servicio Vacunatorio",
                    text:
                        `Como dueño responsable, sabes que la prevención es clave para la salud de tu perro. En Perro Feliz, ofrecemos un servicio vacunatorio completo que ayudará a proteger a tu mascota de enfermedades infecciosas. Nuestro equipo de veterinarios te guiará para determinar el calendario de vacunación adecuado para tu perro, asegurándote de que tu mascota esté siempre protegida`,
                    image: imagen3,
                },
                {
                    title: "Eutanasia",
                    text:
                        `Sabemos lo difícil que puede ser tomar decisiones importantes sobre la salud de tu mascota, y en Perro Feliz, estamos aquí para apoyarte. Nuestro servicio de eutanasia es realizado con compasión y respeto, garantizando que tu perro no sufra durante el proceso. Nos aseguramos de que tanto tú como tu perro reciban la atención y el apoyo que merecen en este difícil momento.`,
                    image: imagen4,
                },
                {
                    title: "Peluquería Canina",
                    text:
                        `En Perro Feliz, sabemos que la higiene es fundamental para la salud y felicidad de tu perro. Nuestro servicio de peluquería canina ofrece una amplia gama de servicios para mantener a tu mascota limpia, cómoda y feliz. Desde baños relajantes hasta cortes de pelo con estilo, nuestro equipo de expertos en peluquería canina hará que tu perro se sienta como una estrella de cine`,
                    image: imagen5,
                },
                {
                    title: "Aseo (Acicalamiento)",
                    text:
                        `Gerardo Moreno, nuestro fundador y presidente, ideó un sistema contenedor de clientes patentado de Perro Feliz que facilita su transporte y posterior acicalado de la mascota que está siendo atendida. 
`,
                    image: imagen6,
                },
            ],
        };
    },
};
</script>