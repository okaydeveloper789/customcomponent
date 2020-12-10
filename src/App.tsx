import React from "react";
import "./styles/App.scss";
import Pilot from "./components/pilot/Pilot";
import Survey from "./components/survey/Survey";

function App() {  
  return (
    <div className="App">
      <div className="section">
        <div style={{ maxWidth: 600 }} className="container">
          <Pilot />
          <div>
            <Survey/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
