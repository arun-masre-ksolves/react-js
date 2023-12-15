import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


function Home() {
  const users = useSelector((state) => state.users);
  return (
    <div>
    <h1>User List</h1>
    <span className='p-2'><Link to='/create' className='btn btn-success my-3'>Create + </Link></span>
    <table className='table'>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {users.map((item, index)=> (
          <tr key={index}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>
              <button className='btn btn-sm btn-primary'>Edit</button>
              <button className='btn btn-sm btn-danger ms-2'>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
}

export default Home;
