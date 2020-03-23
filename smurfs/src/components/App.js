import React from "react";
import "./App.css";
import { SmurfProvider } from '../contexts/SmurfContext';
import Smurfs from './Smurfs';
import AddSmurf from './AddSmurf';


function App() {
  return (
    <SmurfProvider>
    <div className="App">     
      <h1>Smurfs</h1>
      <AddSmurf />
      <p></p>
      <Smurfs />
    </div>
    </SmurfProvider>
  );
  
}

export default App;
