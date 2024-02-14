import Menu from './components/menu';
import Header from './components/header';
import { useState, useEffect } from 'react';
import Forms from './components/formModal';
import dateFormat from "dateformat";


import './App.css'

 const App = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [id, setId]= useState(2)
  const [todos, setTodos] = useState([{id:1, description:"learn contextAPI", date:"Dec 12, 2024", priority:"Low"}]);
  const [info, setInfo] = useState({ });
  const [notes, setNotes] = useState([{note:"example note with lots of lines", id:0}])
  const [note, setNote]=useState({})
  const  [noteId, setNoteId] = useState(0);
  

  const handleChange = (e)=>{
      const name = e.target.name;
      const value = e.target.value;
      setInfo(inputs => ({...inputs, [name]:value}));
  }

  const handleDate = (e)=>{
    const name=e.target.name;
    const value = e.target.value;
    setInfo(inputs=>({...inputs, [name]: dateFormat(value, "mediumDate")}))
  }

  const closeModal = ()=>{
    setModalOpen(false);
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    if(info.date =="" || info.description =="" || info.priority==""){
      alert("All inputs must have a value!")
    } else {
      setTodos(prevTodos => [...prevTodos, { ...info, id }]);
      closeModal()
      setInfo({id:id+1, description:"", date:"", priority:""})
      setId(id+1)
    }

}
const removeTodo = (id)=>{
setTodos(current => current.filter(todo=>{
  return todo.id !== id;
}))
}

const addNote = (e)=>{
  const value = e.target.value;
  const name=e.target.name;
  setNote(notes=>({...notes, [name]:value}));
  
}
const submitNote = ()=>{
  if(note.note==""){
    alert("textarea shouldn't be empty!")
  }else{
    setNotes(prevNotes=>[...prevNotes, {...note, id:noteId}])
    setNoteId(noteId+1);
    closeModal();
    console.log(notes)
  }

} 
const removeNote=(id)=>{
setNotes(current=>current.filter(note=>{
  return note.id !== id
}))
}
useEffect(()=>{
  const todos= JSON.parse(localStorage.getItem('todos'))
  if(todos){
    setTodos(todos)
  }
},[])
useEffect(()=>{
  localStorage.setItem('todos', JSON.stringify(todos))
},[todos])

useEffect(()=>{
  const notes=JSON.parse(localStorage.getItem('notes'));
  if(notes){
    setNotes(notes)
  }
}, [])
useEffect(()=>{
  localStorage.setItem('notes', JSON.stringify(notes))
}, [notes])
  return (
    <>
      <Header/>
      <Menu todos={todos} setModalOpen={setModalOpen} notes={notes} removeTodo={removeTodo} removeNote={removeNote}/>
      
      {modalOpen && (<Forms closeModalProp={closeModal} handleChange={handleChange} handleSubmit={handleSubmit}
       handleDate={handleDate} addNote={addNote} submitNote={submitNote}/>)}
     
    </>
  );
};

export default App

