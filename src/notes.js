import {clearContent, clearForm, displayNotes, displayProjects, displayTasks} from './index.js'
import {closeForm, form, overlay} from './tasks.js'

class Note {
    constructor(title, note){
        this.title=title;
        this.note = note;
    }
}
let notes = [];
function displayNoteForm(){
  clearForm();
  document.querySelector('.projectForm').style.color = "#9ab8ba"
  document.querySelector('.noteForm').style.color = "#def9fa"
  document.querySelector('.noteForm').removeEventListener('click', displayNoteForm);
  const form = document.querySelector('form');
  const label = document.createElement('label');
  label.setAttribute('for', 'noteTitle');
  const noteTitle = document.createElement('input');
  noteTitle.setAttribute('type', 'text')
  noteTitle.setAttribute('id', 'noteTitle')
  const text = document.createElement('textarea');
  text.setAttribute('id', 'context')
  text.setAttribute('rows', 10);
  text.setAttribute('cols', 40);
  text.setAttribute('required', 'true');
  const btn = document.createElement('button');
  btn.setAttribute('type', 'submit');
  btn.textContent = 'submit';
  btn.classList.add('submit');
  btn.addEventListener('click', addNote)
  form.append(label, noteTitle, text, btn);
}
function addNote(){
   clearContent()
   document.querySelector('.home').style.color= "#9ab8ba"
   document.querySelector('.projects').style.color= "#9ab8ba"
   document.querySelector('.notes').style.color= "#def9fa"
   document.querySelector('.notes').removeEventListener('click', displayNotes)
   document.querySelector('.projects').addEventListener('click', displayProjects)
  document.querySelector('.home').addEventListener('click', displayTasks)
  const notetitle = document.getElementById('noteTitle');
  const noteContext = document.getElementById('context');
  let newNote = new Note(notetitle.value, noteContext.value);
  notes.push(newNote);
  closeForm();
  setNoteData();
  renderNotes()
}
function createNote(nt){
    const main = document.querySelector('main');
    const noteContainer = document.createElement('div');
    noteContainer.classList.add('noteContainer');
    const div = document.createElement('div');
    div.classList.add('noteDiv')
    const remove = document.createElement('span');
    remove.classList.add('remove');
    remove.innerHTML = "&#x2715;"
    const heading = document.createElement('h2');
    heading.textContent = nt.title;
    const p = document.createElement('p');
    p.textContent = nt.note;
    div.append(heading, remove, p);
    noteContainer.append(div);
    main.append(noteContainer);
}
function renderNotes(){
    const container = document.querySelector('.noteContainer')
    const names = document.querySelectorAll('.noteDiv');
    names.forEach(note => container.removeChild(note));
    for (let i= 0; i < notes.length; i++){
        createNote(notes[i]);
    }
}
function showNotes(){
    for (let i= 0; i < notes.length; i++){
        createNote(notes[i]);
    }
}

function setNoteData(){
    localStorage.setItem('notes', JSON.stringify(notes))
}
function restoreNotes(){
    if(!localStorage.notes){
        renderNotes();
    } else {
        let objects = localStorage.getItem('notes');
        objects = JSON.parse(objects);
        notes = objects;
        renderNotes();
    }
}
restoreNotes()
export {addNote, displayNoteForm, restoreNotes, showNotes}