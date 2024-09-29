import { displayTodo } from "./ui.js";

export class Todo {
  constructor(title, description, date, priority, project) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.priority = priority;
    this.project = project;
  }
}

let myTodoList = [];

export function addTodoToList(title, description, date, priority, project) {
  const newTodo = new Todo(title, description, date, priority, project);
  myTodoList.push(newTodo);
  saveTodoFromLocalStorage();
  displayTodo();
}

export function getTodoList() {
  return myTodoList;
}

export function clearTodoList() {
  myTodoList = [];
}

export function saveTodoFromLocalStorage() {
  localStorage.setItem("todo", JSON.stringify(myTodoList));
}

export function loadTodoFromLocalStorage() {
  const todo = localStorage.getItem("todo");
  console.log(todo);
  if (todo) {
    myTodoList = JSON.parse(todo);
  }
}
