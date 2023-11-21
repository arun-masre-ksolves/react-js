import React, {useContext} from 'react';
import { appContext } from '../App';

function ChildComponent() {
  const {appColor} = useContext(appContext);
  console.log("appColor",appColor)
  return (
    <div>
      <h1 style={{color: appColor}}>childComponent example</h1>
    </div>
  );
}

export default ChildComponent;