<template>
  <div class="bg-white p-6 rounded-lg shadow-md">
    <h2 class="text-xl font-bold mb-4">Datos del Paciente</h2>
    <form @submit.prevent="saveData">
      <div class="mb-4">
        <label for="name" class="block text-gray-700">Nombre:</label>
        <input type="text" v-model="name" class="mt-1 block w-full p-2 border rounded-md" required>
      </div>
      <div class="mb-4">
        <label for="lastName" class="block text-gray-700">Apellidos:</label>
        <input type="text" v-model="lastName" class="mt-1 block w-full p-2 border rounded-md" required>
      </div>
      <div class="mb-4">
        <label class="block text-gray-700">Cédula o Tarjeta de Identidad:</label>
        <div class="mt-1 flex items-center">
          <label class="inline-flex items-center mr-4">
            <input type="radio" v-model="idType" value="Cédula" class="form-radio" required>
            <span class="ml-2">Cédula</span>
          </label>
          <label class="inline-flex items-center">
            <input type="radio" v-model="idType" value="Tarjeta de Identidad" class="form-radio" required>
            <span class="ml-2">Tarjeta de Identidad</span>
          </label>
        </div>
      </div>
      <div class="mb-4">
        <label for="idNumber" class="block text-gray-700">Número de Identificación:</label>
        <input type="text" v-model="idNumber" class="mt-1 block w-full p-2 border rounded-md" required>
      </div>
      <div class="mb-4">
        <label for="age" class="block text-gray-700">Edad:</label>
        <input type="number" v-model="age" class="mt-1 block w-full p-2 border rounded-md" required>
      </div>
      <div class="mb-4">
        <label for="sex" class="block text-gray-700">Sexo:</label>
        <select v-model="sex" class="mt-1 block w-full p-2 border rounded-md" required>
          <option value="" disabled>Selecciona tu sexo</option>
          <option value="masculino">Masculino</option>
          <option value="femenino">Femenino</option>
          <option value="otro">Otro</option>
        </select>
      </div>
      <div class="mb-4">
        <label for="height" class="block text-gray-700">Altura (metros):</label>
        <input type="number" v-model="height" step="0.01" class="mt-1 block w-full p-2 border rounded-md" required>
      </div>
      <div class="mb-4">
        <label for="weight" class="block text-gray-700">Peso (kg):</label>
        <input type="number" v-model="weight" class="mt-1 block w-full p-2 border rounded-md" required>
      </div>
      <div class="mb-4">
        <label for="glucose" class="block text-gray-700">Nivel de Glucosa (mg/dL):</label>
        <input type="number" v-model="glucose" class="mt-1 block w-full p-2 border rounded-md" required>
      </div>
      <div class="mb-4">
        <label for="bloodPressure" class="block text-gray-700">Presión Arterial (mmHg):</label>
        <input type="text" v-model="bloodPressure" class="mt-1 block w-full p-2 border rounded-md" required>
      </div>
      <button type="submit" class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg">Guardar Datos</button>
      <div class="h-10 mt-3 w-52 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg">
        <a href="/Medico">Consulta con un médico</a>
      </div>
    </form>
    <button @click="showModal = true" class="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg mt-4">Ver
      Datos y
      Recomendaciones</button>

    <!-- Modal -->
    <div v-if="showModal" class="fixed z-10 inset-0 overflow-y-auto">
      <div class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div class="fixed inset-0 transition-opacity" aria-hidden="true">
          <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

        <div
          class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div class="sm:flex sm:items-start">
              <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3 class="text-lg leading-6 font-medium text-gray-900">Datos del Paciente y Recomendaciones</h3>
                <div class="mt-2">
                  <p class="text-sm text-gray-500">Nombre: {{ name }}</p>
                  <p class="text-sm text-gray-500">Apellido: {{ lastName }}</p>
                  <p class="text-sm text-gray-500">Tarjeta de Identidad o Cédula: {{ idType }}</p>
                  <p class="text-sm text-gray-500">Edad: {{ age }}</p>
                  <p class="text-sm text-gray-500">Sexo: {{ sex }}</p>
                  <p class="text-sm text-gray-500">Altura: {{ height }} metros</p>
                  <p class="text-sm text-gray-500">Peso: {{ weight }} kg</p>
                  <p class="text-sm text-gray-500">IMC: {{ imc.toFixed(2) }} ({{ imcClassification }})</p>
                  <p class="text-sm text-gray-500">Nivel de Glucosa: {{ glucose }} mg/dL ({{ glucoseMessage }})</p>
                  <p class="text-sm text-gray-500">Presión Arterial: {{ bloodPressure }} mmHg</p>
                  <h4 class="mt-4 font-bold">Recomendaciones de dieta y salud:</h4>
                  <p class="text-sm text-gray-500">{{ dietRecommendations }}</p>
                  <p class="text-sm
                  text-gray-500">{{ healthCareTips }}</p>
                  <div class="mt-4">
                    <h4 class="font-bold">Clasificación de IMC según la OMS:</h4>
                    <table class="table-auto w-full mt-2">
                      <thead>
                        <tr>
                          <th class="px-4 py-2 border">Categoría</th>
                          <th class="px-4 py-2 border">IMC (kg/m²)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr :class="{ 'bg-red-200': imc.value < 18.5 }">
                          <td class="border px-4 py-2">Bajo peso</td>
                          <td class="border px-4 py-2">&lt; 18.5</td>
                        </tr>
                        <tr :class="{ 'bg-yellow-200': imc.value >= 18.5 && imc.value <= 24.9 }">
                          <td class="border px-4 py-2">Normal</td>
                          <td class="border px-4 py-2">18.5 - 24.9</td>
                        </tr>
                        <tr :class="{ 'bg-yellow-200': imc.value >= 25 && imc.value <= 29.9 }">
                          <td class="border px-4 py-2">Sobrepeso</td>
                          <td class="border px-4 py-2">25 - 29.9</td>
                        </tr>
                        <tr :class="{ 'bg-red-200': imc.value >= 30 }">
                          <td class="border px-4 py-2">Obesidad</td>
                          <td class="border px-4 py-2">&gt;= 30</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                    <button @click="showModal = false"
                      class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 sm:mt-0 sm:w-auto sm:text-sm">Cerrar</button>
                    <button @click="generatePDF"
                      class="mr-2 mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-500 text-base font-medium text-white hover:bg-green-700 sm:mt-0 sm:w-auto sm:text-sm">Generar
                      PDF</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import { jsPDF } from 'jspdf';

