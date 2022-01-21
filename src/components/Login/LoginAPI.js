import { BASE_URL } from "./"
const APIKEY = "2621021822583701864026758372887704504265983508394583234625985500"
let match = 0

async function checkUsers(username) {
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
        for (let user of data) {
            if (user.username.toLowerCase() === username.toLowerCase()) {
                match++
                console.log("a match!")
                console.log(user.username)
            }
            else {
                null
            }
        }
        return [null, data]
    }
    catch (error) {
        return [error.message, null]
    }
}
export async function apiUserRegister(username, score) {
    await checkUsers(username)
    if (match == 0) {
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
    else {
        console.log("Logged in as " + username)
        match = 0
    }
}