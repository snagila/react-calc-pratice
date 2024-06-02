import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import DisplayBox from "./components/DisplayBox";

function App() {
  const [displayValue, setDisplayValue] = useState("");
  const [lastOperator, setLastOperator] = useState("");
  const [isprank, setIsPrank] = useState(false);
  return (
    <>
      <div className="wrapper">
        <div className="calculator-container">
          <DisplayBox prank={isprank} displayValue={displayValue} />
          <div className="flex-container">
            <Button
              setDisplayValue={setDisplayValue}
              buttonText="AC"
              className="ac"
              displayValue={displayValue}
              lastOperator={lastOperator}
              setLastOperator={setLastOperator}
              setIsPrank={setIsPrank}
            />
            <Button
              buttonText="C"
              setDisplayValue={setDisplayValue}
              displayValue={displayValue}
              lastOperator={lastOperator}
              setLastOperator={setLastOperator}
              setIsPrank={setIsPrank}
            />
            <Button
              buttonText="%"
              setDisplayValue={setDisplayValue}
              displayValue={displayValue}
              lastOperator={lastOperator}
              setLastOperator={setLastOperator}
              setIsPrank={setIsPrank}
            />
            <Button
              buttonText="/"
              setDisplayValue={setDisplayValue}
              displayValue={displayValue}
              lastOperator={lastOperator}
              setLastOperator={setLastOperator}
              setIsPrank={setIsPrank}
            />
          </div>
          <div className="flex-container">
            <Button
              buttonText="9"
              setDisplayValue={setDisplayValue}
              displayValue={displayValue}
              lastOperator={lastOperator}
              setLastOperator={setLastOperator}
              setIsPrank={setIsPrank}
            />
            <Button
              buttonText="8"
              setDisplayValue={setDisplayValue}
              displayValue={displayValue}
              lastOperator={lastOperator}
              setLastOperator={setLastOperator}
              setIsPrank={setIsPrank}
            />
            <Button
              buttonText="7"
              setDisplayValue={setDisplayValue}
              displayValue={displayValue}
              lastOperator={lastOperator}
              setLastOperator={setLastOperator}
              setIsPrank={setIsPrank}
            />
            <Button
              buttonText="*"
              setDisplayValue={setDisplayValue}
              displayValue={displayValue}
              lastOperator={lastOperator}
              setLastOperator={setLastOperator}
              setIsPrank={setIsPrank}
            />
          </div>
          <div className="flex-container">
            <Button
              buttonText="6"
              setDisplayValue={setDisplayValue}
              displayValue={displayValue}
              lastOperator={lastOperator}
              setLastOperator={setLastOperator}
              setIsPrank={setIsPrank}
            />
            <Button
              buttonText="5"
              setDisplayValue={setDisplayValue}
              displayValue={displayValue}
              lastOperator={lastOperator}
              setLastOperator={setLastOperator}
              setIsPrank={setIsPrank}
            />
            <Button
              buttonText="4"
              setDisplayValue={setDisplayValue}
              displayValue={displayValue}
              lastOperator={lastOperator}
              setLastOperator={setLastOperator}
              setIsPrank={setIsPrank}
            />
            <Button
              buttonText="-"
              setDisplayValue={setDisplayValue}
              displayValue={displayValue}
              lastOperator={lastOperator}
              setLastOperator={setLastOperator}
              setIsPrank={setIsPrank}
            />
          </div>
          <div className="flex-container">
            <Button
              buttonText="3"
              setDisplayValue={setDisplayValue}
              displayValue={displayValue}
              lastOperator={lastOperator}
              setLastOperator={setLastOperator}
              setIsPrank={setIsPrank}
            />
            <Button
              buttonText="2"
              setDisplayValue={setDisplayValue}
              displayValue={displayValue}
              lastOperator={lastOperator}
              setLastOperator={setLastOperator}
              setIsPrank={setIsPrank}
            />
            <Button
              buttonText="1"
              setDisplayValue={setDisplayValue}
              displayValue={displayValue}
              lastOperator={lastOperator}
              setLastOperator={setLastOperator}
              setIsPrank={setIsPrank}
            />
            <Button
              buttonText="+"
              setDisplayValue={setDisplayValue}
              displayValue={displayValue}
              lastOperator={lastOperator}
              setLastOperator={setLastOperator}
              setIsPrank={setIsPrank}
            />
          </div>
          <div className="flex-container">
            <Button
              buttonText="0"
              setDisplayValue={setDisplayValue}
              displayValue={displayValue}
              lastOperator={lastOperator}
              setLastOperator={setLastOperator}
              setIsPrank={setIsPrank}
            />
            <Button
              buttonText="."
              setDisplayValue={setDisplayValue}
              displayValue={displayValue}
              lastOperator={lastOperator}
              setLastOperator={setLastOperator}
              setIsPrank={setIsPrank}
            />
            <Button
              buttonText="="
              className="equal-button"
              setDisplayValue="setDisplayValue"
              displayValue={displayValue}
              lastOperator={lastOperator}
              setLastOperator={setLastOperator}
              setIsPrank={setIsPrank}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
