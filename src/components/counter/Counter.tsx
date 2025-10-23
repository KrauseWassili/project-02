import useCounters from "./useCounters";

export default function Counter() {
  const {
    count,
    secretNumber,
    finishGame,
    handleClear,
    handleMinus,
    handlePlus,
  } = useCounters(10);

  if (count === secretNumber)
    return (
      <div>
        Game is completed!
        <button onClick={finishGame}>Start over</button>
      </div>
    );

  return (
    <div>
      {/* {count === secretNumber ? <div>Bingo</div> : null} */}
      <button type="button" onClick={handleMinus}>
        -
      </button>
      Counter: {count}
      <button type="button" onClick={handlePlus}>
        +
      </button>
      <button type="button" onClick={handleClear}>
        Clear
      </button>
    </div>
  );
}
