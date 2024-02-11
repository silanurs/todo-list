import List from "./todoList"

import PropTypes from "prop-types"


const Todos = ({todos, setModalOpen}) =>{

 
    return (
        <main>   
            
            <div id="todo-container">    
            <List todos={todos}/>
            </div>          
            <div className="button"> <button type="button" className="add" onClick={()=>setModalOpen(true)}>+</button></div>
        </main>

    )
}
Todos.propTypes = {
    todos:PropTypes.array,
    setModalOpen:PropTypes.func
}
export default Todos