import axios from "axios";

const BASE_URL = "https://644ada15a8370fb3215941e7.mockapi.io";

export const getAllUsers = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/users`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};