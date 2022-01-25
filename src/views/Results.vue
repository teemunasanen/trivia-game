<script setup>
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { computed, ref } from "vue";
import { apiGetQuestions } from "../components/Questions/QuestionAPI";

const router = useRouter()
const store = useStore()

const questionParams = computed(() => store.state.questionParams)
const lastScore = computed(() => store.state.currentScore)
const score = ref(lastScore.value)

const isHighScore = computed(() => store.state.highScore)
console.log(isHighScore.value)

const results = computed(() => store.state.results)
console.log(results.value)


const goToQuestion = async() => {
  const newQuestions = await apiGetQuestions(questionParams.value.amount, questionParams.value.category, questionParams.value.difficulty)
  store.commit("setQuestions", newQuestions)
  store.commit("setHighScore", false)
  router.push("/question");
};

const goToSelect = () => {
  store.commit("setHighScore", false)
  router.push("/select");
};

</script>

<template>
  <h1>Score: {{ score }}</h1>
  <h1 v-if="isHighScore">New high score!</h1>
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
