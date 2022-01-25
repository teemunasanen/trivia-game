<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { apiGetQuestions, apiGetCategories } from '../components/Questions/QuestionAPI'
import Footer from '../components/Footer.vue'
import { useStore } from 'vuex';
//Initialize basic parameters and their initial values
const store = useStore()
const amount = ref("25")
const difficulty = ref("1")
const category = ref("9")
const router = useRouter()
let questions = reactive([])
const categories = reactive([])

//Get categories from API
const getCategories = async () => {
  const apiCategories = await apiGetCategories()
  for (let category of apiCategories) {
    categories.push(category)
  }
}

//Get questions from API
const getQuestions = async () => {
  questions = []
  const apiQuestions = await apiGetQuestions(amount.value, category.value, difficulty.value)
  console.log(apiQuestions)
  for (let question of apiQuestions) {
    questions.push(question)
  }
  storeQuestions(questions)
}

const storeQuestions = (questions) => {
  store.commit("setQuestions", questions)
}

const showAPI = () => {
  console.log(questions)
}

const goToQuestion = async () => {
  router.push('/question')
}

//Run on load:
getQuestions()
getCategories()

</script>

<template>
  <h1>Select Question amount, level and category</h1>
  <h1>When ready Click button</h1>
  <button @click="goToQuestion">Go to Question</button>
  <button @click="showAPI">Show questions</button>
  <button @click="getQuestions">Apply the modifiers</button>

  <div class="backdrop">
    <form @submit.prevent="onSubmit" class="form">
      <div class="formElement">
        <label for="questionSlider" aria-label="amountSlider" class="selectLabel">Amount</label>
        <p class="valueOfSelect">
          <span>{{ amount }}</span>
        </p>
        <input
          type="range"
          v-model="amount"
          min="1"
          max="50"
          step="1"
          class="slider"
          id="amountSlider"
        />
      </div>
      <div class="formElement">
        <label for="categoryMenu" aria-label="categoryMenu" class="selectLabel">Category</label>
        <p class="valueOfSelect">
          <span>Category</span>
        </p>
        <select v-model="category" class="categoryMenu" id="categoryMenu">
          <option
            v-for="category in categories"
            :key="category.id"
            :value="category.id"
          >{{ category.name }}</option>
        </select>
      </div>
      <div class="formElement">
        <label for="difficultySlider" aria-label="difficultySlider" class="selectLabel">Difficulty</label>
        <p class="valueOfSelect">
          <span>Easy &nbsp&nbsp&nbsp</span>
          <span>Medium &nbsp&nbsp&nbsp</span>
          <span>Hard</span>
        </p>
        <input
          type="range"
          v-model="difficulty"
          min="0"
          max="2"
          step="1"
          class="slider"
          id="difficultySlider"
          name="difficultySlider"
        />
      </div>
      <!-- <button class="submit" type="submit">Confirm</button> -->
    </form>
    <div class="instructions">
      <p>Adjust the settings and</p>
      <p>click anywhere to start...</p>
    </div>
    <Footer class="footer" />
  </div>
</template>

<style scoped>
.backdrop {
  padding-top: 15em;
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  flex-direction: column;
  background-color: rgba(0, 112, 109, 1);
  font-family: "Roboto", sans-serif;
  width: 100%;
  height: 100%;
  min-height: 100%;
  max-height: 100%;
}
.categoryMenu {
  margin-top: 40px;
  width: 300px;
  background-color: rgba(0, 90, 87, 1);
  border: none;
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 1);
  border-radius: 20px;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  text-align: center;
}

option {
  font-style: rgba(255, 255, 255, 1);
  border: none;
  border-radius: 20px;
}

.slider {
  -webkit-appearance: none;
  width: 200px;
  height: 2px;
  border-radius: 5px;
  background: rgba(255, 255, 255, 1);
  outline: none;
  opacity: 0.7;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
  margin-top: 40px;
}

.slider:hover {
  opacity: 1;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 1);
  cursor: pointer;
}

.slider::-moz-range-thumb {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 1);
  cursor: pointer;
}

.valueOfSelect {
  font-size: 1.7rem;
  color: rgba(255, 255, 255, 1);
}

.selectLabel {
  color: #ffd588;
  font-weight: 100;
  font-size: 2.5rem;
  padding: 5%;
}
.form {
  width: 70%;
  background-color: rgba(0, 112, 109, 1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  margin: auto;
}
.formElement {
  display: flex;

  align-items: center;
  flex-direction: column;

  min-height: 200px;
}
.instructions {
  color: rgba(255, 255, 255, 1);
  padding: 2em;
  align-self: flex-end;
  font-size: 2em;
  width: 30%;
  text-align: center;
  font-style: italic;
}

.footer-content {
  background: rgba(0, 90, 87, 1);
  color: #ffffff;
  font-family: "Roboto", sans-serif;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-end;
  padding: 1em;
}
.contributor {
  padding: 0.5em;
  font-size: 1.5em;
}
</style>