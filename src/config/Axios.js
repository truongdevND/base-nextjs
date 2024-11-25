import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL, 
    headers: {
        "Content-Type": "application/json",
    },
});

axiosInstance.interceptors.request.use(
    async (config) => {
        let cookieValue = getCookie("token");
        if (cookieValue) {
            config.headers['Authorization'] = `Bearer ${cookieValue}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
};
