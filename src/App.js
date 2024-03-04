import { useState } from "react";

import { Display } from "./components/Display";
import { KeysPanel } from "./components/KeysPanel";
import { Calculator } from "./components/Calculator";

export default function App() {
  const [totalValue, setTotalValue] = useState(0);
  const [currentValue, setCurrentValue] = useState(0);
  const [operatorInput, setOperatorInput] = useState(null);
  const [operationFlag, setOperationFlag] = useState(false);

  function handleTotalValue(e) {
    e.preventDefault();

    if (operatorInput === "+") {
      setTotalValue(Number(totalValue) + Number(currentValue));
      if (totalValue > currentValue || totalValue !== 0) setOperationFlag(true);
    }

    if (operatorInput === "-") {
      setTotalValue(Number(totalValue) - Number(currentValue));
      setOperationFlag(true);
    }

    if (operatorInput === "x") {
      setTotalValue(Number(totalValue) * Number(currentValue));
      setOperationFlag(true);
    }

    if (operatorInput === "/") {
      setTotalValue(Number(totalValue) / Number(currentValue));
      setOperationFlag(true);
    }

    if (operatorInput === "%") {
      if (totalValue === 0) {
        setTotalValue(currentValue / 100);
      } else {
        setTotalValue(totalValue / 100);
      }
      setOperationFlag(true);
    }
  }

  function handleCurrentValue(e) {
    e.preventDefault();

    setCurrentValue(
      currentValue === 0 ? e.target.value : currentValue + e.target.value
    );

    if (operationFlag) setOperationFlag(false);
  }

  function handleOperatorInput(e) {
    e.preventDefault();

    if (currentValue !== 0) setTotalValue(+currentValue);

    setCurrentValue(0);

    if (!operationFlag) handleTotalValue(e);

    setOperatorInput(e.target.value);

    if (operatorInput === "%") handleTotalValue(e);
  }

  function handleReset(e) {
    e.preventDefault();
    setCurrentValue(0);
    setTotalValue(0);
    setOperatorInput(null);
    setOperationFlag(false);
  }

  function handleAbsolute(e) {
    e.preventDefault();

    if (totalValue > currentValue || totalValue !== 0)
      setTotalValue(-totalValue);
    else setCurrentValue(-currentValue);
  }
  return (
    <div>
      <Calculator>
        <Display
          onHandleTotalValue={handleTotalValue}
          totalValue={totalValue}
          currentValue={currentValue}
          operationFlag={operationFlag}
        >
          <KeysPanel
            onHandleCurrentValue={handleCurrentValue}
            onHandleOperatorInput={handleOperatorInput}
            onHandleReset={handleReset}
            onHandleAbsolute={handleAbsolute}
          />
        </Display>
      </Calculator>
    </div>
  );
}
