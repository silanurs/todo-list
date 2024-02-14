import List from "./todoList"
import PropTypes from "prop-types"



const Todos = ({todos, setModalOpen, removeTodo, }) =>{
   
 
    return (
        <main>   
            
            <div className="todo-container">    
            <List todos={todos} removeTodo={removeTodo}/>
            </div>          
            <div className="button"> <button type="button" className="add" onClick={()=>setModalOpen(true)}>+</button></div>
        </main>

    )
}
Todos.propTypes = {
    todos:PropTypes.array,
    setModalOpen:PropTypes.func,
    removeTodo:PropTypes.func
}
export default Todos