import apiClient from "./apiClient";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const registerUser = async (username: string, password: string) => {
  try {
    const response = await apiClient.post("/register", { username, password });
    return response.data; // contains success message
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Registration failed");
  }
};

export const loginUser = async (username: string, password: string) => {
  try {
    console.log("loginUser");
    const response = await apiClient.post("/login", { username, password });
    console.log("Response:", response);
    const { access_token } = response.data;

    // Save token to AsyncStorage
    await AsyncStorage.setItem("token", access_token);
    return access_token; // return jwt token
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const logoutUser = async () => {
  // Clear token from AsyncStorage
  await AsyncStorage.removeItem("token");
};
