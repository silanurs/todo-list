import {Link} from 'react-router-dom'
import Todos from './components/todos';
import Header from './components/header';
import { useState } from 'react';
import Forms from './components/formModal';


import './App.css'

 const App = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const closeModal = ()=>{
    setModalOpen(false);
  }
  return (
    <div>
      <Header/>
      <div className="flex">
      <Todos/>
      <div className="button"> <button type="button" className="add" onClick={()=>setModalOpen(true)}>+</button></div>
      {modalOpen && (<Forms closeModalProp={closeModal}/>)}
      </div>
    </div>
  );
};

export default App

