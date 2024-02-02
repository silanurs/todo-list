import {Link} from 'react-router-dom'
import Todos from './components/todos';
import Header from './components/header';
import Menu from './components/menu';


import './App.css'

const App = () => {
  return (
    <div>
      <Header/>
      <div className="flex">
      <Todos/>
      </div>
    </div>
  );
};


export default App
