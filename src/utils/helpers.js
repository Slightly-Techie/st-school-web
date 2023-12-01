import { handleFetch } from "../components/Signup/api/SignupApi"
import { ROLES, TOKEN } from "./constant"

const apiUrl = import.meta.env.VITE_BACKEND_BASE_URL

const getToken = () => localStorage.getItem(TOKEN) || null
const getRole = localStorage.getItem(ROLES) || null

const setToken = (value) => localStorage.setItem(TOKEN, value)
const removeToken = () => localStorage.removeItem(TOKEN)
const setRole = (value) => localStorage.setItem(ROLES, value)


/* fectchUser from the backend from a token*/
const fetchUser = async(token) => {
    const url = `${apiUrl}/user`
    const options = {
        method : 'GET',
        headers : {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        mode: 'cors'
    }
    
   return await handleFetch(url, options)
}


const verifyAndExtractUser = async(token) => {
    /*
    use jwt frontend to get user from token
    */
    // return { name: "dickson", role: "student" }

    // const tokenUser = await fetchUser(token);
    // if (tokenUser) return tokenUser;
    // else return null;

    try {

        const response = await fetch(`${apiUrl}/users`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
              },
        })

        if(!response.ok) throw new Error(response.statusText)
        const userData = await response.json()

        return userData

    }
    catch(err) {
        console.error('Error fetching user data ', err)
        return null
    }


  };


const getFullName = (firstName, lastName) => {
    return `${firstName} ${lastName}`.toUpperCase() || 'Anonymous'
}

export { setToken, setRole, getToken, getRole, removeToken, verifyAndExtractUser,getFullName}