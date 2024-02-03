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
        setInfo(inputs=>({...inputs, date:dateFormat(date,"paddedShortDate")}))
        
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        setTodos([...todos, info])
        setInfo(inputs=>({...inputs, description:"", date:""}))
    }
 
    return (
        <main>   
            <Menu/> 
            <div id="todo-container">
            <form> 
                <input type="text" id="description" placeholder="What needs to be done?" required name="description" value={info.description} onChange={handleChange}></input>
                <label htmlFor="description"></label>  
                <input type="date" id="date"required name="date" value={info.date} onChange={handleChange} data-date="" data-date-format="DD MMMM YYYY"></input>
            </form>
            <button type="submit" onClick={handleSubmit}>Submit</button>
            <hr></hr>
            <List todos={todos}/>
            </div>          
          
        </main>

    )
}
export default Todos