import { BASE_URL } from "./"

export async function apiGetQuestions(amount, category, difficulty) {
    if (difficulty === "0") {
        difficulty = "easy"
    }
    else if (difficulty === "1") {
        difficulty = "medium"
    }
    else if (difficulty === "2") {
        difficulty = "hard"
    }
    try {
        const config = {
            method: "GET",
            headers: {
                // "Content-Type":"application/json",
            },
        }
        const response = await fetch(`${BASE_URL}amount=${amount}&category=${category}&difficulty=${difficulty}`, config)
        const data = await response.json()
        if (data.results[1] === undefined) {
            const response = await fetch(`${BASE_URL}amount=${amount}&difficulty=${difficulty}`, config)
            const data = await response.json()
            console.log("Replaced with questions from random category.")
            return data.results
        }
        else {
            return data.results
        }
    }
    catch (error) {
        return [error.message, null]
    }
}

export async function apiGetCategories() {
    try {
        const config = {
            method: "GET",
            headers: {
                // "Content-Type":"application/json",
            },
        }
        const response = await fetch(`https://opentdb.com/api_category.php`, config)
        const data = await response.json()
        return data.trivia_categories
    }
    catch (error) {
        return [error.message, null]
    }
}