import "./App.css";
import Hello from "./components/Hello/Hello";
import PersonalGreeting from "./components/PersonalGreeting/PersonalGreeting";
import Goodbye from "./components/Goodbye/Goodbye";
import ProductCard from "./components/ProductCard/ProductCard";
import Tool from "./components/Tool/Tool";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import Counter from "./components/counter/Counter";
import WeightCalculator from "./components/WeightCalculator/WeightCalculator";
import SpaceMissionForm from "./components/SpaceMissionForm/SpaceMissionForm";

function App() {
  const personalInfo = {
    avatar: "https://s3.stroi-news.ru/img/kartinki-s-personazhami-4.jpg",
    name: "Jerry",
    description: "The Mous from cartoon",
  };
  const secretNumber = 3;
  return (
    <>
      <p>Hello!</p>

      <SpaceMissionForm />

      <Counter />

      <WeightCalculator />

      <Tool />
      <Hello />
      <Goodbye />
      <PersonalGreeting name="Wassili" />
      <PersonalGreeting name="John" />
      <ProductCard
        title="Opaeroo Paarungsspielzeug für Hunde"
        image="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT6dCWJhg_NWxlD6zuYn_a0CDMkebqD3IWtGcPHu6ZOhKs5KmI9eb9c6W41D6RlFy1PzLVs8pTI-JJDLThOPMEAbQ99Pg6ve69oNvUt2q6acOtAv5sXHBjIKvCMBLNNfxjN5sNTGIm3NQ&usqp=CAc"
        price={86.99}
      />

      <ProfileCard {...personalInfo} />
    </>
  );
}

export default App;

//Деструктуризация объекта
