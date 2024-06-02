import React from "react";

const Button = (props) => {
  const { buttonText, className, setDisplayValue, displayValue } = props;

  //   function to handle the btn click
  const handleOnClick = () => {
    // implement ac button
    if (buttonText === "AC") {
      setDisplayValue("");
      return;
    }

    if (buttonText === "C") {
      setDisplayValue(displayValue.slice(0, -1));
      return;
    }

    setDisplayValue(displayValue + buttonText);
  };

  return (
    <button onClick={handleOnClick} className={className}>
      {buttonText}
    </button>
  );
};

export default Button;
