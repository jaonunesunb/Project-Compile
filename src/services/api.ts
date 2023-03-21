import axios from "axios";

export const compileApi = axios.create({
  baseURL: "https://compile-back.herokuapp.com/",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

// adiciona o header de authorization em todas as requisições
compileApi.interceptors.request.use((config) => {
  const token = localStorage.getItem("@COMPILE:token");
  if (!config.headers) return config;
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});
