<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { apiGetQuestions } from '../components/Questions/QuestionAPI'
import Footer from '../components/Footer.vue';

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
    <button @click="goToQuestion">Go to Question</button>
    <button @click="showQuestion">Show available questions</button>
    <button @click="showQuestions">Questions</button>
    <ul>
      <li v-for="object in questions" :key="object.difficulty">{{ questions }}</li>
    </ul>
  

  <div class="backdrop">
    <form @submit.prevent="onSubmit" class="form">
      <div class="formElement">
        <label for="questionSlider" aria-label="amountSlider" class="selectLabel">Amount</label>
        <p class="valueOfSelect"><span>Questions</span></p>
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
        <p class="valueOfSelect"><span>Questions</span></p>
        <select v-model="category" class="categoryMenu" id="categoryMenu">
          <option  selected>Please choose a category</option>
        </select>
      </div>
      <div class="formElement">
        <label for="difficultySlider" aria-label="difficultySlider" class="selectLabel">Difficulty</label>
        <p class="valueOfSelect">
          &lt;
          <span>Easy</span>,
          <span>Medium</span>,
          <span>Hard</span>>
        </p>
        <input
          type="range"
          v-model="difficulty"
          min="0"
          max="2"
          step="1"
          class="slider"
          id="difficultySlider"
        />
      </div>
      <!-- <button class="submit" type="submit">Confirm</button> -->
    </form>
    <div class="instructions">
    <p>Adjust the settings and</p><p>click anywhere to start...</p></div>
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
.categoryMenu{
  margin-top: 40px;
  width: 300px;
  background-color: rgba(0, 90, 87, 1);
  border: none;
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 1);
  border-radius: 20px;

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
  -webkit-transition: .2s;
  transition: opacity .2s;
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

.valueOfSelect{
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
  justify-content:space-between;
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
.instructions{
  color: rgba(255, 255, 255, 1);
   padding: 2em;
   align-self: flex-end;
   font-size: 2em;
   width: 30%;
   text-align: center;
   
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