import axios from "axios";


const { REACT_APP_API } = process.env;

export const client = axios.create({
    baseURL: REACT_APP_API,
});