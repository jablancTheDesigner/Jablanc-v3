import { ReactElement, useRef, useState } from "react";
import Input from "./Input";
import useContactForm from "../hooks/useContactForm";
import { useRouter } from "next/router";
import emailjs from '@emailjs/browser';
import AnimatedHeader from "./Animated/AnimatedHeader";

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
        <div id="contact" className="bg-darker flex flex-grow h-screen py-[var(--nav-height)]">
            <div className="m-auto max-w-xl w-full px-8">
                <AnimatedHeader title={"Contact Me"}></AnimatedHeader>
                <form className="flex flex-col gap-4" 
                    ref={form}
                    name="contactMe" 
                    onSubmit={handleSubmit}>
                    <div className="w-full">
                        <Input label="Name" 
                            placeholder="Enter your Name" 
                            type="text" 
                            name="customer_name" 
                            required={true}
                            value={formData.customer_name} onChangeHandler={handleFormData} />
                    </div>

                    <div className="w-full">
                        <Input label="Phone #" 
                            placeholder="Enter your phone number" 
                            type="tel" 
                            name="phone" 
                            value={formData.fname} 
                            onChangeHandler={handleFormData} />
                    </div>

                    <div className="w-full">
                        <Input label="Email" 
                            type="email" 
                            placeholder="Enter email" 
                            name="email" 
                            value={formData.fname} 
                            required={true} 
                            onChangeHandler={handleFormData} />
                    </div>
                    <button 
                        type="submit"
                        className="app-button mt-6 border">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Contact;