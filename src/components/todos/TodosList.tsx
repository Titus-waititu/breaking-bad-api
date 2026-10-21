import type { Todo } from "../../types/todo"
import useTodosContext from "./TodosContext"

type Props = {
    children: (todo:Todo) => React.ReactNode
}
function TodosList({children}: Props) {
    const {todos} = useTodosContext()
    if(!todos.length) return <p> No Todos</p>
    return <ul>
        {todos.map((todo) => children(todo))}
    </ul>
}

export default TodosList