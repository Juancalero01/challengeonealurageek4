import { panelTemplate } from "../core/js/panel-template.js";
import { getProducts, removeProduct } from "../data/services/product.js";

document.addEventListener("DOMContentLoaded", async (e) => {
  e.preventDefault;
  showProducts(await getProducts());
});

const showProducts = (dataSource) => {
  const productsHtml = dataSource
    .map((product) => panelTemplate(product))
    .join("");
  document.querySelector("#panel-container").innerHTML = productsHtml;
  addDeleteHandlers();
  addUpdateHandlers();
};

const addDeleteHandlers = () => {
  const deleteButtons = document.querySelectorAll(
    ".panel-section-wrapper-option__button-icon-delete"
  );

  deleteButtons.forEach((button) => {
    const productId = button.dataset.productId;
    button.addEventListener("click", async () => {
      await removeProduct(productId);
    });
  });
};

const addUpdateHandlers = () => {
  const updateButtons = document.querySelectorAll(
    ".panel-section-wrapper-option__button-icon-edit"
  );
  updateButtons.forEach((button) => {
    const productId = button.dataset.productId;
    button.addEventListener("click", () => {
      localStorage.setItem("productIdToUpdate", productId);
      window.location.href = "./form/edit";
    });
  });
};
