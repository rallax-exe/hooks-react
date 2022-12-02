

export const todoReducer = ( initialState = [], action ) => {

    switch ( action.type ) {
        case '[TODO] Add Todo':
            /**
                Mantiene todo los datos del initialState y con
                action.payload carga el nuevo To Do
            */
            return [...initialState, action.payload]

        case '[TODO] Remove Todo':
            /*
                Vienen los To Dos del initialState
                El filtro dice, viene un todo,
                el id del todo es igual a los que 
                tenemos en el arreglo? 
                Si, filtralo y regresa un arreglo sin
                ese todo.
            */
            return initialState.filter( todo => todo.id !== action.payload )
        
        /*
            Recorre todos los To Do del arreglo
            si el To Do coincide con el id que 
            le estamos mandando entonces le 
            cambia su estado 'done' a false o true
            dependiendo el caso
        */
        case '[TODO] Toggle Todo':
            return initialState.map( todo => {

                if ( todo.id === action.payload ) {
                    //Este return permite recorrer todo el arreglo
                    return{
                        ...todo,
                        done: !todo.done
                    }
                }
                return todo;
            });
            
    
        default:
            return initialState;
    }

}