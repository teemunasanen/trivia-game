<template>
        <form @submit.prevent="onSubmit" class="form">
            <label for="username" aria-label="username" class="namelabel">INPUT YOUR NAME</label>
            <input v-model="userName" id="username" class="userinput" />
            <button class="submit" type="submit">Confirm</button>
        </form>      
</template>

<script setup>
import { ref } from 'vue'
import { apiUserRegister } from './Login/LoginAPI';
import { useStore } from 'vuex';

const store = useStore()
//Initialize userinput
const userName = ref("")
const emit = defineEmits(["onLoginSuccess"])

const onSuccess = user => {
    store.commit("setUser", user)
    emit("onLoginSuccess")
}

// const goToSelect = () => {
//   router.push("/select");
// };



const onSubmit = async () => {
    const [error, user] = await apiUserRegister(userName.value, 0)
    console.log("ERR", error)
    console.log("USER", user)
    onSuccess(user)
}



</script>

<style scoped>

.namelabel {
    color: #ffd588;
    font-weight: 100;
    font-size: 6rem;
}
.form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.submit {
    display: flex;
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
}
.userinput {
    background: rgba(0, 0, 0, 0.2);
    border: none;
    outline: none;
    color: #ffd588;
    border-radius: 5px;
    font-size: 2em;
    text-align: center;
    font-family: "Roboto", sans-serif;
    width: 80%;
    height: 3rem;
}

</style>

