const Button = ({children, ...props}) => {
    return (
        <button className="rounded px-8 py-2 bg-pink-700 text-xl text-white hover:bg-pink-800" {...props}>
            {children}
        </button>
    );
}

export default Button;