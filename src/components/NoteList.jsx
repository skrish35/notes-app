import NoteItem from './NoteItem';

function NoteList({ notes, deleteNote, onEditNote }) {
    if (!notes || notes.length === 0) {
        return (
            <h3 className='font-bold font-bold text-center text-gray-700'>No Notes Found!!!</h3>
        )
    }
    return (
        <div>
            {notes.map((note) => (
                <NoteItem
                    key={note.id}
                    note={note}
                    deleteNote={deleteNote}
                    onEditNote={onEditNote}
                />
            ))}
        </div>
    )
}

export default NoteList;