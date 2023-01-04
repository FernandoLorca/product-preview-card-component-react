import "./Button.css";

const Button = ({ text }) => {
  return (
    <button className="add-to-cart-button p-4 color-dark-cyan-bg text-white rounded-lg">
      {text}
    </button>
  );
};

export default Button;
