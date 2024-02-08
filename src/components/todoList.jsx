import { useState } from "react"

const List = ({todos}) => {
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
              <div className="delete">&#215;</div>
              
              </div>
              
          }) }

      </article>
  )
}
export default List