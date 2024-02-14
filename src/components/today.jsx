import PropTypes from "prop-types"

const Today = ({todos, removeTodo})=>{
    const currentDay = new Date()
    const arr = currentDay.toString().split(" ").slice(1,4)
    const todoDates= todos.map(todo=>({...todo, date:todo.date.slice(0,6).concat(todo.date.slice(7)).split(" ")})); 
    const isEqual = todoDates.map(todo=>({...todo, today:todo.date.every((value,index)=> value===arr[index])}))
   const todays=isEqual.filter(todo=>todo.today)
   return(
    <main>
        <div className="todo-container">
            {todays.map((today)=>{
                return(
                    <div className="list" key={today.id}>
                        <div>{today.description}</div>
                        <div>{today.date.toString()}</div>
                        <div className="delete" onClick={()=>removeTodo(today.id)}>&#215;</div>
                    </div>
                )
            })}
        </div>
    </main>

   )
    

}
Today.propTypes={
    todos:PropTypes.array,
    removeTodo:PropTypes.func
}
export default Today