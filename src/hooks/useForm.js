import { useState } from 'react';

export const useForm = ( initialForm = {} ) => {
  
    const [ formState, setFormState ] = useState( initialForm );

    /*
        El target es una prop del onChange
        que capturó los cambios en el form html.
        Se destructura: 
            name = username
            value = usuario@usuario.com
        Se mantiene todo el objeto con ...formState
        que guarda la estructura y datos del formulario.
        Se usa computed properties para cambiar el valor
        al name (username) que se esta modificando (escribiendo),
        se le asigna el value nuevo.
        [username]: target.value
        o tambien se puede pensar en value: value => value
    */
    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    const onResetForm = () => {
        setFormState( initialForm );
    }

    return {
        /*
            Con ...formState retorna todo el formulario
            para que lo podamos usar en el html
        */
        ...formState,
        formState,
        onInputChange,
        onResetForm,
    }
}
