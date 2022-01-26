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
        //Loop through the users
        for (let user of data) {
            //If username matches with any in the database, increment match value
            if (user.username.toLowerCase() === username.toLowerCase()) {
                match++
                return [null, user]
            }
        }
    }
    catch (error) {
        return [error.message, null]
    }
}
export async function apiUserRegister(username, score) {
    //Check username for duplicate
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
        match = 0
        return checkUsers(username)
    }
}

export async function apiUpdateScore(id, score) {
    try {
        const config = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "X-API-KEY": APIKEY
            },
            body: JSON.stringify(
                {
                    score: score
                }
            )
        }
        const response = await fetch(`${BASE_URL}/${id}`, config)
        const data = await response.json()
        return [null, data]
    }
    catch(error) {
        return [error.message, null]
    }

}