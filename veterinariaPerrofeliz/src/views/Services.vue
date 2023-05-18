<!-- <script setup>
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
</script> -->

<script setup>
import { onMounted, ref, watch } from 'vue';
import { Motion, Presence } from "motion/vue";
import card from '@/components/card.vue';



import imagen1 from '@/assets/img/service1.webp';
import imagen2 from '@/assets/img/service2.webp';
import imagen3 from '@/assets/img/service3.webp';
// import imagen4 from '@/assets/img/service4.webp';
import imagen5 from '@/assets/img/service5.webp';
import imagen6 from '@/assets/img/service6.webp';
import imagen7 from '@/assets/img/service7.webp';
import imagen8 from '@/assets/img/service8.webp';
import imagen9 from '@/assets/img/service9.webp';
import imagen10 from '@/assets/img/service10.webp';
import imagen11 from '@/assets/img/service11.webp';
import imagen12 from '@/assets/img/service12.webp';
import imagen13 from '@/assets/img/service13.webp';
import imagen14 from '@/assets/img/service14.webp';
import imagen15 from '@/assets/img/service15.webp';
import imagen16 from '@/assets/img/service16.webp';
import imagen17 from '@/assets/img/service17.webp';
import imagen18 from '@/assets/img/service18.webp';
import imagen19 from '@/assets/img/service19.webp';
import imagen20 from '@/assets/img/service20.webp';
import imagen21 from '@/assets/img/service21.webp';
import imagen22 from '@/assets/img/service22.avif';
import imagen23 from '@/assets/img/service23.webp';
import imagen24 from '@/assets/img/service24.webp';

const selectedInfo = ref({
    title: "",
    img: "",
    category: "",
    description: "",
})
const flagInfo = ref(false);
const show = ref(false);

function selectNewInfo(i) {
    selectedInfo.value = i;
    flagInfo.value = true;
}

