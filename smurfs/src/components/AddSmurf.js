import React, { useState, useContext } from 'react';
import { SmurfContext } from '../contexts/SmurfContext';

const AddSmurf = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [height, setHeight] = useState('');

    const [smurfs, addSmurf] = useContext(SmurfContext); //calling the MovieContext

    const submitChange = (e) => {
        e.preventDefault();
        const id = new Date().getTime();
        addSmurf({name, age, height, id});
    }

    return (
        <form onSubmit={submitChange}>
            <div className="input">
                <input type="text" name="name" value={name} placeholder="name" onChange={ e => {setName(e.target.value)}} />
                <input type="text" name="age" value={age} placeholder="age" onChange={ e => {setAge(e.target.value)}} />
                <input type="text" name="height" value={height} placeholder="height" onChange={ e => {setHeight(e.target.value)}} />
            </div>
            <br />
            <div className="submit-btn">
            <   input type="submit" />
            </div>
        </form>
    )
}

export default AddSmurf;