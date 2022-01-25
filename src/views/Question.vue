<script setup>
import { useRouter } from "vue-router";
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore()
const router = useRouter();

const questions = computed(() => store.state.questions)

console.log(questions)

const goToQuestion = () => {
  router.push("/results");
};


</script>

<template>
  <h1>Answer to the Questions and get Results</h1>
  <h1>When ready Click button</h1>
  <button @click="goToQuestion">Go to Results</button>
  <ul>
    <li v-for="question in questions">{{question.question}}<br>{{question.correct_answer}}</li>
  </ul>
</template>

<style scoped></style>
