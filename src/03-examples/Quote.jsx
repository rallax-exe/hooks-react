import { useLayoutEffect, useRef, useState } from 'react';

/*
  Aqui entra el useLayoutEffect
*/
export const Quote = ({ author, quote }) => {

  /*
    Guardamos la referencia al elemento
    HTML usando el useRef
  */
  const pRef = useRef();
  /*
    El use effect para guardar
    el tamanio del elemento HMTL <p>
  */
  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 })

  useLayoutEffect(() => {
    
    /*
      Se obtiene el tamanio de la caja de la etiqueta
      <p> con el .current.getBoundingClientRect()
    */
    const { height, width } =  pRef.current.getBoundingClientRect();
    /*Guarda el tamanio del boxSize en el useEffect*/
    setBoxSize({ height, width });
    
  // Cada vez que el quote cambia  
  }, [quote])
  


  return (
    <>
      <blockquote 
        className="blockquote text-end"
        style={{ display: 'flex' }}
      >
          <p ref={ pRef } className="mb-1">{ quote }</p>
          <footer className="blockquote-footer"> { author } </footer>
      </blockquote>

      {/*Imprime el valor del boxSize del useEffect en el HTML*/}
      <code>{ JSON.stringify(boxSize) }</code>
    </>
  )
}
