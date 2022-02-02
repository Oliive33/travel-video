const menuToggle = document.querySelector(".toggle");
const showcase = document.querySelector(".showcase");

function toggle() {
  menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    showcase.classList.toggle("active");
  });
}
toggle();
