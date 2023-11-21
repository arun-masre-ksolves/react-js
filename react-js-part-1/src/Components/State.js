
import React from 'react';
import { useState } from 'react';


function State() {
    // let name = "Arun";
    // const [name, setData] = useState("anil"); //anil is default value 
    const [name, setData] = useState(0);
    function updateName () 
    {
      // name = "anil";
      // alert(name)
      // setData("varun");
        
        setData(name+1);
    }

  return (
    <div className="App">
      <hr/>
      <h1>{name}</h1>
      <button onClick={updateName}>Update Name</button>
    </div>
  );
}

export default State;