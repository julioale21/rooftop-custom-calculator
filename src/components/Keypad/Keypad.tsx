import React from "react";
import ButtonCalc from "../ButtonCalc";
import "./index.css";

interface Props {
  onClickEvent: (value: string) => void;
}
const Keypad: React.FC<Props> = ({ onClickEvent }) => {
  return (
    <div className="keypad">
      <ButtonCalc value="7" onClickEvent={(value) => onClickEvent(value)} />
      <ButtonCalc value="8" onClickEvent={(value) => onClickEvent(value)} />
      <ButtonCalc value="9" onClickEvent={(value) => onClickEvent(value)} />

      <ButtonCalc value="4" onClickEvent={(value) => onClickEvent(value)} />
      <ButtonCalc value="5" onClickEvent={(value) => onClickEvent(value)} />
      <ButtonCalc value="6" onClickEvent={(value) => onClickEvent(value)} />

      <ButtonCalc value="1" onClickEvent={(value) => onClickEvent(value)} />
      <ButtonCalc value="2" onClickEvent={(value) => onClickEvent(value)} />
      <ButtonCalc value="3" onClickEvent={(value) => onClickEvent(value)} />

      <ButtonCalc classes="col-2" value="0" onClickEvent={(value) => onClickEvent(value)} />
      <ButtonCalc value="." onClickEvent={(value) => onClickEvent(value)} />
    </div>
  );
};

export default Keypad;
