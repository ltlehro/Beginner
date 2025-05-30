import React, {useState} from 'react'
import '../styles/todo.css'

const Todo = () => {
    const [todos, setTodos] = useState([])
    const [input, setInput] = useState('')

    const handleSubmit = () => {
        setTodos((todos) => {
            return todos.concat({
                text: input,
                id: Math.floor(Math.random()*10)
            })
        })
        setInput("")
    }

    const removeTodo = id => setTodos(todos=>todos.filter(t => t.id !== id))


    return (
        <div className="container">

            <div className="input-group">
                <input type="text" value={input} onChange={e => setInput(e.target.value)} placeholder="New Todo" />
                <button className="submitbtn" onClick={handleSubmit}>Submit</button>
            </div>

            <ul className="todo">
                    {todos.map(({text, id})=>(
                        <li key={id}>
                            <span>{text}</span>
                            <button className="cross" onClick={()=> removeTodo(id)}>x</button>
                        </li>
                    ))}
                </ul>
        </div>
    )
}
export default Todo
