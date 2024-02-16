import PropTypes from "prop-types"
import StyledList from "./styles/listItem"
const List = ({todos, removeTodo}) => {
   

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
List.propTypes={
    todos:PropTypes.array,
    removeTodo:PropTypes.func
}
export default List