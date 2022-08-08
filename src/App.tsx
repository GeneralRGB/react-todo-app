import React, { useState, useRef, useEffect } from 'react';
import TodoList from './TodoList';
import { v4 as uuidv4 } from 'uuid';

type TodoArray = {
	id: string,
	name: string,
	complete: boolean,
}[];

const LOCAL_STORAGE_KEY = 'todoApp.todoTasks';


function App() {
	const [todoTasks, setTodo]: [TodoArray, Function] = useState([]);
	const todoNameRef: any = useRef();

	useEffect(() => {
		const storedTodoTasks: string | null = localStorage.getItem(LOCAL_STORAGE_KEY);
		if (storedTodoTasks === null) return;
		const storedTodoTasksArray: [] = JSON.parse(storedTodoTasks);
		if (storedTodoTasksArray.length === 0) return;
		setTodo(storedTodoTasksArray);
	}, []);

	useEffect(() => {
		localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todoTasks));
	}, [todoTasks]);

	function handleAddTodo(event: any) {
		const name = todoNameRef.current.value;
		if (name === '') return;

		setTodo((prevTodos: TodoArray) => {
			return [...prevTodos, { id: uuidv4(), name: name, complete: false }];
		});
		todoNameRef.current.value = null;
	}

	function toggleTodo(id: string) {
		const newTodoList = [...todoTasks];
		const todo = newTodoList.find(todo => todo.id === id);
		if (todo === undefined) return;
		todo.complete = !todo.complete;
		setTodo(newTodoList);
	}

	function clearTodo() {
		const newTodo = todoTasks.filter(todo => !todo.complete);
		setTodo(newTodo);
	}

	return (
		<>
			<TodoList todoTasks={todoTasks} toggleTodo={toggleTodo} />
			<input type="text" ref={todoNameRef} />
			<button onClick={handleAddTodo}>Add Todo</button>
			<button onClick={clearTodo}>Clear completed</button>
			<div>{todoTasks.filter(todo => !todo.complete).length} left to do</div>
		</>
	);
}

export default App;
