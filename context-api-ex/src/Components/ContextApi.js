import React, {useContext} from 'react';
import { appContext } from '../App';
import ChildComponent from './ChildComponent';
function ContextApi() {
  const {appColor} = useContext(appContext);
  console.log("appColor",appColor)
  return (
    <div>
      <h1 style={{color: appColor}}>contextApi example</h1>
      <ChildComponent/>
    </div>
  );
}

export default ContextApi;
