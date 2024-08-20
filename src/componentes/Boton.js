import React from "react";
import '../hojas-de-estilo/Boton.css';
function Boton(props) {

  const esOperador = valor => {
    return isNaN(valor)/*si no es un numero*/ && (valor !== '.') && (valor!=='='); 
  }
    return( 
        <div className={`boton-contenedor ${esOperador(props.children)?'operador' : null}`}
        onClick={() => props.manejarClic(props.children)}>
          {props.children}
        </div>
    );
}

export default Boton;