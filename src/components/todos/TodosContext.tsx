import { createContext, useContext } from "react";
import type { Todo } from "../../types/todo";

type TodoContextValue = {
  todos: Todo[];
  addTodo: (text: string) => void;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
};

export const TodosContext = createContext<TodoContextValue | null>(null);

function useTodosContext() {
  const ctx = useContext(TodosContext);
  if (!ctx) throw new Error("useTodosContext must be used in <Todos>");
  return ctx;
}

export default useTodosContext;
