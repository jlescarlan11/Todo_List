import "./styles.css";

import { loadTodoFromLocalStorage } from "./todo.js";
import {
  initializeUI,
  displayTodo,
  displayNote,
  displayProject,
} from "./ui.js";
import { loadNoteFromLocalStorage } from "./note.js";
import form from "./form.js";
import { loadProjectFromLocalStorage } from "./project.js";

form();
initializeUI();

loadNoteFromLocalStorage();
loadTodoFromLocalStorage();
loadProjectFromLocalStorage();
displayProject();
displayTodo();

const homeTab = document.querySelector("#option-container__list-container");

homeTab.addEventListener("click", (event) => {
  const tab = event.target.closest("li.tab");

  if (tab) {
    const tabId = tab.id;
    console.log(tabId);

    switch (tabId) {
      case "all":
        displayTodo();
        break;

      case "today":
        displayTodo({ today: true });
        break;

      case "urgent":
        displayTodo({ urgent: true });
        break;

      case "note":
        displayNote();
        break;

      default:
        break;
    }
  }
});

const projectTab = document.querySelector("#project-container__list-container");

projectTab.addEventListener("click", (event) => {
  const tab = event.target.closest("li.tab");

  if (tab) {
    const projectName = tab.id;
    // console.log(projectName);
    displayTodo({ project: projectName });
  }
});

const noteTab = document.querySelector("#tab-note");

noteTab.addEventListener("click", () => {
  displayNote();
});
