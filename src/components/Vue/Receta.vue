<template>
    <div class="flex flex-col md:flex-row bg-white p-6 rounded-lg shadow-md">
      <div class="md:w-1/2 md:pr-4">
        <h2 class="text-xl font-bold mb-4">Registrar Niveles de Salud</h2>
        <form @submit.prevent="checkHealth">
          <div class="mb-4">
            <label for="glucose" class="block text-gray-700">Nivel de Glucosa (mg/dL):</label>
            <input type="number" v-model="glucose" class="mt-1 block w-full p-2 border rounded-md" required>
          </div>
          <div class="mb-4">
            <label for="pressure" class="block text-gray-700">Nivel de Presión Arterial (mm Hg):</label>
            <input type="number" v-model="pressure" class="mt-1 block w-full p-2 border rounded-md" required>
          </div>
          <div class="mb-4">
            <label for="condition" class="block text-gray-700">Condición de Salud:</label>
            <select v-model="condition" class="mt-1 block w-full p-2 border rounded-md">
              <option value="normal">Normal</option>
              <option value="glucoseLow">Glucosa Baja</option>
              <option value="glucoseHigh">Glucosa Alta</option>
              <option value="pressureLow">Presión Baja</option>
              <option value="pressureHigh">Presión Alta</option>
            </select>
          </div>
          <button type="submit" class="bg-blue-500 text-white py-2 px-4 rounded-lg">Registrar</button>
        </form>
        <div v-if="message" class="result-container mt-4">
          <p class="text-lg">{{ message }}</p>
          <p class="text-lg">{{ medication }}</p>
        </div>
      </div>
      <div class="md:w-1/2 md:pl-4 mt-6 md:mt-0">
        <h2 class="text-xl font-bold mb-4">Clasificación de Niveles de Glucosa y Presión</h2>
        <table class="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th class="px-4 py-2 border-b">Nivel</th>
              <th class="px-4 py-2 border-b">Clasificación</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="px-4 py-2 border-b">Glucosa &lt; 70 mg/dL</td>
              <td class="px-4 py-2 border-b">Bajo</td>
            </tr>
            <tr>
              <td class="px-4 py-2 border-b">Glucosa 70 - 100 mg/dL</td>
              <td class="px-4 py-2 border-b">Normal</td>
            </tr>
            <tr>
              <td class="px-4 py-2 border-b">Glucosa 100 - 125 mg/dL</td>
              <td class="px-4 py-2 border-b">Prediabetes</td>
            </tr>
            <tr>
              <td class="px-4 py-2 border-b">Glucosa &gt; 125 mg/dL</td>
              <td class="px-4 py-2 border-b">Alto</td>
            </tr>
            <tr>
              <td class="px-4 py-2 border-b">Presión &lt; 90/60 mm Hg</td>
              <td class="px-4 py-2 border-b">Bajo</td>
            </tr>
            <tr>
              <td class="px-4 py-2 border-b">Presión 90/60 - 120/80 mm Hg</td>
              <td class="px-4 py-2 border-b">Normal</td>
            </tr>
            <tr>
              <td class="px-4 py-2 border-b">Presión 120/80 - 140/90 mm Hg</td>
              <td class="px-4 py-2 border-b">Prehipertensión</td>
            </tr>
            <tr>
              <td class="px-4 py-2 border-b">Presión &gt; 140/90 mm Hg</td>
              <td class="px-4 py-2 border-b">Alta</td>
            </tr>
          </tbody>
        </table>
      </div>
      
    </div>
    <div class="h-10 mt-3 w-52 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg">
        <a href="/Nutricionista">Consulte al nutricionista</a>
      </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    setup() {
      const glucose = ref(null);
      const pressure = ref(null);
      const condition = ref('normal');
      const message = ref('');
      const medication = ref('');
  
      const checkHealth = () => {
        if (glucose.value !== null && pressure.value !== null) {
          if (glucose.value < 70) {
            message.value = 'Nivel de glucosa bajo.';
          } else if (glucose.value >= 70 && glucose.value <= 100) {
            message.value = 'Nivel de glucosa normal.';
          } else if (glucose.value > 100 && glucose.value <= 125) {
            message.value = 'Prediabetes.';
          } else {
            message.value = 'Nivel de glucosa alto.';
          }
  
          if (pressure.value < 90 || pressure.value <= 60) {
            message.value += ' Nivel de presión bajo.';
          } else if (pressure.value > 90 && pressure.value <= 120 || pressure.value > 60 && pressure.value <= 80) {
            message.value += ' Nivel de presión normal.';
          } else if (pressure.value > 120 && pressure.value <= 140 || pressure.value > 80 && pressure.value <= 90) {
            message.value += ' Prehipertensión.';
          } else {
            message.value += ' Nivel de presión alto.';
          }
  
          switch (condition.value) {
            case 'glucoseLow':
              medication.value = 'Recomendación: Consuma carbohidratos de rápida absorción.';
              break;
            case 'glucoseHigh':
              medication.value = 'Recomendación: Consulte a su médico para un posible ajuste de insulina.';
              break;
            case 'pressureLow':
              medication.value = 'Recomendación: Incremente su ingesta de sal y fluidos.';
              break;
            case 'pressureHigh':
              medication.value = 'Recomendación: Consulte a su médico para un posible ajuste de medicación antihipertensiva.';
              break;
            default:
              medication.value = 'Sin recomendaciones específicas.';
          }
        }
      };
  
      return { glucose, pressure, condition, message, medication, checkHealth };
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
  