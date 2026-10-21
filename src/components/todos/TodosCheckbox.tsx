// import React from 'react'

import type { Todo } from "../../types/todo";
import useTodosContext from "./TodosContext";

function TodosCheckbox({todo}:{todo:Todo}) {
    const {toggleTodo} = useTodosContext()
    
  return (
    <input type="checkbox" name="" id="" onChange={() => toggleTodo(todo.id)} checked={todo.done}/>
  )
}

export default TodosCheckbox;