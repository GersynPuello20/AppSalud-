<template>
    <div class="bg-white p-6 rounded-lg shadow-md">
      <div class="flex flex-col md:flex-row">
        <div class="md:w-1/2 md:pr-4">
          <h2 class="text-xl font-bold mb-4">Calcular Índice de Masa Corporal (IMC)</h2>
          <form @submit.prevent="calculateIMC">
            <div class="mb-4">
              <label for="height" class="block text-gray-700">Altura (metros):</label>
              <input type="number" v-model="height" step="0.01" class="mt-1 block w-full p-2 border rounded-md" required>
            </div>
            <div class="mb-4">
              <label for="weight" class="block text-gray-700">Peso (kg):</label>
              <input type="number" v-model="weight" class="mt-1 block w-full p-2 border rounded-md" required>
            </div>
            <button type="submit" class="bg-blue-500 text-white py-2 px-4 rounded-lg">Calcular IMC</button>
          </form>
          <div v-if="imc" class="result-container mt-4">
            <p class="text-lg">Tu IMC es: {{ imc.toFixed(2) }}</p>
            <p class="text-lg">Clasificación: {{ classification }}</p>
          </div>
        </div>
        <div class="md:w-1/2 md:pl-4 mt-6 md:mt-0">
          <h2 class="text-xl font-bold mb-4">Clasificación del IMC</h2>
          <table class="min-w-full bg-white border border-gray-200">
            <thead>
              <tr>
                <th class="px-4 py-2 border-b">IMC</th>
                <th class="px-4 py-2 border-b">Clasificación</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="px-4 py-2 border-b">Menos de 18.5</td>
                <td class="px-4 py-2 border-b">Bajo peso</td>
              </tr>
              <tr>
                <td class="px-4 py-2 border-b">18.5 - 24.9</td>
                <td class="px-4 py-2 border-b">Normal</td>
              </tr>
              <tr>
                <td class="px-4 py-2 border-b">25 - 29.9</td>
                <td class="px-4 py-2 border-b">Sobrepeso</td>
              </tr>
              <tr>
                <td class="px-4 py-2 border-b">30 o más</td>
                <td class="px-4 py-2 border-b">Obesidad</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    setup() {
      const height = ref(null);
      const weight = ref(null);
      const imc = ref(null);
      const classification = ref('');
  
      const calculateIMC = () => {
        if (height.value && weight.value) {
          imc.value = weight.value / (height.value * height.value);
          if (imc.value < 18.5) {
            classification.value = 'Bajo peso';
          } else if (imc.value >= 18.5 && imc.value <= 24.9) {
            classification.value = 'Normal';
          } else if (imc.value >= 25 && imc.value <= 29.9) {
            classification.value = 'Sobrepeso';
          } else {
            classification.value = 'Obesidad';
          }
        }
      };
  
      return { height, weight, imc, classification, calculateIMC };
    }
  };
  </script>
  
  <style scoped>
  .result-container {
    margin-top: 1rem;
    background-color: #e2e8f0;
    padding: 1rem;
    border-radius: 0.5rem;
    text-align: center;
  }
  </style>
  