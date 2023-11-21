import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Table from 'react-bootstrap/Table';

function MapLoop() {
  const list = [
    {
      name: "arun",
      email: "arun@gmail.com",
      contact: 667,
      adress: [
        { city: "indore", pin: 333 },
        { city: "ujjain", pin: 664374 },
        { city: "dewas", pin: 66347 },
      ],
    },
    {
      name: "ajay",
      email: "ajay@gmail.com",
      contact: 333,
      adress: [
        { city: "indore", pin: 333 },
        { city: "ujjain", pin: 664374 },
        { city: "dewas", pin: 66347 },
      ],
    },
    {
      name: "anil",
      email: "anil@gmail.com",
      contact: 664374,
      adress: [
        { city: "indore", pin: 333 },
        { city: "ujjain", pin: 664374 },
        { city: "dewas", pin: 66347 },
      ],
    },
    {
      name: "navin",
      email: "navin@gmail.com",
      contact: 66347,
      adress: [
        { city: "indore", pin: 333 },
        { city: "ujjain", pin: 664374 },
        { city: "dewas", pin: 66347 },
      ],
    },
  ];
  // Map looping
  // list.map((item) =>{
  //     console.warn("my name is ", item);
  // })

  // simple for loop example
  // for (let i = 0; i < list.length; i++) {
  //     console.warn("my name is ", list[i])

  // }
  return (
    <div>
      <hr />
      <h1>Table in react</h1>
      <table border={2}>
        <tbody>
          <tr>
            <th>Name</th>
            <th>email</th>
            <th>contact</th>
            <th>adress</th>
          </tr>
          {list.map((item, i) => (
            <tr key={i}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.contact}</td>
              <td>
                <table border={6}>
                  <tbody>
                    {item.adress.map((data, i) => (
                      <tr key={i}>
                        <td>{data.city}</td>
                        <td>{data.pin}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MapLoop;
