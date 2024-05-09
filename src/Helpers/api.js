import axios from "axios";

export const api = axios.create({
    baseURL:"https://moviesapi.codingfront.dev//api/v1/",
});
export default api;