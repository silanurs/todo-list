import {closeNav} from './index.js'
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
 form.classList.add('active');
 overlay.classList.add('active');
 closeNav();
}
function closeForm(){
    form.classList.remove('active');
    overlay.classList.remove('active')
}

export {form, overlay, addBtn, closebtn, submit, addTask, createForm, closeForm, restore}