// Categorias -> Servicios Primarios 1 -> Servicios Secundarios 2 -> Otros 3
const images = ref([
    {
        title: "Tratamiento Médico",
        img: imagen2,
        category: "1",
        description: "Tu perro merece lo mejor cuando se trata de su salud, y en Perro Feliz estamos comprometidos a proporcionar tratamientos médicos de alta calidad para mantener a tu mascota saludable y feliz. Nuestro equipo de veterinarios expertos evaluará a tu perro y prescribirá el tratamiento adecuado para tratar cualquier problema de salud que pueda presentarse, brindando un cuidado de primera clase para tu perro.",
    }, {
        title: "Lavado Perro Feliz (máquina)",
        img: imagen24,
        category: "2",
        description: "Es nuestro servicio de acicalamiento más popular. Donde su mascota es colocada en contenedores confortables (patentado) que lo transporta dentro de nuestras instalaciones. El módulo sanitario Perro Feliz es un sistema de lavado automatizado de vanguardia que ha sido cuidadosamente diseñado para brindar una experiencia de lavado segura, cómoda y efectiva para tu perro. Con sus indicadores, luces y ráfagas de vapor, garantiza la protección y el bienestar de tu mascota durante todo el proceso de lavado.",
    },
    {
        title: "Servicio Vacunatorio",
        img: imagen8,
        category: "1",
        description: "Las vacunas son la forma más efectiva para luchar contra ciertas enfermedades muy peligrosas. Ellas protegen a su mascota de diferentes enfermedades que pueden ser peligrosas para su salud. Aunque no son obligatorias, sí hay una serie de vacunas esenciales que les sugerimos para proteger a tu compañero de problemas más graves.",
    }, {
        title: "Tratamiento anti-pulgas",
        img: imagen19,
        category: "2",
        description: "En nuestra Veterinaria, ofrecemos un tratamiento antipulgas personalizado que ha sido desarrollado por nuestro equipo de profesionales, teniendo en cuenta la sensibilidad y características de la piel de cada mascota.",
    },
    {
        title: "Diagnóstico",
        img: imagen1,
        category: "1",
        description: "Nuestros equipos de profesionales tienen una variedad de herramientas y técnicas para ayudar a diagnosticar problemas de salud en las mascotas. Los diagnósticos pueden incluir análisis de sangre, orina y heces, así como radiografías, ecografías, entre otros.",
    }, {
        title: "Venta de alimentos y accesorios",
        img: imagen14,
        category: "3",
        description: "En Perro Feliz, también ofrecemos una amplia variedad de alimentos y accesorios para mascotas de alta calidad. Desde alimentos especializados hasta juguetes y ropa, tenemos todo lo que necesitas para mantener a tu amigo peludo saludable y feliz.",
    }, {
        title: "Lavado a mano",
        img: imagen6,
        category: "2",
        description: "Es el servicio más personalizado que ofrecemos donde un personal capacitado se encarga del baño de su mascota.",
    },
    {
        title: "Prescripciones",
        img: imagen9,
        category: "1",
        description: "En nuestra clínica, nos comprometemos a brindarte un servicio integral que incluye la emisión de prescripciones precisas y claras, así como el asesoramiento necesario para su correcta administración. Estamos aquí para responder todas tus preguntas y brindarte la tranquilidad de saber que estás tomando las medidas adecuadas para el cuidado de tu mascota.",
    }, {
        title: "Corte de pelo",
        img: imagen5,
        category: "2",
        description: "En nuestra veterinaria ofrecemos servicios de peluquería canina, incluyendo cortes de pelo a medida para cada mascota. Contamos con peluqueros profesionales y experimentados que saben cómo tratar a los animales con cuidado y paciencia, utilizando técnicas de corte seguras y efectivas.",
    },
    {
        title: "Cirugías",
        img: imagen10,
        category: "1",
        description: "Las cirugías son una parte importante del cuidado de la salud de las mascotas. Los tipos de cirugías que se realizan en nuestra veterinaria pueden variar desde procedimientos de rutina, hasta cirugías más complejas y lesiones graves.",
    },
    // {
    //     title: "Eutanasia",
    //     img: imagen4,
    //     category: "2",
    //     description: "Sabemos lo difícil que puede ser tomar decisiones importantes sobre la salud de tu mascota, y en Perro Feliz, estamos aquí para apoyarte. Nuestro servicio de eutanasia es realizado con compasión y respeto, garantizando que tu perro no sufra durante el proceso. Nos aseguramos de que tanto tú como él reciban la atención y el apoyo que merecen en este difícil momento.",
    // },
    {
        title: "Castración/estelirización",
        img: imagen11,
        category: "1",
        description: "La castración es un procedimiento quirúrgico común, puede tener muchos beneficios para la salud y el bienestar de las mascotas. En los machos, puede reducir el riesgo de enfermedades como el cáncer testicular y de próstata, así como disminuir la agresividad y el comportamiento territorial. En las hembras, la castración puede prevenir enfermedades del sistema reproductivo, como la piometra, y reducir el riesgo de cáncer de mama y ovarios.",
    },
    {
        title: "Limpieza dental",
        img: imagen7,
        category: "2",
        description: "En nuestra veterinaria incorporamos para la salud bucal de su mascota, nuestro barniz protector patentado que cubre decoloraciones desagradables de los dientes de su mascota.",
    },
    {
        title: "Servicio de emergencias",
        img: imagen12,
        category: "1",
        description: "Las emergencias pueden ocurrir en cualquier momento y pueden ser causadas por diversas razones, como accidentes, enfermedades repentinas o complicaciones en procedimientos médicos. Tenemos a disposición personal altamente capacitado y equipo especializado para ofrecer atención urgente.",
    }, 
    {
        title: "Adopción de mascotas",
        img: imagen15,
        category: "3",
        description: "Colaboramos con organizaciones sin fines de lucro para promover la adopción de animales abandonados o rescatados.",
    },
    {
        title: "Tratamiento de hormonas",
        img: imagen20,
        category: "1",
        description: "El tratamiento con hormonas patentado en perros mayores con pedigrí es una práctica común en la medicina veterinaria. A medida que los perros envejecen, pueden experimentar cambios que afectan su salud y bienestar. Los veterinarios pueden recetar un tratamiento hormonal para ayudar a equilibrar los niveles hormonales del perro y mejorar su calidad de vida.",
    },
    {
        title: "Pedicura",
        img: imagen13,
        category: "2",
        description: "Es otro de los servicios personalizados que ofrecemos, se realiza mediante el corte y limado de las uñas de las mascotas para mantenerlas en una longitud y forma adecuadas. Utilizando herramientas especiales, como cortaúñas y limas, para realizar el procedimiento de manera segura, evitando algún daño o sangrado en las uñas.",
    }, {
        title: "Guardería de mascotas",
        img: imagen17,
        category: "3",
        description: "¿Te vas unos días de viaje? Ofrecemos una guardería de mascotas con instalaciones de alta calidad y personal atento para asegurarnos de que su perro esté seguro y feliz mientras estás fuera.",
    },
    {
        title: "Paseo de mascotas",
        img: imagen16,
        category: "3",
        description: "En Perro Feliz ofrecemos servicios de paseo de perros personalizados para asegurarnos de que tu amigo peludo obtenga la cantidad justa de ejercicio y diversión que necesita para mantenerse saludable y feliz.",
    },
    {
        title: "Música Celestial",
        img: imagen22,
        category: "3",
        description: "En nuestras instalaciones incorporamos para garantizar una estadía placentera para su mascota, un tipo de música de cierta frecuencia inaudible por el oído humano, que tienen un efecto tranquilizante y casi hipnótico en los perros.",
    },
    {
        title: "Recordatorios",
        img: imagen23,
        category: "3",
        description: "Nuestro sistema de recordatorios personalizados te mantendrá informado sobre las fechas de vacunación, desparasitación, chequeos médicos y otros cuidados esenciales para tus mascotas. Nos encargaremos de recordarte con anticipación cada evento importante, para que puedas planificar y asegurarte de que tus animales reciban la atención necesaria en el momento adecuado.",
    },
    {
        title: "Te acompañamos",
        img: imagen18,
        category: "3",
        description: "Queremos estar ahí para ti y tu mascota en los momentos difíciles. Si lamentablemente tu mascota fallece, te ofrecemos un servicio de entrega de un cupón de descuento para que puedas utilizarlo en las tiendas locales en el futuro cuando decidas adoptar un nuevo compañero. Sabemos que tu mascota nunca será reemplazable, pero esperamos que este gesto pueda hacerte sentir que estamos contigo en cada paso del camino.",
    },
]);

