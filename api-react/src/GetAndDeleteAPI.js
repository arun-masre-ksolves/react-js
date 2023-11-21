import React, { useEffect, useState } from "react";

function GetAndDeleteAPI() {
  const [data, setData] = useState([]);
  const [id, setId] = useState("");
  const [name, setName] = useState([]);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    getList();
  }, []);
  // console.log(data);

  function getList() {
    fetch("https://jsonplaceholder.typicode.com/users").then((result) => {
      result.json().then((resp) => {
        // console.warn(resp);
        setData(resp);
        setId(resp[0].id);
        setName(resp[0].name);
        setUsername(resp[0].username);
        setEmail(resp[0].email);
      });
    });
  }

  function deleteData(id) {
    // alert(id);
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "DELETE",
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp);
        getList();
      });
    });
  }

  // updateData data

  function updateData(id){
    console.warn(data[id-1]);
    const i = data[id-1];
    setId(i.id);
    setName(i.name);
    setUsername(i.username);
    setEmail(i.email);
    
  }

  function updateUser () {
    console.warn(id, name, username, email)
  }
  
  return (
    <div>
      <h1>Table data by GET Api</h1>
      <table border={4}>
        <tbody>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>User Name</td>
            <td>Email</td>

          </tr>
          {data.map((item, i) => (
            <tr key={i}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.username}</td>
              <td>{item.email}</td>
              <td>
                <button onClick={() => deleteData(item.id)}>Delete</button> <span> </span>
                <button onClick={()=>updateData(item.id)}>Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <form action=""> <br />
        <input type="text" value={id} onChange={(e)=>{setId(e.target.value)}}/> <br /><br />
        <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/> <br /><br />
        <input type="text" value={username} onChange={(e)=>{setUsername(e.target.value)}}/> <br /><br />
        <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}}/> <br /><br />
        {/* <input type="text" /> <br /><br /> */}
        <button onClick={()=>updateUser}>Update user</button><br />
      </form>
    </div>
  );
}

export default GetAndDeleteAPI;
