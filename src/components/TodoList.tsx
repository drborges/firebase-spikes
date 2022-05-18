import { memo } from "react";
import { Todo } from "../hooks/useTodos";
import TodoRow from "./TodoRow";

export interface TodoListProps {
  todos: Todo[];
}

export default memo(function TodoList({ todos }: TodoListProps) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoRow key={todo.id} id={todo.id} />
      ))}
    </ul>
  );
});
