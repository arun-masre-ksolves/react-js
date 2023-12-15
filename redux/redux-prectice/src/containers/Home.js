import React from 'react';
import { useSelector } from 'react-redux';
function Home() {
    const users = useSelector((state)=> state.users);
    console.log(users);
  return (
    <div>
      <h1>Curd App</h1>
      <table>
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>

        </tbody>
      </table>

    </div>
  );
}

export default Home;
