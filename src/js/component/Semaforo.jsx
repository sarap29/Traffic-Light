import React, { useState } from 'react';


const Semaforo = () => {

    const [ color, setColor] = useState("rojo");

	return (

        <div className="traffic container">

           <div onClick={() => setColor("rojo")} 
            className={"rojo" + (color === "rojo" ? " sombra" : "")}></div>

            <div onClick={() => setColor("amarillo")} 
            className={"amarillo" + (color === "amarillo" ? " sombra" : "")}></div>

            <div onClick={() => setColor("verde")} 
            className={"verde" + (color === "verde" ? " sombra" : "")}></div>

         </div>   


	
	);
};

export default Semaforo;