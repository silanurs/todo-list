import {closeNav} from './index.js'
const form = document.getElementById('container');
const overlay = document.getElementById('overlay');
const addBtn= document.querySelector('.add');
const closebtn= document.querySelector('.closeform');
const submit = document.querySelector('.submit');

let tasks = [];
class Task {
    constructor(title, details, date, priority){
        this.title = title;
        this.details=details;
        this.date=date;
        this.priority=priority;
    }
}

function addTask(){
    const title = document.getElementById('title');
    const details = document.getElementById('details');
    const date = document.getElementById('date');
    const priority = document.querySelectorAll('.priority')
    let newTask = new Task(title.value, details.value, date.value, priority.value);
    tasks.push(newTask)
}
submit.addEventListener('click', addTask)
function createForm(){
 form.classList.add('active');
 overlay.classList.add('active');
 closeNav();
}
function closeForm(){
    form.classList.remove('active');
    overlay.classList.remove('active')
}

export {form, overlay, addBtn, closebtn, submit, addTask, createForm, closeForm}