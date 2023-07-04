import { ReactElement, useState } from "react";
import Input from "./Input";
import useContactForm from "../hooks/useContactForm";

const Contact = (): ReactElement => {
    const {formData, handleFormData} = useContactForm({});
    const [submitClicked, setSubmitClicked] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
    }

    return (
        <div className="bg-black flex flex-grow h-screen py-[var(--nav-height)]">
            <div className="m-auto max-w-xl w-full px-4">
                <h1 className="text-center text-5xl text-white font-bold mb-6">Contact Me</h1>
                <form className="flex flex-col gap-4" data-netlify="true" name="contactMe">
                    <div className="flex gap-4 w-full">
                        <div className="w-1/2">
                            <Input label="First name" type="text" name="firstName" value={formData.fname} onChangeHandler={handleFormData} />
                        </div>

                        <div className="w-1/2">
                            <Input label="First name" type="text" name="lastName" value={formData.fname} onChangeHandler={handleFormData} />
                        </div>
                    </div>

                    <div className="w-full">
                        <Input label="Phone #" type="tel" name="phone" value={formData.fname} onChangeHandler={handleFormData} />
                    </div>

                    <div className="w-full">
                        <Input label="Email" type="email" name="email" value={formData.fname} onChangeHandler={handleFormData} />
                    </div>
                    <button 
                        type="submit"
                        className="app-button mt-6">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Contact;