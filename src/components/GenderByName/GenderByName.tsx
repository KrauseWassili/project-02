//DRY - don't repeat yourself
//KISS - keep it simple stupid
//SOLID - 

import { useState } from "react";
import style from "./GenderByName.module.css";

export default function GenderByName() {
  const [displayedName, setDisplayedName] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
  const [probability, setProbability] = useState(0);
  const [credits, setCredits] = useState(0);

  async function getDataHandler() {
    if (name) {
      const res = await fetch(`https://api.genderapi.io/api/?name=${name}`);
      const data = await res.json();
      setGender(data.gender);
      setCountry(data.country);
      setProbability(data.probability);
      setCredits(data.remaining_credits);
    }
    setDisplayedName(name);
  }

  return (
    <div>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" onChange={(e) => setName(e.target.value)} />
      <button onClick={getDataHandler}>Get data</button>

      {displayedName ? (
        <ul className={style.list}>
          <li>{displayedName}</li>
          <li>{gender}</li>
          <li>{country}</li>
          <li>{probability}</li>
          <li>{credits}</li>
        </ul>
      ) : (
        <p>Enter the name!</p>
      )}
    </div>
  );
}
