<script setup>
import { useRouter } from 'vue-router';

const router = useRouter()

const goToQuestion = () => {
  router.push('/question')
}

</script>

<template>
  <h1>Select Question amount, level and category</h1>
  <h1>When ready Click button</h1>
  <button @click="goToQuestion">Go to Question </button>

</template>

<style scoped>

</style>