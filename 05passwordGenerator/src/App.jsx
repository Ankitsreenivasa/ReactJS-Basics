import { useState, useCallback, forwardRef } from "react";
import "./App.css";

function App() {
  const [length, setlength] = useState(8);
  const [numAwllowed, setnumAllowed] = useState(false);
  const [charAwllowed, setcharAllowed] = useState(false);
  const [password, setpassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numAwllowed) str += "0123456789";
    if (charAwllowed) str += "!@#$%^&*()_+-=[]{}~`";

    for (let index = 1; index <= array.length; index++) {
      let char = Math.floor(Math.random() * str.length + 1);

      pass = str.charAt(char);
    }

    setpassword();
  }, [setlength, setnumAllowed, setcharAllowed, setpassword]);

  return (
    <>
      <h1 className="text-2xl text-center text-blue-500">Password Generator</h1>

      <div className="flex justify-center text-center">
        <div className="bg-gray-700 w-1/3 p-5 my-5 border-none rounded-lg">
          <h3 className="text-xl my-3">Generator</h3>
          <div className="my-4 mt-8">
            <input
              type="text"
              name="Password"
              id=""
              placeholder="Password"
              value={password}
              className="border-none rounded-l-lg px-8 py-2 text-blue-500 "
            />
            <button className="bg-orange-500 py-2 px-2 rounded-r-lg">
              Copy
            </button>
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col gap-3 mt-5 mb-2">
              <input
                type="range"
                min={6}
                max={50}
                value={length}
                onChange={(e) => {
                  setlength(e.target.value);
                }}
                id=""
                className="cursor-pointer"
              />
              <label>Length: {length}</label>
            </div>
            <div className="flex flex-col gap-4 mt-5 ml-5 mb-2">
              <input
                type="checkbox"
                defaultChecked={numAwllowed}
                id=""
                onChange={() => {
                  setnumAllowed((prev) => !prev);
                }}
              />
              <label>Numbers</label>
            </div>
            <div className="flex flex-col gap-4 mt-5 ml-5 mb-2">
              <input
                type="checkbox"
                defaultChecked={charAwllowed}
                id=""
                onChange={() => {
                  setnumAllowed((prev) => !prev);
                }}
              />
              <label>Characters</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
