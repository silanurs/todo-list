import { useState } from "react"
import PropTypes from "prop-types"
import styled from "styled-components";

const Forms = ({closeModalProp, handleChange, handleSubmit, handleDate, addNote, submitNote})=>{
    const [isActive, setIsActive] = useState(true);
    return (
        <StyledModal>
            <div className="modal-container">
            <section className="modal-menu">
                <h2 onClick={()=>setIsActive(true)}>To-do</h2>
                <h2 onClick={()=>setIsActive(false)}>Note</h2>
            </section>
            {isActive ? (<TodoForm closeModal={closeModalProp} handleChange={handleChange} handleSubmit={handleSubmit} handleDate={handleDate}/>) : 
            (<NoteForm closeModal={closeModalProp} addNote={addNote} submitNote={submitNote}/>) }
            
            </div>

        </StyledModal>
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
const StyledModal = styled.div`
width: 100vw;
height:100vh;
background-color:rgba(0, 0, 0, 0.7);
position: fixed;
z-index: 3;
top: 0;
left: 0;
display:flex;
align-items:center;
justify-content:center;
.modal-container{
    background-color:papayawhip;
    height:fit-content;
    display:flex;
}
.modal-menu{
    display:flex;
    flex-direction:column;
    justify-content:center;
    background-color:rgb(255, 242, 222);
    border-right: 1px solid grey;
    padding:0 10px;
    cursor:pointer;
}
`

const TodoForm = ({closeModal, handleChange, handleSubmit, handleDate})=>{
return(
<StyledForm className="todo-form">
<div className="header" onClick={closeModal} >&#215;</div>
    <div className="main">
       <form> 
         <input type="text" id="description" placeholder=" What needs to be done?" name="description" required onChange={handleChange}></input>
         <label htmlFor="description"></label>  
         <input type="date" id="date" name="date"  required onChange={handleDate}></input>
         <div>Priority:</div>
         <label htmlFor="green" className="Low">Low</label>
         <input type="radio" id="green" name="priority" value="Low" onChange={handleChange}></input>
         <label htmlFor="yellow" className="Medium">Medium</label>
         <input type="radio" id="yellow" name="priority" value="Medium" onChange={handleChange}></input>
         <label htmlFor="red" className="High">High</label>
         <input type="radio" id="red" name="priority" onChange={handleChange} value="High"></input>
    </form>
    </div>
    <div className="footer"><button type="submit" onClick={handleSubmit} >ADD TO DO</button></div>
</StyledForm>

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
        <StyledForm className="note-form">
           <div className="header" onClick={closeModal}>
               &#215;
           </div>
           <div className="main">
              <form>
                 <textarea name="note" id="note" onChange={addNote}></textarea>    
              </form>
           </div>
           <div className="footer">
              <button type="button"  onClick={submitNote}>ADD NOTE</button>
           </div>
        </StyledForm>
    )
}
NoteForm.propTypes = {
    closeModal:PropTypes.func,
    addNote:PropTypes.func,
    submitNote:PropTypes.func
}
const StyledForm = styled.div`
background-color:papayawhip;
font-size:1.4rem;
height:30vh;
width:fit-content;
padding:0 10px;

.header{
    display:flex;
    justify-content: flex-end;
    font-size:2rem;
    cursor:pointer;
}
.header:hover{
    font-weight:bolder;
}
textarea{
    width:12vw;
    height:10vh;
}
.main{
    display:flex;
    justify-content:center;
    align-content:center;
}
.footer{
    display:flex;
    justify-content:center;
    margin-top:20px;
}

`
export default Forms