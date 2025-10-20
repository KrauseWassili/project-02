import { useEffect, useState } from "react";

export default function EffectExample() {
  const [count, setCount] = useState(0);
  const [random, setRandom] = useState(10);

  function generateRandom() {
    setRandom(Math.random() * 10);
  }

  function handlePlus() {
    setCount((prev) => prev + 1);
  }

  useEffect(() => {
    //срабатывает при первом рендере, при любом изменении
    console.log("Use effect 1, no array");
  }); //Callback

  useEffect(() => {
    //срабатывает только при первом рендере
    console.log("Use effect 2, empty dependencies array");
  }, []);
  
  useEffect(() => {
    //срабатывает только при изменении random
    console.log("Use effect 4, with dependency");
  }, [random]);

  return (
    <div>
      <h2>EffectExample</h2>
      <p>Count: {count}</p>
      <p>Random: {random}</p>
      <button type="button" onClick={handlePlus}>
        +1
      </button>
      <button type="button" onClick={generateRandom}>
        Generate random
      </button>
    </div>
  );
}

//Component lifecycle - жизненный цикл
//1. mount - рождение - устанавливается на экране первый раз - первый рендер
//2. update - когда компонент изменяется
//3. unmount - когда перестает отображаться на экране
