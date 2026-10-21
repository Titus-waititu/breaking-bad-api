import "./App.css";
import Todos from "./components/todos/Todos";
import TodosCheckbox from "./components/todos/TodosCheckbox";
import TodosDelete from "./components/todos/TodosDelete";
import TodosInput from "./components/todos/TodosInput";
import TodosItem from "./components/todos/TodosItem";
import TodosList from "./components/todos/TodosList";
import TodosText from "./components/todos/TodosText";




function App() {


  return (
    <>
      <div>
        <Todos initialTodos={[{ id: "1", text: "Learn", done: false }]}>
          <TodosInput />
          <TodosList>
            {(todo) => (
              <TodosItem key={todo.id} todo={todo}>
                <TodosCheckbox todo={todo}></TodosCheckbox>
                <TodosText todo={todo}></TodosText>
                <TodosDelete todo={todo}></TodosDelete>
              </TodosItem>
            )}
          </TodosList>
        </Todos>
      </div>
    </>
  );
}

export default App;
