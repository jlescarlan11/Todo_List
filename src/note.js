import { displayNote } from "./ui";

export class Note {
  constructor(title, details) {
    this.title = title;
    this.details = details;
  }
}

let myNoteList = [];

export function addNoteToList(title, details) {
  const newNote = new Note(title, description);
  myNoteList.push(newNote);
  saveNoteFromLocalStorage();
}

export function getNoteList() {
  return myNoteList;
}

export function clearNoteList() {
  myNoteList = [];
}

export function saveNoteFromLocalStorage() {
  localStorage.setItem("note", JSON.stringify(myNoteList));
}

export function loadNoteFromLocalStorage() {
  const note = localStorage.getItem("note");
  console.log(note);
  if (note) {
    myNoteList = JSON.parse(note);
  }
}
