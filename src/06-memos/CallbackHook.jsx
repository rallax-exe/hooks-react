import { useCallback, useEffect, useState } from 'react';
import { ShowIncrement } from './ShowIncrement';


/*
  useCallback sirve para memorizar funciones
*/

export const CallbackHook = () => {

    /*
      Un useState para hacer un counter sencillo
    */
    const [counter, setCounter] = useState( 10 );

    const incrementFather = useCallback(
      /* Recibe la prop del ShowIncrement que le dice en cuanto
      debe de incrementar */
      (value) => {
        setCounter( (counter) => counter + value );
      },
      [],
    );

    //Cuando cambia la funcion del incrementarFather
    useEffect(() => {
      // incrementFather();
    }, [incrementFather])
    
    
    // const incrementFather = () => {
    //     setCounter( counter + 1);
    // }


    return (
        <>
            <h1>useCallback Hook: { counter } </h1>
            <hr />

            <ShowIncrement increment={ incrementFather } />
        </>
    )
}
