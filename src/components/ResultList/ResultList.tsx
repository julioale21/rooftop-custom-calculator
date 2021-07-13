import React from "react";
import ResultItem from "../ResultItem";
import "./index.css";

interface Result {
  operation: string;
  value: number;
}

interface Props {
  results: Result[];
}
const ResultList: React.FC<Props> = ({ results }) => {
  return (
    <div className="results">
      <ul>
        {results.map((result, index) => (
          <ResultItem key={index} title={result.operation} value={result.value} />
        ))}
      </ul>
    </div>
  );
};

export default ResultList;
