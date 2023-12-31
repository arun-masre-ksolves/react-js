import "./App.css";
import ContextApi from "./Components/ContextApi";
import { createContext, useState } from "react";

export const appContext = createContext();
function App() {
  const [color, setColor] = useState("green");
  const [name, setName] = useState("arun");
  return (
    <appContext.Provider value={{ appColor: color, getName: name  }}>
      <div className="App">
        <h1>app component</h1>
        <ContextApi />
      </div>
    </appContext.Provider>
  );
}

export default App;
