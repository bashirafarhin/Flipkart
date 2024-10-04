import axios from "axios";
const config={headers: {'Content-Type': 'application/json'}};

export const authenticateSignup = async(data) => {
    try {
        return await axios.post(`${import.meta.env.VITE_BACKEND_URL}/signup`,data,config);
    } catch(err) {
        console.log("Error while calling signup api",err);
    }
}

export const authenticateLogin = async(data) => {
    try {
        return await axios.post(`${import.meta.env.VITE_BACKEND_URL}/login`,data,config);
    } catch(err) {
        console.log("Error while calling login api",err);
        return err.response;
    }
}