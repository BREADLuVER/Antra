import "./styles.css"
import { useState, useEffect, useRef } from "react"

export default function App() {
  const [newItem, setNewItem] = useState("")
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos')
    return savedTodos ? JSON.parse(savedTodos) : []
  })

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  const inputRef = useRef(null)
  function addTodo(e) {
    e.preventDefault()
    if (newItem.trim() === "") return

    setTodos((currentTodos) => {
      return [...currentTodos, 
        { id:crypto.randomUUID(), title:newItem, completed:false},]
    })

    setNewItem("")
    inputRef.current?.focus()
  }

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo=>{
        if(todo.id === id) {
          return {...todo, completed}
        }
        return todo
      })
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }
  return (
    <>
      <form onSubmit={addTodo} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input
            ref={inputRef}
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            type="text"
            id="item"
          />
        </div>
        <button className="btn">Add</button>
      </form>

      <h1 className="header">To Do</h1>
      <ul className="list">
        {todos.length===0 && "No Todos"}
        {todos.map(todo => {
          return(
            <li key={todo.id}>
            <label>
              <input type="checkbox" checked={todo.completed} 
              onChange={e => toggleTodo(todo.id, e.target.checked)}/>
              {todo.title}
            </label>
            <button onClick={() => deleteTodo(todo.id)} className="btn">Delete</button>
          </li>
          )
        })}
      </ul>
    </>
  )
}