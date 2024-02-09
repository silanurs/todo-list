import {Link} from 'react-router-dom'
import Todos from './components/todos';
import Header from './components/header';
import { useState } from 'react';
import Forms from './components/formModal';
import dateFormat, { masks } from "dateformat";


import './App.css'

 const App = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [id, setId]= useState(2)
  const [todos, setTodos] = useState([{id:1, description:"learn contextAPI", date:"12-12-2024", priority:"Low"}]);
  const [info, setInfo] = useState({});
  const date = new Date(info.date)

  const handleChange = (e)=>{
      const name = e.target.name;
      const value = e.target.value;
      setInfo(inputs => ({...inputs, [name]:value}));   
  }

  const closeModal = ()=>{
    setModalOpen(false);
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(info.date)
    setId(x=>x+1)
    setInfo({...info, id:id})
    setInfo(inputs=>({...inputs, date:dateFormat(date,"mediumDate")}))
    setTodos([...todos, info])
    //console.log(info.date)
    console.log(todos)
    closeModal()
}
  return (
    <div>
      <Header/>
      <div className="flex">
      <Todos todos={todos}/>
      <div className="button"> <button type="button" className="add" onClick={()=>setModalOpen(true)}>+</button></div>
      {modalOpen && (<Forms closeModalProp={closeModal} handleChange={handleChange} handleSubmit={handleSubmit}/>)}
      </div>
    </div>
  );
};

export default App

