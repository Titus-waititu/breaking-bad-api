// import React from 'react'

import type { Todo } from "../../types/todo";
import useTodosContext from "./TodosContext";

function TodosDelete({todo}:{todo:Todo}) {
    const {deleteTodo} = useTodosContext()

  return (
    <button onClick={() => deleteTodo(todo.id)}>Delete</button>
  )
}

export default TodosDelete;