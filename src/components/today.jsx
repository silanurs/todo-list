import StyledMain from "./styles/container"
import StyledList from "./styles/listItem"
import { useContext } from "react";
import { TodoContext } from "../App";
const Today = ()=>{
    const {todos, removeTodo} = useContext(TodoContext)
    const currentDay = new Date()
    const arr = currentDay.toString().split(" ").slice(1,4)
    const todoDates= todos.map(todo=>({...todo, date:todo.date.slice(0,6).concat(todo.date.slice(7)).split(" ")})); 
    const isEqual = todoDates.map(todo=>({...todo, today:todo.date.every((value,index)=> value===arr[index])}))
   const todays=isEqual.filter(todo=>todo.today)
   return(
    <StyledMain>
        <div className="todo-container">
            {todays.map((today)=>{
                return(
                    <StyledList  key={today.id} className={today.priority==="Low" ? "Low" :
                    today.priority==="Medium" ? "Medium" :
                    today.priority==="High" ? "High" : null}>
                        <div className="description">{today.description}</div>
                        <div className="date">{today.date.toString()}</div>
                        <div className="delete" onClick={()=>removeTodo(today.id)}>&#215;</div>
                    </StyledList>
                )
            })}
        </div>
    </StyledMain>

   )
    

}

export default Today