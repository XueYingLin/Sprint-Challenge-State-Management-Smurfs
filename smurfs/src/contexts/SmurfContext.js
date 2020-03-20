import React, { createContext } from 'react';

export const SmurfContext = createContext();

export const SmurfProvider = (props) => {

    return (
        <SmurfContext.Provider value={[smurfs, addSmurf]}>
            {props.children}
        </SmurfContext.Provider>
    )
}