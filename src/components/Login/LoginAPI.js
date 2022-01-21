import { BASE_URL } from "./"
const APIKEY = "2621021822583701864026758372887704504265983508394583234625985500"
const users = []

async function getUsers() {
    try {
        const config = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "X-API-KEY": APIKEY
            },
        }
        const response = await fetch(`${BASE_URL}`, config)
        const data = await response.json()
        console.log(data)
        return [null, data]
    }
    catch (error) {
        return [error.message, null]

    }
}
export async function apiUserRegister(username, score) {
    getUsers()
    try {
        const config = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-API-KEY": APIKEY
            },
            body: JSON.stringify(
                {
                    username,
                    score
                }
            )
        }
        const response = await fetch(`${BASE_URL}`, config)
        const data = await response.json()
        return [null, data]
    }
    catch (error) {
        return [error.message, null]
    }
}