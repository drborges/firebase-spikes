import { FormEvent } from "react";

import TodoList from "./components/TodoList";
import { useAuthenticator } from "./firebase/auth";
import { useInput } from "./hooks/useInput";
import useTodos, { createTodo } from "./hooks/useTodos";

function App() {
  const input = useInput();
  const todos = useTodos();
  const user = useAuthenticator();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await createTodo(input.value);
    input.setValue("");
  };

  return (
    <div>
      <h1>Hello {user ? user.uid : "guest"}</h1>

      <form onSubmit={handleSubmit}>
        <input {...input} />
        <button type="submit">Add</button>
      </form>

      <TodoList todos={todos} />
    </div>
  );
}

export default App;
