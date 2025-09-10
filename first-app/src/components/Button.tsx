interface ButtonProps{
    label?: string;
    onClick: () => void;
    them?: 'primary' | 'secondary';
}

const Button =({
    labe = "คลิก",
    onClick: () => void;
    theme = "primary",
}:ButtonProps) => {
    const style = theme === 'primary'? {backgroundcolor: 'blue', color: 'white'} : {backgroundColor: 'gray'};
    return <button onClick={onClick} style={style}>{label}</button>;
};
export default Button;
