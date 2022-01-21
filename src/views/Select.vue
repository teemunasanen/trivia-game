<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { apiGetQuestions } from '../components/Questions/QuestionAPI'

const router = useRouter()
let questions = reactive([])

const showQuestion = async () => {
  const apiQuestions = await apiGetQuestions(10, 11, "easy")
  questions = apiQuestions[1]
  console.log(questions)
}

const showQuestions = () => {
  console.log(questions)
}

const goToQuestion = () => {
  router.push('/question')
}

</script>

<template>
  <h1>Select Question amount, level and category</h1>
  <h1>When ready Click button</h1>
  <button @click="goToQuestion">Go to Question </button>
  <button @click="showQuestion">Show available questions</button>
  <button @click="showQuestions">Questions</button>
<ul>
  <li v-for="object in questions" :key="object.difficulty">
  {{ questions }}
  </li>
</ul>
</template>

<style scoped>

</style>