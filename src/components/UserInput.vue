<script setup>
import { ref } from 'vue'
import { apiUserRegister } from './Login/LoginAPI';
//Initialize userinput
const userName = ref("")

const onSubmit = async () => {
    const [error, user] = await apiUserRegister(userName.value, "0")
    console.log("ERR", error)
    console.log("USER", user)
}
</script>

<template>
    <form @submit.prevent="onSubmit">
        <label for="username" aria-label="username">INPUT YOUR NAME</label>
        <input v-model="userName" placeholder="YOUR NAME" id="username"/>
        <button type="submit">Confirm</button>
    </form>
</template>
