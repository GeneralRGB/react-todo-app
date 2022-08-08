import React from 'react';
import Todo from './Todo';

type TodoArray = {
    id: number,
    name: string,
    complete: boolean,
}[];

type TodoItem = {
    id: number,
    name: string,
    complete: boolean,
};


export default function TodoList({ todoTasks, toggleTodo }: TodoArray | any) {
    return (
        <>{todoTasks.map((todo: TodoItem) => {
            return <Todo key={todo.id} todo={todo} toggleTodo={toggleTodo} />;
        })}</>
    );
}
