import {Link} from 'react-router-dom'
import Todos from './components/todos';
import Header from './components/header';
import { useState } from 'react';
import Forms from './components/formModal';
import dateFormat, {masks} from "dateformat";


import './App.css'

 const App = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [todos, setTodos] = useState([{id:1, description:"learn contextAPI", date:"12-12-2024", priority:"low"}]);
  const [info, setInfo] = useState({});
  const handleChange = (e)=>{
      const name = e.target.name;
      const value = e.target.value;
      setInfo(inputs => ({...inputs, [name]:value}));
      
  }
  const handleSubmit=(e)=>{
      e.preventDefault()
      setInfo(inputs=>({...inputs, date:dateFormat(new Date(date.split("-").join()),"dd/mm/yyyy")}))
      console.log(info.date)
      setTodos([...todos, info])
      //setInfo(inputs=>({...inputs, description:"", date:""}))
  }
  const closeModal = ()=>{
    setModalOpen(false);
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

