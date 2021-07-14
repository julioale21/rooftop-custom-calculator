import React from "react";
import Display from "../Display";
import Keypad from "../Keypad";
import ResultList from "../ResultList";
import useCalculator from "./useCalculator";
import "./index.css";

const Calculator: React.FC = () => {
  const { input1, input2, results, handleChange, handleClearButton, handleClick, handleFocus } =
    useCalculator();

  return (
    <div>
      <div className="calculator">
        <Display
          handleChange={handleChange}
          handleClear={handleClearButton}
          handleFocus={handleFocus}
          id="display1"
          value={input1}
        />
        <Display
          handleChange={handleChange}
          handleClear={handleClearButton}
          handleFocus={handleFocus}
          id="display2"
          value={input2}
        />
        <Keypad onClickEvent={handleClick} />
      </div>

      <ResultList results={results} />
    </div>
  );
};

export default Calculator;
