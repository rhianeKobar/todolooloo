import React, { useState, useEffect } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import './../App.css';

function TodoList() {
	const [todos, setTodos] = useState([])

	useEffect(() => {
		const myTodos = JSON.parse(localStorage.getItem("all-my-todos"))

		if(myTodos) {
			setTodos(myTodos);
		}
	},[])

	const setAndStore = (updatedArr) => {
		setTodos(updatedArr);
		storeLocally(updatedArr);
	}

	const storeLocally = (todos) => {
		localStorage.setItem("all-my-todos", JSON.stringify(todos));
	}

	const addTodo = todo => {
		if(!todo.text || /^\s*$/.test(todo.text)) {
			return
		}
		const newTodos = [todo, ...todos]

		setAndStore(newTodos);
	};

	const updateTodo = (todoId,newValue) => {
		if(!newValue.text || /^\s*$/.test(newValue.text)) {
			return
		}

		const updatedTodos = todos.map(item =>(item.id === todoId ? newValue : item))
		setAndStore(updatedTodos)

	}

	const removeTodo = id => {
		const removeArr = [...todos].filter(todo => todo.id !== id)
		setAndStore(removeArr)
	}

	const completeTodo = id => {
		let updatedTodos = todos.map(todo => {
			if(todo.id === id){
				todo.isComplete = !todo.isComplete
			}
			return todo
		});
		setAndStore(updatedTodos)
	};


	return (
		<div className='bg-secondary w-50 p-3 container rounded h-75 d-flex flex-column'>
			<h1 className='text-primary text-center'>Todolooloo</h1>
			<TodoForm onSubmit={addTodo}/>
			<Todo 
				todos={todos} 
				completeTodo={completeTodo}
				removeTodo={removeTodo}
				updateTodo={updateTodo}
			/>
		</div>
	)
}

export default TodoList