<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const goToQuestion = () => {
  router.push("/results");
};
</script>

<template>
  <h1>Answer to the Questions and get Results</h1>
  <h1>When ready Click button</h1>
  <button @click="goToQuestion">Go to Results</button>
</template>

<style scoped></style>
