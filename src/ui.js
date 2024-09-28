import { getTodoList } from "./todo.js";
import { getNoteList } from "./note.js";

const dialog = document.querySelector("dialog");
const addMenuButton = document.querySelectorAll(".add-menu-btn");
const cancelFormButton = document.querySelector(".add-new__cancel-btn");
const openMenuButton = document.querySelector(".open-menu-btn");
const closeMenuButton = document.querySelector(".close-menu-btn");

export function initializeUI() {
  addMenuButton.forEach((addMenu) => {
    addMenu.addEventListener("click", () => {
      dialog.showModal();
    });
  });

  cancelFormButton.addEventListener("click", (e) => {
    e.preventDefault();
    dialog.close();
  });

  openMenuButton.addEventListener("click", () => {
    document.querySelector(".sidebar-content").style.width = "25rem";
    document.querySelector(".main-content").style.marginLeft = "25rem";
    document.querySelector(".main-content__btn").style.display = "none";
  });

  closeMenuButton.addEventListener("click", () => {
    document.querySelector(".sidebar-content").style.width = "0";
    document.querySelector(".main-content").style.marginLeft = "0";
    document.querySelector(".main-content__btn").style.display = "flex";
  });
}

export function displayTodo(filter = {}) {
  const contents = document.querySelector(".main-content__container");
  contents.innerHTML = "";

  // Get the full todo list
  const todoList = getTodoList();

  console.log(todoList);

  // Apply filters (if any)
  const filteredList = todoList.filter((list) => {
    const isToday = filter.today
      ? list.date === new Date().toISOString().split("T")[0]
      : true;
    const isUrgent = filter.urgent ? list.priority === "urgent" : true;
    console.log(`this is ${list.project}`);
    const isProject = filter.project ? list.project === filter.project : true;

    // Only include tasks that match all filters
    return isToday && isUrgent && isProject;
  });

  console.log(filteredList);

  // Render the filtered list
  filteredList.forEach((list, index) => {
    const listCard = document.createElement("div");
    listCard.className = "list-card";

    // Main detail
    const listCard__mainDetail = document.createElement("div");
    listCard__mainDetail.classList = "main-detail";
    const uniqueId = `checkbox-${index}-${list.title
      .replace(/\s+/g, "-")
      .toLowerCase()}`;
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = uniqueId;
    checkbox.name = `title-${index}`;
    listCard__mainDetail.appendChild(checkbox);

    const title = document.createElement("label");
    title.setAttribute("for", uniqueId);
    title.textContent = `${list.title}`;
    listCard__mainDetail.appendChild(title);

    listCard.appendChild(listCard__mainDetail);

    // Sub detail
    const listCard__subDetail = document.createElement("div");
    listCard__subDetail.className = "sub-detail";
    const detail = document.createElement("button");
    detail.textContent = "details";
    listCard__subDetail.appendChild(detail);

    const date = document.createElement("p");
    date.textContent = `${list.date}`;
    listCard__subDetail.appendChild(date);

    const editIcon = document.createElement("span");
    editIcon.className = "material-symbols-outlined";
    editIcon.textContent = "edit_note";
    listCard__subDetail.appendChild(editIcon);

    const deleteIcon = document.createElement("span");
    deleteIcon.className = "material-symbols-outlined";
    deleteIcon.textContent = "delete";
    listCard__subDetail.appendChild(deleteIcon);

    listCard.appendChild(listCard__subDetail);
    contents.appendChild(listCard);
  });
}

export function displayNote() {
  const contents = document.querySelector(".main-content__container");
  contents.innerHTML = "";

  getNoteList().forEach((list, index) => {
    const listCard = document.createElement("div");
    listCard.className = "list-card";

    const listCard__mainDetail = document.createElement("div");
    listCard__mainDetail.classList = "main-detail";

    const title = document.createElement("p");
    title.textContent = `${list.title}`;
    listCard__mainDetail.appendChild(title);

    listCard.appendChild(listCard__mainDetail);

    const listCard__subDetail = document.createElement("div");
    listCard__subDetail.className = "sub-detail";

    const detail = document.createElement("button");
    detail.textContent = "details";
    listCard__subDetail.appendChild(detail);

    const editIcon = document.createElement("span");
    editIcon.className = "material-symbols-outlined";
    editIcon.textContent = "edit_note";
    listCard__subDetail.appendChild(editIcon);

    const deleteIcon = document.createElement("span");
    deleteIcon.className = "material-symbols-outlined";
    deleteIcon.textContent = "delete";
    listCard__subDetail.appendChild(deleteIcon);

    listCard.appendChild(listCard__subDetail);
    contents.appendChild(listCard);
  });
}
