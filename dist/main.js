/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.js */ \"./src/todo.js\");\n/* harmony import */ var _ui_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui.js */ \"./src/ui.js\");\n\r\n\r\n\r\n(0,_ui_js__WEBPACK_IMPORTED_MODULE_1__.initializeUI)();\r\n\r\n(0,_todo_js__WEBPACK_IMPORTED_MODULE_0__.addTodoToList)(\r\n  \"this is the title\",\r\n  \"this is the description\",\r\n  \"this is date\",\r\n  \"this is the priority\",\r\n  \"this is project\"\r\n);\r\n(0,_todo_js__WEBPACK_IMPORTED_MODULE_0__.addTodoToList)(\r\n  \"this is the title\",\r\n  \"this is the description\",\r\n  \"this is date\",\r\n  \"this is the priority\",\r\n  \"this is project\"\r\n);\r\n(0,_ui_js__WEBPACK_IMPORTED_MODULE_1__.displayTodo)();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7O0FBQTBDO0FBQ1U7QUFDcEQ7QUFDQSxvREFBWTtBQUNaO0FBQ0EsdURBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYWRkVG9kb1RvTGlzdCB9IGZyb20gXCIuL3RvZG8uanNcIjtcclxuaW1wb3J0IHsgaW5pdGlhbGl6ZVVJLCBkaXNwbGF5VG9kbyB9IGZyb20gXCIuL3VpLmpzXCI7XHJcblxyXG5pbml0aWFsaXplVUkoKTtcclxuXHJcbmFkZFRvZG9Ub0xpc3QoXHJcbiAgXCJ0aGlzIGlzIHRoZSB0aXRsZVwiLFxyXG4gIFwidGhpcyBpcyB0aGUgZGVzY3JpcHRpb25cIixcclxuICBcInRoaXMgaXMgZGF0ZVwiLFxyXG4gIFwidGhpcyBpcyB0aGUgcHJpb3JpdHlcIixcclxuICBcInRoaXMgaXMgcHJvamVjdFwiXHJcbik7XHJcbmFkZFRvZG9Ub0xpc3QoXHJcbiAgXCJ0aGlzIGlzIHRoZSB0aXRsZVwiLFxyXG4gIFwidGhpcyBpcyB0aGUgZGVzY3JpcHRpb25cIixcclxuICBcInRoaXMgaXMgZGF0ZVwiLFxyXG4gIFwidGhpcyBpcyB0aGUgcHJpb3JpdHlcIixcclxuICBcInRoaXMgaXMgcHJvamVjdFwiXHJcbik7XHJcbmRpc3BsYXlUb2RvKCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Todo: () => (/* binding */ Todo),\n/* harmony export */   addTodoToList: () => (/* binding */ addTodoToList),\n/* harmony export */   clearTodoList: () => (/* binding */ clearTodoList),\n/* harmony export */   getTodoList: () => (/* binding */ getTodoList)\n/* harmony export */ });\nclass Todo {\r\n  constructor(title, description, date, priority, project) {\r\n    this.title = title;\r\n    this.description = description;\r\n    this.date = date;\r\n    this.priority = priority;\r\n    this.project = project;\r\n  }\r\n}\r\n\r\nlet myTodoList = [];\r\n\r\nfunction addTodoToList(title, description, date, priority, project) {\r\n  const newTodo = new Todo(title, description, date, priority, project);\r\n  myTodoList.push(newTodo);\r\n}\r\n\r\nfunction getTodoList() {\r\n  return myTodoList;\r\n}\r\n\r\nfunction clearTodoList() {\r\n  myTodoList = [];\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdG9kby5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL3RvZG8uanM/MjRkOSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgVG9kbyB7XHJcbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRlLCBwcmlvcml0eSwgcHJvamVjdCkge1xyXG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgdGhpcy5kYXRlID0gZGF0ZTtcclxuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XHJcbiAgfVxyXG59XHJcblxyXG5sZXQgbXlUb2RvTGlzdCA9IFtdO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZFRvZG9Ub0xpc3QodGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRlLCBwcmlvcml0eSwgcHJvamVjdCkge1xyXG4gIGNvbnN0IG5ld1RvZG8gPSBuZXcgVG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIGRhdGUsIHByaW9yaXR5LCBwcm9qZWN0KTtcclxuICBteVRvZG9MaXN0LnB1c2gobmV3VG9kbyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRUb2RvTGlzdCgpIHtcclxuICByZXR1cm4gbXlUb2RvTGlzdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyVG9kb0xpc3QoKSB7XHJcbiAgbXlUb2RvTGlzdCA9IFtdO1xyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/todo.js\n");

