import React from "react";
import InputCalc from "../InputCalc";

const Calculator = () => {
  return (
    <div>
      <InputCalc handleChange={() => {}} handleClear={() => {}} value={0} />
      <InputCalc handleChange={() => {}} handleClear={() => {}} value={0} />
    </div>
  );
};

export default Calculator;
