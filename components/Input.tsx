interface InputData {
  label: string;
  name: string;
  value: string;
  type: string;
  placeholder?: string;
  required?: boolean;
  onChangeHandler: (args: any) => void;
}

const Input = (inputData: InputData) => {
  return (
    <>
      {/* <label
        htmlFor="first-name"
        className="block text-xl font-semibold leading-6 text-primary mb-1 uppercase text-center">
        {inputData.label}
      </label> */}
      <input
        {...(inputData.required ? { required: inputData.required } : {})}
        type={inputData.type}
        name={inputData.name}
        value={inputData.value}
        onChange={inputData.onChangeHandler}
        placeholder={inputData.placeholder ?? ""}
        className="block w-full rounded-md border-0 px-0 py-5 text-white ring-0 placeholder:text-gray-600 focus:ring-transparent sm:leading-6 !bg-transparent outline-none text-center text-2xl"
      />
    </>
  );
};

export default Input;
