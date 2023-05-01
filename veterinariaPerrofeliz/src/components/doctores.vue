<template>
    <div class="max-w-7xl mx-auto px-6 md:px-6">
        <div class="space-y-3 py-2">
            <div class="title-line lg:mx-80">
                <p class="text-3xl font-bold text-center text-teal-700 py-4">Nuestro Equipo</p>
            </div>
            <p class="text-2xl font-light text-gray-600">Nos enfocamos en la prevención, impulsando los mejores hábitos para su bienestar
                general. Para ello contamos con
                profesionales veterinarios experimentados que no dejan de capacitarse día a día para brindarles a vos y a tu
                mascota
                una atención acogedora y de la más alta calidad en nuestros modernos consultorios totalmente equipados.</p>
        </div>
        <div class="grid sm:grid-cols-2 md:grid-cols-3 text-[#656565]">
            <div
                class="cols-span-1 my-3 mx-2 bg-white border-1 rounded-md shadow-2xl  hover:scale-105 transition duration-300">
                <img src="" alt="">
                <img src="@/assets/img/doc1.webp" class="px-4 pt-2 pb-1" alt="">
                <p class="text-2xl font-bold px-4 pt-2 text-teal-700">Dr. Juan Pérez</p>
                <p class="text-lg font-medium px-4 pb-2 text-teal-600">Cirugía de pequeñas mascotas</p>
                <p class="text-gray-500 font-light text-xl px-4 pb-6">El Dr. Pérez es un experto en cirugía para perros y
                    gatos. Ha realizado innumerables procedimientos exitosos y es conocido por su habilidad para
                    tranquilizar a las mascotas y sus dueños durante el proceso quirúrgico. </p>
            </div>
            <div
                class="cols-span-1 my-3 mx-2 bg-white border-1 rounded-md shadow-2xl hover:scale-105 transition duration-300">
                <img src="" alt="">
                <img src="@/assets/img/doc2.webp" class="px-4 pt-2 pb-1" alt="">
                <p class="text-2xl font-bold px-4 pt-2 text-teal-700">Dra. Ana González</p>
                <p class="text-lg font-medium px-4 pb-2 text-teal-600">Especialista en dermatología animal</p>
                <p class="text-gray-500 font-light text-xl px-4 pb-6">La Dra. González es una especialista en problemas de
                    la piel y pelaje en animales. Con su amplia experiencia y conocimiento, ha logrado resolver problemas de
                    salud en mascotas que otros veterinarios no han podido.</p>
            </div>
            <div
                class="cols-span-1 my-3 mx-2 bg-white border-1 rounded-md shadow-2xl hover:scale-105 transition duration-300">
                <img src="" alt="">
                <img src="@/assets/img/doc3.webp" class="px-4 pt-2 pb-1" alt="">
                <p class="text-2xl font-bold px-4 pt-2 text-teal-700">Dra. Sofía Ramírez</p>
                <p class="text-lg font-medium px-4 pb-2 text-teal-600">Especialista en medicina interna</p>
                <p class="text-gray-500 font-light text-xl px-4 pb-6">La Dra. Ramírez es una experta en el diagnóstico y
                    tratamiento de enfermedades internas en mascotas. Con su amplia experiencia en el campo, ha ayudado a
                    muchos animales a superar problemas de salud y mejorar su calidad de vida.</p>
            </div>
            <div
                class="cols-span-1 my-3 mx-2 bg-white border-1 rounded-md shadow-2xl hover:scale-105 transition duration-300">
                <img src="" alt="">
                <img src="@/assets/img/doc4.webp" class="px-4 pt-2 pb-1 w-full overflow-hidden object-fit-cover" alt="">
                <p class="text-2xl font-bold px-4 pt-2 text-teal-700">Dr. Luis García</p>
                <p class="text-lg font-medium px-4 pb-2 text-teal-600">Especialista en odontología veterinaria</p>
                <p class="text-gray-500 font-light text-xl px-4 pb-6">El Dr. García es un experto en la salud dental de los
                    animales. Realiza limpiezas dentales y extracciones con el mayor cuidado y atención, asegurando la
                    comodidad de la mascota y reduciendo cualquier posible dolor. </p>
            </div>
            <div
                class="cols-span-1 my-3 mx-2 bg-white border-1 rounded-md shadow-2xl hover:scale-105 transition duration-300">
                <img src="" alt="">
                <img src="@/assets/img/doc5.webp" class="px-4 pt-2 pb-1 w-full overflow-hidden object-fit-cover" alt="">
                <p class="text-2xl font-bold px-4 pt-2 text-teal-700">Dra. Ana Isabel Torres</p>
                <p class="text-lg font-medium px-4 pb-2 text-teal-600">Especialista en Reproducción</p>
                <p class="text-gray-500 font-light text-xl px-4 pb-6"> La Dra. Torres es una especialista en reproducción
                    animal. Si tienes un criadero o estás interesado en la reproducción de tu mascota, la Dra. Torres puede
                    ayudarte. </p>
            </div>
            <div
                class="cols-span-1 my-3 mx-2 bg-white border-1 rounded-md shadow-2xl hover:scale-105 transition duration-300">
                <img src="" alt="">
                <img src="@/assets/img/doc6.webp" class="px-4 pt-2 pb-1 w-full overflow-hidden object-fit-cover" alt="">
                <p class="text-2xl font-bold px-4 pt-2 text-teal-700">Dr. Manuel Gómez </p>
                <p class="text-lg font-medium px-4 pb-2 text-teal-600">Especialista en neurología</p>
                <p class="text-gray-500 font-light text-xl px-4 pb-6">El Dr. Gómez es un experto en problemas neurológicos
                    en animales. Si tu mascota tiene problemas de equilibrio o convulsiones, el Dr. Gómez puede ayudar. </p>
            </div>
        </div>
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
</style>