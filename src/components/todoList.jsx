import PropTypes from "prop-types"
const List = ({todos, removeTodo}) => {
   

  return (
      <article>
          {todos.map((todo) => {
              return <div key={todo.id} className="list"> 
              <div> {todo.description}</div>
              <div>{todo.date}</div>
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