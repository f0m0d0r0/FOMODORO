const url = "localhost:8080/api/user"

export const findUser = (username) =>
    fetch(`${url}/${username}`)
        .then(response => response.json())

export const registerUser = (username, user) =>
    fetch(`${url}/${username}`, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const updatePoints = (username, points) =>
    fetch(`${url}/points?username=${username}&points=${points}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export default {
    findUser, registerUser, updatePoints
}
