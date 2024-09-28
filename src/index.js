import "./styles.css";

import { addTodoToList } from "./todo.js";
import { initializeUI, displayTodo, displayNote } from "./ui.js";
import form from "./form.js";

form();
initializeUI();

addTodoToList(
  "this is the title",
  "this is the description",
  "this is date",
  "this is the priority",
  "this is project"
);

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
