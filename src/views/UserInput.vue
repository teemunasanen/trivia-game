<template>
    <div class="backdrop">
        <form @submit.prevent="onSubmit" class="form">
            <label for="username" aria-label="username" class="namelabel">INPUT YOUR NAME</label>
            <input v-model="userName" id="username" class="userinput" />
            <button class="submit" type="submit">Confirm</button>
        </form>
        <footer class="footer">
            <div class="footer-content">
                <span class="contributor">@JuliusHuttunen</span>
                <span class="contributor">@teemunasanen</span>
            </div>
        </footer>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { apiUserRegister } from '../components/Login/LoginAPI';
import { useRouter } from "vue-router";

const router = useRouter();

const goToSelect = () => {
  router.push("/select");
};

//Initialize userinput
const userName = ref("")

const onSubmit = async () => {
    const [error, user] = await apiUserRegister(userName.value, 0)
    console.log("ERR", error)
    console.log("USER", user)
    goToSelect()
}

</script>

<style scoped>
.backdrop {
    padding-top: 15em;
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    flex-direction: column;
    background-color: #30a178;
    font-family: "Roboto", sans-serif;
    width: 100%;
    height: 100%;
    min-height: 100%;
    max-height: 100%;
}
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
.footer {
    margin-top: 18em;
}
.footer-content {
    background: rgba(0, 0, 0, 0.2);
    color: #ffffff;
    font-family: "Roboto", sans-serif;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: flex-end;
    padding: 1em
}
.contributor {
    padding: 0.5em;
    font-size: 1.5em;
}
</style>