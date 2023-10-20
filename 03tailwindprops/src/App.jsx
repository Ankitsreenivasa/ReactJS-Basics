import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/card";

function App() {
  const [count, setCount] = useState(0);

  let myObj = {
    name: "Ankit",
    age: 19,
  };

  let newArr = [0, 1, 2, 3];

  return (
    <>
      <h1 className="text-black bg-green-400 rounded-xl px-10">
        Tailwind Test
      </h1>

      <Card username="Poma" bTxt="XUV700" />

      <Card username="Adigas" />
    </>
  );
}

export default App;
