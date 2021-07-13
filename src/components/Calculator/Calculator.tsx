import React, { useMemo, useState } from "react";
import Display from "../Display";
import ResultList from "../ResultList";

interface Result {
  operation: string;
  value: number;
}

const Calculator: React.FC = () => {
  const [input1, setInput1] = useState(0);
  const [input2, setInput2] = useState(0);
  const [results, setResults] = useState([] as Result[]);

  useMemo(() => {
    const results: Result[] = [
      {
        operation: "Suma",
        value: Number((Number(input1) + Number(input2)).toFixed(9)),
      },
      {
        operation: "Resta",
        value: Number((Number(input1) - Number(input2)).toFixed(9)),
      },
      {
        operation: "Multiplicación",
        value: input1 * input2,
      },
      {
        operation: "División",
        value: input1 / input2,
      },
      {
        operation: "Raiz",
        value: Math.pow(input1, 1 / input2),
      },
      {
        operation: "Potencia",
        value: Math.pow(input1, input2),
      },
    ];

    setResults(results);
  }, [input1, input2]);

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const value = parseFloat(e.currentTarget.value);

    if (e.currentTarget.id === "display1") {
      setInput1(value);
    } else if (e.currentTarget.id === "display2") {
      setInput2(value);
    }
  };

  const handleClearButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (e.currentTarget.id === "display1") {
      setInput1(0);
    } else if (e.currentTarget.id === "display2") {
      setInput2(0);
    }
  };

  return (
    <div>
      <Display
        handleChange={handleChange}
        handleClear={handleClearButton}
        id="display1"
        value={input1}
      />
      <Display
        handleChange={handleChange}
        handleClear={handleClearButton}
        id="display2"
        value={input2}
      />
      <ResultList results={results} />
    </div>
  );
};

export default Calculator;
