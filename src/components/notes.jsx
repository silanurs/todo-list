import StyledMain from './styles/container'
import styled from 'styled-components';
import { useContext } from 'react';
import { TodoContext } from '../App';

const Notes=()=>{
    const {notes, openModal, removeNote} = useContext(TodoContext)
return (
    <StyledMain>
        <StyledNotes>
        {notes.map((note)=>{
            return(
               <div className="note-container" key={note.id}>
                 <p className="note">{note.note}</p>
                <div className="delete" onClick={()=>removeNote(note.id)}>&#215;</div>
               </div>
            )
        })}
        </StyledNotes>
         <div className="button"> <button type="button" className="add" onClick={openModal}>+</button></div>
    </StyledMain>
)
}

const StyledNotes = styled.div`
display:grid;
grid-template-rows: 1.5fr 1.5fr 1.5fr;
grid-template-columns:1fr 1fr 1fr;
gap:10px;
padding:1vw 1vh;
@media (max-width:500px){
    display:grid;
grid-template-rows: 1.5fr 1.5fr 1.5fr;
grid-template-columns:1fr 1fr;
}
.note-container{
    display:flex;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); 
    padding:1vw;
}
.note{
    display:flex;
    align-items:center;
}

.delete{
    font-size:2rem;
    margin-left:auto;
    cursor:pointer;
  }
  .delete:hover{
    font-weight: bolder;
  }
`
export default Notes;