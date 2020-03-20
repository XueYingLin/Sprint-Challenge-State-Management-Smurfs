import React from "react";

const Smurf = ({name, age, height, id}) => {
    return (
        <div>
            <b>{name}</b> - {age} years old - {height}
        </div>
    )
}
export default Smurf;