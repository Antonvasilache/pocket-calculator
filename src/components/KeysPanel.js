export function KeysPanel({
  onHandleCurrentValue,
  onHandleOperatorInput,
  onHandleReset,
  onHandleAbsolute,
}) {
  return (
    <div className="calculator__keys">
      <button onClick={onHandleReset} className="calculator__key">
        AC
      </button>
      <button onClick={onHandleAbsolute} className="calculator__key">
        +/-
      </button>
      <button
        value="%"
        onClick={onHandleOperatorInput}
        className="calculator__key"
      >
        %
      </button>
      <button
        value="÷"
        onClick={onHandleOperatorInput}
        className="calculator__key operator"
      >
        ÷
      </button>
      <button
        value="1"
        onClick={onHandleCurrentValue}
        className="calculator__key"
      >
        1
      </button>
      <button
        value="2"
        onClick={onHandleCurrentValue}
        className="calculator__key"
      >
        2
      </button>
      <button
        value="3"
        onClick={onHandleCurrentValue}
        className="calculator__key"
      >
        3
      </button>

      <button
        value="x"
        onClick={onHandleOperatorInput}
        className="calculator__key operator"
      >
        x
      </button>

      <button
        value="4"
        onClick={onHandleCurrentValue}
        className="calculator__key"
      >
        4
      </button>
      <button
        value="5"
        onClick={onHandleCurrentValue}
        className="calculator__key"
      >
        5
      </button>
      <button
        value="6"
        onClick={onHandleCurrentValue}
        className="calculator__key"
      >
        6
      </button>

      <button
        value="-"
        onClick={onHandleOperatorInput}
        className="calculator__key operator"
      >
        -
      </button>

      <button
        value="7"
        onClick={onHandleCurrentValue}
        className="calculator__key"
      >
        7
      </button>
      <button
        value="8"
        onClick={onHandleCurrentValue}
        className="calculator__key"
      >
        8
      </button>
      <button
        value="9"
        onClick={onHandleCurrentValue}
        className="calculator__key"
      >
        9
      </button>
      <button
        value="+"
        onClick={onHandleOperatorInput}
        className="calculator__key operator"
      >
        +
      </button>

      <button
        value="0"
        onClick={onHandleCurrentValue}
        className="calculator__key zero"
      >
        0
      </button>
      <button
        value="."
        onClick={onHandleCurrentValue}
        className="calculator__key"
      >
        .
      </button>
      <button
        value="="
        onClick={onHandleOperatorInput}
        className="calculator__key operator"
      >
        =
      </button>
    </div>
  );
}
