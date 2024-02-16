import Menu from './components/menu';
import Header from './components/header';
import { useState, useEffect } from 'react';
import Forms from './components/formModal';
import dateFormat from "dateformat";
import GlobalStyles from './components/styles/globalStyles'

 const App = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [id, setId]= useState(2)
  const [todos, setTodos] = useState([{id:1, description:"learn contextAPI", date:"Dec 12, 2024", priority:"Low"}]);
  const [info, setInfo] = useState({ });
  const [notes, setNotes] = useState([{note:"example note with lots of lines", id:0}, {note:"\"The pessimist complains about the wind; the optimist expects it to change; the realist adjusts the sails.", id:5000},
{note:
  "\"You're not obligated to win. You're obligated to keep trying to do the best you can every day.", id:4000}, {note:"\"When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us." 
  ,id:2500}])
  const [note, setNote]=useState({})
  const  [noteId, setNoteId] = useState(3000);
  

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
    if(info.date =="" || info.description =="" || info.priority=="" || info=={}){
      alert("All inputs must have a value!")
    } else {
      setTodos(prevTodos => [...prevTodos, { ...info, id }]);
      closeModal()
      setInfo({id:id+1, description:"", date:"", priority:""})
      setId(id+1)
      console.log(todos)
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
      <GlobalStyles></GlobalStyles>
      <Header/>
      <Menu todos={todos} setModalOpen={setModalOpen} notes={notes} removeTodo={removeTodo} removeNote={removeNote}/>
      {modalOpen && (<Forms closeModalProp={closeModal} handleChange={handleChange} handleSubmit={handleSubmit}
       handleDate={handleDate} addNote={addNote} submitNote={submitNote}/>)}
     
    </>
  );
};

export default App

