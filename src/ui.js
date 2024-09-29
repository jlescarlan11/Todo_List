import {
  getTodoList,
  loadTodoFromLocalStorage,
  saveTodoFromLocalStorage,
} from "./todo.js";
import { getNoteList, saveNoteFromLocalStorage } from "./note.js";
import { getProjectList } from "./project.js";

const dialog = document.querySelector("#add-menu");
const editDialog = document.querySelector("#edit-menu");
const addMenuButton = document.querySelectorAll(".add-menu-btn");
const cancelFormButton = document.querySelector(".add-new__cancel-btn");
const openMenuButton = document.querySelector(".open-menu-btn");
const closeMenuButton = document.querySelector(".close-menu-btn");

export function initializeUI() {
  addMenuButton.forEach((addMenu) => {
    addMenu.addEventListener("click", () => dialog.showModal());
  });

  cancelFormButton.addEventListener("click", (e) => {
    e.preventDefault();
    dialog.close();
  });

  openMenuButton.addEventListener("click", () => {
    document.querySelector(".sidebar-content").style.width = "25rem";
    document.querySelector(".sidebar-content").style.padding = "2.4rem";
    // document.querySelector(".sidebar-content__btn").style.display = "flex";
    document.querySelector(".main-content").style.marginLeft = "25rem";
    document.querySelector(".main-content__btn").style.display = "none";
  });

  closeMenuButton.addEventListener("click", () => {
    document.querySelector(".sidebar-content").style.width = "0";
    document.querySelector(".sidebar-content").style.padding = "2.4rem 0";
    // document.querySelector(".sidebar-content__btn").style.display = "none";
    document.querySelector(".main-content").style.marginLeft = "0";
    document.querySelector(".main-content__btn").style.display = "flex";
  });
}

function createListCard(list, index, isTodo = true) {
  const listCard = document.createElement("div");
  listCard.className = "list-card";

  // Main Detail
  const mainDetail = document.createElement("div");
  mainDetail.className = "main-detail";
  const title = list.title || "Untitled"; // Fallback to "Untitled" if title is undefined
  const uniqueId = `checkbox-${index}-${title
    .replace(/\s+/g, "-")
    .toLowerCase()}`;

  if (isTodo) {
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = uniqueId;
    mainDetail.appendChild(checkbox);

    const titleLabel = document.createElement("label");
    titleLabel.setAttribute("for", uniqueId);
    titleLabel.textContent = title;
    mainDetail.appendChild(titleLabel);
  } else {
    const titleElement = document.createElement("p");
    titleElement.textContent = title;
    mainDetail.appendChild(titleElement);
  }

  listCard.appendChild(mainDetail);

  // Sub Detail
  const subDetail = document.createElement("div");
  subDetail.className = "sub-detail";

  const detailButton = document.createElement("button");
  detailButton.textContent = "details";
  subDetail.appendChild(detailButton);

  const date = isTodo ? document.createElement("p") : null;
  if (date) {
    date.textContent = list.date;
    subDetail.appendChild(date);
  }

  const editIcon = createIcon("edit_note", "edit-icon");
  const deleteIcon = createIcon("delete", "delete-icon");

  subDetail.appendChild(editIcon);
  subDetail.appendChild(deleteIcon);

  listCard.appendChild(subDetail);
  return listCard;
}

function createIcon(iconName, iconClass) {
  const icon = document.createElement("span");
  icon.className = `material-symbols-outlined ${iconClass}`;
  icon.textContent = iconName;
  return icon;
}

export function displayTodo(filter = {}) {
  const contents = document.querySelector(".main-content__container");
  contents.innerHTML = "";

  // Get the full todo list and apply filters
  const filteredList = getTodoList().filter((list) => {
    const isToday = filter.today
      ? list.date === new Date().toISOString().split("T")[0]
      : true;
    const isUrgent = filter.urgent ? list.priority === "urgent" : true;
    const isProject = filter.project ? list.project === filter.project : true;

    return isToday && isUrgent && isProject;
  });

  const fragment = document.createDocumentFragment();
  filteredList.forEach((list, index) => {
    const listCard = createListCard(list, index);
    fragment.appendChild(listCard);

    const removeTodo = listCard.querySelector(".delete-icon");
    removeTodo.addEventListener("click", (e) => {
      getTodoList().splice(index, 1);
      saveTodoFromLocalStorage();
      displayTodo();
    });

    const editTodo = listCard.querySelector(".edit-icon");
    editTodo.addEventListener("click", (e) => {
      const currentTodo = getTodoList()[index];

      // Populate form fields with current values
      document.querySelector("#edit-task").value = currentTodo.title;
      document.querySelector("#edit-description").value =
        currentTodo.description;
      document.querySelector("#edit-due-date").value = currentTodo.date;
      document.querySelector("#edit-priority").value = currentTodo.priority;
      document.querySelector("#edit-todo-menu__select-project").value =
        currentTodo.project;
      // WILL EDIT THIS
      console.log(currentTodo);
      // Open the edit dialog
      editDialog.showModal();

      // Set an event listener for updating the todo on form submit
      const form = document.querySelector("#edit-todo-menu");
      form.onsubmit = function (event) {
        event.preventDefault();

        // Update the currentTodo with edited values
        currentTodo.title = document.getElementById("edit-task").value;
        currentTodo.description =
          document.getElementById("edit-description").value;
        currentTodo.date = document.getElementById("edit-due-date").value;
        currentTodo.priority = document.getElementById("edit-priority").value;
        currentTodo.project = document.getElementById(
          "edit-todo-menu__select-project"
        ).value;

        // Save the updated To Do list
        saveTodoFromLocalStorage();

        // Refresh the displayed list
        displayTodo();

        // Close the dialog
        editDialog.close();
      };
    });

    document
      .getElementById("edit-cancel-btn")
      .addEventListener("click", function () {
        editDialog.close();
      });
  });
  contents.appendChild(fragment);
}

export function displayNote() {
  const contents = document.querySelector(".main-content__container");
  contents.innerHTML = "";

  const fragment = document.createDocumentFragment();
  getNoteList().forEach((list, index) => {
    const listCard = createListCard(list, index, false);
    fragment.appendChild(listCard);

    const removeNote = listCard.querySelector(".delete-icon");

    removeNote.addEventListener("click", (e) => {
      getNoteList().splice(index, 1);
      saveNoteFromLocalStorage();
      displayNote();
    });
  });
  contents.appendChild(fragment);
}

export function displayProject() {
  const select = document.querySelector("#new-todo-menu__select-project");
  select.innerHTML = "";
  const projectContainer = document.querySelector(
    "#project-container__list-container"
  );
  projectContainer.innerHTML = "";

  getProjectList().forEach((list, index) => {
    const option = document.createElement("option");
    option.textContent = list.project;
    option.value = list.project;
    select.appendChild(option);

    const li = document.createElement("li");

    li.id = list.project;
    li.className = "tab";
    const span = document.createElement("span");
    span.textContent = list.project;
    li.appendChild(span);

    projectContainer.appendChild(li);
  });
}

function swapElement(array, index) {
  const lastElement = array[array.length - 1];
  array[array.length - 1] = array[index];
  array[index] = lastElement;
}
