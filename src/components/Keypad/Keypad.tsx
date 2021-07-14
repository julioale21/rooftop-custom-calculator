import React from "react";
import ButtonCalc from "../ButtonCalc";
import "./index.css";

interface Props {
  onClickEvent: (value: string) => void;
}
const Keypad: React.FC<Props> = ({ onClickEvent }) => {
  const values = ["7", "8", "9", "4", "5", "6", "1", "2", "3"];

  return (
    <div className="keypad">
      {values.map((val) => (
        <ButtonCalc key={val} value={val} onClickEvent={(value) => onClickEvent(value)} />
      ))}

      <ButtonCalc classes="col-2" value="0" onClickEvent={(value) => onClickEvent(value)} />
      <ButtonCalc value="." onClickEvent={(value) => onClickEvent(value)} />
    </div>
  );
};

export default Keypad;
