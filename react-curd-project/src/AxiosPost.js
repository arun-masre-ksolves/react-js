import axios from "axios";
import React, { useEffect, useState } from "react";

function AxiosPost() {
  const data = { name: "" };
  const [inputData, setInputData] = useState(data);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      console.log(response);
      setUserData(response.data);
    });
  }, []);

  const handleData = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    axios
      .post("https://jsonplaceholder.typicode.com/users", inputData)
      .then((response) => {
        console.log(response);
        setUserData([...userData, response.data]);
        setInputData(data);
      });
  };

  const handleUpdate = (id) => {
    axios
      .put(`https://jsonplaceholder.typicode.com/users/${id}`, inputData)
      .then((response) => {
        console.log(response);
        // Update the userData state with the updated data
        setUserData(
          userData.map((user) => (user.id === id ? response.data : user))
        );
        setInputData(data);
      });
  };

  const handleDelete = (id) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(() => {
        console.log(`User with ID ${id} deleted.`);
        // Remove the user from the userData state
        setUserData(userData.filter((user) => user.id !== id));
      });
  };


  console.log(userData);
  return (
    <div className="form-data">
      <hr />
      <h1 className="heading">Axios Post Api</h1>
      {/* <label className="lable-filed">Id</label>
      <input label='id' className="inputname-form" type="text" name="id" value={inputData.id} onChange={handleData}/> */}

      <label className="lable-filed">Name</label>
      <input className="inputname-form" type="text" name="name" value={inputData.name} onChange={handleData}/>

      <label className="lable-filed">username</label>
      <input className="inputname-form" type="text" name="username" value={inputData.username} onChange={handleData}/>

      <label className="lable-filed">Email</label>
      <input className="inputname-form" type="text" name="email" value={inputData.email} onChange={handleData}/>

      <button className="submit-btn" onClick={handleSubmit}>Submit</button>
      <button className="update-btn" onClick={() => handleUpdate(2)}>Update</button>
      
      <div className="list-item">
        <table className="table-data" border={2}>
          <tbody>
            <tr>
              <th className="table-item">Id</th>
              <th className="table-item">Name</th>
              <th className="table-item">userName</th>
              <th className="table-item">Email</th>
              <th className="table-item" colSpan={2}>Action</th>
            </tr>
            {userData.map((item, i) => (
              <tr key={i}>
                <td className="item-value">{item.id}</td>
                <td className="item-value">{item.name}</td>
                <td className="item-value">{item.username}</td>
                <td className="item-value">{item.email}</td>
                <td className="item-value"><button onClick={()=>handleDelete(item.id)}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <hr />
    </div>
  );
}

export default AxiosPost;
