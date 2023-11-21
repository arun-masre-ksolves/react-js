import React, { useState } from "react";

function HOCex() {
  return (
    <div>
      <hr />
      <h2>High Order Component Example</h2>
      <HOCRed cmp={Counter}/>
      <HOCGreen cmp={Counter}/>
      <HOCBlue cmp={Counter}/>
      <br />
    </div>
  );
}

function HOCRed (props) {
  return <h2 style={{backgroundColor:'red', width:'100px'}}>red<props.cmp/></h2>
}

function HOCGreen (props) {
  return <h2 style={{backgroundColor:'green', width:'100px'}}>green<props.cmp/></h2>
}

function HOCBlue (props) {
  return <h2 style={{backgroundColor:'blue', width:'100px'}}>blue<props.cmp/></h2>
}

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* <h2>Counter component</h2> */}
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <br />
    </div>
  );
}

export { HOCex, Counter };
