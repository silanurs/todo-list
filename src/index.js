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
const form = document.getElementById('container');
const overlay = document.getElementById('overlay');
const addBtn= document.querySelector('.add');
const closebtn= document.querySelector('.closeform')
function createForm(){
 form.classList.add('active');
 overlay.classList.add('active');
}
function closeForm(){
    form.classList.remove('active');
    overlay.classList.remove('active')
}
addBtn.addEventListener('click', createForm);
closebtn.addEventListener('click', closeForm);