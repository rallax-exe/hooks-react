import { TodoItem } from './TodoItem';

/*
  Se recibe la prop de los todos y
  la prop onDeleteTodo que tiene
  la funcion handelDeleteTodo
*/
export const TodoList = ({ todos =[], onDeleteTodo, onToggleTodo }) => {
  return (
    
                <ul className="list-group">                    
                {
                    todos.map( todo => (
                        <TodoItem
                          key={ todo.id } 
                          todo={ todo } 
                          onDeleteTodo={ onDeleteTodo }
                          onToggleTodo={ onToggleTodo } 
                        />
                    ))
                }
                </ul>
    
  )
}
