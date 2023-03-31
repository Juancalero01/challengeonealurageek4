document.addEventListener("DOMContentLoaded", (e) => {
  e.preventDefault();
  const button = document.getElementById("login-button");
  button.addEventListener("click", () => {
    window.location.href = "/src/products/";
  });
});
