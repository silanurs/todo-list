import PropTypes from "prop-types"
const Year = ({todos, removeTodo})=>{
    const currentYear=new Date()
    const arr = currentYear.toString().split(" ").slice(3,4).toString();
    const todoDates= todos.map(todo=>({...todo, date:todo.date.slice(8)})); 
    const isEqual = todoDates.map(todo=>({...todo, year:todo.date==arr}))
    const years = isEqual.filter(todo=>todo.year)
    return(
        <div className="todo-container">
            <article>
                {years.map((year)=>{
                    return(
                        <div className="list" key={year.id}>
                            <div>{year.description}</div>
                            <div>{year.date.toString()}</div>
                            <div className="delete" onClick={()=>removeTodo(year.id)}>&#215;</div>
                        </div>
                    )
                })}
            </article>
        </div>
    )
}
export default Year
Year.propTypes={
    todos:PropTypes.array,
    removeTodo:PropTypes.func
}