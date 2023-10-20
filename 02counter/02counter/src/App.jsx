import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);
  // let counter=15

  const addValue = () => {
    if (counter < 20) counter = counter + 1;
    else counter = counter + 0;

    setCounter(counter);
  };

  const removeValue = () => {
    if (counter > 0) setCounter(counter - 1);
    else setCounter(counter - 0);
  };

  return (
    <>
      <h2>Chai r react</h2>
      <h3>Counter value: {counter}</h3>

      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>Remove value</button>
    </>
  );
}

export default App;
