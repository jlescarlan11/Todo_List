import { displayProject } from "./ui";

export class Project {
  constructor(project) {
    this.project = project;
  }
}

let myProjectList = [];

export function addProjectToList(project) {
  const newProject = new Project(project);
  myProjectList.push(newProject);
  saveProjectFromLocalStorage();
  displayProject();
}

export function getProjectList() {
  return myProjectList;
}

export function saveProjectFromLocalStorage() {
  localStorage.setItem("project", JSON.stringify(myProjectList));
}

export function loadProjectFromLocalStorage() {
  const project = localStorage.getItem("project");
  if (project) {
    myProjectList = JSON.parse(project);
  }
}
