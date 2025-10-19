import { useState } from "react";

export default function SpaceMissionForm() {
  const [astronautName, setAstronautName] = useState<string>("");
  const [planetName, setPlanetName] = useState<string>("Mars");
  return (
    <div>
      <label htmlFor="astronautName">Astronaut name </label>
      <input
        type="text"
        id="astronautName"
        value={astronautName}
        onChange={(e) => setAstronautName(e.target.value)}
      />
      <label htmlFor="planetName"> Planet name </label>
      <select name="planetName" id="astronautName" onChange={(e)=>setPlanetName(e.target.value)}>
        <option value="Mars">Mars</option>
        <option value="Venus">Venus</option>
        <option value="Jupiter">Jupiter</option>
        <option value="Saturn">Saturn</option>
      </select>
      <h3>Our heroes:</h3>

      {astronautName === "" ? (
        <p>Please enter your name to begin your mission.</p>
      ) : (
        <p>
          Astronaut {astronautName} is headed to {planetName}!
        </p>
      )}
    </div>
  );
}
