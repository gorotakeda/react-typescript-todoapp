import { ToDoType } from "../types";

type ToDoPropsType = {

  todolist: ToDoType,
  setTodosTitle: (id: number, title: string) => void;

}

export const ToDo = ({

  todolist,
  setTodosTitle

}: ToDoPropsType) => {

  const { id, title, completed, limit } = todolist;

    return (
        <>
            <h2>{id}</h2>
            <h2>{title}</h2>
            <h2>{completed? "完了":"未完了"}</h2>
            <p>{limit > new Date() ? "まだいける" : "期限切れ"}</p>
            <input type="text" onChange={e => setTodosTitle(id, e.target.value)} />
        </>
    )
}

