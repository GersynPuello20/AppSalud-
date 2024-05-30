<template>
    <div class="flex flex-col md:flex-row bg-white p-6 rounded-lg shadow-md">
      <div class="md:w-1/2 md:pr-4">
        <h2 class="text-xl font-bold mb-4">Recomendación de Dieta</h2>
        <form @submit.prevent="checkDiet">
          <div class="mb-4">
            <label for="glucose" class="block text-gray-700">Nivel de Glucosa (mg/dL):</label>
            <input type="number" v-model="glucose" class="mt-1 block w-full p-2 border rounded-md" required>
          </div>
          <div class="mb-4">
            <label for="pressure" class="block text-gray-700">Nivel de Presión Arterial (mm Hg):</label>
            <input type="number" v-model="pressure" class="mt-1 block w-full p-2 border rounded-md" required>
          </div>
          <div class="mb-4">
            <label for="weight" class="block text-gray-700">Estado de Peso:</label>
            <select v-model="weight" class="mt-1 block w-full p-2 border rounded-md">
              <option value="normal">Normal</option>
              <option value="underweight">Bajo peso</option>
              <option value="overweight">Obesidad</option>
            </select>
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
          <button type="submit" class="bg-blue-500 text-white py-2 px-4 rounded-lg">Recomendar Dieta</button>
        </form>
        <div v-if="message" class="result-container mt-4">
          <p class="text-lg">{{ message }}</p>
          <p class="text-lg">{{ diet }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    setup() {
      const glucose = ref(null);
      const pressure = ref(null);
      const weight = ref('normal');
      const condition = ref('normal');
      const message = ref('');
      const diet = ref('');
  
      const checkDiet = () => {
        if (glucose.value !== null && pressure.value !== null) {
          message.value = 'Recomendaciones basadas en sus niveles de salud:';
          
          switch (condition.value) {
            case 'glucoseLow':
              diet.value = 'Dieta para Glucosa Baja: Incluya carbohidratos de rápida absorción como jugos, frutas y pan integral.';
              break;
            case 'glucoseHigh':
              diet.value = 'Dieta para Glucosa Alta: Prefiera alimentos de bajo índice glucémico como verduras, granos enteros y proteínas magras.';
              break;
            case 'pressureLow':
              diet.value = 'Dieta para Presión Baja: Aumente la ingesta de sal y consuma líquidos en abundancia. Alimentos como sopas saladas y bebidas deportivas pueden ayudar.';
              break;
            case 'pressureHigh':
              diet.value = 'Dieta para Presión Alta: Reduzca el consumo de sal, evite alimentos procesados y prefiera frutas, verduras y productos bajos en sodio.';
              break;
            default:
              diet.value = 'Dieta Normal: Mantenga una dieta balanceada con variedad de alimentos saludables.';
          }
  
          if (weight.value === 'underweight') {
            diet.value += ' Además, para aumentar de peso, consuma más calorías de fuentes saludables como frutos secos, aguacate y batidos nutritivos.';
          } else if (weight.value === 'overweight') {
            diet.value += ' Además, para bajar de peso, reduzca la ingesta calórica y prefiera alimentos ricos en fibra y bajos en grasas.';
          }
        }
      };
  
      return { glucose, pressure, weight, condition, message, diet, checkDiet };
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
  