export default {
  setup() {
    const name = ref('');
    const lastName = ref('');
    const idType = ref('');
    const idNumber = ref('');
    const age = ref('');
    const sex = ref('');
    const height = ref('');
    const weight = ref('');
    const glucose = ref('');
    const bloodPressure = ref('');
    const showModal = ref(false);

    const imc = computed(() => weight.value / (height.value * height.value));

    const imcClassification = computed(() => {
      if (imc.value < 18.5) {
        return 'Bajo peso';
      } else if (imc.value >= 18.5 && imc.value <= 24.9) {
        return 'Normal';
      } else if (imc.value >= 25 && imc.value <= 29.9) {
        return 'Sobrepeso';
      } else {
        return 'Obesidad';
      }
    });

    const glucoseMessage = computed(() => {
      if (glucose.value < 70) {
        return 'Nivel de glucosa bajo. Consulte a un médico';
      } else if (glucose.value >= 70 && glucose.value <= 100) {
        return 'Nivel de glucosa normal.';
      } else if (glucose.value > 100 && glucose.value <= 125) {
        return 'Prediabetes. Consulte a un médico.';
      } else {
        return 'Nivel de glucosa alto. Consulte a un médico.';
      }
    });

    const dietRecommendations = computed(() => {
      if (imc.value !== null && glucose.value !== null) {
        if (imc.value < 18.5 && glucose.value < 70) {
          return "Se recomienda consumir una dieta rica en carbohidratos complejos y azúcares naturales, así como también controlar el consumo de azúcares simples.";
        } else if (imc.value >= 25 && glucose.value >= 100) {
          return "Se recomienda una dieta baja en azúcares simples y grasas saturadas, y aumentar la ingesta de frutas, verduras y alimentos ricos en fibra. También es importante mantenerse hidratado y realizar ejercicio regularmente.";
        } else {
          return "No hay recomendaciones específicas para tu IMC y nivel de glucosa en este momento. Se recomienda mantener una dieta equilibrada y consultar a un profesional de la salud para obtener más orientación.";
        }
      } else {
        return "Esperando datos para calcular las recomendaciones de dieta.";
      }
    });

    const healthCareTips = computed(() => {
      if (imc.value !== null && glucose.value !== null) {
        if (imc.value < 18.5 && glucose.value < 70) {
          return "Además de seguir una dieta adecuada, es importante controlar regularmente tus niveles de glucosa y consultar a un médico si experimentas síntomas de hipoglucemia. También se recomienda realizar ejercicio regularmente y mantener un estilo de vida activo.";
        } else if (imc.value >= 25 && glucose.value >= 100) {
          return "Además de seguir una dieta saludable, es importante controlar regularmente tus niveles de glucosa y consultar a un médico si experimentas síntomas de hiperglucemia. Se recomienda realizar ejercicio regularmente y mantener un peso saludable para reducir el riesgo de complicaciones relacionadas con la diabetes y otras enfermedades crónicas.";
        } else {
          return "Mantén hábitos de vida saludables, incluyendo una dieta equilibrada, ejercicio regular y control de los niveles de glucosa en sangre. No dudes en consultar a un profesional de la salud para obtener más orientación sobre cómo mejorar tu salud y bienestar.";
        }
      } else {
        return "Esperando datos para calcular los consejos de salud.";
      }
    });

    const generatePDF = () => {
      const doc = new jsPDF();


      doc.setFontSize(18);
      doc.text("Recomendaciones de Salud", 20, 20);


      doc.setFontSize(12);
      doc.text(`Nombre: ${name.value}`, 20, 30);
      doc.text(`Apellido: ${lastName.value}`, 20, 40);
      doc.text(`Cédula o Tarjeta de Identidad: ${idType.value}`, 20, 50);
      doc.text(`Número de Identificación: ${idNumber.value}`, 20, 60);
      doc.text(`Edad: ${age.value}`, 20, 70);
      doc.text(`Sexo: ${sex.value}`, 20, 80);
      doc.text(`Altura: ${height.value} metros`, 20, 90);
      doc.text(`Peso: ${weight.value} kg`, 20, 100);
      doc.text(`IMC: ${imc.value.toFixed(2)} (${imcClassification.value})`, 20, 110);
      doc.text(`Nivel de Glucosa: ${glucose.value} mg/dL (${glucoseMessage.value})`, 20, 120);
      doc.text(`Presión Arterial: ${bloodPressure.value} mmHg`, 20, 130);


      doc.setFontSize(14);
      doc.text("Recomendaciones de Dieta y Salud:", 20, 150);

      doc.setFontSize(12);
      doc.text(`Recomendaciones de dieta: ${dietRecommendations.value}`, 20, 160);
      doc.text(`Consejos de salud: ${healthCareTips.value}`, 20, 170);


      doc.save('recomendaciones_paciente.pdf');
    };

    const saveData = () => {

    };

    return {
      name,
      lastName,
      idType,
      idNumber,
      age,
      sex,
      height,
      weight,
      glucose,
      bloodPressure,
      showModal,
      imc,
      imcClassification,
      glucoseMessage,
      dietRecommendations,
      healthCareTips,
      generatePDF,
      saveData
    };
  },
};
</script>

<style scoped>
/* Estilos CSS personalizados para el componente */
</style>
