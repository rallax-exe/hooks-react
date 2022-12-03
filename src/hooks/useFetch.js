import { useEffect, useState } from "react";


export const useFetch = ( url ) => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null,
    })


    const getFetch = async () => {

        /*
            Mantiene el estado y estructura 
            original de nuestro useState
        */
        setState({
            ...state,
            isLoading: true,
        });

        /*Peticion API*/
        const resp = await fetch(url);
        /*
            Se guarda la respuesta en formato
            JSON a la constante data
        */
        const data = await resp.json();

        /*
            Cuando ya tenemos la respuesta
            de la peticion API, guardamos
            la data, se cambia el isLoading
            a false y se asigna null a 
            has error.
        */

        setState({
            data,
            isLoading: false,
            hasError: null,
        });
    }

    /*
        Si tengo un cambio en la URL
        del API vuelvo a mandar una peticion
    */
    useEffect(() => {
        getFetch();
    }, [url])
    


    return {
        data:      state.data,
        isLoading: state.isLoading,
        hasError:  state.hasError,
    };
}
