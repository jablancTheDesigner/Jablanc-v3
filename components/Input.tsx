
interface InputData {
    label: string,
    name: string,
    value: string,
    type: string,
    placeholder?: string,
    required?: boolean,
    onChangeHandler: (args: any) => void
}

const Input = (inputData: InputData) => {
    return (
        <>
            <label htmlFor="first-name" className="block text-xl font-semibold leading-6 text-primary mb-1">
                {inputData.label}
            </label>
            <input 
                {...(inputData.required ? {required: inputData.required} : {})}
                type={inputData.type} 
                name={inputData.name} 
                value={inputData.value} 
                onChange={inputData.onChangeHandler} 
                placeholder={inputData.placeholder ?? ""}
                className="block w-full rounded-md border-0 px-0 py-2 text-white shadow-sm ring-0 placeholder:text-gray-400 focus:ring-transparent sm:text-sm sm:leading-6 bg-transparent outline-none" />
                <div className="block w-full h-1 bg-primary mb-4"></div>
        </>
    )
}

export default Input;