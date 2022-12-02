import { useForm } from '../hooks/useForm';


export const TodoAdd = ({ onNewTodo}) => {


    const { description, onInputChange, onResetForm } = useForm({
        description: ''
    });

    const onFormSubmit = ( event ) => {
        event.preventDefault();
        if( description.length <= 1 ) return;
        
        const newTodo = {
            id: new Date().getTime(),
            description,
            done: false,
        }
        /*
            Le envia el newTodo a la funcion handleNewTodo
            que ejecuta el dispatch del useReducer
            por medio de la prop onNewTodo
        */
        onNewTodo(newTodo);
        /*
            Limpia el formulario, esta funcion 
            esta en el hook useForm
        */
        onResetForm();
    }


  return (

    <form onSubmit={ onFormSubmit }>
                    <input 
                        type="text" 
                        placeholder="Que hay que hacer?"
                        className="form-control"
                        name="description"
                        value={ description }
                        onChange={ onInputChange } 
                    />
                    <button 
                        type="submit"
                        className="btn btn-outline-primary mt-1"
                    >
                        Agregar
                    </button>
    </form>
    
  )
}
