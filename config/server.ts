import axios from "axios";

const baseUrl = import.meta.env.VITE_BASE_API_URL;

const http = axios.create({
    baseURL: baseUrl,
    timeout: 10000,
});

export default http;