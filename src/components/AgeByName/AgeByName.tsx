import { useState } from "react";

export default function AgeByName() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  //   useEffect(() => {
  //     console.log("Call");
  //   }, [name]);

  function handleFetchAge() {
    fetchAge();
  }

  async function fetchAge() {
    const res = await fetch(`https://api.agify.io/?name=${name}`);
    const data = await res.json();
    setAge(data.age);
  }

  return (
    <div>
      AgeByName
      <p>
        Age of {name} is {age}
      </p>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="button" onClick={handleFetchAge}>
        Get Age By Name
      </button>
    </div>
  );
}