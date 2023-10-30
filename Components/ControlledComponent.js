import React, {useState} from "react";
function ControlledComponent() {

    const [val, setVal] = useState("100");
  return (
    <div>
      <hr />
      <h2>controlled Component example</h2>
      <input type="text" value={val} onChange={(e)=> setVal(e.target.value)}/>
      <br />
    </div>
  );
}

export default ControlledComponent;