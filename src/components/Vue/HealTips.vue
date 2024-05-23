<template>
    <div class="health-tips bg-white p-6 rounded-lg shadow-md max-w-lg mx-auto mt-6">
      <h2 class="text-2xl font-bold mb-4">Consejos de Salud</h2>
      <p v-if="imc !== null">
        Tu IMC es: <strong>{{ imc }}</strong>. Basado en tu IMC, aquí tienes algunos consejos de salud:
      </p>
      <ul class="list-disc pl-6">
        <li v-for="(tip, index) in healthTips" :key="index">{{ tip }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  import { computed } from 'vue';
  
  export default {
    props: {
      imc: {
        type: Number,
        required: true
      }
    },
    setup(props) {
      const healthTips = computed(() => {
        if (props.imc < 18.5) {
          return [
            'Aumenta tu ingesta de calorías con comidas saludables y equilibradas.',
            'Incluye más proteínas en tu dieta.',
            'Consulta a un nutricionista para un plan de alimentación personalizado.'
          ];
        } else if (props.imc < 25) {
          return [
            'Mantén una dieta equilibrada para mantener tu peso.',
            'Realiza ejercicio regularmente.',
            'Evita el consumo excesivo de azúcares y grasas.'
          ];
        } else if (props.imc < 30) {
          return [
            'Reduce la ingesta de calorías para perder peso.',
            'Aumenta tu actividad física diaria.',
            'Considera consultar a un profesional de la salud para orientación.'
          ];
        } else {
          return [
            'Consulta a un profesional de la salud para un plan de pérdida de peso seguro.',
            'Adopta una dieta baja en calorías y rica en nutrientes.',
            'Incrementa tu nivel de actividad física, comenzando con ejercicios de baja intensidad.'
          ];
        }
      });
  
      return { healthTips };
    }
  };
  </script>
  
  <style scoped>
  /* Puedes añadir estilos adicionales aquí si lo deseas */
  </style>
  