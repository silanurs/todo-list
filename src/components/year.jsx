import PropTypes from "prop-types"
import StyledMain from "./styles/container";
import StyledList from "./styles/listItem";
import { useContext } from "react";
import { TodoContext } from "../App";
const Year = ()=>{
    const {todos, removeTodo} = useContext(TodoContext);
    const currentYear=new Date()
    const arr = currentYear.toString().split(" ").slice(3,4).toString();
    const todoDates= todos.map(todo=>({...todo, date:todo.date.slice(8)})); 
    const isEqual = todoDates.map(todo=>({...todo, year:todo.date==arr}))
    const years = isEqual.filter(todo=>todo.year)
    return(
        <StyledMain>
            <div className="todo-container">
                {years.map((year)=>{
                    return(
                        <StyledList  key={year.id} className={year.priority==="Low" ? "Low" :
                        year.priority==="Medium" ? "Medium" :
                        year.priority==="High" ? "High" : null}>
                            <div className="description">{year.description}</div>
                            <div className="date">{year.date.toString()}</div>
                            <div className="delete" onClick={()=>removeTodo(year.id)}>&#215;</div>
                        </StyledList>
                    )
                })}
            </div>
        </StyledMain>
    )
}
export default Year
Year.propTypes={
    todos:PropTypes.array,
    removeTodo:PropTypes.func
}