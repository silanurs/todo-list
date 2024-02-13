import { useState } from "react"
import PropTypes from "prop-types"
const List = ({todos, removeTodo}) => {
    const [value, setValue]=useState(false);
    function handleCheck(){
        setValue(!value)
    }

  return (
      <article>
          {todos.map((todo) => {
              return <div key={todo.id} id="list">
              <input type="checkbox" className="checkbox" onChange={handleCheck} value={value}/>      
              <div> {value ? <del>{todo.description}</del> : todo.description}</div>
              <div>{value ? <del>{todo.date}</del> : todo.date}</div>
              <div className="delete" onClick={()=>removeTodo(todo.id)}>&#215;</div>
              
              </div>
              
          }) }

      </article>
  )
}
List.propTypes={
    todos:PropTypes.array,
    removeTodo:PropTypes.func
}
export default List