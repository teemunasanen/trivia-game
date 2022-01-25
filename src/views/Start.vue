<template>

  <div class="backdrop">
    <Header />
    <div class="userformcontainer">
    <UserInputForm @onLoginSuccess="handleLoginSuccess" />
    </div>
    <Footer />
  </div>
</template>

<script setup>
import UserInputForm from "../components/UserInputForm.vue";
import Footer from "../components/Footer.vue";
import { useRouter } from "vue-router";
import Header from "../components/Header.vue";

const router = useRouter();

const handleLoginSuccess = () => {
  console.log("Input Done");
  router.push("/select");
};
</script>

<style scoped>
.backdrop {
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  flex-direction: column;
  background-color: #30a178;
  font-family: "Roboto", sans-serif;
  height: 100vh
}
.userformcontainer{
  padding-top: 10em;
}
.footer {
  margin-top: 10em;
}
</style>
