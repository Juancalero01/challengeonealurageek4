import { API_URL } from "../constants/api.js";

export const getProducts = async () => {
  try {
    const response = await fetch(`${API_URL}products`, {
      method: "GET",
    }).then((response) => response.json());
    return response;
  } catch (e) {
    console.error("Error al recuperar los productos:", e);
  }
};

export const getProduct = async (id) => {
  try {
    const response = await fetch(`${API_URL}products/${id}`, {
      method: "GET",
    }).then((response) => response.json());
    return response;
  } catch (e) {
    console.error("Error al recuperar el producto:", e);
  }
};

export const removeProduct = async (id) => {
  try {
    const response = await fetch(`${API_URL}products/${id}`, {
      method: "DELETE",
    });
    return response;
  } catch (e) {
    console.error("Error al eliminar el producto:", e);
  }
};

export const updateProduct = async (id, body) => {
  try {
    const response = await fetch(`${API_URL}products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((response) => response.json());
    return response;
  } catch (e) {
    console.error("Error al actualizar el producto");
  }
};

export const createProduct = async (body) => {
  try {
    const response = await fetch(`${API_URL}products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((response) => response.json());
    return response;
  } catch (e) {
    console.error("Error al crear el producto");
  }
};
