<template>
    <div class="bg-white p-6 rounded-lg shadow-md">
      <h2 class="text-xl font-bold mb-4">Recomendaciones de Dieta y Cuidados de Salud :</h2>
      <div v-if="imcCategory && glucosaLevel">
        <h3 class="text-lg font-bold mb-2">Dieta Recomendada</h3>
        <p>{{ recommendedDiet }}</p>
        <h3 class="text-lg font-bold mb-2 mt-4">Cuidados de Salud</h3>
        <p>{{ healthCareTips }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      imcCategory: String,
      glucosaLevel: Number
    },
    computed: {
      recommendedDiet() {
        if (this.imcCategory === 'IMC bajo') {
          return "¡Tu IMC es bajo! Te recomiendo consumir alimentos ricos en proteínas, carbohidratos saludables y grasas saludables para aumentar tu masa muscular.";
        } else if (this.imcCategory === 'IMC alto') {
          return "¡Tu IMC es alto! Te recomiendo una dieta baja en calorías y grasas, alta en fibra y rica en frutas, verduras y proteínas magras.";
        } else {
          return "Tu IMC está dentro del rango normal, pero es importante mantener una dieta equilibrada y hacer ejercicio regularmente para mantener un peso saludable.";
        }
      },
      healthCareTips() {
        if (this.glucosaLevel <= 70) {
          return "Tu nivel de glucosa es bajo. Asegúrate de consumir alimentos ricos en carbohidratos para elevar tu nivel de azúcar en la sangre. Mantén siempre contigo un refrigerio como frutas o jugos de frutas para casos de emergencia.";
        } else if (this.glucosaLevel >= 140) {
          return "Tu nivel de glucosa es alto. Evita alimentos azucarados y carbohidratos simples. En su lugar, opta por alimentos ricos en fibra y proteínas magras. No olvides hacer ejercicio regularmente para ayudar a controlar tu nivel de azúcar en la sangre.";
        } else {
          return "Tu nivel de glucosa está dentro del rango normal. Sigue manteniendo una dieta equilibrada y realiza ejercicio regularmente para mantener tu salud general.";
        }
      }
    }
  };
  </script>
  
  <style scoped>
  /* Estilos específicos para el componente de recomendaciones */
  </style>
  