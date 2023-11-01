import React from "react";

const Card = ({name, courseName}) =>{
    return(
        <div>
            <h3> Perfecto, {name}</h3>
            <h4>Estás pendiente de la inscripción a {courseName}</h4>
        </div>
    )
}

export default Card;