import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import DisplayBox from "./components/DisplayBox";

function App() {
  const [displayValue, setDisplayValue] = useState("");
  return (
    <>
      <div className="wrapper">
        <div className="calculator-container">
          <DisplayBox displayValue={displayValue} />
          <div className="flex-container">
            <Button
              setDisplayValue={setDisplayValue}
              buttonText="AC"
              className="ac"
              displayValue={displayValue}
            />
            <Button
              buttonText="C"
              setDisplayValue={setDisplayValue}
              displayValue={displayValue}
            />
            <Button
              buttonText="%"
              setDisplayValue={setDisplayValue}
              displayValue={displayValue}
            />
            <Button
              buttonText="/"
              setDisplayValue={setDisplayValue}
              displayValue={displayValue}
            />
          </div>
          <div className="flex-container">
            <Button
              buttonText="9"
              setDisplayValue={setDisplayValue}
              displayValue={displayValue}
            />
            <Button
              buttonText="8"
              setDisplayValue={setDisplayValue}
              displayValue={displayValue}
            />
            <Button
              buttonText="7"
              setDisplayValue={setDisplayValue}
              displayValue={displayValue}
            />
            <Button
              buttonText="*"
              setDisplayValue={setDisplayValue}
              displayValue={displayValue}
            />
          </div>
          <div className="flex-container">
            <Button
              buttonText="6"
              setDisplayValue={setDisplayValue}
              displayValue={displayValue}
            />
            <Button
              buttonText="5"
              setDisplayValue={setDisplayValue}
              displayValue={displayValue}
            />
            <Button
              buttonText="4"
              setDisplayValue={setDisplayValue}
              displayValue={displayValue}
            />
            <Button
              buttonText="-"
              setDisplayValue={setDisplayValue}
              displayValue={displayValue}
            />
          </div>
          <div className="flex-container">
            <Button
              buttonText="3"
              setDisplayValue={setDisplayValue}
              displayValue={displayValue}
            />
            <Button
              buttonText="2"
              setDisplayValue={setDisplayValue}
              displayValue={displayValue}
            />
            <Button
              buttonText="1"
              setDisplayValue={setDisplayValue}
              displayValue={displayValue}
            />
            <Button
              buttonText="+"
              setDisplayValue={setDisplayValue}
              displayValue={displayValue}
            />
          </div>
          <div className="flex-container">
            <Button
              buttonText="0"
              setDisplayValue={setDisplayValue}
              displayValue={displayValue}
            />
            <Button
              buttonText="."
              setDisplayValue={setDisplayValue}
              displayValue={displayValue}
            />
            <Button
              buttonText="="
              className="equal-button"
              setDisplayValue="setDisplayValue"
              displayValue={displayValue}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;