import List from "./todoList"
import Menu from "./menu"
import { useState } from "react"
import dateFormat, {masks} from "dateformat";

const Todos = () =>{
    const [todos, setTodos] = useState([{id:1, description:"learn contextAPI"}]);
    const [info, setInfo] = useState({});
    const handleChange = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setInfo(inputs => ({...inputs, [name]:value}));
        console.log(info.date)
        
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        //setInfo(inputs=>({...inputs, date:dateFormat(new Date(date.split("-").join()),"dd/mm/yyyy")}))
        console.log(info.date)
        setTodos([...todos, info])
        //setInfo(inputs=>({...inputs, description:"", date:""}))
    }
 
    return (
        <main>   
            <Menu/> 
            <div id="todo-container">    
            <List todos={todos}/>
            </div>          
          
        </main>

    )
}
export default Todos