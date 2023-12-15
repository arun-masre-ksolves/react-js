
import { useState } from "react";

function UseStateHook() {
  const value = 0;
  const [counter, setCounter] = useState(value);
  const decrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      alert("your value is less then 0");
    }
  };

  return (
    <div className="App">
      <h1>{counter}</h1>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          decrement();
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          setCounter(value);
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default UseStateHook;