const links = ref([
    'Todos',
    'Servicio Médico',
    'Acicalamiento',
    'Otros',
]);
const selected = ref(0);

// const underlineText=(n)=>{
//     selected.value = n;
//     console.log(document.getElementById(`${n}`));
//     document.getElementById(`${n}`).classList.toggle("underlineText");
//     document('.btns').classList.remove("underlineText");
// // }

// let sliderPosition = ref(0);
// let selectedElementWidth = ref(0);
// let selectedIndex = ref(0);

const menu_item_0 = ref(null);
const menu_item_1 = ref(null);
const menu_item_2 = ref(null);
const menu_item_3 = ref(null);

const menuItems = {
    "menu_item_0": menu_item_0,
    "menu_item_1": menu_item_1,
    "menu_item_2": menu_item_2,
    "menu_item_3": menu_item_3,
}

// function sliderIndicator(id) {
//     console.log(id);
//     let el = menuItems[`menu_item_${id}`];
//     console.log(el.value[0]);
//     sliderPosition = el.value[0].offsetLeft;
//     selectedElementWidth = el.value[0].offsetWidth;
//     selectedIndex = id;
//     console.log(positionToMove());
//     console.log(sliderWidth());
// };
// function bold(id) {
//     let el = menuItems[`menu_item_${id}`];
//     el.value[0].classList.add("text-teal-600", "font-bold", "scale-105", "border-b-4", "border-teal-600");
//     for (let i = 0; i < 4; i++) {
//         if (i != id) {
//             menuItems[`menu_item_${i}`].value[0].classList.remove("text-teal-600", "font-bold", "scale-105", "border-b-4", "border-teal-600");
//         };
//     };
//     selected.value = id;
// };



const isShown = ref(true);
const isShownPhone = ref(true);
const hVar = ref('340');
const ventana = ref(null);


const change = ref(true);
const redimensionar = () => {
    console.log(ventana.value.offsetHeight);
    hVar.value = ventana.value.offsetHeight;
}

watch(change, (e) => {
    setTimeout(() => {
        hVar.value = ventana.value.clientHeight;
    }, 450);
});

window.addEventListener('resize', function(event) {
    hVar.value = ventana.value.clientHeight;
});
const scrollToTop = () => {
    window.scrollTo({ top: 310, behavior: "smooth" });
};
// function positionToMove() {
//     return sliderPosition + "px";
// }
// function sliderWidth() {
//     return selectedElementWidth + "px";
// }

