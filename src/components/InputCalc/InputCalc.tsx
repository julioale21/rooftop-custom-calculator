import React from "react";

interface Props {
  value: number;
  handleChange: (e: React.FormEvent<HTMLInputElement>) => void;
  handleClear: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
const InputCalc: React.FC<Props> = ({ value, handleChange, handleClear }) => {
  return (
    <div>
      <input type="number" value={value} onChange={handleChange} />
      <button onClick={handleClear}>clear</button>
    </div>
  );
};

export default InputCalc;
