
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
            <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-white mb-2">
                {inputData.label}
            </label>
            <input 
                {...(inputData.required ? {required: inputData.required} : {})}
                type={inputData.type} 
                name={inputData.name} 
                value={inputData.value} 
                onChange={inputData.onChangeHandler} 
                placeholder={inputData.placeholder ?? ""}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </>
    )
}

export default Input;