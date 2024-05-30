<!-- src/components/MyCard.vue -->
<template>
  <div class="bg-gray-100 rounded-lg shadow-md p-8 max-w-md mx-auto mb-8">
    <h2 class="text-3xl font-bold mb-6">Iniciar valoración</h2>
    <!-- <p class="mb-6">Seleccione una opción:</p> -->
    <div class="space-y-4">
      <!-- <a href="/Medico"
        class="bg-blue-500 text-white py-3 px-6 rounded-lg w-full text-center inline-block hover:bg-blue-400">
        Médico</a>
      <a href="/Nutricionista"
        class="bg-green-500 text-white py-3 px-6 rounded-lg w-full text-center inline-block hover:bg-green-400"
        >
        Nutricionista</a> -->
      <a href="/Consulta"
        class="bg-blue-500 text-white py-3 px-6 rounded-lg w-full text-center inline-block hover:bg-blue-400"
        >
        Consulta</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyCard'
};
</script>


