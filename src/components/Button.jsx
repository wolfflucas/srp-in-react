/* eslint-disable */

const Button = ({ text, onClick, variant }) => {
  const variantClassName = {
    primary: "button-primary",
    ghost: "button-ghost",
  }[variant || "primary"];

  return (
    <button className={variantClassName} onClick={onClick}>
      {text}
    </button>
  );
};

export { Button };
