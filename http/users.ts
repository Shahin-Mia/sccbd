import http from "../config/server"
import { decryptData } from "../src/lib/cryptoUtils";
import { API } from "./apiRoutes"

let apiKey = ""

if (sessionStorage.getItem("encrypted_data")) {
    const { api_key } = decryptData(sessionStorage.getItem("encrypted_data"));
    apiKey = api_key;
}

export const User = {

    createUser: async (data: FormData) => {
        try {
            const response = await http.post(API.CREATE_USER_URL, data, { headers: { "Content-Type": "multipart/form-data" } });
            return response.data;
        } catch (e) {
            console.log(e);
            return "There is something wrong try again later!";
        }
    },
    createStudent: async (data: FormData) => {
        try {
            const response = await http.post(API.CREATE_USER_URL, data);
            return response.data;
        } catch (e) {
            console.log(e);
            return "There is something wrong try again later!";
        }
    },

    loginUser: async (data: { email: string, password: string }) => {
        try {
            const response = await http.post(API.LOGIN_URL, data);
            return response.data;
        } catch (e) {
            console.log(e)
            return "There is something wrong try again leter!";
        }
    },

    activation: async (data: { email_activation_token: string }) => {
        try {
            const response = await http.post(API.ACTIVATION_URL, data);
            return response.data;
        } catch (e) {
            console.log(e)
            return "There is something wrong try again leter!";
        }
    },
    resetPassword: async (data: { password: string, token: string }) => {
        try {
            const response = await http.post(API.RESET_PASSWORD_URL, data);
            return response.data;
        } catch (e) {
            console.log(e)
            return "There is something wrong try again leter!";
        }
    },

    sendEmail: async (data: { email: string }) => {
        try {
            const response = await http.post(API.RESET_MAIL_URL, data);
            return response.data;
        } catch (e) {
            console.log(e)
            return "There is something wrong try again leter!";
        }
    },
    getUsers: async () => {
        try {
            const response = await http.get(API.GET_USER_URL, { headers: { "x-api-key": apiKey } });
            return response.data;
        } catch (e) {
            console.log(e)
            return "There is something wrong try again leter!";
        }
    },

    delete: async (id: number) => {
        try {
            const response = await http.delete(API.GET_USER_URL + `/${id}`, { headers: { "x-api-key": apiKey } });
            return response.data;
        } catch (e) {
            console.log(e)
            return "There is something wrong try again leter!";
        }
    },
}