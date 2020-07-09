import axios from "axios";

const api = axios.create({
  baseURL: "https://api-dribbbleo.herokuapp.com",
});

export default api;
