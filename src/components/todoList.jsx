import StyledList from "./styles/listItem"
import { useContext } from "react";
import { TodoContext } from "../App";
const List = () => {
   const {todos, removeTodo} = useContext(TodoContext)

  return (
      <article>
          {todos.map((todo) => {
              return <StyledList key={todo.id} className={todo.priority==="Low" ? "Low" :
              todo.priority==="Medium" ? "Medium" :
              todo.priority==="High" ? "High" : null}> 
              <div className="description"> {todo.description}</div>
              <div className="date">{todo.date}</div>
              <div className="delete" onClick={()=>removeTodo(todo.id)}>&#215;</div>
              
              </StyledList>
              
          }) }

      </article>
  )
}

export default List