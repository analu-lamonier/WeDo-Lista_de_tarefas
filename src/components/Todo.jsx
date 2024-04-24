import React from 'react'

const Todo = ({ todo, removeTodo, completeTodo }) => {
  return (
    <div 
    className="todo"
    style={{ backgroundColor: todo.isCompleted ?   "#63C673"  : "#fff" }}
    >
    <div className="content" >
        <p     
        >
        {todo.text}
        </p> 
        <p className="category">
        ({todo.category})
        </p> 
        <div>
        <button className='complete' onClick={() => completeTodo(todo.id )}
        style={{ backgroundColor : todo.isCompleted ?   "#63C673"  : "#63C673" }}

        >Completar</button>
        <button className='remove' onClick={() => removeTodo(todo.id    )}>x</button>
        </div>
        
    </div>
    </div>
  )
}


export default Todo