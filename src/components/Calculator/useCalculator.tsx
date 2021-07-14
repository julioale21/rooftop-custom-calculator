import { useMemo, useState } from "react";
interface Result {
  operation: string;
  value: number;
}

const useCalculator = () => {
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

    const regex = /0([1-9])\w+/g;

    const array = Array.from(e.currentTarget.value);

    const dotsCount = array.filter((item) => item === ".").length;

    if (dotsCount > 1) return;

    let value = e.currentTarget.value;
    const matchReg = value.match(regex);

    if (matchReg?.length) {
      value = value.substring(1);
    }

    if (value === "") value = "0";

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

  return {
    input1,
    input2,
    results,
    handleChange,
    handleClearButton,
    handleClick,
    handleFocus,
  };
};

export default useCalculator;
