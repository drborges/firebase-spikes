import { memo, useState } from "react";
import { useInput } from "../hooks/useInput";
import useTodo from "../hooks/useTodo";
import { deleteTodo, Todo, updateTodo } from "../hooks/useTodos";

export interface TodoRowProps {
  id: string;
}

export default memo(function TodoRow({ id }: TodoRowProps) {
  const todo = useTodo(id);
  const input = useInput();
  const [editing, setEditing] = useState(false);

  if (!todo) return null;

  const handleUpdate = () => {
    if (editing) {
      updateTodo({
        ...todo,
        content: input.value,
      });
    }

    setEditing(!editing);
  };

  return (
    <li>
      <span>{!editing && todo.content} </span>
      {editing && <input {...input} />}
      <button type="button" onClick={handleUpdate}>
        {editing ? "Save" : "Edit"}
      </button>
      <button type="button" onClick={() => deleteTodo(todo.id)}>
        Delete
      </button>
    </li>
  );
});
