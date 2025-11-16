import { HiPencil } from "react-icons/hi2";
import { MdDelete } from 'react-icons/md';

function NoteItem({ note, deleteNote, onEditNote }) {
    let borderColor = '';
    if (note.priority === 'high') {
        borderColor = 'red'
    } else if (note.priority === 'low') {
        borderColor = 'green'
    } else if (note.priority === 'medium') {
        borderColor = 'orange'
    }

    return (
        <div className='p-4 bg-white rounded-lg shadow-md border-l-4 mb-3' style={{borderLeftColor: borderColor}}>
            <h3 className='text-lg font-bold'>{note.title}</h3>
            <p className='text-sm text-gray-700'>
                <strong>Category:</strong>{note.category}
            </p>
            <p className='text-sm text-gray-700'>
                <strong>Priority:</strong>{note.priority}
            </p>
            <p className='mt-2 mb-4'>{note.description}</p>

            <button
                className='btn btn-link text-blue-500 font-semibold hover:text-blue-700'
                onClick={() => onEditNote(note)}
            >
                <span className='flex justify-center'>
                    <HiPencil className='mt-1 mr-1'/>
                    <span>Edit</span>
                </span>
            </button>
            <button
                className='btn btn-link text-red-500 font-semibold hover:text-red-700'
                onClick={() => deleteNote(note.id)}
            >
                <span className='flex justify-center'>
                    <MdDelete className='mt-1 ml-4 mr-1'/>
                    <span>Delete</span>
                </span>
            </button>
        </div>
    )
}

export default NoteItem;