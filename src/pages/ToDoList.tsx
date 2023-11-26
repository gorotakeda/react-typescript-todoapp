import { useState } from "react"
import { ToDo } from "../components/ToDo"
import { ToDoType } from "../types"


export const ToDoList = () => {

  const [todos, setTodos] = useState<ToDoType[]>([
    { id: 1, title: "Learn React", completed: false, limit : new Date(2023, 8) },
    { id: 2, title: "Learn TypeScript", completed: false, limit : new Date(2023, 8) },
    { id: 3, title: "Learn Next.js",  completed: false, limit : new Date(2023, 8) },
    { id: 4, title: "Learn GraphQL", completed: false, limit : new Date(2023, 8) },
    { id: 5, title: "Learn Apollo", completed: false, limit : new Date(2023, 8) },
  ])

  const setTodosTitle = (id: number, title: string) => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            title: title
          }
        }
        return todo
      })
    )
  }

    return (
        <>
            <h2>ToDoList</h2>
            {todos.map(todo => (
              <ToDo key={todo.id} todolist={todo} setTodosTitle={setTodosTitle}/>
            ))}
        </>
    )
}
