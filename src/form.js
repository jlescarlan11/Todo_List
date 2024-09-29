import { addNoteToList } from "./note.js";
import { addProjectToList } from "./project.js";
import { addTodoToList } from "./todo.js";
import { displayProject } from "./ui.js";

export default () => {
  const addNewOption = document.querySelectorAll(".add-new__options");
  const newTodoMenu = document.querySelector("#new-todo-menu");
  const newProjectMenu = document.querySelector("#new-project-menu");
  const newNoteMenu = document.querySelector("#new-note-menu");

  addNewOption.forEach((option) => {
    option.addEventListener("click", (e) => {
      const optionId = e.target.closest("ul").id;
      switch (optionId) {
        case "todo":
          newProjectMenu.style.display = "none";
          newNoteMenu.style.display = "none";
          newTodoMenu.style.display = "flex";
          break;
        case "project":
          newTodoMenu.style.display = "none";
          newNoteMenu.style.display = "none";
          newProjectMenu.style.display = "flex";
          break;
        case "note":
          newTodoMenu.style.display = "none";
          newProjectMenu.style.display = "none";
          newNoteMenu.style.display = "flex";
          break;
        default:
          break;
      }
    });
  });

  const submitButtons = document.querySelectorAll(".submit");
  const form = document.querySelector("#add-new-menu");
  const dialog = document.querySelector("dialog");

  submitButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();

      let activeMenuId;
      if (window.getComputedStyle(newTodoMenu).display === "flex") {
        activeMenuId = "todo";
      } else if (window.getComputedStyle(newProjectMenu).display === "flex") {
        activeMenuId = "project";
      } else if (window.getComputedStyle(newNoteMenu).display === "flex") {
        activeMenuId = "note";
      }

      switch (activeMenuId) {
        case "todo":
          if (form.checkValidity()) {
            const title = document.querySelector("#task");
            const description = document.querySelector("#description");
            const date = document.querySelector("#due-date");
            const priority = document.querySelector("#priority");
            const project = document.querySelector(
              "#new-todo-menu__select-project"
            );

            addTodoToList(
              title.value,
              description.value,
              date.value,
              priority.value,
              project.value
            );

            dialog.close();
            form.reset();
          } else {
            form.reportValidity();
          }
          break;

        case "project":
          if (form.checkValidity()) {
            const project = document.querySelector("#add-project__project");

            addProjectToList(project.value);

            dialog.close();
            form.reset();
          } else {
            form.reportValidity();
          }
          break;

        case "note":
          if (form.checkValidity()) {
            const title = document.querySelector("#note-title");
            const details = document.querySelector("#note-details");

            addNoteToList(title.value, details.value);

            dialog.close();
            form.reset();
          } else {
            form.reportValidity();
          }
          break;

        default:
          break;
      }
    });
  });
};
