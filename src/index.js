import { getProducts } from "./data/services/product.js";

document.addEventListener("DOMContentLoaded", async (e) => {
  e.preventDefault;
  showProducts(await getProducts());
});

const categoryContainer = {
  1: "#featured-one",
  2: "#featured-two",
  3: "#featured-three",
};

function generateProductHtml(product) {
  return `
    <div class="featured-section-content">
      <img src="${product.image}" alt="product" class="featured-section-content__image"/>
      <h2 class="featured-section-content__title">${product.name}</h2>
      <p class="featured-section-content__subtitle">$${product.price}</p>
      <a href="#" class="featured-section-content__button">Ver producto</a>
    </div>
  `;
}

function showProducts(data) {
  const productsByCategory = {};
  data.forEach((product) => {
    const categoryId = product.categoryId;
    productsByCategory[categoryId] = productsByCategory[categoryId] || [];
    productsByCategory[categoryId].push(product);
  });

  Object.keys(productsByCategory).forEach((categoryId) => {
    const productsHtml = productsByCategory[categoryId]
      .map((product) => generateProductHtml(product))
      .join("");
    document.querySelector(categoryContainer[categoryId]).innerHTML =
      productsHtml;
  });
}
