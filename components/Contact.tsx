import { ReactElement, useState } from "react";
import Input from "./Input";
import useContactForm from "../hooks/useContactForm";
import { useRouter } from "next/router";

const Contact = (): ReactElement => {
    const {formData, handleFormData} = useContactForm({});
    const [submitClicked, setSubmitClicked] = useState(false)
    const router = useRouter()

    const encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
      }

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ 
                "form-name": form.getAttribute('name'), 
                ...formData 
            })
          })
            .then(() => {
                router.push("/success")
            })
            .catch(error => alert(error));
    }

    return (
        <div className="bg-black flex flex-grow h-screen py-[var(--nav-height)]">
            <div className="m-auto max-w-xl w-full px-4">
                <h1 className="text-center text-5xl text-white font-bold mb-6">Contact Me</h1>
                <form className="flex flex-col gap-4" 
                    name="contactMe" 
                    onSubmit={handleSubmit}
                    method="post"
                    action="/success/"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field">
                    <input type="hidden" name="form-name" value="contactMe" />
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