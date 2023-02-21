import {clearForm} from './index.js'
import {closeForm, form, overlay} from './tasks.js'


class Project {
    constructor(caption){
        this.caption = caption
    }
}


let projectInp = [];
function displayProjectForm(){
    clearForm()
    document.querySelector('.projectForm').style.color = "#def9fa"
    document.querySelector('.projectForm').removeEventListener('click', displayProjectForm)
    const form = document.querySelector('form');
    const label = document.createElement('label');
    label.setAttribute('for', 'title');
    const input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('id', 'caption');
    input.setAttribute('required', 'true');
    const btn = document.createElement('button');
    btn.setAttribute('type', 'submit');
    btn.textContent = "submit";
    btn.setAttribute('class', 'submit');
    btn.addEventListener('click', addProject);
    form.append(label, input, btn); 
}


function addProject() {
    const main = document.querySelector('main');
    const input = document.getElementById('caption');
    let newProject = new Project(input.value);
    projectInp.push(newProject);
    closeForm();
    setProjectData();
    renderProject();
}
const projects = document.querySelector('.projects');
function createProject(project){
    const name = document.createElement('p');
    name.classList.add('projectname')
    name.textContent = project.caption;
    const remove = document.createElement('span');
    remove.classList.add('removeProject');
    remove.innerHTML = '&#x2715;';
    name.append(remove);
    projects.append(name);
    remove.addEventListener('click', () =>{projectInp.splice(projectInp.indexOf(project),1)
        setProjectData()
        renderProject()})
}
function renderProject(){

    const names = document.querySelectorAll('.projectname');
    names.forEach(project => projects.removeChild(project));
    for (let i= 0; i < projectInp.length; i++){
        createProject(projectInp[i]);
    }
}
function setProjectData(){
    localStorage.setItem('projectInp', JSON.stringify(projectInp))
}
function restoreProjects(){
    if(!localStorage.projectInp){
        renderProject();
    } else {
        let objects = localStorage.getItem('projectInp');
        objects = JSON.parse(objects);
        projectInp = objects;
        renderProject();
    }
}
restoreProjects()
export {displayProjectForm, addProject, restoreProjects}