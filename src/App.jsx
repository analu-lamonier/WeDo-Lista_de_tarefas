import { useState } from 'react'


import './App.css'
import { Outlet } from 'react-router-dom'
import { Navbar } from './components/Navbar'

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Passear com cachorro",
      category: "Eduzinho",
      isCompleted: false,
    },
    { id: 2,text: "Arrumar brinquedos", category: "Thiaguinho", isCompleted: false },
    {
      id: 3,
      text: "Secar louça",
      category: "Luluzinha",
      isCompleted: false,
    },
  ]);

  const addTodo = (text, category) => {
    const newTodos = [...todos, 
      { id: Math.floor(Math.random() * 1000), text, category, isCompleted: false }
    ];
    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    const newTodos = [...todos];
    const filteredTodos = newTodos.filter((todo) => todo.id !== id ?  todo : null)
    setTodos(filteredTodos);
  };

  const completeTodo = (id) => {
    const newTodos = [...todos];
    newTodos.map((todo) => todo.id === id ?  todo.isCompleted = !todo.isCompleted : todo)
    setTodos(newTodos);
  };

  return (
   <div className='App'> 
   <br></br>
    <br></br>
    <br></br>
    <br></br>
    <Navbar/>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <Outlet/>
    
   </div>
   
  )
}

export default App
