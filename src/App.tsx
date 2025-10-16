import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Hello from "./components/Hello/Hello";
import PersonalGreeting from "./components/PersonalGreeting/PersonalGreeting";
import Goodbye from "./components/Goodbye/Goodbye";
import ProductCard from "./components/ProductCard/ProductCard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>Hello!</p>
      <Hello />
      <Goodbye />
      <PersonalGreeting name="Wassili" />
      <PersonalGreeting name="John" />
      <ProductCard 
      title="Opaeroo Paarungsspielzeug für Hunde"
      image="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT6dCWJhg_NWxlD6zuYn_a0CDMkebqD3IWtGcPHu6ZOhKs5KmI9eb9c6W41D6RlFy1PzLVs8pTI-JJDLThOPMEAbQ99Pg6ve69oNvUt2q6acOtAv5sXHBjIKvCMBLNNfxjN5sNTGIm3NQ&usqp=CAc"
      price={86.99}
      />
    </>
  );
}

export default App;

//Деструктуризация объекта
