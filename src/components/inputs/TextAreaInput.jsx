function TextAreaInput({ label, name, id, value, onChange, required=false}) {
    return (
        <div className='mb-4'>
            <label htmlFor = {name} className='block font-bold'>{label}</label>
            <textarea
                name = {name}
                id = {id}
                className='w-full border-2 rounded-lg'
                cols = '30'
                rows = '10'
                value={value}
                onChange={onChange}
                required={required}
            >
                </textarea>
        </div>
    )
}

export default TextAreaInput;