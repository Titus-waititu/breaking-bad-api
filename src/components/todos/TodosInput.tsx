import { useState, type FormEvent } from "react"
import useTodosContext from "./TodosContext"

function TodosInput() {
    const {addTodo} = useTodosContext()
    const [text,setText] = useState<string>('')

    const onSubmit = (e:FormEvent) => {
        e.preventDefault()
        if(!text.trim()) return
        addTodo(text.trim())
        setText('')
    }
  return (
    <form action="" onSubmit={onSubmit}>
        <input type="text" name="" id="" value={text} onChange={(e) => setText(e.target.value)} placeholder="add todo..." />
        <button type="submit">Add</button>
    </form>
  )
}

export default TodosInput