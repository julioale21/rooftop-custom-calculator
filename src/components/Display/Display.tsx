import React from "react";
import "./index.css";

interface Props {
  value: number;
  id: string;
  handleChange: (e: React.FormEvent<HTMLInputElement>) => void;
  handleClear: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
const InputCalc: React.FC<Props> = ({ value, handleChange, handleClear, id }) => {
  return (
    <div className="display">
      <input
        className="display-input"
        id={id}
        inputMode="decimal"
        step="0.01"
        type="number"
        value={value.toString()}
        onChange={handleChange}
      />
      <button className="display-button" id={id} onClick={handleClear}>
        clear
      </button>
    </div>
  );
};

export default InputCalc;
