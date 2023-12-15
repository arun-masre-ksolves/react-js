import React, {useContext} from 'react';
import { appContext } from '../App';
import ChildComponent from './ChildComponent';
import GetName from './GetName';
function ContextApi() {
  const {appColor} = useContext(appContext);
  console.log("appColor",appColor)
  return (
    <div>
      <h1 style={{color: appColor}}>contextApi example</h1>
      <ChildComponent/>
      <GetName/>
    </div>
  );
}

export default ContextApi;
