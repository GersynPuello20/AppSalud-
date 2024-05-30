<template>
    <div class="bg-white p-6 rounded-lg shadow-md">
      <div class="flex flex-col">
        <h2 class="text-xl font-bold mb-4">Datos Personales</h2>
        <form @submit.prevent="submitForm">
          <div class="mb-4">
            <label for="firstName" class="block text-gray-700">Nombre:</label>
            <input type="text" v-model="firstName" id="firstName" class="mt-1 block w-full p-2 border rounded-md" required>
          </div>
          <div class="mb-4">
            <label for="lastName" class="block text-gray-700">Apellidos:</label>
            <input type="text" v-model="lastName" id="lastName" class="mt-1 block w-full p-2 border rounded-md" required>
          </div>
          <div class="mb-4">
            <label for="age" class="block text-gray-700">Edad:</label>
            <input type="number" v-model="age" id="age" class="mt-1 block w-full p-2 border rounded-md" required>
          </div>
          <div class="mb-4">
            <label for="idType" class="block text-gray-700">Cédula o Tarjeta de Identidad:</label>
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
            <input type="text" v-model="idNumber" id="idNumber" class="mt-1 block w-full p-2 border rounded-md" required>
          </div>
          <div class="mb-4">
            <label for="gender" class="block text-gray-700">Sexo:</label>
            <select v-model="gender" id="gender" class="mt-1 block w-full p-2 border rounded-md" required>
              <option value="" disabled>Seleccione</option>
              <option value="Masculino">Masculino</option>
              <option value="Femenino">Femenino</option>
              <option value="Otro">Otro</option>
            </select>
          </div>
          <div class="mb-4">
            <label for="maritalStatus" class="block text-gray-700">Estado Civil:</label>
            <select v-model="maritalStatus" id="maritalStatus" class="mt-1 block w-full p-2 border rounded-md" required>
              <option value="" disabled>Seleccione</option>
              <option value="Soltero/a">Soltero/a</option>
              <option value="Casado/a">Casado/a</option>
              <option value="Divorciado/a">Divorciado/a</option>
              <option value="Viudo/a">Viudo/a</option>
            </select>
          </div>
          <div class="mb-4">
            <label for="medicalHistory" class="block text-gray-700">Antecedentes Médicos Personales:</label>
            <textarea v-model="medicalHistory" id="medicalHistory" rows="4" class="mt-1 block w-full p-2 border rounded-md" required></textarea>
          </div>
          <button type="submit" class="bg-blue-500 text-white py-2 px-4 rounded-lg">Enviar</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>


  export default {
    data() {
      return {
        firstName: '',
        lastName: '',
        age: null,
        idType: '',
        idNumber: '',
        gender: '',
        maritalStatus: '',
        medicalHistory: ''
      };
    },
    methods: {
      submitForm() {
        
        alert('Formulario enviado');
        console.log({
          firstName: this.firstName,
          lastName: this.lastName,
          age: this.age,
          idType: this.idType,
          idNumber: this.idNumber,
          gender: this.gender,
          maritalStatus: this.maritalStatus,
          medicalHistory: this.medicalHistory
        });
      }
    },
    // Modifica la función submitForm para guardar los datos en el almacenamiento local del navegador
submitForm() {
    // Guardar los datos en el almacenamiento local
    localStorage.setItem('datosUsuario', JSON.stringify({
        firstName: this.firstName,
        lastName: this.lastName,
        age: this.age,
        idType: this.idType,
        idNumber: this.idNumber,
        gender: this.gender,
        maritalStatus: this.maritalStatus,
        medicalHistory: this.medicalHistory
    }));

    alert('Formulario enviado');
    console.log('Datos guardados:', {
        firstName: this.firstName,
        lastName: this.lastName,
        age: this.age,
        idType: this.idType,
        idNumber: this.idNumber,
        gender: this.gender,
        maritalStatus: this.maritalStatus,
        medicalHistory: this.medicalHistory
    });
}

  };
  </script>
  
  <style scoped>

  </style>
  