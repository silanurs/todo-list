import {form, overlay, addBtn, closebtn, submit, addTask, createForm, closeForm, render, createCard, restore} from "./tasks.js"
import {displayProjectForm, addProject, restoreProjects} from "./project.js"
import {addNote} from "./notes.js"


function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  
}
  
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
   
}
function clearContent(){
   const main =  document.querySelector('main');
   main.innerHTML = '';
}
function displayTasks(){
    clearContent();
    document.querySelector('.home').style.color= "#def9fa"
    document.querySelector('.notes').style.color= "#9ab8ba"
    document.querySelector('.projects').style.color= "#9ab8ba"
    addTask()
    document.querySelector('.home').removeEventListener('click', displayTasks)
    document.querySelector('.notes').addEventListener('click', displayNotes);
    document.querySelector('.projects').addEventListener('click', displayProjects)
    restore()
}
function displayProjects(){
    clearContent()
    document.querySelector('.home').style.color= "#9ab8ba"
    document.querySelector('.projects').style.color= "#def9fa"
    document.querySelector('.notes').style.color= "#9ab8ba"
    addProject();
    document.querySelector('.home').addEventListener('click', displayTasks)
    document.querySelector('.projects').removeEventListener('click', displayProjects)
    document.querySelector('.notes').addEventListener('click', displayNotes);
    
}
function displayNotes(){
    clearContent();
    document.querySelector('.home').style.color= "#9ab8ba"
    document.querySelector('.projects').style.color= "#9ab8ba"
    document.querySelector('.notes').style.color= "#def9fa"
    addNote();
    document.querySelector('.notes').removeEventListener('click', displayNotes)
    document.querySelector('.projects').addEventListener('click', displayProjects)
   document.querySelector('.home').addEventListener('click', displayTasks)

}

function clearForm(){
    const form = document.querySelector('form');
    form.innerHTML="";
}
function displayTodoForm(){
    clearForm()
    const form = document.querySelector('form');

}



document.querySelector('.projectForm').addEventListener('click', displayProjectForm)
document.querySelector('.todoForm').addEventListener('click', displayTodoForm)
document.querySelector('.notes').addEventListener('click', displayNotes);
document.querySelector('.projects').addEventListener('click', displayProjects)
document.querySelector('.home').addEventListener('click', displayTasks)
document.querySelector('.closebtn').addEventListener('click', closeNav);
document.querySelector('.open').addEventListener('click', openNav);
addBtn.addEventListener('click', createForm);
closebtn.addEventListener('click', closeForm);
submit.addEventListener('click', addTask)

export {closeNav, clearForm}
