import List from "./todoList"
import PropTypes from "prop-types"
import StyledMain from "./styles/container"


const Todos = ({todos, setModalOpen, removeTodo, }) =>{
   
 
    return (
        <StyledMain>   
            <div className="todo-container">    
            <List todos={todos} removeTodo={removeTodo}/>
            </div>          
            <div className="button"> <button type="button" className="add" onClick={()=>setModalOpen(true)}>+</button></div>
        </StyledMain>

    )
}
Todos.propTypes = {
    todos:PropTypes.array,
    setModalOpen:PropTypes.func,
    removeTodo:PropTypes.func
}
export default Todos