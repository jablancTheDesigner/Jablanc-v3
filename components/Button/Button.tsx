type ButtonProps = {
    text: string;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    color?: "primary" | "secondary";
}

const Button = ({text, onClick, type, color}: ButtonProps) => {
    const buttonColor = color ?? "primary";
    const bunttonClass = buttonColor === "primary" 
        ? "bg-darker hover:bg-white hover:text-dark text-white" 
        : "bg-primary hover:bg-white hover:text-darker text-darker"

    return (
        <button 
            onClick={onClick}
            className={`text-base px-8 py-3 text-secondary  font-bold uppercase rounded-full ${bunttonClass}`}
            type={type ?? "button"}>
            {text}
        </button>
    )
}

export default Button;

