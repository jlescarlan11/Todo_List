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
  displayTodo();
}

export function getTodoList() {
  return myTodoList;
}

export function clearTodoList() {
  myTodoList = [];
}
