import PropTypes from 'prop-types'


const Notes=({notes, setModalOpen, removeNote})=>{
return (
    <main>
        {notes.map((note)=>{
            return(
               <div className="note-container" key={note.id}>
                 <p >{note.note}</p>
                <div className="delete" onClick={()=>removeNote(note.id)}>&#215;</div>
               </div>
            )
        })}
         <div className="button"> <button type="button" className="add" onClick={()=>setModalOpen(true)}>+</button></div>
    </main>
)
}

Notes.propTypes={
    notes:PropTypes.array,
    setModalOpen:PropTypes.func,
    removeNote:PropTypes.func
}
export default Notes;