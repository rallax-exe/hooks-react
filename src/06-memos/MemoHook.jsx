import { useMemo, useState } from 'react';
import { useCounter } from '../hooks';


/*
    useMemo
*/

//Iteraciones de numeros
//heavyStuff = proceso pesado
const heavyStuff = ( iterationNumber = 100 ) => {
    for( let i = 0; i < iterationNumber; i++ ) {
        console.log('Ahí vamos...');
    }

    return `${ iterationNumber } iteraciones realizadas`;
}



export const MemoHook = () => {

    const { counter, increment } = useCounter( 4000 );
    const [ show, setShow ] = useState(true);

    /*
        La logica es muy parecida a lo que se hizo 
        en Memorize pero aqui vamos a memorizar
        el valor del heavyStuff para que cada vez
        que le demos click en el boton que cambia 
        el booleano no vuelva a ejecutar el heavyStuff,
        el useMemo solo ejecuta el heavyStuff si el counter
        que recibe como prop cambia.
        
        Se guarda el memo en memorizedValue, se escribe
        useMemo  se ejecuta la funcion con una funcion de
        flecha, donde recibe en las props el valor del counter,
`       useMemo esta pendiente si cambia el valor del [counter].
    */
    const memorizedValue = useMemo( () => heavyStuff(counter), [counter])

    return (
        <>
            <h1>Counter: <small>{ counter }</small>  </h1>
            <hr />

            <h4>{ memorizedValue }</h4>


            <button
                className="btn btn-primary"
                onClick={ () => increment() }
            >
                +1
            </button>

            <button
                className="btn btn-outline-primary"
                onClick={ () => setShow( !show )  }
            >
                Show/Hide { JSON.stringify(show) } 
            </button>
        
        </>
    )
}