/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayTodo: () => (/* binding */ displayTodo),\n/* harmony export */   initializeUI: () => (/* binding */ initializeUI)\n/* harmony export */ });\n/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.js */ \"./src/todo.js\");\n\r\n\r\nconst dialog = document.querySelector(\"dialog\");\r\nconst addMenuButton = document.querySelectorAll(\".add-menu-btn\");\r\nconst cancelFormButton = document.querySelector(\".add-new__cancel-btn\");\r\nconst openMenuButton = document.querySelector(\".open-menu-btn\");\r\nconst closeMenuButton = document.querySelector(\".close-menu-btn\");\r\n\r\nfunction initializeUI() {\r\n  addMenuButton.forEach((addMenu) => {\r\n    addMenu.addEventListener(\"click\", () => {\r\n      dialog.showModal();\r\n    });\r\n  });\r\n\r\n  cancelFormButton.addEventListener(\"click\", (e) => {\r\n    e.preventDefault();\r\n    dialog.close();\r\n  });\r\n\r\n  openMenuButton.addEventListener(\"click\", () => {\r\n    document.querySelector(\".sidebar-content\").style.width = \"25rem\";\r\n    document.querySelector(\".main-content\").style.marginLeft = \"25rem\";\r\n    document.querySelector(\".main-content__btn\").style.display = \"none\";\r\n  });\r\n\r\n  closeMenuButton.addEventListener(\"click\", () => {\r\n    document.querySelector(\".sidebar-content\").style.width = \"0\";\r\n    document.querySelector(\".main-content\").style.marginLeft = \"0\";\r\n    document.querySelector(\".main-content__btn\").style.display = \"flex\";\r\n  });\r\n}\r\n\r\nfunction displayTodo() {\r\n  const contents = document.querySelector(\".main-content__container\");\r\n  contents.innerHTML = \"\";\r\n\r\n  (0,_todo_js__WEBPACK_IMPORTED_MODULE_0__.getTodoList)().forEach((list, index) => {\r\n    const listCard = document.createElement(\"div\");\r\n    listCard.className = \"list-card\";\r\n\r\n    const listCard__mainDetail = document.createElement(\"div\");\r\n    listCard__mainDetail.classList = \"main-detail\";\r\n\r\n    const uniqueId = `checkbox-${index}-${list.title\r\n      .replace(/\\s+/g, \"-\")\r\n      .toLowerCase()}`;\r\n    const checkbox = document.createElement(\"input\");\r\n    checkbox.type = \"checkbox\";\r\n    checkbox.id = uniqueId;\r\n    checkbox.name = `title-${index}`;\r\n    listCard__mainDetail.appendChild(checkbox);\r\n\r\n    const title = document.createElement(\"label\");\r\n    title.setAttribute(\"for\", uniqueId);\r\n    title.textContent = `${list.title}`;\r\n    listCard__mainDetail.appendChild(title);\r\n\r\n    listCard.appendChild(listCard__mainDetail);\r\n\r\n    const listCard__subDetail = document.createElement(\"div\");\r\n    listCard__subDetail.className = \"sub-detail\";\r\n\r\n    const detail = document.createElement(\"button\");\r\n    detail.textContent = \"details\";\r\n    listCard__subDetail.appendChild(detail);\r\n\r\n    const date = document.createElement(\"p\");\r\n    date.textContent = `${list.date}`;\r\n    listCard__subDetail.appendChild(date);\r\n\r\n    const editIcon = document.createElement(\"span\");\r\n    editIcon.className = \"material-symbols-outlined\";\r\n    editIcon.textContent = \"edit_note\";\r\n    listCard__subDetail.appendChild(editIcon);\r\n\r\n    const deleteIcon = document.createElement(\"span\");\r\n    deleteIcon.className = \"material-symbols-outlined\";\r\n    deleteIcon.textContent = \"delete\";\r\n    listCard__subDetail.appendChild(deleteIcon);\r\n\r\n    listCard.appendChild(listCard__subDetail);\r\n    contents.appendChild(listCard);\r\n  });\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdWkuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXdDO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQSxFQUFFLHFEQUFXO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLE1BQU0sR0FBRztBQUMxQztBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsTUFBTTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixXQUFXO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixVQUFVO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvdWkuanM/Nzk4ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRUb2RvTGlzdCB9IGZyb20gXCIuL3RvZG8uanNcIjtcclxuXHJcbmNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaWFsb2dcIik7XHJcbmNvbnN0IGFkZE1lbnVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmFkZC1tZW51LWJ0blwiKTtcclxuY29uc3QgY2FuY2VsRm9ybUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLW5ld19fY2FuY2VsLWJ0blwiKTtcclxuY29uc3Qgb3Blbk1lbnVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm9wZW4tbWVudS1idG5cIik7XHJcbmNvbnN0IGNsb3NlTWVudUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2xvc2UtbWVudS1idG5cIik7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGl6ZVVJKCkge1xyXG4gIGFkZE1lbnVCdXR0b24uZm9yRWFjaCgoYWRkTWVudSkgPT4ge1xyXG4gICAgYWRkTWVudS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICBkaWFsb2cuc2hvd01vZGFsKCk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgY2FuY2VsRm9ybUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGRpYWxvZy5jbG9zZSgpO1xyXG4gIH0pO1xyXG5cclxuICBvcGVuTWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWRlYmFyLWNvbnRlbnRcIikuc3R5bGUud2lkdGggPSBcIjI1cmVtXCI7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tY29udGVudFwiKS5zdHlsZS5tYXJnaW5MZWZ0ID0gXCIyNXJlbVwiO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLWNvbnRlbnRfX2J0blwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgfSk7XHJcblxyXG4gIGNsb3NlTWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWRlYmFyLWNvbnRlbnRcIikuc3R5bGUud2lkdGggPSBcIjBcIjtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1jb250ZW50XCIpLnN0eWxlLm1hcmdpbkxlZnQgPSBcIjBcIjtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1jb250ZW50X19idG5cIikuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheVRvZG8oKSB7XHJcbiAgY29uc3QgY29udGVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tY29udGVudF9fY29udGFpbmVyXCIpO1xyXG4gIGNvbnRlbnRzLmlubmVySFRNTCA9IFwiXCI7XHJcblxyXG4gIGdldFRvZG9MaXN0KCkuZm9yRWFjaCgobGlzdCwgaW5kZXgpID0+IHtcclxuICAgIGNvbnN0IGxpc3RDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGxpc3RDYXJkLmNsYXNzTmFtZSA9IFwibGlzdC1jYXJkXCI7XHJcblxyXG4gICAgY29uc3QgbGlzdENhcmRfX21haW5EZXRhaWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbGlzdENhcmRfX21haW5EZXRhaWwuY2xhc3NMaXN0ID0gXCJtYWluLWRldGFpbFwiO1xyXG5cclxuICAgIGNvbnN0IHVuaXF1ZUlkID0gYGNoZWNrYm94LSR7aW5kZXh9LSR7bGlzdC50aXRsZVxyXG4gICAgICAucmVwbGFjZSgvXFxzKy9nLCBcIi1cIilcclxuICAgICAgLnRvTG93ZXJDYXNlKCl9YDtcclxuICAgIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgY2hlY2tib3gudHlwZSA9IFwiY2hlY2tib3hcIjtcclxuICAgIGNoZWNrYm94LmlkID0gdW5pcXVlSWQ7XHJcbiAgICBjaGVja2JveC5uYW1lID0gYHRpdGxlLSR7aW5kZXh9YDtcclxuICAgIGxpc3RDYXJkX19tYWluRGV0YWlsLmFwcGVuZENoaWxkKGNoZWNrYm94KTtcclxuXHJcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICAgIHRpdGxlLnNldEF0dHJpYnV0ZShcImZvclwiLCB1bmlxdWVJZCk7XHJcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IGAke2xpc3QudGl0bGV9YDtcclxuICAgIGxpc3RDYXJkX19tYWluRGV0YWlsLmFwcGVuZENoaWxkKHRpdGxlKTtcclxuXHJcbiAgICBsaXN0Q2FyZC5hcHBlbmRDaGlsZChsaXN0Q2FyZF9fbWFpbkRldGFpbCk7XHJcblxyXG4gICAgY29uc3QgbGlzdENhcmRfX3N1YkRldGFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBsaXN0Q2FyZF9fc3ViRGV0YWlsLmNsYXNzTmFtZSA9IFwic3ViLWRldGFpbFwiO1xyXG5cclxuICAgIGNvbnN0IGRldGFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBkZXRhaWwudGV4dENvbnRlbnQgPSBcImRldGFpbHNcIjtcclxuICAgIGxpc3RDYXJkX19zdWJEZXRhaWwuYXBwZW5kQ2hpbGQoZGV0YWlsKTtcclxuXHJcbiAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBkYXRlLnRleHRDb250ZW50ID0gYCR7bGlzdC5kYXRlfWA7XHJcbiAgICBsaXN0Q2FyZF9fc3ViRGV0YWlsLmFwcGVuZENoaWxkKGRhdGUpO1xyXG5cclxuICAgIGNvbnN0IGVkaXRJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICBlZGl0SWNvbi5jbGFzc05hbWUgPSBcIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIjtcclxuICAgIGVkaXRJY29uLnRleHRDb250ZW50ID0gXCJlZGl0X25vdGVcIjtcclxuICAgIGxpc3RDYXJkX19zdWJEZXRhaWwuYXBwZW5kQ2hpbGQoZWRpdEljb24pO1xyXG5cclxuICAgIGNvbnN0IGRlbGV0ZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgIGRlbGV0ZUljb24uY2xhc3NOYW1lID0gXCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkXCI7XHJcbiAgICBkZWxldGVJY29uLnRleHRDb250ZW50ID0gXCJkZWxldGVcIjtcclxuICAgIGxpc3RDYXJkX19zdWJEZXRhaWwuYXBwZW5kQ2hpbGQoZGVsZXRlSWNvbik7XHJcblxyXG4gICAgbGlzdENhcmQuYXBwZW5kQ2hpbGQobGlzdENhcmRfX3N1YkRldGFpbCk7XHJcbiAgICBjb250ZW50cy5hcHBlbmRDaGlsZChsaXN0Q2FyZCk7XHJcbiAgfSk7XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/ui.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;