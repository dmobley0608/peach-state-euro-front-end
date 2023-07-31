import axios from "axios";

export const apiClient = axios.create(
    {
    baseURL: '/api/'
    }
);

export const executeJwtAuthentication = (username, password)=>apiClient.post("authenticate", {username, password})

 
