import React, {useRef, useState} from "react";
function UnControlledComponent() {

    let inputRef = useRef(null);
    let inputRef1 = useRef(null);

    function SubmitForm (e) {
       e.preventDefault();
       console.warn(inputRef.current.value);
       console.warn(inputRef1.current.value);
    }
  return (
    <div>
      <hr />
      <h2>UnControlled Component example</h2>
      <form onSubmit={SubmitForm}>
      <input type="text" ref={inputRef}/>
      <input type="text" ref={inputRef1}  />
      <button type="submit">Submit</button>
      </form>
      <br />
    </div>
  );
}

export default UnControlledComponent;