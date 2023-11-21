import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';

function Axios() {
    const [userData, setUserData] = useState([]);
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response)=>{
            console.log(response)
            setUserData(response.data)
        })
    }, []);
  return (
    <div>
      {/* <h1>axios example</h1> */}
      {/* {
        userData.map((data, i)=>{
            return(
                <li key={i}>{data.name}</li>
            )
        })
      } */}
    </div>
  );
}

export default Axios;
