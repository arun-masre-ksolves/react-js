
// import React from 'react';
import React, { useState } from 'react';


function Validation() {
    // let name = "Arun";
    // const [name, setData] = useState("anil"); //anil is default value 
    const [userName, setUserName] = useState("");
    const [passName, setPassName] = useState("");
    const [userErr, setUserErr] = useState(false);
    const [passErr, setPassErr] = useState(false);
    function submitData (e) {
      if(userName.length <= 3 && passName.length <= 3){
        alert("please enter geater then 3 values");
      }
      else{
        alert("Login successfullty");
      }
        e.preventDefault();
    }

    function userHandel(e){
        let val = e.target.value;
        // console.warn(val);
        if (val.length <=3 ) {
          // console.warn("invalid")
            setUserErr(true);
        }
        else {
          setUserErr(false);
        }
        setUserName(val)
    }

    function passwordHandel(e){
        let pass = e.target.value;
        if (pass.length <= 3) {
          setPassErr(true);
        }
        else {
          setPassErr(false);
        }
        setPassName(pass);
    }


    


  return (
    <div className="App">
      <p>login page validation by validation file</p>
      <h1>Login Page</h1>
      <form onSubmit={submitData}>
      <input type="text" onChange={userHandel}/> {userErr? <span>please enter geater then 3 value</span>:""}
      <br/><br/>
      <input type="password" onChange={passwordHandel}/> {passErr? <span>please enter geater then 4 value</span>: ""}
      <br /><br />
      <input type="submit" value="Login"/>
      </form><hr/>
    </div>
  );
}

export default Validation;