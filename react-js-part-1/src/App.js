import logo from './logo.svg';
import './App.css';
import { Component, Fragment, useState } from 'react';
import ClassComponent from './Components/ClassComponent';
import State from './Components/State';
import Props from './Components/Props';
import Onchange from './Components/Onchnage';
import HideShowButton from './Components/HideShowButton';
import Form from './Components/Form';
import IfElse from './Components/IfElse';
import Validation from './Components/Validation';
import ComponentDidMount1 from './Components/ComponentDidMount1';
import ComponantDidUpdateEx from './Components/ComponantDidUpdateEx';
import ShouldComponantUpdateEx from './Components/ShouldComponantUpdateEx';
import ComponentWillUnmountEx from './Components/ComponentWillUnmountEx';
import MapLoop from './Components/MapLoop';
import Fragments from './Components/Fragments';
import ChildToPerent from './Components/ChildToPerent';
import PureComponentEx from './Components/PureComponentEx';
import UseMemoex from './Components/UseMemoEx';
import RefEx from './Components/RefEx';
import RefEx1 from './Components/RefEx1';
import ControlledComponent from './Components/ControlledComponent';
import UnControlledComponent from './Components/UnControlledComponent';
// import HOCex from './Components/HOCex';
import { HOCex, Counter } from "./Components/HOCex";
import PreviousState from './Components/PreviousState';

function App() {
  const [name, setName] = useState('anil');

  function getData (data) {
    alert (data);
  };


  return (
    <div className="App">
      <State/>
      <Props name="arun"/>
      <Props name="arun" contact="8789878"/>
      <Onchange/>
      <HideShowButton/>
      <Form/>
      <IfElse/>
      <Validation/>
      <ClassComponent/>
      {/* <ClassComponent name = {name}/> */}
      {/* <button onClick={()=>setName("arun")}>change name</button> */}
      {/* <ComponentDidMount1/> */}
      <ComponantDidUpdateEx/>
      <ShouldComponantUpdateEx/>
      <ComponentWillUnmountEx/>
      <MapLoop/>
      <hr />
      <h1>Fragment example</h1>
      <table border={2}>
        <tbody>
          <tr>
          <Fragments/>
          </tr>
        </tbody>
      </table>
      <ChildToPerent alert={getData}/>
      <PureComponentEx/>
      <UseMemoex/>
      <RefEx/>
      <RefEx1/>
      <ControlledComponent/>
      <UnControlledComponent/>
      <HOCex/>
      <Counter/>
      <PreviousState/>
    </div>
  );
}

export default App;
