document.addEventListener("DOMContentLoaded", () => {
  const logo = document.querySelector(".header__logo-text");

  logo.addEventListener("click", () => {
    window.location.href = "./index.html";
  });
  
});
