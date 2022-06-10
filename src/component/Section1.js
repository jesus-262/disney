import React from "react";
import "../estilo/Section1.css";
function Section1({  texto }) {
  return (
    <>
      <div className="Section1">
             <h5>{texto}</h5>
            <div className="boton">Ver coleccion</div>
         
       
      </div>
    </>
  );
}
export default Section1;