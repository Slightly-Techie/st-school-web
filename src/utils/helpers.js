import { handleFetch } from "../components/Signup/api/SignupApi";
import { ROLES, TOKEN } from "./constant";
import { jwtDecode } from 'jwt-decode'

export const apiUrl = import.meta.env.VITE_BACKEND_BASE_URL;

const getToken = () => localStorage.getItem(TOKEN) || null;
const getRole = localStorage.getItem(ROLES) || null;

const setToken = (value) => localStorage.setItem(TOKEN, value);
const removeToken = () => localStorage.removeItem(TOKEN);
const setRole = (value) => localStorage.setItem(ROLES, value);

const encoder = (data) => btoa(data);
const decoder = (data) => atob(data);

/* fectchUser from the backend from a token*/
const fetchUser = async (token) => {
  const url = `${apiUrl}/user`;
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    mode: "cors",
  };

  return await handleFetch(url, options);
};

const verifyAndExtractUser = async (token) => {
  try {
    const response = await fetch(`${apiUrl}/users`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) throw new Error(response.statusText);
    const userData = await response.json();

    return userData;
  } catch (err) {
    console.error("Error fetching user data ", err);
    return null;
  }
};

const getFullName = (firstName, lastName) => {
  return `${firstName} ${lastName}`.toUpperCase() || "Anonymous";
};

export const formatTimestamp = (inputTimestamp) => {

  if (!inputTimestamp || isNaN(new Date(inputTimestamp))) {
    return inputTimestamp;
  }

  const options = {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  };

  const date = new Date(inputTimestamp);
  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(date);

  return formattedDate;
};


const isTokenExpired = () => {
  try {
    const token = getToken()
    const decodedToken = jwtDecode(token);
    const expirationTime = decodedToken.exp;
    const currentTime = Math.floor(Date.now() / 1000);
    return currentTime > expirationTime;
  } catch (error) {
    console.error('Error decoding or validating token:', error);
    return true;
  }

}

const getUserId = () => {
  const token = getToken()
  if(token) {
    const { user_id } = jwtDecode(token)
    return user_id
  }

  return null
}


export {
  getUserId,
  setToken,
  setRole,
  getToken,
  getRole,
  removeToken,
  verifyAndExtractUser,
  getFullName,
  encoder,
  isTokenExpired,
  decoder,
};
