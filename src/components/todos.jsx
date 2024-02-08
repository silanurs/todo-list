import List from "./todoList"
import Menu from "./menu"



const Todos = ({todos}) =>{

 
    return (
        <main>   
            <Menu/> 
            <div id="todo-container">    
            <List todos={todos}/>
            </div>          
          
        </main>

    )
}
export default Todos