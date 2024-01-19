import axios from "axios";
import { setupInterceptorsTo } from "./interceptor";

const api = setupInterceptorsTo(
  axios.create({
    baseURL: import.meta.env.VITE_PUBLIC_API_URL,
    timeout: 10 * 1000,  // 10 s
    headers: { "Content-Type": "application/json" },
  })
);

export default api;
