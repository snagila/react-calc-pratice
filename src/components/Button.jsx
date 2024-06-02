import React from "react";

const OPERATORS = ["%", "/", "*", "-", "+"];

const Button = (props) => {
  const {
    buttonText,
    className,
    setDisplayValue,
    displayValue,
    lastOperator,
    setLastOperator,
  } = props;

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

    if (buttonText === "=") {
      // Eval needs a proper expression to work on
      // For that we clean last operator i.e. =
      const result = eval(displayValue);

      setDisplayValue(result);
      return;
    }

    if (buttonText === ".") {
      if (!lastOperator && displayValue.includes(".")) {
        return;
      }

      const lastOperatorIndex = displayValue.lastIndexOf(lastOperator);

      const lastNumberSet = displayValue.slice(lastOperatorIndex);

      if (lastNumberSet.includes(".")) {
        return;
      }
    }

    if (OPERATORS.includes(buttonText)) {
      //Dont allow some operators at the beginning of operation
      if (!displayValue) {
        if (["%", "/", "*"].includes(buttonText)) {
          return;
        }
      }
      setLastOperator(buttonText);
      //get last character
      const lastCharacter = displayValue[displayValue.length - 1];

      if (OPERATORS.includes(lastCharacter)) {
        // remove the last character which is existing operator
        setDisplayValue(displayValue.slice(0, -1) + buttonText);
        return;
      }
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
