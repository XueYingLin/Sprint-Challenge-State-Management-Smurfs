import React, { useState, useContext } from "react";
import Smurf from './Smurf';
import { SmurfContext } from '../contexts/SmurfContext'; //consume that we have access to the value

const Smurfs = () => {
    const [smurfs, addSmurf] = useContext( SmurfContext );

    return (
        <div>
            {smurfs.map(smurf => (
                <Smurf name={smurf.name} age={smurf.age} height={smurf.height} key={smurf.id} />
            ))}
        </div>
    )
}

export default Smurfs;

