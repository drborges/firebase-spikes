import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { firestore } from "../firebase/firestore";

export type TodoStatus = "todo" | "doing" | "done";

export interface Todo {
  id: string;
  content: string;
  status: TodoStatus;
}

export default function useTodos() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    return onSnapshot(collection(firestore, "todos"), (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Todo[];

      setTodos(data);
    });
  }, []);

  return todos;
}

export async function createTodo(content: string): Promise<Todo> {
  const data = { content, status: "todo" as TodoStatus };
  const ref = await addDoc(collection(firestore, "todos"), data);

  return {
    id: ref.id,
    ...data,
  };
}

export async function deleteTodo(id: string): Promise<void> {
  await deleteDoc(doc(firestore, "todos", id));
}

export async function updateTodo(todo: Todo): Promise<void> {
  await updateDoc(doc(firestore, "todos", todo.id), {
    content: todo.content,
    status: todo.status,
  });
}
