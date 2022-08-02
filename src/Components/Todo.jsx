import React, {useState} from 'react'
import TodoForm from './TodoForm'
import {RiCloseCircleLine} from 'react-icons/ri'
import {TiEdit} from 'react-icons/ti'
import './../todo.css';

function Todo({todos, completeTodo, removeTodo, updateTodo}) {

	const [edit, setEdit] = useState({
		id: null,
		value: '',
		isComplete: false
	})

	const submitUpdate = value => {
		updateTodo(edit.id, value)
		setEdit({
			id:null,
			value:''
		})
	}

	if(edit.id){
		return <TodoForm edit={edit} onSubmit={submitUpdate} />
	}

	return todos.map((todo, index) => (
		<div className="d-flex justify-content-center">
			<div 
				className='d-flex justify-content-center border border-primary m-2 p-2 w-75'
				key={index}
			>
				<div
					key={todo.id}
					onClick={() => completeTodo(todo.id)}
					className={todo.isComplete ? 'text-primary col-md-10 del':'text-primary col-md-10'}
				>
					{todo.text}
				</div>
				<div className='text-primary col-md-2 align-self-center text-center'>
					<RiCloseCircleLine 
						onClick={() => removeTodo(todo.id)}
						className='me-1'
					/>
					<TiEdit 
						onClick={() => setEdit({id: todo.id, value: todo.text})}
						className='ms-3'
					/>
				</div>
			</div>
		</div>
		
	));
}

export default Todo