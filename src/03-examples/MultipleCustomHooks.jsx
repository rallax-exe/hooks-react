

import { useCounter, useFetch } from '../hooks';
import { LoadingQuote, Quote } from './';


export const MultipleCustomHooks = () => {

    const { counter, increment } = useCounter(1);
    const { data, isLoading, hasError } = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`);
    
    /*
        Como la informacion viene en arreglo por el API.
        Si la data tiene un valor entonces toma
        la data en la posicion 0.
        Se destructura para sacar el author y el quote
    */
    const { author, quote } = !!data && data[0];
    
    return (
        <>
            <h1>BreakingBad Quotes</h1>
            <hr />

            {
                /*
                    Si isLoading es true 
                    muestra el mensaje cargando
                */
                ( isLoading )
                 ? <LoadingQuote />
                 //Se pasa por referencia el author y quote como en los To Do
                 : <Quote author={ author } quote={ quote } />
            }
                      
            <button 
                className="btn btn-primary"
                /*
                    Agrega la clase disabled si 
                    isLoading es true, eso
                    desactiva el boton para seguir
                    mostrando Quotes
                */
                disabled={ isLoading }
                /*
                    Se usa una funcion de flecha
                    para que increment no reciba
                    los eventos de onClick
                */
                onClick={ () => increment() }>
                Next quote
            </button>

        </>
    )
}
