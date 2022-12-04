import React from 'react'
import { Hijo } from './Hijo'
import { useState } from 'react';
import { useCallback } from 'react';

export const Padre = () => {

    const numeros = [2,4,6,8,10];
    const [valor, setValor] = useState(0);


    const incrementar = useCallback(
      ( num ) => {
        /*
            Se pone (viejoValor) => viejoValor + num por que
            tomamos el valor anterior del numero 
            que viene del hijo y lo sumamos con
            el valor del boton al que le dimos click
        */

        setValor( (viejoValor) => viejoValor + num );
      },
      [],
    );
    
    

    return (
        <div>
            <h1>Padre</h1>
            <p> Total: { valor } </p>

            <hr />

            {
                numeros.map( n => (
                    <Hijo 
                        key={ n }
                        numero={ n }
                        incrementar={ incrementar }
                    />
                ))
            }
            {/* <Hijo /> */}
        </div>
    )
}
