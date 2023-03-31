export const panelTemplate = (product) => `
    <div class="panel-section-content">
      <div class="panel-section-wrapper">
        <div class="panel-section-wrapper-image" style="background-image: url('${product.image}')"></div>
        <div class="panel-section-wrapper-option">
          <button class="panel-section-wrapper-option__button"
            ><span
              class="panel-section-wrapper-option__button-icon-edit"  data-product-id="${product.id}"
            ></span
          ></button>
          <button class="panel-section-wrapper-option__button" 
            ><span
              class="panel-section-wrapper-option__button-icon-delete" data-product-id="${product.id}"
            ></span
          ></button>
        </div>
      </div>
      <h2 class="panel-section-content__title">${product.name}</h2>
      <p class="panel-section-content__subtitle">${product.price}</p>
      <span class="panel-section-content__id">#${product.id}</span>
    </div>
  `;
