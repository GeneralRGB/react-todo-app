import React from 'react';

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
                <input type="checkbox" checked={todo.complete} onChange={handleTodoClick} />
                {todo.name}
            </label>
        </div>
    );
}
