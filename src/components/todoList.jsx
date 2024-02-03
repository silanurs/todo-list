const List = ({todos}) => {

  return (
      <article>
          {todos.map((todo) => {
              return <div key={todo.id} id="list">
              <input type="checkbox" className="checkbox"/>      
              <div>{todo.description}</div>
              <div>{todo.date}</div>
              <div className="delete">&#215;</div>
              
              </div>
              
          }) }

      </article>
  )
}
export default List