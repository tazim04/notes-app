// base api client, main config

import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const apiClient = axios.create({
  baseURL: "http://10.0.0.195:5000/api", // base url for my flask project apis
  headers: {
    "Content-Type": "application/json",
  },
});

// interceptor to attach JWT token to requests
apiClient.interceptors.request.use((config) => {
  const token = AsyncStorage.getItem("token"); // get token from storage
  if (token) {
    config.headers.Authorization = `Bearer ${token}`; // attatch token to authorization header
  }
  return config;
});

export default apiClient;
