import { useState, useEffect } from 'react';
import notesLogo from './assets/images/notes-icon.png';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';

function App() {
    const [notes, setNotes] = useState(() => {
        const notes = JSON.parse(localStorage.getItem('notes'));
        return notes || [];
    });

    const [noteToEdit, setNoteToEdit] = useState({ note: {}, isEdit: false});

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes));
    }, [notes])

    const deleteNote = (id) => {
        const confirmDelete = window.confirm('Are you sure you want to delete this note?');
        if (confirmDelete) {
            setNotes(notes.filter((note) => note.id !== id));
        }
    }

    const onEditNote = (note) => {
        setNoteToEdit({ note: note, isEdit: true });
    }

    const updateNote = (updatedNote) => {
        setNotes(notes.map((note) => {
            if (note.id === updatedNote.id) {
                return {
                    id: updatedNote.id,
                    ...updatedNote
                }
            }
            return note;
        }))
    }

    return (
        <div className='max-w-xl mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-lg'>
            <h2 className='flex mb-6 text-2xl font-bold justify-center'>
                <img
                    className='w-12 h-12 rounded-lg'
                    src = {notesLogo}
                    alt = 'Notes'
                />
                <span className='pl-2 m-2'>Notes App</span>
            </h2>
            <NoteForm notes={notes} setNotes={setNotes} noteToEdit={noteToEdit} updateNote={updateNote}/>
            <NoteList notes={notes} deleteNote={deleteNote} onEditNote={onEditNote}/>
        </div>
    )
}

export default App;