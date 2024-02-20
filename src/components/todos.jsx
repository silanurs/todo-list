import List from "./todoList"
import StyledMain from "./styles/container"
import { useContext } from "react";
import { TodoContext } from "../App";

const Todos = () =>{
   const {openModal} = useContext(TodoContext)
 
    return (
        <StyledMain>   
            <div className="todo-container">    
            <List/>
            </div>          
            <div className="button"> <button type="button" className="add" onClick={openModal}>+</button></div>
        </StyledMain>

    )
}

export default Todos