// import React from 'react'

import type { Todo } from "../../types/todo";

function TodosText({todo}:{todo:Todo}) {

  return (
    <span>{todo.text}</span>
  )
}

export default TodosText;