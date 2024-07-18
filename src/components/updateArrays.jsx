import React, { useState } from "react";

function MyComponents() {
  const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);

  function handleAddFoods() {
    const newFood = document.getElementById("foodInput").value;
    document.getElementById("foodInput").value = "";

    setFoods((f) => [...f, newFood]);
  }
  function handleRemoveFoods(index) {
    setFoods(foods.filter((_, i) => i !== index));
    console.log(setFoods);
  }

  return (
    <div>
      <h2>List of Foods</h2>
      <ul>
        {foods.map((food, index) => (
          <li key={index} onClick={() => handleRemoveFoods(index)}>
            {food}
          </li>
        ))}
      </ul>
      <input type="text" id="foodInput" placeholder="Enter food Name" />
      <button onClick={handleAddFoods}>Add Food</button>
    </div>
  );
}
export default MyComponents;
