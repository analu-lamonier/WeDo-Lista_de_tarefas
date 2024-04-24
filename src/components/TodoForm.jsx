import {useState} from 'react'

const TodoForm = ({addTodo}) => {
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");

  //da o submit no formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value || !category) return;
    addTodo(value, category);
    setValue("");
    setCategory("");
  };


  return (
    <div className='todo-form'>
      <h2>Adicionar tarefa</h2>
      <form onSubmit={handleSubmit}>
        <input 
        type="text" 
        placeholder = "Digite o nome da tarefa"
        className="input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        />
        <select  value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Selecione um responsável</option>
          <option value="Luluzinha">Luluzinha</option>
          <option value="Eduzin">Eduzin</option>
          <option value="Thiaguin">Thiaguin</option>
        </select>
        <button type="submit">Adicionar tarefa</button>
      </form>
    </div>
  )
}

export default TodoForm