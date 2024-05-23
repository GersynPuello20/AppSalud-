<template>
    <div class="flex flex-col md:flex-row bg-white p-6 rounded-lg shadow-md">
      <div class="md:w-1/2 md:pr-4">
        <h2 class="text-xl font-bold mb-4">Registrar Presión Arterial</h2>
        <form @submit.prevent="checkBloodPressure">
          <div class="mb-4">
            <label for="systolic" class="block text-gray-700">Presión Sistólica:</label>
            <input type="number" v-model="systolic" class="mt-1 block w-full p-2 border rounded-md" required>
          </div>
          <div class="mb-4">
            <label for="diastolic" class="block text-gray-700">Presión Diastólica:</label>
            <input type="number" v-model="diastolic" class="mt-1 block w-full p-2 border rounded-md" required>
          </div>
          <button type="submit" class="bg-blue-500 text-white py-2 px-4 rounded-lg">Registrar</button>
        </form>
        <div v-if="message" class="result-container mt-4">
          <p class="text-lg">{{ message }}</p>
        </div>
      </div>
      <div class="md:w-1/2 md:pl-4 mt-6 md:mt-0">
        <h2 class="text-xl font-bold mb-4">Clasificación de la OMS</h2>
        <table class="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th class="px-4 py-2 border-b">Presión Arterial</th>
              <th class="px-4 py-2 border-b">Clasificación</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="px-4 py-2 border-b">Menor de 120 y Menor de 80</td>
              <td class="px-4 py-2 border-b">Óptima</td>
            </tr>
            <tr>
              <td class="px-4 py-2 border-b">120-129 y 80-84</td>
              <td class="px-4 py-2 border-b">Normal</td>
            </tr>
            <tr>
              <td class="px-4 py-2 border-b">130-139 o 85-89</td>
              <td class="px-4 py-2 border-b">Normal Alta</td>
            </tr>
            <tr>
              <td class="px-4 py-2 border-b">140-159 o 90-99</td>
              <td class="px-4 py-2 border-b">Hipertensión Etapa 1</td>
            </tr>
            <tr>
              <td class="px-4 py-2 border-b">160 o más o 100 o más</td>
              <td class="px-4 py-2 border-b">Hipertensión Etapa 2</td>
            </tr>
            <tr>
              <td class="px-4 py-2 border-b">Mayor de 180 y/o Mayor de 120</td>
              <td class="px-4 py-2 border-b">Crisis Hipertensiva</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    setup() {
      const systolic = ref(null);
      const diastolic = ref(null);
      const message = ref('');
  
      const checkBloodPressure = () => {
        if (systolic.value !== null && diastolic.value !== null) {
          const sys = parseInt(systolic.value);
          const dia = parseInt(diastolic.value);
          if (sys < 120 && dia < 80) {
            message.value = 'Presión arterial óptima.';
          } else if (sys >= 120 && sys <= 129 && dia >= 80 && dia <= 84) {
            message.value = 'Presión arterial normal.';
          } else if ((sys >= 130 && sys <= 139) || (dia >= 85 && dia <= 89)) {
            message.value = 'Presión arterial normal alta.';
          } else if ((sys >= 140 && sys <= 159) || (dia >= 90 && dia <= 99)) {
            message.value = 'Hipertensión Etapa 1.';
          } else if (sys >= 160 || dia >= 100) {
            message.value = 'Hipertensión Etapa 2.';
          } else if (sys >= 180 || dia >= 120) {
            message.value = 'Crisis Hipertensiva.';
          }
        }
      };
  
      return { systolic, diastolic, message, checkBloodPressure };
    }
  };
  </script>
  
  <style scoped>
  /* Puedes añadir estilos adicionales aquí si lo deseas */
  .result-container {
    margin-top: 1rem;
    background-color: #e2e8f0;
    padding: 1rem;
    border-radius: 0.5rem;
    text-align: center;
  }
  </style>
  