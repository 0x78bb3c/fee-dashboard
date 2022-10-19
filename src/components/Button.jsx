const Button = ({ bg, onClick, children }) => {
    return (
        <button
            style={{
                background: bg,
                height: "50px",
                width: "140px",
                color: "white",
                fontSize: "1em",
                borderRadius: "10px",
                borderStyle: "none",
                margin: "10px",
            }}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
