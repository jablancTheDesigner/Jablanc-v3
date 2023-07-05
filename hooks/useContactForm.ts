import { useCallback, useState } from "react"

interface FormData {
    fname?: string;
    lname?: string;
    email?: string;
    phone?: string;
    customer_name?: string;
}

const useContactForm = (initialState: FormData) => {
    const [formData, setFormData] = useState<FormData>(initialState);

    const handleFormData = useCallback((e)=>{
        setFormData(
            {
                ...formData,
                [e.target.name]: e.target.value
            }
        )
    }, [setFormData, formData])

    return {
        formData,
        handleFormData
    }
}

export default useContactForm;