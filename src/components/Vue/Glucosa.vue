<template>
  <div class="flex flex-col md:flex-row bg-white p-6 rounded-lg shadow-md">
    <div class="md:w-1/2 md:pr-4">
      <h2 class="text-xl font-bold mb-4">Registrar Niveles de Glucosa</h2>
      <form @submit.prevent="checkGlucoseLevel">
        <div class="mb-4">
          <label for="glucose" class="block text-gray-700">Nivel de Glucosa (mg/dL):</label>
          <input type="number" v-model="glucose" class="mt-1 block w-full p-2 border rounded-md" required>
        </div>
        <button type="submit" class="bg-blue-500 text-white py-2 px-4 rounded-lg">Registrar</button>
      </form>
      <div v-if="message" class="result-container mt-4">
        <p class="text-lg">{{ message }}</p>
      </div>
    </div>
    <div class="md:w-1/2 md:pl-4 mt-6 md:mt-0">
      <h2 class="text-xl font-bold mb-4">Clasificación de Niveles de Glucosa</h2>
      <table class="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th class="px-4 py-2 border-b">Nivel de Glucosa (mg/dL)</th>
            <th class="px-4 py-2 border-b">Clasificación</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="px-4 py-2 border-b">Menor de 70</td>
            <td class="px-4 py-2 border-b">Bajo</td>
          </tr>
          <tr>
            <td class="px-4 py-2 border-b">70 - 100</td>
            <td class="px-4 py-2 border-b">Normal</td>
          </tr>
          <tr>
            <td class="px-4 py-2 border-b">100 - 125</td>
            <td class="px-4 py-2 border-b">Prediabetes</td>
          </tr>
          <tr>
            <td class="px-4 py-2 border-b">Mayor de 125</td>
            <td class="px-4 py-2 border-b">Alto</td>
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
    const glucose = ref(null);
    const message = ref('');

    const checkGlucoseLevel = () => {
      if (glucose.value !== null) {
        if (glucose.value < 70) {
          message.value = 'Nivel de glucosa bajo. Consulte a un médico.';
        } else if (glucose.value >= 70 && glucose.value <= 100) {
          message.value = 'Nivel de glucosa normal.';
        } else if (glucose.value > 100 && glucose.value <= 125) {
          message.value = 'Prediabetes. Consulte a un médico.';
        } else {
          message.value = 'Nivel de glucosa alto. Consulte a un médico.';
        }
      }
    };

    return { glucose, message, checkGlucoseLevel };
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