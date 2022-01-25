<template>
  <form @submit.prevent="onSubmit" class="form">
    <div class="formElement">
      <label for="questionSlider" aria-label="amountSlider" class="selectLabel">Amount</label>
      <p class="valueOfSelect">
        <span>{{ amount }}</span>
      </p>
      <input
        type="range"
        v-model="amount"
        @blur="checkSelects"
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
      <select v-model="category" @blur="checkSelects" class="categoryMenu" id="categoryMenu">
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
        @blur="checkSelects"
        min="0"
        max="2"
        step="1"
        class="slider"
        id="difficultySlider"
        name="difficultySlider"
      />
    </div>
<<<<<<< HEAD
    <button @click="getQuestions" class="submit" type="submit">Confirm</button>
=======
>>>>>>> 9db5c813586d1f360518fdf21efe5e7c754bfbb2
  </form>
</template>

<script setup>
import { reactive, ref } from "vue";
import {
  apiGetQuestions,
  apiGetCategories,
} from "../components/Questions/QuestionAPI";
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const amount = ref("How many Questions?");
const difficulty = ref("");
const category = ref("");
const questions = computed(() => store.state.questions)
const categories = reactive([]);

const emit = defineEmits(["onSelectSuccess"]);

const onSuccess = (questions) => {
  store.commit("setQuestionParams", {amount: amount.value, category: category.value, difficulty: difficulty.value})
  store.commit("setQuestions", questions);
  emit("onSelectSuccess");
};

//Get categories from API
const getCategories = async () => {
  const apiCategories = await apiGetCategories();
  for (let category of apiCategories) {
    categories.push(category);
  }
};

//Get questions from API
const getQuestions = async () => {

  const apiQuestions = await apiGetQuestions(
    amount.value,
    category.value,
    difficulty.value
  );
  console.log(apiQuestions);
  onSuccess(apiQuestions);

};
// Check selects and if values are inserted -> get questions
const checkSelects = () => {
  console.log(category.value, amount.value, difficulty.value)


  if (amount.value !== "How many Questions?" && category.value !== "" && difficulty.value !== "") {
    getQuestions();
  }
}

const showAPI = () => {
  console.log(questions);
};

const goToQuestion = async () => {
  router.push("/question");
};

//Run on load:

getCategories();
</script>

<style>
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
</style>
