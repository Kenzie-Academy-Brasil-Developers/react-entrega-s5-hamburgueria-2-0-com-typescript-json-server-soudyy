import axios from "axios";

export const api = axios.create({
  baseURL: "https://hambur-server.herokuapp.com/",
});
