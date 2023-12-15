import React, {useEffect, useState} from 'react';


function PostApi() {
   const [name, setName] = useState("");
   const [username, setUsername] = useState("");
   const [email, setEmail] = useState("");

   useEffect(()=>{

  
   function saveData() {
    // console.warn({name,salary,age});
    let data = {name,username,email};

    fetch("https://dummy.restapiexample.com/api/v1/create",{
        method: "POST",
        headers:{
            'Accept': 'Application/json',
            'Content-Type': 'Application/json'
        },
        body:JSON.stringify(data)
    }).then((result)=>{
        // console.warn(result);
        result.json.then((resp)=>{
            console.warn(resp);
        })
    })
   }

  },[])

    return (
      <div><hr />
        <h1>Table data by POST API</h1>
        <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} /> Name<br /><br />
        <input type="text" value={username} onChange={(e)=>{setUsername(e.target.value)}} /> User Name<br /><br />
        <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} /> Email Id<br /><br />
        <button type='button' onClick={saveData}>Submit Data</button>
      </div>
    );
  }
  
  export default PostApi;
  