import {useState} from "react";
import '../style.css'

const Todo = () => {

    const [todos, setTodos] = useState([])
    const [input, setInput] = useState('')

    const addTodo = () => {
        // setTodos((todos) => {
        //     return todos.concat({
        //         text: input,
        //         id: Math.floor(Math.random() * 10)
        //     })
        // }) // the longest way
        setTodos([...todos, {text: input, id: crypto.randomUUID()}]) // easy way to do this
        setInput('')

    }

    const removeTodo = id => setTodos(todos => todos.filter(todo => todo.id !== id));


    return (
        <div className="container">
            <input type="text" placeholder="New todo" value={input} onChange={e => setInput(e.currentTarget.value)}/>
            <button onClick={addTodo}>Add Todo</button>

            <ul className="todos-list">
                {
                    todos && todos.map(({text, id}) => (
                        <li className='todo' key={id}>
                            <span>{text}</span>
                            <button className="close" onClick={() => removeTodo(id)}>X</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
export default Todo;
