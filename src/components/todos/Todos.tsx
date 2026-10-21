import type { PropsWithChildren } from "react";
import type { Todo } from "../../types/todo";
import useTodos from "../../hooks/useTodos";
import { TodosContext } from "./TodosContext";

type Props = PropsWithChildren<{initialTodos?:Todo []}>

function Todos({children,initialTodos = []}:Props) {
    const value = useTodos(initialTodos);

  return (
    <TodosContext.Provider value={value}>
        <div>
            {children}
        </div>
    </TodosContext.Provider>
  )
}
// Todos.input

export default Todos