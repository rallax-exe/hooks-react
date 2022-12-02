
import { useTodos } from '../hooks/index';
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';


export const TodoApp = () => {

/*
    Custom Hook que tiene toda la logica
    del To Do, dentro del hook tiene:
    useReducer, useEffect, todoReducer
*/
const { todos, todosCount, pendingTodosCount, handleDeleteTodo, handleToggleTodo, handleNewTodo } = useTodos();


  return (
    <>
        <h1>TodoApp: { todosCount }, <small>pendientes: { pendingTodosCount } </small></h1>
        <hr />

        <div className="row">
            <div className="col-7">

                {/*
                    Se envia los To Do como props a TodoList
                    Se envia la funcion handleDeleteTodo en la prop
                    onDeleteTodo
                */}
                <TodoList 
                    todos={ todos } 
                    onDeleteTodo={ handleDeleteTodo } 
                    onToggleTodo={ handleToggleTodo }
                />


            </div>

            <div className="col-5">
                <h4>Agregar TODO</h4>
                <hr />
                {/*Se envia la funcion handleNewTodo como prop llamada onNewTodo*/}
                <TodoAdd 
                    onNewTodo={ handleNewTodo }
                />
            </div>

        </div>

        
    </>
  )
}
