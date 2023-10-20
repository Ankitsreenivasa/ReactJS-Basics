import { useState } from "react";

function App() {
  const [color, setColor] = useState("purple");

  return (
    <>
      <div className="w-full h-screen" style={{ backgroundColor: color }}></div>
      <div className="fixed flex flex-wrap justify-center ins bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-2xl bg-slate-50 p-4 border rounded-full text-xl">
          <div className="">
            <button className="border border-none rounded-full shadow-blue-400 shadow px-4 py-2 mx-3" style={{backgroundColor: "red"}} onClick={() => setColor("red")}>Red</button>
            <button className="border border-none rounded-full shadow-blue-400 shadow px-4 py-2 mx-3 text-white" style={{backgroundColor: "blue"}} onClick={() => setColor("blue")}>Blue</button>
            <button className="border border-none rounded-full shadow-blue-400 shadow px-4 py-2 mx-3" style={{backgroundColor: "green"}} onClick={() => setColor("green")}>Green</button>
            <button className="border border-none rounded-full shadow-blue-400 shadow px-4 py-2 mx-3" style={{backgroundColor: "yellow"}} onClick={() => setColor("yellow")}>Yellow</button>
            <button className="border border-none rounded-full shadow-blue-400 shadow px-4 py-2 mx-3 text-white" style={{backgroundColor: "black"}} onClick={() => setColor("black")}>Black</button>
            <button className="border border-none rounded-full shadow-blue-400 shadow px-4 py-2 mx-3" style={{backgroundColor: "white"}} onClick={() => setColor("white")}>White</button>
            <button className="border border-none rounded-full shadow-blue-400 shadow px-4 py-2 mx-3" style={{backgroundColor: "pink"}} onClick={() => setColor("pink")}>Pink</button>
            <button className="border border-none rounded-full shadow-blue-400 shadow px-4 py-2 mx-3" style={{backgroundColor: "grey"}} onClick={() => setColor("grey")}>Grey</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
