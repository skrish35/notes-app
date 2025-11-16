import { useState, useEffect } from 'react';
import { FaPlus } from 'react-icons/fa6';
import { BiSolidHide } from 'react-icons/bi';
import { MdNoteAdd } from 'react-icons/md';
import TextInput from './inputs/TextInput.jsx';
import SelectInput from './inputs/SelectInput.jsx';
import TextAreaInput from './inputs/TextAreaInput.jsx';

function NoteForm({ notes, setNotes, noteToEdit, updateNote }) {
    const [formData, setFormData] = useState({
        title: '',
        priority: 'low',
        category: 'work',
        description: '',
    });

    const [isFormVisible, setIsFormVisible] = useState(false);

    useEffect(() => {
        setFormData(noteToEdit.note);
    }, [noteToEdit])

    const handleFormChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();

        // Validate if title and description is not empty.
        if (!formData.title || !formData.description) return;

        // Construct new note.
        let newNote = {};
        if (noteToEdit.isEdit === true) {
            newNote = {
                id: noteToEdit.note.id,
                ...formData,
            }
            // Update note
            updateNote(newNote);
        } else {
            newNote = {
                id: Date.now(),
                ...formData,
            }
            // Set notes in state.
            setNotes([newNote, ...notes]);
        }

        // Reset note form.
        setFormData({
            title: '',
            priority: 'low',
            category: 'work',
            description: '',
        })
    }

    return (
        <>
            <button
                className='p-3 rounded-lg shadow-md mb-4 w-full bg-purple-500 hover:bg-purple-700 text-white font-bold'
                onClick={() => setIsFormVisible(!isFormVisible)}
            >
                {isFormVisible ? (
                    <div className='flex justify-center'>
                        <BiSolidHide className='mt-1 mr-2'/>
                        <span>Hide Note</span>
                    </div>
                ) : (
                    <div className='flex justify-center'>
                        <FaPlus className='mt-1 mr-2'/>
                        <span>Add New Note</span>
                    </div>
                )}
            </button>
            {isFormVisible && (
                <form className='mb-6' onSubmit={handleFormSubmit}>
                    <TextInput
                        label='Title'
                        id='note-title'
                        placeholder='Title...'
                        name='title'
                        value={formData.title}
                        required={true}
                        onChange={handleFormChange}
                    />

                    <SelectInput
                        label='Priority'
                        id='note-priority'
                        name='priority'
                        value={formData.priority}
                        onChange={handleFormChange}
                        options={[
                            {label: 'High', value: 'high'},
                            {label: 'Low', value: 'low'},
                            {label: 'Medium', value: 'medium'},
                        ]}
                    />

                    <SelectInput
                        label='Category'
                        id='note-category'
                        name='category'
                        value={formData.category}
                        onChange={handleFormChange}
                        options={[
                            { label: 'Work', value: 'work'},
                            { label: 'Personal', value: 'personal'},
                            { label: 'Ideas', value: 'ideas'},
                        ]}
                    />

                    <TextAreaInput
                        label='Description'
                        id='note-description'
                        placeholder='Description...'
                        name='description'
                        value={formData.description}
                        onChange={handleFormChange}
                        required={true}
                    />

                    <button
                        className='w-full bg-purple-500 hover:bg-purple-700 p-4 rounded-lg text-white font-bold'
                        type = 'submit'
                    >
                        <span className='flex justify-center'>
                            <MdNoteAdd className='mt-1 mr-2 text-lg'/>
                            <span>Add Note</span>
                        </span>

                    </button>
                </form>
            )}
        </>

    )
}

export default NoteForm;