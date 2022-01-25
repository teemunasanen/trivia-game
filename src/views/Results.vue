<script setup>
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { computed, ref } from "vue";

const router = useRouter()
const store = useStore()

const user = computed(() => store.state.user)
const score = ref(user.value.score)

const isHighScore = computed(() => store.state.highScore)
console.log(isHighScore.value)

const results = computed(() => store.state.results)
console.log(results.value)


const goToQuestion = () => {
  router.push("/question");
};

const goToSelect = () => {
  router.push("/select");
};

</script>

<template>
  <h1>Score: {{ score }}</h1>
  <h1 v-if="isHighScore.value">New high score!</h1>
  <table>
    <tr>
      <th>Question</th>
      <th>Your answer</th>
      <th>Correct answer</th>
    </tr>
    <tr v-for="object in results">
      <td v-html="object.question"></td>
      <td v-html="object.useranswer"></td>
      <td v-html="object.correctanswer"></td>
    </tr>
  </table>
  <button @click="goToQuestion">New Game</button>
  <button @click="goToSelect">Back to the Selecting</button>
  </template>

<style scoped></style>
