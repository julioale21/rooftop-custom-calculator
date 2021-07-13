import React from "react";
import "./index.css";

interface Props {
  title: string;
  value: number;
}
const ResultItem: React.FC<Props> = ({ title, value }) => {
  return (
    <li className="result">
      <p>
        {title}: <span>{value}</span>
      </p>
    </li>
  );
};

export default ResultItem;
