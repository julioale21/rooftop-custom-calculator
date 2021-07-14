import React from "react";
import "./index.css";

interface Props {
  value: string;
  id: string;
  handleChange: (e: React.FormEvent<HTMLInputElement>) => void;
  handleClear: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleFocus: (e: React.FocusEvent<HTMLInputElement>) => void;
}
const InputCalc: React.FC<Props> = ({ value, handleChange, handleClear, handleFocus, id }) => {
  return (
    <div className="display">
      <input
        className="display-input"
        id={id}
        inputMode="decimal"
        step="0.01"
        type="string"
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
      />
      <button className="display-button" id={id} onClick={handleClear}>
        clear
      </button>
    </div>
  );
};

export default InputCalc;
