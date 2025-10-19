import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [secretNumber, setSecretNumber] = useState(3);
  // useState принимает начальное значение переменной состояния
  // возвращает кортеж (tuple), в котором на первом месте находится переменная состояния(state),
  // на втором месте - функция сеттер
  function handlePlus() {
    //setCount(count + 1);
    setCount((prev) => prev + 1);
  }
  function handleMinus() {
    setCount((prev) => prev - 1);
  }
  function handleClear() {
    setCount(0);
  }
  function finishGame() {
    setCount(0);
    setSecretNumber(Math.floor(Math.random() * 20 - 10));
    console.log(secretNumber);
  }
  if (count === secretNumber)
    return (
      <div>
        <p>Game is completed!</p>
        <button onClick={finishGame}>Start over</button>
      </div>
    );

  return (
    <div>
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
      {/* {count === secretNumber ? <div> Bingo</div>:null} */}
    </div>
  );
}

//создать кнопку минус 1
//создать кнопку Clear, которая бы сбрасывала каунтер на 0

//есть секретное число
//Если число совпадает, должно отображаться Bingo
