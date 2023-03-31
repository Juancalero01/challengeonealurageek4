import { getProduct, updateProduct } from "/src/data/services/product.js";
import { getCategories } from "/src/data/services/category.js";
import { formEditTemplate } from "/src/core/js/form-edit-template.js";

document.addEventListener("DOMContentLoaded", async (e) => {
  e.preventDefault();
  showProduct(await getProduct(localStorage.getItem("productIdToUpdate")));
  addCategories(
    await getProduct(localStorage.getItem("productIdToUpdate")),
    await getCategories()
  );

  const name = document.getElementById("name-form-edit");
  const price = document.getElementById("price-form-edit");
  const description = document.getElementById("description-form-edit");
  const image = document.getElementById("image-form-edit");
  const categoryId = document.getElementById("category-form-edit");

  const button = document.getElementById("form-edit-button");
  button.addEventListener("click", (e) => {
    e.preventDefault();
    putProduct({
      name: name.value,
      price: price.value,
      description: description.value,
      image: image.value,
      categoryId: categoryId.value,
    });
    localStorage.removeItem("productIdToUpdate");
    window.location.href = "/src/products/";
  });
});

const showProduct = (dataSource) => {
  const productHtml = formEditTemplate(dataSource);
  document.querySelector("#form-edit").innerHTML = productHtml;
};

const addCategories = (dataProduct, dataCategories) => {
  const select = document.getElementById("category-form-edit");
  dataCategories.forEach((item) => {
    select.innerHTML += `<option value="${item.id}">${item.name}</option>`;
  });
  select.value = dataProduct.categoryId;
};

const putProduct = async (product) => {
  await updateProduct(localStorage.getItem("productIdToUpdate"), product);
};
