function TextAreaInput({ label, name, id, placeholder, value, onChange, required=false}) {
    return (
        <div className='mb-4'>
            <label htmlFor = {name} className='block font-bold'>{label}</label>
            <textarea
                name = {name}
                id = {id}
                placeholder = {placeholder}
                className='w-full border-2 rounded-lg p-2'
                rows = '5'
                value={value}
                onChange={onChange}
                required={required}
            >
                </textarea>
        </div>
    )
}

export default TextAreaInput;