function TextInput({ label, name, id, value, onChange, required=false}) {
    return (
            <div className='mb-4'>
                <label htmlFor = {name} className='block font-bold'>{label}</label>
                <input
                    className='w-full p-2 border-2 rounded-lg'
                    type = 'text'
                    name = {name}
                    id = {id}
                    value={value}
                    onChange={onChange}
                    required={required}
                />
            </div>
    )
}

export default TextInput;