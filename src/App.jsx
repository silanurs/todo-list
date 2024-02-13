import Menu from './components/menu';
import Header from './components/header';
import { useState } from 'react';
import Forms from './components/formModal';
import dateFormat from "dateformat";


import './App.css'

 const App = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [id, setId]= useState(2)
  const [todos, setTodos] = useState([{id:1, description:"learn contextAPI", date:"12-12-2024", priority:"Low"}]);
  const [info, setInfo] = useState({ });
  const [notes, setNotes] = useState([])
  const [note, setNote]=useState({})
  const  [noteId, setNoteId] = useState(0);
  

  const handleChange = (e)=>{
      const name = e.target.name;
      const value = e.target.value;
      setInfo(inputs => ({...inputs, [name]:value}));
      handleId()
  }
  const handleId = ()=>{
    setInfo(inputs=>({...inputs, id:id}))
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
      setId(x=>x+1)
      setTodos([...todos, info])
      closeModal()
      setInfo({id:id, description:"", date:"", priority:""})
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
    setNoteId(y=>y+1);
    setNote(notes=>({...notes, id:noteId}))
    setNotes([...notes, note]);
  }

closeModal();
} 
const removeNote=(id)=>{
setNotes(current=>current.filter(note=>{
  return note.id !== id
}))
}
  return (
    <div>
      <Header/>
      <Menu todos={todos} setModalOpen={setModalOpen} notes={notes} removeTodo={removeTodo} removeNote={removeNote}/>
      <div className="flex">
      {modalOpen && (<Forms closeModalProp={closeModal} handleChange={handleChange} handleSubmit={handleSubmit} handleId={handleId}
       handleDate={handleDate} addNote={addNote} submitNote={submitNote}/>)}
      </div>
    </div>
  );
};

export default App

