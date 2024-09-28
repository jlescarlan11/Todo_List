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
  displayNote();
}

export function getNoteList() {
  return myNoteList;
}

export function clearNoteList() {
  myNoteList = [];
}