</script>
<template>
    <div class="max-w-7xl mx-auto">
        <div class="space-y-3 py-2">
            <div class="title-line lg:mx-80">
                <p class="text-2xl md:text-3xl font-bold text-center text-teal-700 py-4">Nuestros Servicios</p>
            </div>
            <p class="text-xl md:text-2xl font-light text-gray-600 px-4">En Perro Feliz brindamos atención
                completa y de alta calidad a tu mascota. Nos esforzamos por mantener la salud y el bienestar de los animales
                que nos visitan, así como ayudarles a recuperarse cuando están enfermos. Para lograrlo, contamos con un
                equipo altamente capacitado y con instalaciones modernas y bien equipadas.</p>
        </div>
        <Transition enter-active-class="animate__animated animate__zoomIn"
            leave-active-class="animate__animated animate__zoomOut" v-show="flagInfo" mode="out-in">
            <section ref="ventana" class="absolute mt-2 bg-white w-full mx-auto max-w-7xl z-[1]" :key="selectedInfo.title">
                <div class="grid grid-cols-1 md:grid-cols-2 px-4 py-2 border-y-2 ">
                    <div class="col-span-1">
                        <img :src="selectedInfo.img" class="h-80 w-full object-cover" alt="">
                    </div>
                    <div class="col-span-1 grid grid-row-6 grid-col-1">
                        <div class="row-span-1 absolute right-0 top-0 mr-4 mt-4">
                            <div class="w-full">
                                <button @click="isShown = true; isShownPhone = true; flagInfo = false" class="mx-auto ">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        class="h-10 border-2 border-red-400 fill-white hover:scale-110 transition duration-300 bg-red-400 rounded-full"
                                        viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                                        <path
                                            d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div class="row-span-5 my-auto mt-1 md:mt-4">
                            <p class="text-xl md:text-2xl font-medium text-teal-700 py-2 px-4">{{ selectedInfo.title }}
                            </p>
                            <div class="h-[2px] w-48 bg-teal-600 mx-4 transition duration-300 mb-2"></div>
                            <p class="text-lg md:text-xl font-light text-gray-600 px-4">{{ selectedInfo.description }}</p>
                        </div>
                    </div>
                </div>
            </section>
        </Transition>
        <!-- <button @click="moveDown()">Mostrar/ocultar</button> -->
        <div class="relative" :style="{ marginBottom: isShown ? '0' : hVar + 'px' }">
            <div :style="{ top: isShown ? '0' : hVar + 'px' }" :class="{}"
                class="bg-white relative transition-all ease-in-out duration-500 top-0 left-0 w-full">
                <section id="links" class="space-x-12 px-12 text-gray-500 text-xl pb-4 md:py-6 font-light">
                    <div class="buttons relative space-x-4">
                        <nav class="space-x-8 space-y-4 md:space-y-0">
                            <button v-for="(e, index) in links" :key="index" @click="selected = index"
                                v-bind:class="{ 'selected': selected === index }" class="transition duration-300">
                                {{ e }}
                            </button>
                        </nav>
                        <!-- <div id="marker" class="absolute bottom-0 transition duration-300" ref="marker" 
                        :style="{ left: positionToMove,  width: sliderWidth }">
                </div> -->
                    </div>
                </section>
                <section class="px-4 sm:px-12">
                    <TransitionGroup name="fade" tag="ul" mode="out-in" class="text-center overflow-hidden">
                        <li v-for="i in images" :key="i.title" class="inline-flex">
                            <button @click="selectNewInfo(i); scrollToTop(); isShown = false; change = !change"
                                class="hover:scale-105 transition duration-300 border-2 mx-1 my-1 rounded-md w-[280px] min-[400px]:w-[320px] min-[450px]:w-[400px] sm:w-[400px] md:w-[300px] xl:w-[380px]"
                                v-if="i.category == selected || selected == 0">
                                <img v-show="i.category == selected || selected == 0" :src="i.img"
                                    class="mx-auto h-72 w-full object-cover overflow-hidden rounded-t-md" alt="img">
                                <p class="text-lg font-medium px-2 py-2 text-center text-teal-600">{{ i.title }}</p>
                            </button>
                            <!-- <card v-if="i.category == selected || selected == 0" :title="i['title']" :img="i['img']"/> -->
                        </li>
                    </TransitionGroup>
                </section>
            </div>
        </div>
    </div>
</template>
<style scoped>
/* #marker {
    @apply h-1 bg-teal-600 mx-0 w-12;
} */

/* .underlineText{
    @apply border-b-4 text-teal-600 border-teal-600 font-bold transition duration-300;
} */
.animate__animated.animate__zoomOut,
.animate__animated.animate__zoomIn {
    --animate-duration: 0.4s;
}

.selected {
    @apply text-teal-600 font-bold scale-105 border-b-4 border-teal-600;
}

.moving-div {
    position: absolute;
    transition: top 0.5s ease-in-out;
    width: 100px;
    height: 100px;
    background-color: red;
}

.slide-enter-active,
.slide-leave-active {
    transition: all 0.3s ease-out;
}

.slide-leave-to {
    transform: translateY(-100%);
    opacity: 0;
}

.slide-enter-to {
    transform: translateY(100%);
    opacity: 1;
}


.fade-move,
.fade-enter-active,
.fade-leave-active {
    transition: all .6s ease;
}

.fade-enter-from,
.fade-leave-to {
    transform: translateY(30px);
    opacity: 0;
}

.fade-leave-active {
    position: absolute;
}

@keyframes fade {
    0% {
        opacity: 0;
        width: 0;
        height: 0;
        transform: scale(0);
    }

    100% {
        opacity: 1;
        width: 100%;
        transform: scale(1);
    }
}

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