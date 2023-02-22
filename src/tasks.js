import {closeNav, clearContent} from './index.js'
const form = document.getElementById('container');
const overlay = document.getElementById('overlay');
const addBtn= document.querySelector('.add');
const closebtn= document.querySelector('.closeform');
const submit = document.querySelector('.submit');

let tasks = [];
class Task {
    constructor(title, details, date){
        this.title = title;
        this.details=details;
        this.date=date;
    }
}

function addTask(){
    formValidation();
    clearContent()
    const title = document.getElementById('title');
    const details = document.getElementById('details');
    const date = document.getElementById('date');
    let newTask = new Task(title.value, details.value, date.value);
    tasks.push(newTask);
    setData();
    render();
}

let container = document.querySelector('.task-container');
function createCard(task){
    let main = document.querySelector('main')
    let div = document.createElement('div');
    div.classList.add('task')
    let x = document.createElement('p');
    x.classList.add('remove');
    x.textContent="x";
    let name = document.createElement('p');
    name.textContent = task.title;
    let details = document.createElement('p');
    details.textContent = task.details;
    let date = document.createElement('input');
    date.setAttribute('type', 'date');
    date.classList.add('date');
    date.value = task.date;
    div.append(name, details, date, x);
    container.append(div);
    main.append(container);
    
    x.addEventListener('click', () =>{tasks.splice(tasks.indexOf(task),1)
        
    setData()
    render()})
    return main;
  
}
function render(){
    const dom = document.querySelectorAll('.task');
    dom.forEach(task => container.removeChild(task));
    for (let i= 0; i < tasks.length; i++){
        createCard(tasks[i]);
    }
}
function showTask(){
    for (let i= 0; i < tasks.length; i++){
        createCard(tasks[i]);
    }
}
function displayTodoForm(){
    const form = document.querySelector('form');
    const label = document.createElement('label');
    label.setAttribute('for', 'title');
    const title = document.createElement('input');
    title.setAttribute('type', 'text');
    title.setAttribute('placeholder', "Title: Learn react...");
    title.classList.add('rinput');
    title.setAttribute('id', 'title');
    title.setAttribute('required', 'true');
    const break1 = document.createElement('br')
    const label2 = document.createElement('label');
    label2.setAttribute('for', 'details');
    const details = document.createElement('textarea');
    details.setAttribute('id', 'details');
    details.setAttribute('rows', 10);
    details.setAttribute('cols', 40);
    details.setAttribute('placeholder', "Details: Watch tutorials, read documentation etc...")
    const break2 = document.createElement('br');
    const label3 = document.createElement('label');
    label3.setAttribute('for', 'date');
    label3.textContent = "Due Date: "
    const date= document.createElement('input');
    date.setAttribute('id', 'date');
    date.setAttribute('type', 'date');
    date.classList.add('rinput');
    date.setAttribute('required', 'true');
    const btn = document.createElement('button');
    btn.setAttribute('type', 'submit');
    btn.classList.add('submit');
    btn.textContent = 'Submit';
    form.append(label, title, break1, label2, details, break2, label3, date, btn)
    btn.addEventListener('click', addTask);

}
function formValidation(){
    const inputs = document.querySelectorAll('.rinput');
    let newInputs = Array.from(inputs);
    let validatedInputs = newInputs.every(input => input.checkValidity())
   
    if(validatedInputs == true) {
        form.classList.remove('active')
        overlay.classList.remove('active')
    }
}
function setData(){
    localStorage.setItem('tasks', JSON.stringify(tasks))

}
function restore(){
    if(!localStorage.tasks){
        render();
    } else {
        let objects = localStorage.getItem('tasks');
        objects = JSON.parse(objects);
        tasks = objects;
        render();
    }
 }
 restore();

function createForm(){
 displayTodoForm()
 form.classList.add('active');
 overlay.classList.add('active');
 closeNav();
}
function closeForm(){
    form.classList.remove('active');
    overlay.classList.remove('active')
}

export {form, overlay, addBtn, closebtn, submit, addTask, createForm, closeForm, restore, render, createCard, setData, showTask}