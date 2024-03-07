import axios from "axios";
import store from "../../store/store";
import Interceptor from "../interceptor/Interceptor";


const headers = {
  "Accept-Language": "application/json",
};
export const ClientCalls = axios.create({
  baseURL: import.meta.env.VITE_API_V0_ENDPOINT,
  headers: headers,
});

ClientCalls.interceptors.request.use((config) => {
  config.headers.Accept = "application/json";
  config.headers.Authorization = store.getState().signin.token;
  return config;
});

Interceptor(ClientCalls)