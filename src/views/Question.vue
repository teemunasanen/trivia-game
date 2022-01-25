<script setup>
import { useRouter } from "vue-router";
import { computed, reactive, ref } from "vue";
import { useStore } from "vuex";

const store = useStore()
const router = useRouter()
let score = 0
let index = 0
const questionNumber = ref(0)

const currentQuestion = reactive([])
const answerOptions = reactive([])

const questions = computed(() => store.state.questions)
const goToQuestion = () => {
  router.push("/results");
};

const incrementIndex = () => {
  questionNumber.value++
  index++
  if (index <= questions.value.length) {
    iterateQuestions(index)
  }
  else {
    goToQuestion()
  }
}

const iterateQuestions = (index) => {
  let baseQuestion = questions.value[index - 1]
  while (answerOptions.length > 0) {
    answerOptions.pop()
  }
  answerOptions.push(baseQuestion.correct_answer)
  answerOptions.push(baseQuestion.incorrect_answers)
  currentQuestion.pop()
  currentQuestion.push(baseQuestion.question)
  console.log(currentQuestion)
  console.log(answerOptions)
}

function shuffle(array) {
  let currentIndex = array.length, randomIndex;
  while (currentIndex != 1) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}

const handleAnswer = (value) => {
  let baseQuestion = questions.value[index - 1]
  if (value === baseQuestion.correct_answer) {
    console.log("Correct!")
    score += 10
    incrementIndex()
  }
  else {
    console.log("Wrong!")
    incrementIndex()
  }
}

incrementIndex()

</script>

<template>
  <h1>Answer to the Questions and get Results</h1>
  <p>{{ questionNumber }}/{{ questions.length }}</p>
  <h1>When ready Click button</h1>
  <button @click="goToQuestion">Go to Results</button>
  <ul>
    <li v-for="question in currentQuestion" v-html="question"></li>
  </ul>
  <ul>
    <li v-for="answer in shuffle(answerOptions.flat())">
      <button @click="handleAnswer(answer)">{{ answer }}</button>
    </li>
  </ul>
</template>

<style scoped></style>
