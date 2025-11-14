import NoteItem from './NoteItem';

function NoteList({ notes, deleteNote }) {
    if (!notes || notes.length === 0) {
        return (
            <h3 className='font-bold font-bold'>No Notes Found!!!</h3>
        )
    }
    return (
        <div>
            {notes.map((note) => (
                <NoteItem key={note.id} note={note} deleteNote={deleteNote} />
            ))}
        </div>
    )
}

export default NoteList;