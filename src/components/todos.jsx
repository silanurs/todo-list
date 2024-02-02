import List from "./todoList"
import Menu from "./menu"

const Todos = () =>{
 
    return (
        <main>   
            <Menu/> 
            <div id="todo-container">
            <form > 
                <input type="text" id="description" placeholder="What needs to be done?" required ></input>
                <label htmlFor="description"></label>  
            </form>
            <hr></hr>
            <List/>
            </div>          
          
        </main>

    )
}
export default Todos