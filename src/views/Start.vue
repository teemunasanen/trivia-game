<template>
    <div class="backdrop">
        <UserInputForm />
        <Footer />
        
    </div>
</template>

<script setup>
import UserInputForm from '../components/UserInputForm.vue';
import Footer from '../components/Footer.vue'
import { useRouter } from "vue-router";

const router = useRouter();

const handleInputSuccess = () => {
    console.log("Input Done");
    router.push("/select");
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


</style>