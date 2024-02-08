import { useState } from "react"

const Forms = ({closeModalProp, handleChange, handleSubmit})=>{
    const [isActive, setIsActive] = useState(true);
    return (
        <div className="modal-container">
            <section className="modal-menu">
                <h2 onClick={()=>setIsActive(true)}>To-do</h2>
                <h2 onClick={()=>setIsActive(false)}>Note</h2>
            </section>
            {isActive ? (<TodoForm closeModal={closeModalProp} handleChange={handleChange} handleSubmit={handleSubmit}/>) : (<NoteForm closeModal={closeModalProp}/>) }
            
        </div>
    )
 
}



const TodoForm = ({closeModal, handleChange, handleSubmit})=>{
return(
<div className="todo-form">
<div className="form-header" onClick={closeModal}>&#215;</div>
    <div className="form-main">
       <form> 
         <input type="text" id="description" placeholder=" What needs to be done?" name="description" required onChange={handleChange}></input>
         <label htmlFor="description"></label>  
         <input type="date" id="date" name="date"  required onChange={handleChange}></input>
         <div>Priority:</div>
         <label htmlFor="green">Low</label>
         <input type="radio" id="green" name="priority" value="Low" onChange={handleChange}></input>
         <label htmlFor="yellow">Medium</label>
         <input type="radio" id="yellow" name="priority" value="Medium" onChange={handleChange}></input>
         <label htmlFor="red">High</label>
         <input type="radio" id="red" name="priority" onChange={handleChange}></input>
    </form>
    <div className="form-footer"><button type="submit" onClick={closeModal} onSubmit={handleSubmit}>ADD TO DO</button></div>
    </div>
</div>

)
}
const NoteForm = ({closeModal})=>{
    return (
        <div className="note-form">
           <div className="note-form-header" onClick={closeModal}>
               &#215;
           </div>
           <div className="note-form-main">
              <form>
                 <textarea name="note" id="note"></textarea>    
              </form>
           </div>
           <div className="note-form-footer">
              <button type="button" onClick={closeModal}>ADD NOTE</button>
           </div>
        </div>
    )
}
export default Forms