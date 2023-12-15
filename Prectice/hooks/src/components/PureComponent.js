
import React,{ useMemo, useState } from "react";

function PureComponent() {
  const value = 0;
  const [counter, setCounter] = useState(value);
  const decrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
    //   alert("your value is less then 0");
      console.log("less then 0")
    }
  };
 
  const PureComponentex = useMemo(() => {
    let a= 10;
    console.log("a=10")
    return a;
    })

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
      <button onClick={()=>PureComponentex}>
        not update
      </button>
    </div>
  );
}

export default PureComponent;
