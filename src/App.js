import { useState } from "react";

function App() {
  const [pepperoni, setPepperoni] = useState(false)

  function handlePepproniChange() {
    setPepperoni(!pepperoni)
  }

  return (
    <div>
      <h1>Select Pizza Toppings</h1>
      <input
        type="checkbox"
        id="pepperoni"
        checked={pepperoni}
        aria-checked={false}
        onChange={handlePepproniChange}
      />
      <label htmlFor="pepperoni">Add pepperoni</label>
      <h2>Your Toppings:</h2>
      <ul>
        <li>Cheese</li>
        {pepperoni ? <li>Pepperoni</li> : null}
      </ul>
    </div>
  );
}

export default App;
