import PropTypes from 'prop-types'


const Notes=({notes, setModalOpen})=>{
return (
    <article>
        {notes.map((note)=>{
            return(
                <p key={note.id}>{note.note}</p>
            )
        })}
         <div className="button"> <button type="button" className="add" onClick={()=>setModalOpen(true)}>+</button></div>
    </article>
)
}

Notes.propTypes={
    notes:PropTypes.array,
    setModalOpen:PropTypes.func
}
export default Notes;