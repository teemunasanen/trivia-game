<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const goToQuestion = () => {
  router.push("/question");
};

const goToSelect = () => {
  router.push("/select");
};

</script>

<template>
  <h1>Here are the Results</h1>
  <h1>Choose when ready</h1>
  <button @click="goToQuestion">New Game</button>
  <button @click="goToSelect">Back to the Selecting</button>
</template>

<style scoped></style>
