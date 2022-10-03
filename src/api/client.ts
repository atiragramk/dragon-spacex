import axios from "axios";


const { REACT_APP_API } = process.env;

export const client = axios.create({
    baseURL: ' https://api.spacexdata.com/v4/',
});


client.interceptors.response.use(
    (response) => response.data,
    (error) => {
        return Promise.reject(error)
    }
);