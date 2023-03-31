import { getCategories } from "/src/data/services/category.js";
import { getProducts, createProduct } from "/src/data/services/product.js";

document.addEventListener("DOMContentLoaded", async (e) => {
  e.preventDefault();
  addCategories(await getCategories());
  const products = await getProducts();
  const id = Math.max(...products.map((product) => product.id));
  const name = document.getElementById("name-form-add");
  const price = document.getElementById("price-form-add");
  const description = document.getElementById("description-form-add");
  const image = document.getElementById("image-form-add");
  const categoryId = document.getElementById("category-form-add");

  const button = document.getElementById("form-add-button");
  button.addEventListener("click", (e) => {
    e.preventDefault();
    addProduct({
      id: id + 1,
      name: name.value,
      price: price.value,
      description: description.value,
      image: image.value,
      categoryId: categoryId.value,
    });
    window.location.href = "/src/products/";
  });
});

const addCategories = (dataCategories) => {
  const select = document.getElementById("category-form-add");
  dataCategories.forEach((item) => {
    select.innerHTML += `<option value="${item.id}">${item.name}</option>`;
  });
};

const addProduct = async (product) => {
  await createProduct(product);
};
