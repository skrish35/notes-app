import { useState } from 'react';
import TextInput from './inputs/TextInput.jsx';
import SelectInput from './inputs/SelectInput.jsx';
import TextAreaInput from './inputs/TextAreaInput.jsx';

function NoteForm({ notes, setNotes }) {
    const [formData, setFormData] = useState({
        title: '',
        priority: 'low',
        category: 'work',
        description: '',
    });
    const [isFormVisible, setIsFormVisible] = useState(false);

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
        const newNote = {
            id: Date.now(),
            ...formData,
        }

        // Set notes in state.
        setNotes([newNote, ...notes]);

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
                {isFormVisible ? 'Hide Note' : 'Add New Note'}
            </button>
            {isFormVisible && (
                <form className='mb-6' onSubmit={handleFormSubmit}>
                    <TextInput
                        label='Title'
                        id='note-title'
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
                            {label: 'Work', value: 'work'},
                            {label: 'Personal', value: 'personal'},
                            {label: 'Ideas', value: 'ideas'},
                        ]}
                    />

                    <TextAreaInput
                        label='Description'
                        id='note-description'
                        name='description'
                        value={formData.description}
                        onChange={handleFormChange}
                        required={true}
                    />

                    <button
                        className='w-full bg-purple-500 hover:bg-purple-700 p-4 rounded-lg text-white font-bold'
                        type = 'submit'
                    >Add Note</button>
                </form>
            )}
        </>

    )
}

export default NoteForm;