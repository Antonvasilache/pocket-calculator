export function Display({
  children,
  onHandleTotalValue,
  totalValue,
  currentValue,
  operationFlag,
}) {
  return (
    <form onSubmit={onHandleTotalValue}>
      <input
        className="calculator__display"
        type="text"
        placeholder=""
        readOnly
        value={
          operationFlag
            ? totalValue
            : currentValue !== ""
            ? currentValue
            : totalValue
        }
      />
      {children}
    </form>
  );
}
