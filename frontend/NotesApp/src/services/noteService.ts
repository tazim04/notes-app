import apiClient from "./apiClient";

export const getNotes = async () => {
  try {
    const response = await apiClient.get("/notes");
    return response.data; // contains list of notes
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Failed to fetch notes");
  }
};

export const createNote = async (title: string, content: string) => {
  try {
    const response = await apiClient.post("/notes", { title, content });
    return response.data; // contains the created note's id and success message
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Failed to create note");
  }
};
