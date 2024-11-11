document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(
    ".filter-buttons__filter-button"
  );
  const portfolioItems = document.querySelectorAll(
    ".portfolio-container__portfolio-box"
  );

  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const category = button.textContent.trim();

      portfolioItems.forEach((item) => {
        const image = item.querySelector("img");
        const itemCategory = image.getAttribute("alt");

        if (category === "Всі" || itemCategory === category) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });

      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
    });
  });
});
