<script setup>
import { ref } from 'vue'
import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
} from '@headlessui/vue'

// No tuve tiempo de hacer el modal, asi que usé este de
// la biblioteca: https://headlessui.com/vue/dialog

const isOpen = ref(false)

function closeModal() {
    isOpen.value = false
}
function openModal() {
    isOpen.value = true
}


var showModal = ref(false)
</script>
<template>
    <div>
        <TransitionRoot appear :show="isOpen" as="template">
            <Dialog as="div" @close="closeModal" class="relative z-[2100]">
                <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100"
                    leave="duration-900 ease-in" leave-from="opacity-100" leave-to="opacity-0">
                    <div class="fixed inset-0 bg-black bg-opacity-20" />
                </TransitionChild>

                <div class="font-[Rubik] fixed inset-0 overflow-y-auto">
                    <div class="flex min-h-full items-center justify-center md:p-4 text-center">
                        <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
                            enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
                            leave-to="opacity-0 scale-95">
                            <DialogPanel
                                class="w-full md:max-w-6xl transform overflow-hidden border-4 border-teal-600 bg-white p-6 pt-8 text-left align-middle shadow-xl transition-all">
                                <DialogTitle class="text-3xl font-bold leading-6 text-gray-700">
                                    Otras sucursales
                                </DialogTitle>
                                <div class="mt-2">
                                    <p class="text-2xl font-light text-gray-700">
                                        Aquí puedes ver las otras sucursales disponibles.
                                    </p>
                                </div>
                                <div class="pt-4">
                                    <iframe class="w-full max-w-7xl"
                                        src="https://www.google.com/maps/d/embed?mid=1o7yKEbRN183R_i6xnP_6bmcJ5FLbReM&ehbc=2E312F"
                                        width="1100" height="600"></iframe>
                                </div>

                                <div class="mt-4">
                                    <button type="button"
                                        class="inline-flex justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-xl font-medium text-white hover:bg-blue-700 hover:scale-105 transition duration-300"
                                        @click="closeModal">
                                        Lo tengo, gracias!
                                    </button>
                                </div>
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </Dialog>
        </TransitionRoot>




        <div class="px-2 max-w-7xl mx-auto">
            <div
                class="w-full max-w-7xl mx-auto border-4 border-[#208875] mt-8 mb-10 pt-4 lg:pt-10 pb-8 lg:mx-0 lg:pb-10 text-gray-600 overflow-hidden z-50">
                <img src="@/assets/img/contact.png" class="mx-auto h-52 lg:pt-8" alt="">
                <p class="text-2xl md:text-3xl font-bold pt-2 px-10 text-center">Contáctanos</p>
                <p class="text-xl md:text-2xl font-light px-4 lg:px-28 py-2">Somos un hospital de animales pequeños y
                    grandes de
                    servicio
                    completo
                    comprometido a brindar la
                    mejor atención veterinaria para las mascotas. No dude en ponerse en contacto con nosotros por cualquier
                    inconveniente.</p>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:px-24 mx-auto mt-10">
                    <div class="col-span-1 mx-auto inline-flex space-x-6">
                        <div class="bg-[#446BE1] rounded-full h-10 w-10">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 mt-2 m-auto fill-white"
                                viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                                <path
                                    d="M512 240c0 114.9-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4l0 0 0 0 0 0 0 0 .3-.3c.3-.3 .7-.7 1.3-1.4c1.1-1.2 2.8-3.1 4.9-5.7c4.1-5 9.6-12.4 15.2-21.6c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208z" />
                            </svg>
                        </div>
                        <div class="text-lg">
                            <p class="font-bold">CONTACTO</p>
                            <p>Consultas: +543886547141</p>
                            <p>Urgencias: +543887349523</p>
                            <p>Email: turnos@PerroFeliz.com</p>
                        </div>
                    </div>
                    <div class="col-span-1 mx-auto inline-flex space-x-6">
                        <div class="bg-[#7BBD64] rounded-full h-10 w-10">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 mt-2 m-auto fill-white"
                                viewBox="0 0 384 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                                <path
                                    d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                            </svg>
                        </div>
                        <div class="text-lg">
                            <p class="font-bold">UBICACIÓN</p>
                            <p>B° Mariano Moreno</p>
                            <p>N°445 Calle Perú y Colombia</p>
                        </div>
                    </div>
                    <div class="col-span-1 mx-auto inline-flex space-x-6">
                        <div class="bg-[#F35D6D] rounded-full h-10 w-10">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 mt-2 m-auto fill-white"
                                viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                                <path
                                    d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                            </svg>
                        </div>
                        <div class="text-lg">
                            <p class="font-bold">HORARIOS</p>
                            <p>Lun-Vie: 7:00 am - 6:00 pm</p>
                            <p>Sáb-Dom: 7:00 am - 4:00 pm</p>
                        </div>
                    </div>
                    <button @click="openModal"
                        class="lg:col-span-3 bg-blue-500 my-[40px] lg:my-0 py-2 px-3 mx-auto text-white font-bold rounded-md hover:scale-125 transition duration-300">
                        OTRAS SUCURSALES
                        <i class="fa-solid fa-arrow-right pl-4"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>