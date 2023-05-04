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
            <p class="text-2xl md:text-3xl font-bold text-center text-teal-700 py-10 inline-flex">
                Actividad Nº2 - Altos Juniors
                <button class="flex" @click="$emit('modalGroup')">
                <svg xmlns="http://www.w3.org/2000/svg" class="my-auto hover:scale-150 transition duration-300 cursor-pointer pl-4 fill-yellow-600 hover:fill-yellow-500 h-10"
                    viewBox="0 0 640 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                    <path
                        d="M72 88a56 56 0 1 1 112 0A56 56 0 1 1 72 88zM64 245.7C54 256.9 48 271.8 48 288s6 31.1 16 42.3V245.7zm144.4-49.3C178.7 222.7 160 261.2 160 304c0 34.3 12 65.8 32 90.5V416c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V389.2C26.2 371.2 0 332.7 0 288c0-61.9 50.1-112 112-112h32c24 0 46.2 7.5 64.4 20.3zM448 416V394.5c20-24.7 32-56.2 32-90.5c0-42.8-18.7-81.3-48.4-107.7C449.8 183.5 472 176 496 176h32c61.9 0 112 50.1 112 112c0 44.7-26.2 83.2-64 101.2V416c0 17.7-14.3 32-32 32H480c-17.7 0-32-14.3-32-32zm8-328a56 56 0 1 1 112 0A56 56 0 1 1 456 88zM576 245.7v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM320 32a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM240 304c0 16.2 6 31 16 42.3V261.7c-10 11.3-16 26.1-16 42.3zm144-42.3v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM448 304c0 44.7-26.2 83.2-64 101.2V448c0 17.7-14.3 32-32 32H288c-17.7 0-32-14.3-32-32V405.2c-37.8-18-64-56.5-64-101.2c0-61.9 50.1-112 112-112h32c61.9 0 112 50.1 112 112z" />
                </svg></button>
            </p>
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
            <p class="text-2xl md:text-3xl font-bold text-center text-teal-700 py-10">Consigna Nº5 - Indicadores</p>
        </div>

        <div class="px-4">
            <p class="text-xl md:text-2xl font-bold text-left text-teal-700 ">
                <span class="underline"> Indicador relacionado con los CLIENTES:</span>
                Lograr satisfacción y lealtad del cliente
            </p>
            <!-- TITULO SUBRAYADO Y PARRAFO -->
            <p class="text-xl md:text-2xl font-bold text-left text-teal-700 py-4">
                <span class="underline"> Descripción:</span>
            </p>
            <p class="text-xl md:text-2xl font-light text-gray-600">La satisfacción y lealtad sólo pueden lograrse si el
                cliente tiene una buena imagen
                de la veterinaria, imagen relacionada a los servicios que ofrece. Si el cliente está
                satisfecho y es leal a la veterinaria, volverá siempre en lugar de concurrir a otras.
            </p>
            <!-- TITULO SUBRAYADO Y PARRAFO -->
            <p class="text-xl md:text-2xl font-bold text-left text-teal-700 py-4">
                <span class="underline"> Objetivos estratégicos precedentes:</span>
            </p>
            <p class="text-xl md:text-2xl font-light text-gray-600">Mejorar imagen y conocimiento de la veterinaria.
            </p>
            <!-- TITULO SUBRAYADO Y PARRAFO -->
            <p class="text-xl md:text-2xl font-bold text-left text-teal-700 py-4">
                <span class="underline">Indicadores para el objetivo “Lograr la satisfacción y lealtad del
                    cliente”:</span>
            </p>
            <p class="text-xl md:text-2xl font-bold text-teal-700 pb-2">
                Nivel de satisfacción del cliente:

            </p>
            <p class="text-xl md:text-2xl font-light text-gray-600">
                <span class="font-bold text-teal-700"> Descripción:</span>
                Permite evaluar el nivel de satisfacción percibido por los clientes con respecto a
                la veterinaria. Este indicador se obtiene a través de encuestas efectuadas a los
                clientes que visitan la veterinaria. Se efectuarán, en principio, 90 encuestas: tres
                encuestas por día, una en cada turno. En la encuesta se solicitará al cliente que
                responda su grado de satisfacción con la empresa, de 1 a 3, siendo 1 satisfecho,
                2 indiferente y 3 insatisfecho. Se espera que los resultados de tipo 1 (satisfecho)
                sean altos y vayan en aumento a lo largo del tiempo, en detrimento de las
                respuestas de tipo 2 (indiferente) y 3 (insatisfecho).
            </p>
            <p class="text-xl md:text-2xl font-bold text-left text-teal-700 py-4">
                <span class="underline">Fórmula:</span>
            </p>
            <img src="@/assets/img/t1.png" class="mx-auto md:h-14" alt="">
            <p class="text-xl md:text-2xl font-bold text-left text-teal-700 py-4">
                <span class="underline">Variables</span>
            </p>
            <ul class="list-decimal list-outside ml-14 py-2 text-xl md:text-2xl font-light text-gray-600">
                <li>Cantidad de respuestas de un tipo: Se toma la cantidad de encuestas que
                    poseen la respuesta que se desea analizar.
                </li>
                <li>Cantidad de encuestas efectuadas: Se toma la cantidad total de encuestas
                    efectuadas. En caso de haber podido cumplir con la cantidad planeada,
                    este valor debería ser 90.</li>
            </ul>
            <!-- TITULOS NEGRITA Y TEXTO LIGHT -->
            <p class="text-xl md:text-2xl font-bold text-left text-teal-700 py-4">
                <span class="underline">Frecuencia de actualización:</span>
                <span class="text-xl md:text-2xl font-light text-gray-600"> Mensual</span>
            </p>
            <p class="text-xl md:text-2xl font-bold text-left text-teal-700 py-4">
                <span class="underline">Valor Meta:</span>
                <span class="text-xl md:text-2xl font-light text-gray-600"> Valor presupuestado para respuesta de cada
                    tipo.</span>
            </p>
            <p class="text-xl md:text-2xl font-bold text-left text-teal-700 py-4">
                <span class="underline">Evaluación de desvíos:</span>
                <span class="text-xl md:text-2xl font-light text-gray-600"> respecto al valor presupuestado y respecto al
                    mes
                    anterior, para respuestas de tipo 1 (satisfecho). Se tomarán valores porcentuales.</span>
            </p>
            <img src="@/assets/img/t2.png" class="mx-auto md:h-96 pb-4" alt="">

            <p class="text-xl md:text-2xl font-bold text-teal-700">Nivel de lealtad del cliente:</p>
            <p class="text-xl md:text-2xl font-bold text-teal-700 py-2">Descripción:</p>
            <p class="text-xl md:text-2xl font-light text-gray-600">
                Permite evaluar si los clientes son leales a volver, diferenciando entre aquellos
                que visitan la veterinaria, la mayoría de las veces, sólo a veces o casi nunca. Este
                indicador se obtiene a través de encuestas efectuadas a los clientes que visitan la
                veterinaria. Se efectuarán, en principio, 90 encuestas: tres encuestas por día, una
                en cada turno. En la encuesta se solicitará al cliente que responda, teniendo en
                cuenta todas las veces que trae a su/s mascota/s para los distintos servicios que
                ofrece la veterinaria, con qué frecuencia lo hace en esta sucursal, siendo 1
                siempre, 2 la mayoría de las veces, 3 sólo a veces y 4 casi nunca. Se espera que
                los resultados de tipo 1 (siempre) y 2 (la mayoría de las veces) sean altos y vayan
                en aumento a lo largo del tiempo, en detrimento de las respuestas de tipo 3 (sólo
                a veces) y 4 (casi nunca).
                Esta pregunta no deberá ser respondida por clientes que visitan la veterinaria por
                primera vez.</p>

            <p class="text-xl md:text-2xl font-bold text-teal-700">Fórmula:</p>
            <img src="@/assets/img/t3.png" class="mx-auto md:h-32" alt="">
            <p class="text-xl md:text-2xl font-bold text-teal-700">Variables:</p>
            <ul class="list-decimal list-outside ml-14 py-2 text-xl md:text-2xl font-light text-gray-600">
                <li>Cantidad de respuestas de un tipo: Se toma la cantidad de encuestas que
                    poseen la respuesta que se desea analizar.
                </li>
                <li>Cantidad de encuestas efectuadas: Se toma la cantidad total de encuestas
                    efectuadas. En caso de haber podido cumplir con la cantidad planeada,
                    este valor debería ser 90.</li>
            </ul>

            <p class="text-xl md:text-2xl font-bold text-left text-teal-700 py-4">
                <span class="underline">Frecuencia de actualización:</span>
                <span class="text-xl md:text-2xl font-light text-gray-600"> Mensual</span>
            </p>
            <p class="text-xl md:text-2xl font-bold text-left text-teal-700 py-4">
                <span class="underline">Valor Meta:</span>
                <span class="text-xl md:text-2xl font-light text-gray-600"> Valor presupuestado para respuesta de cada
                    tipo.</span>
            </p>
            <p class="text-xl md:text-2xl font-bold text-left text-teal-700 py-4">
                <span class="underline">Evaluación de desvíos:</span>
                <span class="text-xl md:text-2xl font-light text-gray-600">
                    respecto a valor presupuestado y respecto a mes anterior,
                    para respuestas de tipo 1 y 2 (siempre y la mayoría de las veces). Se tomarán valores
                    porcentuales</span>
            </p>

            <img src="@/assets/img/t4.png" class="mx-auto md:h-96 pb-4" alt="">

            <p class="text-xl md:text-2xl font-bold text-left text-teal-700 pt-4">
                <span class="underline"> Indicador relacionado con los PROCESOS:</span>
                <span class="text-xl md:text-2xl font-light text-gray-600"> Adecuar instalaciones</span>
            </p>
            <p class="text-xl md:text-2xl font-bold text-left text-teal-700 py-4">
                <span class="underline"> Descripción:</span>
            </p>
            <p class="text-xl md:text-2xl font-light text-gray-600">El contexto de negocios de las clínicas veterinarias
                tampoco es ajeno al contexto
                cambiante de la economía y los negocios en general. Dada la gran cantidad de
                necesidades que se deben satisfacer, siempre será necesario adecuar las
                instalaciones para poder hacerlo satisfactoriamente. Por ende, requiere de
                actualizaciones y reformas continuas a fin de poder abastecer calidad y variedad
                en los servicios y así poder mantener el nivel de ingresos. Por ello, y más aún en
                este tipo de negocios, la adecuación de las instalaciones es un factor fundamental.
                Por supuesto, se deberá efectuar una evaluación sobre los costos de la
                adecuación y los beneficios de la misma y, según el resultado de esta evaluación,
                decidir sobre la conveniencia de efectuarla.
            </p>
            <p class="text-xl md:text-2xl font-bold text-left text-teal-700 py-4">
                <span class="underline">Objetivos estratégicos precedentes:</span>
            </p>
            <p class="text-xl md:text-2xl font-light text-gray-600">Adoptar tecnología y herramientas; asesoramiento
            </p>
            <p class="text-xl md:text-2xl font-bold text-left text-teal-700 py-4">
                <span class="underline">Indicadores para el objetivo “Adecuar Instalaciones”:</span>
            </p>
            <p class="text-xl md:text-2xl font-light text-gray-600">Impacto de la inversión en adecuación
            </p>
            <p class="text-xl md:text-2xl font-bold text-left text-teal-700 py-4">
                <span class="">Descripción:</span>
            </p>
            <p class="text-xl md:text-2xl font-light text-gray-600">Permite evaluar el posible impacto de la inversión
                realizada para la adecuación de
                las instalaciones, en pos de mejorar la calidad y la variedad de los servicios, en
                los ingresos del periodo posterior a la inversión.</p>

            <p class="text-xl md:text-2xl font-bold text-teal-700 pt-4">Fórmula:</p>
            <img src="@/assets/img/t5.png" class="mx-auto md:h-10" alt="">
            <p class="text-xl md:text-2xl font-bold text-teal-700">Variables:</p>
            <ul class="list-decimal list-outside ml-14 py-2 text-xl md:text-2xl font-light text-gray-600">
                <li>Inversión en la adecuación: se mide en pesos argentinos. Es toda aquella
                    inversión destinada al mejoramiento de las instalaciones, en pos de mejorar
                    los servicios como así también la calidad de los mismos, que se haya
                    efectuado en el semestre anterior al semestre analizado.
                </li>
                <li>Ingresos: se mide en pesos argentinos. Se toman los ingresos del semestre
                    actual (posterior al semestre en el que se efectuó la inversión).</li>
            </ul>
            <!-- TITULOS NEGRITA Y TEXTO LIGHT -->
            <p class="text-xl md:text-2xl font-bold text-left text-teal-700 py-4">
                <span class="underline">Frecuencia de actualización:</span>
                <span class="text-xl md:text-2xl font-light text-gray-600"> Semestral</span>
            </p>
            <p class="text-xl md:text-2xl font-bold text-left text-teal-700 py-4">
                <span class="underline">Valor Meta:</span>
                <span class="text-xl md:text-2xl font-light text-gray-600"> Valor presupuestado</span>
            </p>
            <p class="text-xl md:text-2xl font-bold text-left text-teal-700 py-4">
                <span class="underline">Evaluación de desvíos:</span>
                <span class="text-xl md:text-2xl font-light text-gray-600"> con respecto al semestre anterior y con respecto
                    al
                    presupuestado. Se tomarán valores porcentuales.</span>
            </p>
            <img src="@/assets/img/t6.png" class="mx-auto md:h-96 pb-4" alt="">
        </div>
        <!-- MODALES -->
        <Presence>
            <Motion v-if="show"
                class="max-w-7xl w-full bg-[#e65454] top-[418px] sm:top-[425px] sm:h-[585px] absolute text-white z-50"
                :initial="{ opacity: 0, scale: 0 }" :animate="{
                    opacity: 1, scale: 1,
                    transition: { delay: 0.1, duration: 0.75 }
                }" :exit="{ opacity: 0, scale: 0.6 }">
                <button class="block text-gray-900 absolute top-0 right-0 pr-10 pt-10 z-30 max-w-7xl" @click="show = !show">
                    <i class="fa-solid fa-angles-left text-white h-10 w-10 hover:scale-125 transition duration-300"></i>
                </button>
                <div class="grid grid-cols-1 xl:grid-cols-2">
                    <div class="col-span-2 px-4 xl:px-16 pt-6 xl:pt-28 pb-8 xl:pb-0 xl:h-[720px]">
                        <p class="font-bold font-[Rubik] py-4 text-2xl md:text-4xl">FORTALEZAS</p>
                        <div class="h-[2px] w-full bg-white"></div>
                        <p class="text-xl md:text-2xl pt-4 font-[Rubik] font-light">
                        <ul class="list-disc list-outside ml-5 py-2 ">
                            <li>Continua inversión en la actualización y adaptación para el confort en nuestras
                                sucursales
                            </li>
                            <li>Buena llegada de nuestra imagen y oferta al público</li>
                            <li>Equipo de profesionales abierto al debate sobre las nuevas problemáticas que se
                                plantean.
                            </li>
                            <li>Servicio de bajo costo y buena calidad que se encuentre al alcance del cliente.</li>
                            <li>Las sucursales ubicadas en lugares estratégicos(accesibilidad).</li>
                            <li>Horarios de atención adecuados.</li>
                            <li>Alta fidelización de los clientes.</li>
                            <li>Mecanismo innovador en el traslado de las mascotas(sistema de contenedor de clientes).
                            </li>
                        </ul>
                        </p>
                    </div>
                </div>
            </Motion>
        </Presence>
        <Presence>
            <Motion v-if="show1"
                class="max-w-7xl w-full bg-[#19ab97] top-[418px] sm:top-[425px] sm:h-[585px] absolute text-white z-50"
                :initial="{ opacity: 0, scale: 0 }" :animate="{
                    opacity: 1, scale: 1,
                    transition: { delay: 0.1, duration: 0.75 }
                }" :exit="{ opacity: 0, scale: 0.6 }">
                <button class="block text-gray-900 absolute top-0 right-0 pr-10 pt-10 z-30 max-w-7xl"
                    @click="show1 = !show1">
                    <i class="fa-solid fa-angles-left text-white h-10 w-10 hover:scale-125 transition duration-300"></i>
                </button>
                <div class="grid grid-cols-1 xl:grid-cols-2 h-[600px] xl:h-[720px]">
                    <div class="col-span-2 px-4 xl:px-16 pt-6 xl:pt-28 pb-8 xl:pb-0 ">
                        <p class="font-bold font-[Rubik] py-4 text-2xl md:text-4xl">OPORTUNIDADES</p>
                        <div class="h-[2px] w-full bg-white"></div>
                        <p class="text-xl md:text-2xl pt-4 font-[Rubik] font-light">
                        <ul class="list-disc list-outside ml-5 py-2">
                            <li>Mayor concienciación sobre la adopción y crianza responsable en la sociedad.</li>
                            <li>Notorios avances de leyes en materia de los derechos de los animales en pro de la
                                sanidad y
                                de una tenencia responsable en el país.</li>
                            <li>Nuevas generaciones de jóvenes con más sensibilidad hacia los animales.</li>
                            <li>Tendencia creciente en cuanto a parejas o personas solas a tener una mascota.</li>
                            <li>Mayor exigencia de calidad y conocimiento.</li>
                        </ul>
                        </p>
                    </div>
                </div>
            </Motion>
        </Presence>
        <Presence>
            <Motion v-if="show2"
                class="max-w-7xl w-full bg-[#f8813c] top-[418px] sm:top-[425px] sm:h-[585px] absolute text-white z-50"
                :initial="{ opacity: 0, scale: 0 }" :animate="{
                    opacity: 1, scale: 1,
                    transition: { delay: 0.1, duration: 0.75 }
                }" :exit="{ opacity: 0, scale: 0.6 }">
                <button class="block text-gray-900 absolute top-0 right-0 pr-10 pt-10 z-30 max-w-7xl"
                    @click="show2 = !show2">
                    <i class="fa-solid fa-angles-left text-white h-10 w-10 hover:scale-125 transition duration-300"></i>
                </button>
                <div class="grid grid-cols-1 xl:grid-cols-2 h-[600px] xl:h-[720px]">
                    <div class="col-span-2 px-4 xl:px-16 pt-6 xl:pt-28 pb-8 xl:pb-0">
                        <p class="font-bold font-[Rubik] py-4 text-2xl md:text-4xl">DEBILIDADES</p>
                        <div class="h-[2px] w-full bg-white"></div>
                        <p class="text-xl md:text-2xl pt-4 font-[Rubik] font-light">
                        <ul class="list-disc list-outside ml-5 py-2">
                            <li>Sistema informatico obsoleto.</li>
                            <li>Limitación de responsabilidad (desligación de responsabilidades).</li>
                            <li>Falta de una política de gestión de personal (Calendarización impredecible).</li>
                            <li>Desempeño de las tareas son ineficientes y poco satisfactorias(formularios físicos de
                                clientes mojados)</li>
                            <li>Empleados cansados y desmotivados.</li>
                        </ul>
                        </p>
                    </div>
                </div>
            </Motion>
        </Presence>
        <Presence>
            <Motion v-if="show3"
                class="max-w-7xl w-full bg-[#d24373] top-[418px] sm:top-[425px] sm:h-[585px] absolute text-white z-50"
                :initial="{ opacity: 0, scale: 0 }" :animate="{
                    opacity: 1, scale: 1,
                    transition: { delay: 0.1, duration: 0.75 }
                }" :exit="{ opacity: 0, scale: 0.6 }">
                <button class="block text-gray-900 absolute top-0 right-0 pr-10 pt-10 z-30 max-w-7xl"
                    @click="show3 = !show3">
                    <i class="fa-solid fa-angles-left text-white h-10 w-10 hover:scale-125 transition duration-300"></i>
                </button>
                <div class="grid grid-cols-1 xl:grid-cols-2 h-[600px] xl:h-[720px]">
                    <div class="col-span-2 px-4 xl:px-16 pt-6 xl:pt-28 pb-8 xl:pb-0">
                        <p class="font-bold font-[Rubik] py-4 text-2xl md:text-4xl">AMENAZAS</p>
                        <div class="h-[2px] w-full bg-white"></div>
                        <p class="text-xl md:text-2xl pt-4 font-[Rubik] font-light">
                        <ul class="list-disc list-outside ml-5 py-2">
                            <li>Exceso de oferta de servicios. </li>
                            <li>La falta de educación sobre el cuidado de la salud animal.</li>
                            <li>La emergencia de nuevas tecnologías y métodos en el cuidado de la salud animal.</li>
                            <li>Poblaciones cada vez más pobres.</li>
                            <li>Gran crecimiento demográfico que sobrepasa las proyecciones actuales.</li>
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

}</style>