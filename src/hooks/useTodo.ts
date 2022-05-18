import { doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { firestore } from "../firebase/firestore";
import { Todo } from "./useTodos";

export default function useTodo(id: string) {
  const [todo, setTodo] = useState<Todo>();

  useEffect(() => {
    return onSnapshot(doc(firestore, "todos", id), (snapshot) => {
      const data = {
        id: snapshot.id,
        ...snapshot.data(),
      } as Todo;

      setTodo(data);
    });
  }, []);

  return todo;
}
