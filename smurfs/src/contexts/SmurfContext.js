import React, { useState, createContext, useEffect } from "react";
import axios from "axios";

export const SmurfContext = createContext();

export const SmurfProvider = props => {
  const [smurfs, setSmurfs] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3333/smurfs").then(res => setSmurfs(res.data));
  }, []);

  const addSmurf = smurf => {
    console.log("Adding new smurf", smurf);
    axios.post("http://localhost:3333/smurfs", smurf)
        .then(res => setSmurfs([...smurfs, smurf]))
        .catch(e => console.log(e));
  };

  return (
    <SmurfContext.Provider value={[smurfs, addSmurf]}>
      {props.children}
    </SmurfContext.Provider>
  );
};
