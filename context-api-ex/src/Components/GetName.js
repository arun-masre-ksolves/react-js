import React, { useContext } from 'react';
import { appContext } from '../App';

function GetName() {
    const {GetName} = useContext(appContext);
    console.log("name", GetName)
  return (
    <div>
      <h1>{GetName}</h1>
    </div>
  );
}

export default GetName;
