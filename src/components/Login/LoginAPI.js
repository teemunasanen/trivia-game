import { BASE_URL } from "./"
const APIKEY = "2621021822583701864026758372887704504265983508394583234625985500";

export async function apiUserRegister(username, score) {
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