import { useEffect, useReducer } from 'react';
import { todoReducer } from '../08-useReducer/todoReducer';

export const useTodos = () => {

    /*
        init 
        Carga los To Do del localStorage y los convierte
        en un objeto, si no hay nada regresa un arreglo vacio
    */
    const init = () => {
        return JSON.parse( localStorage.getItem('todos') ) || [];
    }

        /*
        todos: se usa para leer los To Do del useReducer
        dispatch: ejecuta las acciones del useReducer
        todoReducer: le dice al useReducer donde estan las acciones
        []: carga los To Do, si te fijas es un arreglo vacio
        init: carga los To Do del localStorage        
    */
        const [ todos, dispatch ] = useReducer( todoReducer, [], init );

        /*
            useEffect
            Este efecto secundario se dispara cuando
            se monta el arreglo de To Do en el useReducer
            y cuando hay nuevos elementos en el useReducer.
            Convierte los To Do en un elemento JSON String
            y los guarda en el local storage
        */
        useEffect(() => {
            localStorage.setItem('todos', JSON.stringify( todos ));
        }, [todos]);
        
    
        /*
            handleNewTodo 
            Recibe el To Do escrito en el formulario
            llama el useReducer y le manda
            el action y en el payload le inserta el 
            To Do
        */
        const handleNewTodo = ( todo ) => {
            const action = {
                type: '[TODO] Add Todo',
                payload: todo
            }
            dispatch( action );
        }
    
    
        const handleDeleteTodo = ( id ) => {
            dispatch({
                type: '[TODO] Remove Todo',
                payload: id
            })
        }
    
        const handleToggleTodo = ( id ) => {
            dispatch({
                type: '[TODO] Toggle Todo',
                payload: id
            })
        }


    return{
        todos, 
        todosCount: todos.length, 
        pendingTodosCount: todos.filter( todo => !todo.done ).length, 
        handleDeleteTodo, 
        handleToggleTodo, 
        handleNewTodo
    }

}


