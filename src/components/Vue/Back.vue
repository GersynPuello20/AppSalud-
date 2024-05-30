<template>
<button @click="goBack" class="flex items-center space-x-2 px-3 py-2 rounded-lg bg-blue-500  text-white hover:bg-blue-400">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 rotate-90" viewBox="0 0 20 20" fill="currentColor">
      <path fill-rule="evenodd" d="M4.293 6.293a1 1 0 0 1 1.414-1.414L10 10.586l4.293-4.293a1 1 0 1 1 1.414 1.414l-5 5a1 1 0 0 1-1.414 0l-5-5a1 1 0 0 1-0.001-0.001Z"/>
    </svg>
    <span>Volver atrás</span>
  </button>
</template>

<!-- <div class="flex justify-end">
  <div
    class="flex justify-center items-center font-normal bg-blue-500 hover:bg-blue-400 rounded-lg h-10 w-56"
  >
    <a href="/Nutricionista">Ir a nutricionista</a>
  </div>
</div> -->

<script>
export default {
  methods: {
    goBack() {
      window.history.back();
    }
  }
}
</script>