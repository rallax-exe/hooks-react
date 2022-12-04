import React from 'react';

/*
    Como recibimos una funcion 
    no importa si  memorizamos 
    el componente, se seguira
    renderizando cada vez 
    que la funcion se dispare,
    se necesita memorizar
    el componente y la funcion
    useMemo y useCallback
*/

export const Hijo = React.memo(({ numero, incrementar }) => {

    console.log('  Me volví a generar :(  ');

    return (
        <button
            className="btn btn-primary mr-3"
            onClick={ () => incrementar( numero ) }
        >
            { numero }
        </button>
    )
})
