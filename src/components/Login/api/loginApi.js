import { handleFetch } from "../../Signup/api/SignupApi"

const apiUrl = import.meta.env.VITE_BACKEND_BASE_URL

export async function handleLogin(email, password) {
    const url = `${apiUrl}/login`
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        mode: 'cors',
        body: JSON.stringify({ email, password })
    }

    return handleFetch(url, options)
}