import { API_URL } from "../constants/api.js";

export const getCategories = async () => {
  try {
    const response = await fetch(`${API_URL}categories`, {
      method: "GET",
    }).then((response) => response.json());
    return response;
  } catch (e) {
    console.error(e);
  }
};
