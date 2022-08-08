import Todo from './Todo';

type TodoItem = {
    id: number,
    name: string,
    complete: boolean,
};

export default function TodoList({ todoTasks, toggleTodo }: any) {
    return (
        <>{todoTasks.map((todo: TodoItem) => {
            return <Todo key={todo.id} todo={todo} toggleTodo={toggleTodo} />;
        })}</>
    );
}
