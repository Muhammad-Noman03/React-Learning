import React, { useState } from "react";

function MyComponents() {
  const [name, setName] = useState("Guest");
  const [age, setAge] = useState(0);
  const [isEmployed, setEmployed] = useState(false);

  const updateName = () => {
    setName("Noman");
  };

  //   const updateAge = () => {
  //     setAge(21);
  //   };

  const incrementAge = () => {
    setAge(age + 2);
  };

  const toggleEmployedStatus = () => {
    setEmployed(!isEmployed);
  };

  return (
    <div>
      <p>Name: {name}</p>
      <button onClick={updateName}>Set Name</button>
      <p>Age: {age}</p>
      <button onClick={incrementAge}>Increment Age</button>
      <p>Is Employed: {isEmployed ? "Yes" : "No"}</p>
      <button onClick={toggleEmployedStatus}>Toggle Status</button>
    </div>
  );
}

export default MyComponents;
