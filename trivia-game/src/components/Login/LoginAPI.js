export const LoginAPI = {
    register(name) {
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: name
        }

        return fetch("https://noroff-trivia-game-api.herokuapp.com/trivia", requestOptions)
        .then(response => response.json())
        .then(data => data.data)
    },
    login(name) {
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: name
        }
        
        return fetch("https://noroff-trivia-game-api.herokuapp.com/trivia", requestOptions)
        .then(response => response.json())
        .then(data => data.data)
    }
}