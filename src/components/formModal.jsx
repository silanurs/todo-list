import { useState } from "react"
import PropTypes from "prop-types"

const Forms = ({closeModalProp, handleChange, handleSubmit, handleDate, addNote, submitNote})=>{
    const [isActive, setIsActive] = useState(true);
    return (
        <div className="modal-container">
            <section className="modal-menu">
                <h2 onClick={()=>setIsActive(true)}>To-do</h2>
                <h2 onClick={()=>setIsActive(false)}>Note</h2>
            </section>
            {isActive ? (<TodoForm closeModal={closeModalProp} handleChange={handleChange} handleSubmit={handleSubmit} handleDate={handleDate}/>) : 
            (<NoteForm closeModal={closeModalProp} addNote={addNote} submitNote={submitNote}/>) }
            
        </div>
    )
 
}
Forms.propTypes={
    closeModalProp:PropTypes.func,
    handleChange:PropTypes.func,
    handleSubmit:PropTypes.func,
    handleDate:PropTypes.func, 
    addNote:PropTypes.func,
    submitNote:PropTypes.func
}


const TodoForm = ({closeModal, handleChange, handleSubmit, handleDate})=>{
return(
<div className="todo-form">
<div className="form-header" onClick={closeModal}>&#215;</div>
    <div className="form-main">
       <form> 
         <input type="text" id="description" placeholder=" What needs to be done?" name="description" required onChange={handleChange}></input>
         <label htmlFor="description"></label>  
         <input type="date" id="date" name="date"  required onChange={handleDate}></input>
         <div>Priority:</div>
         <label htmlFor="green">Low</label>
         <input type="radio" id="green" name="priority" value="Low" onChange={handleChange}></input>
         <label htmlFor="yellow">Medium</label>
         <input type="radio" id="yellow" name="priority" value="Medium" onChange={handleChange}></input>
         <label htmlFor="red">High</label>
         <input type="radio" id="red" name="priority" onChange={handleChange} value="High"></input>
    </form>
    <div className="form-footer"><button type="submit" onClick={handleSubmit} >ADD TO DO</button></div>
    </div>
</div>

)
}
TodoForm.propTypes={
    closeModal:PropTypes.func,
    handleChange:PropTypes.func,
    handleSubmit:PropTypes.func,
    handleDate:PropTypes.func
}
const NoteForm = ({closeModal, addNote, submitNote})=>{
    return (
        <div className="note-form">
           <div className="note-form-header" onClick={closeModal}>
               &#215;
           </div>
           <div className="note-form-main">
              <form>
                 <textarea name="note" id="note" onChange={addNote}></textarea>    
              </form>
           </div>
           <div className="note-form-footer">
              <button type="button" onClick={submitNote}>ADD NOTE</button>
           </div>
        </div>
    )
}
NoteForm.propTypes = {
    closeModal:PropTypes.func,
    addNote:PropTypes.func,
    submitNote:PropTypes.func
}
export default Forms