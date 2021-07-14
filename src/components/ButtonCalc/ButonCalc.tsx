import React from "react";
import "./index.css";
interface Props {
  value: string;
  classes?: string;
  onClickEvent: (value: string) => void;
}
const ButtonCalc: React.FC<Props> = ({ value, classes = "", onClickEvent }) => {
  return (
    <div className={`button-container ${classes}`}>
      <button className="button" onClick={() => onClickEvent(value)}>
        <p className="">{value}</p>
      </button>
    </div>
  );
};

export default ButtonCalc;
