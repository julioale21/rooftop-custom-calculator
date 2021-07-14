import React, { useMemo, useState } from "react";
import Display from "../Display";
import Keypad from "../Keypad";
import ResultList from "../ResultList";
import "./index.css";

interface Result {
  operation: string;
  value: number;
}

const Calculator: React.FC = () => {
  const [input1, setInput1] = useState("0");
  const [input2, setInput2] = useState("0");
  const [results, setResults] = useState([] as Result[]);
  const [activeDisplay, setActiveDisplay] = useState("display1");

  useMemo(() => {
    if (input1.charAt(input1.length - 1) === ".") return;
    if (input2.charAt(input2.length - 1) === ".") return;

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
        value: Number(input1) * Number(input2),
      },
      {
        operation: "División",
        value: Number(input1) / Number(input2),
      },
      {
        operation: "Raiz",
        value: Math.pow(Number(input1), 1 / Number(input2)),
      },
      {
        operation: "Potencia",
        value: Math.pow(Number(input1), Number(input2)),
      },
    ];

    setResults(results);
  }, [input1, input2]);

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    if (!isInputValid(e.currentTarget.value.replace(".", ""))) return;

    const array = Array.from(e.currentTarget.value);

    const dotsCount = array.filter((item) => item === ".").length;

    if (dotsCount > 1) return;

    const value = e.currentTarget.value;

    if (e.currentTarget.id === "display1") {
      setInput1(value);
    } else if (e.currentTarget.id === "display2") {
      setInput2(value);
    }
  };

  const handleClearButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!isInputValid(e.currentTarget.value)) return;

    if (e.currentTarget.id === "display1") {
      setInput1("0");
    } else if (e.currentTarget.id === "display2") {
      setInput2("0");
    }
  };

  const handleFocus = (e: React.FormEvent<HTMLInputElement>) => {
    setActiveDisplay(e.currentTarget.id);
  };

  const handleClick = (value: string) => {
    if (value !== "." && !isInputValid(value)) return;

    if (activeDisplay === "display1") {
      if (value === "." && input1.toString().includes(".")) {
        return;
      }

      if (input1 === "0" && value !== ".") {
        setInput1(value);

        return;
      }
      let newValue = input1 + value;

      setInput1(newValue);
    } else if (activeDisplay === "display2") {
      const newValue = input2 + value;

      if (input2 === "0" && value !== ".") {
        setInput2(value);

        return;
      }

      if (value === "." && input2.toString().includes(".")) {
        return;
      }

      setInput2(newValue);
    }
  };

  const isInputValid = (input: string) => {
    let i = Number(input);

    return !Number.isNaN(i);
  };

  return (
    <div>
      <div className="calculator">
        <Display
          handleChange={handleChange}
          handleClear={handleClearButton}
          handleFocus={handleFocus}
          id="display1"
          value={input1}
        />
        <Display
          handleChange={handleChange}
          handleClear={handleClearButton}
          handleFocus={handleFocus}
          id="display2"
          value={input2}
        />
        <Keypad onClickEvent={handleClick} />
      </div>

      <ResultList results={results} />
    </div>
  );
};

export default Calculator;
