/*
  Se recibe la prop del todo individual y
  la prop onDeleteTodo que tiene
  la funcion handelDeleteTodo
*/
export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
        <span 
          /* Si el todo.done es true entonces lo tacha con la clase del bootstrap */
          className={`align-self-center ${ (todo.done) ? 'text-decoration-line-through' : ''}`}
          onDoubleClick={ () => onToggleTodo( todo.id ) }
        >
            {todo.description}
        </span>
        <button 
          className="btn btn-danger"
          onClick={ () => onDeleteTodo( todo.id ) }
          >Borrar</button>
    </li>
  )
}
