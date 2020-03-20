import React, { useState, useContext } from "react";

const smurfs = () => {
    const [smurfs, addSmurf] = useContext();

    return (
        <div>
            {smurfs.map(smurf => (
                <Smurf name={smurf.name} age={smurf.age} height={smurf.height} key={smurf.id} />
            ))}
        </div>
    )
}

export default Smurfs;

