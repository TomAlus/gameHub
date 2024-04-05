import useTodos from "./hooks/useTodos";

const TodoList = () => {
  const { data: todos, error, isLoading } = useTodos();

  if (isLoading) return <p>isLoading</p>;

  if (error) return <p>{error.message}</p>;

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
