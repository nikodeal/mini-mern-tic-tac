import "./Button.css";

type ButtonProps = {
  value: string;
  onClick: any;
};

const Button = ({ value, onClick }: ButtonProps) => {
  return (
    <button
      className="btn-click"
      style={value === "X" ? { color: "#142850" } : { color: "#558f40" }}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Button;
