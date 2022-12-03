import React from 'react';


//Recibimos en las props la funcion incrementar
export const ShowIncrement = React.memo( ({ increment }) => {

    console.log(' Me volví a generar :( ');

// Boton para incrementar de 5 en 5
    return (
        <button
            className="btn btn-primary"
            onClick={() => {
                increment( 5 );
            }}
        >
            Incrementar
        </button>
    )
})
