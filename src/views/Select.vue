<template>
  <div class="backdrop">
    <SelectForm @onSelectSuccess="handleSelectSuccess" />

    <div class="instructions">
      <p>Adjust the settings and</p>
      <p>click anywhere to start...</p>
    </div>
    <Footer class="footer" />
  </div>
</template>

<script setup>
import SelectForm from "../components/SelectForm.vue";
import Footer from "../components/Footer.vue";
import { useRouter } from "vue-router";

//Initialize basic parameters and their initial values
const router = useRouter();

const handleSelectSuccess = () => {
  router.push("/question");
};
</script>



<style scoped>
.backdrop {
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  flex-direction: column;
  background-color: rgba(0, 112, 109, 1);
  font-family: "Roboto", sans-serif;
  height: 100vh
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
