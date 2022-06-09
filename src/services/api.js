import axios from "axios";

const api = axios.create({
    baseURL: 'https://admin-apoioaplv.herokuapp.com'
});

export default api;
