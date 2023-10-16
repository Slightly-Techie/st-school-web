import { handleFetch } from "../components/Signup/api/SignupApi"
import { ROLES, TOKEN } from "./constant"

const apiUrl = import.meta.env.VITE_BACKEND_BASE_URL

const getToken = localStorage.getItem(TOKEN) || null
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


const verifyAndExtractUser = (token) => {
    /*
    use jwt frontend to get user from token
    */
    return { name: "dickson", role: "student" }

    // const tokenUser = await fetchUser(token);
    // if (tokenUser) return tokenUser;
    // else return null;


  };


export { setToken, setRole, getToken, getRole, removeToken, verifyAndExtractUser}