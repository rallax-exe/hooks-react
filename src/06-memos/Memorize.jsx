import { useState } from 'react';
import { useCounter } from '../hooks'
import { Small } from './Small';

export const Memorize = () => {

    //Creamos un contador con el Hook useCounter
    const { counter, increment } = useCounter( 10 );
    //Se crea un estado para guardar un booleano
    const [ show, setShow ] = useState(true)

    return (
        <>
            {/*Se crea un componente y se le manda el contador para
            que lo imprima, solo es para el ejemplo no tiene mucha ciencia*/}
            <h1>Counter: <Small value={ counter } />  </h1>
            <hr />

            {/*Boton que incrementa el counter*/}
            <button
                className="btn btn-primary"
                onClick={ () => increment() }
            >
                +1
            </button>

            {/*Boton que cambia el estado del booleano a false/true*/}
            <button
                className="btn btn-outline-primary"
                onClick={ () => setShow( !show )  }
            >
                {/*De esta forma podemos ver el valor del booleano en HTML*/}
                Show/Hide { JSON.stringify(show) } 
            </button>
        
        </>
    )
}
