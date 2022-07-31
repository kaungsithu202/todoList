import React,{useEffect} from 'react'
import Todo from './Todo'

const TodoList = ({todos,setTodos,filterTodos}) => {

  
  
  return (
    <div className='todo-container'>
        <ul className='todo-list'>
          {filterTodos.map(todo => (
            <Todo 
            text={todo.text}
            key={todo.id}
            todos={todos}
            todo={todo}
            setTodos={setTodos}
             />
          ))}
        </ul>
    </div>
  )
}

export default TodoList