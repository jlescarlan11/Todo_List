import "./styles.css";

const dialog = document.querySelector("dialog");
const addMenuButton = document.querySelectorAll(".add-menu-btn");

addMenuButton.forEach((addMenu) => {
  addMenu.addEventListener("click", () => {
    dialog.showModal();
  });
});
