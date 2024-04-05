import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export interface Todo {
  useId: number;
  id: number;
  title: string;
  completed: boolean;
}

const TodoList = () => {
  const fetchTodos = () =>
    axios
      .get<Todo[]>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.data);

  const { data: todos } = useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });

  // if (error) return <p>{error}</p>;

  return (
    <ul>
      {todos?.map((todo) => (
        <li key={todo.id}>
          #{todo.useId} - {todo.title}:{" "}
          {todo.completed ? "Completed" : "Pending"}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
