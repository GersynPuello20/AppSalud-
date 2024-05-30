<template>
    <div>
      <!-- Tabla de datos del IMC -->
      <h2 class="text-xl font-bold mb-4">IMC y Recomendaciones</h2>
      <div class="overflow-x-auto">
        <table class="table-auto w-full">
          <thead>
            <tr>
              <th class="px-4 py-2">Peso (kg)</th>
              <th class="px-4 py-2">Altura (m)</th>
              <th class="px-4 py-2">IMC</th>
              <th class="px-4 py-2">Recomendaciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="px-4 py-2">{{ imcData.peso }}</td>
              <td class="px-4 py-2">{{ imcData.altura }}</td>
              <td class="px-4 py-2">{{ imcData.imc }}</td>
              <td class="px-4 py-2">{{ getIMCRecommendations(imcData.imc) }}</td>
            </tr>
          </tbody>
        </table>
      </div>
  
      <!-- Tabla de todos los datos almacenados -->
      <h2 class="text-xl font-bold mb-4 mt-8">Datos Almacenados</h2>
      <div class="overflow-x-auto">
        <table class="table-auto w-full">
          <thead>
            <tr>
              <th class="px-4 py-2">Tipo</th>
              <th class="px-4 py-2">Valor</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(value, key) in allData" :key="key">
              <td class="px-4 py-2">{{ key }}</td>
              <td class="px-4 py-2">{{ value }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      imcData: Object, // Datos del IMC
      allData: Object // Todos los datos almacenados
    },
    methods: {
      // Función para generar recomendaciones basadas en el IMC
      getIMCRecommendations(imc) {
        if (imc < 18.5) {
          return 'Bajo peso';
        } else if (imc >= 18.5 && imc <= 24.9) {
          return 'Normal';
        } else if (imc >= 25 && imc <= 29.9) {
          return 'Sobrepeso';
        } else {
          return 'Obesidad';
        }
      }
    }
  };
  </script>
  