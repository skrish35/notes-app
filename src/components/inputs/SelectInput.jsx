function SelectInput({ label, name, id, value, options, onChange}) {
    return (
        <div className='mb-4'>
            <label htmlFor = {name} className='block font-bold'>{label}</label>
            <select
                className='w-full p-3 border-2 rounded-lg'
                name = {name}
                id = {id}
                value={value}
                onChange={onChange}
            >
                {options.map((option, index) => (
                    <option key={index} value={option.value}>{option.label}</option>
                ))}
            </select>
        </div>
    )
}

export default SelectInput;