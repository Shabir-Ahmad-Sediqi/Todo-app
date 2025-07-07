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
};

export const Signup = async (username, email, password) => {
    const response = await api.post("register", {username, email, password})
    return response.data
};

export const UserInfo = async () => {
    const response = await api.get("/profile");
    return response.data.data
};

export const UpdateProfileBio = async (bio) => {
    const response = await api.patch("/profile/bio", {bio})
    return response.data
}

