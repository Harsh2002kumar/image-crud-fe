// apiService.js
import axios from "axios";

const API_URL = "https://image-crud-be-o64a.onrender.com";

// export const fetchImages = async () => {
//   try {
//     const response = await axios.get(`${API_URL}/fetch`);
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching images:", error);
//     throw error;
//   }
// };

export const updateImage = async (id, updatedData) => {
  try {
    const response = await axios.put(`${API_URL}/update/${id}`, updatedData);
    return response.data;
  } catch (error) {
    console.error("Error updating image:", error);
    throw error;
  }
};

export const uploadImage = async (imageData) => {
  try {
    const response = await axios.post(`${API_URL}/upload`, imageData);
    return response.data;
  } catch (error) {
    console.error("Error uploading image:", error);
    throw error;
  }
};

export const deleteImage = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/delete/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting image:", error);
    throw error;
  }
};
