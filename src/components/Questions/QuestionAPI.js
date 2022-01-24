import { BASE_URL } from "./"

export async function apiGetQuestions(amount, category, difficulty) {
    try {
        const config = {
            method: "GET",
            headers: {
                // "Content-Type":"application/json",
            },
        }
        const response = await fetch(`${BASE_URL}amount=${amount}&category=${category}&difficulty=${difficulty}`, config)
        const data = await response.json()
        return [null, data.results]
    }
    catch(error) {
        return [error.message, null]
    }
}