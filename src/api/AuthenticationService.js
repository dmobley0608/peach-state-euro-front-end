import axios from "axios";

export const apiClient = axios.create(
    {
    baseURL: 'https://api.peachstateeuro.com/'
    }
);

export const executeJwtAuthentication = (username, password)=>apiClient.post("authenticate", {username, password})

 
