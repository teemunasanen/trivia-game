<script setup>
import { useRouter } from "vue-router";
import { computed, reactive, ref } from "vue";
import { useStore } from "vuex";
import Footer from "../components/Footer.vue";

const store = useStore()
const router = useRouter()
const score = ref(0)
let index = 0
const questionNumber = ref(0)

const currentQuestion = reactive([])
const answerOptions = reactive([])

const questions = computed(() => store.state.questions)
const goToQuestion = () => {
  router.push("/results");
};

const incrementIndex = () => {
  index++
  if (index <= questions.value.length) {
    iterateQuestions(index)
    questionNumber.value++
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
    score.value += 10
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
  <div class="backdrop">
    <div class="scorecontainerparent">
    <div class="scorecontainer">
    <span class="score">Score: {{score}}</span>
    </div>
    </div>
    <span class="questionnumber">{{ questionNumber }}/{{ questions.length }}</span>
    <div v-for="question in currentQuestion" v-html="question" class="question"></div>
    <div class="answer">
    <div v-for="answer in shuffle(answerOptions.flat())" class="answercontainer">
      <button @click="handleAnswer(answer)" class="answeroption" v-html="answer"></button>
    </div>
    </div>
  <Footer class="footer"/>
  </div>
</template>

<style scoped>
.backdrop {
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  flex-direction: column;
  background-color: #00404D;
  font-family: "Roboto", sans-serif;
  height: 100vh;
}

.questionnumber {
  padding-top: 2em;
  font-size: 2em;
  color: #FFD588;
  font-style: italic;
}
.question {
  padding-top: 1em;
  font-size: 3em;
  color: #FFD588;
  max-width: 100%;
  padding-left: 3em;
  padding-right: 3em;
}

.scorecontainerparent{
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  max-width: 100%;
  padding-top: 1em;
  margin-right: 2em;
}

.score {
  font-size: 1.5em;
  color: #ffffff;
  margin: 1em;
}

.answer {
  margin-top: 2em;
  margin-bottom: 4em;
}

.answercontainer {
  display: grid;
  grid-template-columns: 1fr 50px 1fr 1fr;

}

.answeroption {
  background: rgba(0, 0, 0, 0.2);
  border: none;
  outline: none;
  font-family: "Roboto", sans-serif;
  color: #ffffff;
  height: 3rem;
  font-size: 1.5rem;
  border-radius: 5px;
  margin: 10px;
  padding: 10px;
  grid-column-start: 2;
  grid-column-end: 4;
}

.contributor {
  padding: 0.5em;
  font-size: 1.5em;
}</style>
