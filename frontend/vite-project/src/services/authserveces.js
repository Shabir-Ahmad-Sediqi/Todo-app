import axios from "axios";
import api from "./api";

export const LoginIn = async (email, password) => {
    const response = await api.post(
        "/login",
        {email, password})
    return response.data
};

export const isAuthenticated = async () => {
    const response = await api.get("/isloggedIn")
    return response.data.success
}

export const Logout = async () => {
    const response = await api.get("logout")
    return response.data
}
