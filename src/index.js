import {form, overlay, addBtn, closebtn,  submit, addTask,createForm, closeForm} from "./tasks.js"


function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}
  
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}
document.querySelector('.closebtn').addEventListener('click', closeNav);
document.querySelector('.open').addEventListener('click', openNav);
addBtn.addEventListener('click', createForm);
closebtn.addEventListener('click', closeForm);
submit.addEventListener('click', addTask)
export {closeNav}
