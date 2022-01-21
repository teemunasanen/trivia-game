<template>
<input v-model="userInput" placeholder="YOUR NAME">
<p>Name is: {{ userInput }}</p>

</template>

<script setup>
import { ref } from 'vue'
//Initialize userinput
const userInput = ref("")
</script>

<style scoped>

</style>