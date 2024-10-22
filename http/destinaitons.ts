import http from "../config/server"
import { decryptData } from "../src/lib/cryptoUtils";
import { API } from "./apiRoutes"

let apiKey = ""

if (sessionStorage.getItem("encrypted_data")) {
    const { api_key } = decryptData(sessionStorage.getItem("encrypted_data"));
    apiKey = api_key;
}

export const Destination = {

    create: async (data: FormData) => {
        try {
            const response = await http.post(API.DESTINATION_URL, data, { headers: { "Content-Type": "multipart/form-data", "x-api-key": apiKey } });
            return response.data;
        } catch (e) {
            console.log(e);
            return "There is something wrong try again later!";
        }
    },
    update: async (data: FormData, id: number) => {
        try {
            const response = await http.post(`${API.DESTINATION_URL}/${id}`, data, { headers: { "Content-Type": "multipart/form-data", "x-api-key": apiKey } });
            return response.data;
        } catch (e) {
            console.log(e);
            return "There is something wrong try again later!";
        }
    },
    getAll: async () => {
        try {
            const response = await http.get(API.DESTINATION_URL);
            return response.data;
        } catch (e) {
            console.log(e);
            return "There is something wrong try again later!";
        }
    },
    getById: async (id: number) => {
        try {
            const response = await http.get(`${API.DESTINATION_URL}/${id}`);
            return response.data;
        } catch (e) {
            console.log(e);
            return "There is something wrong try again later!";
        }
    }
}