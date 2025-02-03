type ButtonProps = {
    children?: React.ReactNode;
    text: string;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    color?: "dark" | "light" | "black";
}

const Button = ({children, text, onClick, type, color}: ButtonProps) => {
    const buttonColor = color ?? "primary";
    const buttonClass = buttonColor === "dark" 
        ? "text-white border-primary" 
        : buttonColor === "black"
        ? "bg-black hover:bg-white hover:text-dark text-white border-white" 
        : "bg-primary hover:bg-white hover:text-darker text-darker border-dark";

    return (
        <button 
            onClick={onClick}
            className={`text-base px-8 py-3 text-secondary font-bold uppercase transition-all hover:scale-110 text-white`}
            type={type ?? "button"}>
            {children ?? text}
        </button>
    )
}

export default Button;

