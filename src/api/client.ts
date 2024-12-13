import axios, { AxiosInstance } from "axios";

const apiClient: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL as string,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
