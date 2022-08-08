
type TodoItem = {
    id: number,
    name: string,
    complete: boolean,
};

export default function Todo({ todo, toggleTodo }: TodoItem | any) {
    function handleTodoClick() {
        toggleTodo(todo.id);
    }
    return (
        <div className="">
            <label htmlFor="">
                <input type="checkbox" checked={todo.complete} onChange={handleTodoClick} id={todo.id}/>
                <label htmlFor={todo.id}>{todo.name}</label>
            </label>
        </div>
    );
}
