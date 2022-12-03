import { useRef } from 'react';

/*
    useRef
    Funciona como un useState pero
    este no dispara renderizaciones
*/

export const FocusScreen = () => {

    /*
        inputRef va a apuntar al 
        elemento HTML y React no 
        se va a confudir al seleccionar
        el que estamos pasandole como
        referencia, en vez de estarlo
        buscando con querySelector
        el cual se puede equivocar con
        el elemento HTML al cual le queremos
        poner el foco. 
    */
    const inputRef = useRef();

    const onClick = () => {
        // document.querySelector('input').select();
        // console.log(inputRef);
        /*
            Con .select() le ponemos el foco
            al elemento HTML
        */
        inputRef.current.select();
    }


  return (
    <>
        <h1>Focus Screen</h1>
        <hr />

        <input 
            /*
                ref
                Sintaxis de React
                inputRef va a mandar el HTMLInputElement.
                En este caso recibe el <input />
                y con eso le podemos poner el foco.
            */
            ref={ inputRef }
            type="text" 
            placeholder="Ingrese su nombre"
            className="form-control"
        />

        <button 
            className="btn btn-primary mt-2"
            onClick={ onClick }
        >
            Set focus
        </button>

    </>
  )
}
