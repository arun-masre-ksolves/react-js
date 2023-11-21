import React, {useRef } from "react";
function RefEx1() {
    let inputRef = useRef('');

    function HandleInput () {
        // console.log(inputRef);
        inputRef.current.value= "100"
        inputRef.current.focus();
        inputRef.current.style.color="red";
        // inputRef.current.style.display="none";

    }
  return (
    <div>
      <hr />
      <h2>use Ref in function Component</h2>
      <input type="text" ref={inputRef}/>
      <button onClick={HandleInput}>ref example</button>
    </div>
  );
}

export default RefEx1;
