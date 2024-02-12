import PropTypes from 'prop-types'


const Notes=({notes})=>{
return (
    <article>
        {notes.map((note)=>{
            return(
                <p key={note.id}>{note.note}</p>
            )
        })}

    </article>
)
}

Notes.propTypes={
    notes:PropTypes.array
}
export default Notes;