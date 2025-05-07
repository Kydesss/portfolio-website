interface ButtonProps {
    id: string;
    className: string;
    text: string;
}

function Button({ id, className, text }: ButtonProps) {
    return (
        <button id={id} type="button" className={className}>
            {text}
        </button>
    );
}

export default Button;
