<script setup>
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { computed, ref } from "vue";
import { apiGetQuestions } from "../components/Questions/QuestionAPI";
import Footer from "../components/Footer.vue";

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
<div class="backdrop">
  <div class="resultsContainer">
  <h1>Score: {{ score }}</h1>
  <h1 v-if="isHighScore.value" class="highScore">New high score!</h1>
  <div class="tableContainer">
  <table class="resultsTable">
    <tr class="headerRow">
      <th>Question</th>
      <th>Your answer</th>
      <th>Correct answer</th>
    </tr>
    <tr v-for="object in results" class="resultsRow">
      <td v-html="object.question"></td>
      <td v-html="object.useranswer"></td>
      <td v-html="object.correctanswer"></td>
    </tr>
  </table>
  </div>
  <div class="buttonContainer">
  <button @click="goToQuestion">New Game</button>
  <button @click="goToSelect">Back to the Selecting</button>
  </div>
  </div>
  <Footer />
  </div>
  </template>

<style scoped>
.backdrop {
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  flex-direction: column;
  background-color: rgba(18, 97, 138, 1);
  font-family: "Roboto", sans-serif;
  height: 100vh;
}

.resultsContainer{
  color: rgba(255, 255, 255, 1);
}
.highScore{
  font-size: xx-large;
  color: rgba(255, 213, 136, 1);
}

.buttonContainer{
  align-items: center;
  padding: 40px;
}
button{
  padding: 15px;
  margin: 30px;
  width: 20%;
  font-size: large;
  color: rgba(255, 255, 255, 1);
  border-radius: 8px;
  background-color: rgba(14, 78, 110, 1);
  border: none;
}
.tableContainer{
  margin: auto;
  width: 90%;

}
.resultsTable{
  width: 100%;
  
  
  border-spacing: 15px 1rem;
  margin-left: auto;
  margin-right: auto;
  
}
th {
  text-align: left;
  font-size: xx-large;
  color: rgba(255, 213, 136, 1);
  
  
}
td {
  text-align: left;
  font-size: large;
  color: rgba(255, 255, 255, 1);
}

.footer{
  background-color: rgba(14, 78, 110, 1);
}

</style>
