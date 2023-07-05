import { ReactElement, useRef, useState } from "react";
import Input from "./Input";
import useContactForm from "../hooks/useContactForm";
import { useRouter } from "next/router";
import emailjs from '@emailjs/browser';

const Contact = (): ReactElement => {
    const {formData, handleFormData} = useContactForm({});
    const [submitClicked, setSubmitClicked] = useState(false)
    const router = useRouter();
    const form = useRef();

    const encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
      }

    const handleSubmit = (e) => {
        e.preventDefault()
        emailjs.sendForm('service_mutwe9q', 'template_swh02mm', form.current, '1SbO05iXVOS244bYQ')
            .then((result) => {
                // show the user a success message
                console.log(result)
                router.push("/success")
            }, (error) => {
                // show the user an error
                console.log("error")
            });
    }

    return (
        <div id="contact" className="bg-black flex flex-grow h-screen py-[var(--nav-height)]">
            <div className="m-auto max-w-xl w-full px-4">
                <h1 className="text-center text-5xl text-white font-bold mb-6">Contact Me</h1>
                <form className="flex flex-col gap-4" 
                    ref={form}
                    name="contactMe" 
                    onSubmit={handleSubmit}>
                    <div className="w-full">
                        <Input label="Customer Name" type="text" name="customer_name" value={formData.customer_name} onChangeHandler={handleFormData} />
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