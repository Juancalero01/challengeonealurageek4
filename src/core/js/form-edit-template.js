export const formEditTemplate = (product) => `
  <form method="#" class="form-edit-section-form">
    <h2 class="form-edit-section-form__title">Editar producto</h2>
    <div class="form-edit-section-form-content">
      <label for="image-form-edit" class="form-edit-section-form-content__title"
        >URL de la imagen del producto</label
      >
      <input
        type="text"
        id="image-form-edit"
        class="form-edit-section-form-content__text"
        value="${product.image}"
        required
      />
    </div>
    <div class="form-edit-section-form-content">
      <label for="category-form-edit" class="form-edit-section-form-content__title"
        >Categoria</label
      >
      <select id="category-form-edit" class="form-edit-section-form-content__text" required>
      </select>
    </div>
    <div class="form-edit-section-form-content">
      <label for="name-form-edit" class="form-edit-section-form-content__title"
        >Nombre del producto</label
      >
      <input
        type="text"
        id="name-form-edit"
        class="form-edit-section-form-content__text"
        value="${product.name}"
        required
      />
    </div>
    <div class="form-edit-section-form-content">
      <label for="price-form-edit" class="form-edit-section-form-content__title"
        >Precio del producto</label
      >
      <input
        type="number"
        id="price-form-edit"
        class="form-edit-section-form-content__text"
        value="${product.price}"
        required
      />
    </div>
    <div class="form-edit-section-form-content">
      <label
        for="description-form-edit"
        class="form-edit-section-form-content__title"
        >Descripción del producto</label
      >
      <textarea
        id="description-form-edit"
        class="form-edit-section-form-content__description"
      >
${product.description}</textarea
      >
    </div>
    <button id="form-edit-button" type="click" class="form-edit-section-form__button">
      Editar producto
    </button>
  </form>
`;
