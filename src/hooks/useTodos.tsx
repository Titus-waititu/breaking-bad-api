import { useCallback, useState } from "react";
import type { Todo } from "../types/todo";

function useTodos(initial: Todo[] = []) {
  const [todos, setTodos] = useState<Todo[]>(initial);
  const addTodo = useCallback((text: string) => {
    setTodos((prev) => [
      ...prev,
      { id: crypto.randomUUID(), text, done: false },
    ]);
  }, []);

  const toggleTodo = useCallback((id:string) => {
    setTodos(prev => prev.map(t => t.id !== id ? {...t,done:!t.done} : t))
  },[])

  const deleteTodo = useCallback((id:string) => {
    setTodos(prev => prev.filter(t => t.id !== id))
  },[])

  return {todos,addTodo,toggleTodo,deleteTodo}
}

export default useTodos;
