import { Link } from "react-router-dom"

export const Navbar = () => {
  return (
    <div >
    <nav>
        <Link className = "Navbar" to="/">Home</Link>
        <Link className = "Navbar" to="/TarefasPai">Tarefas Pai</Link>
        <Link className = "Navbar" to="/TarefasFilho">Tarefas Filho</Link>
    </nav>
    </div>
  )
}
