import React, { useState, useEffect, useRef }  from 'react';
import {BsPlusCircleFill} from 'react-icons/bs';

function TodoForm(props) {
	const [input, setInput] = useState(props.edit ? props.edit.value : '');

	const inputRef = useRef(null)

	useEffect(()=>{
		inputRef.current.focus()
	})

	const handleChange = e => {
		setInput(e.target.value);
	};

	const handleSubmit = e => {
		e.preventDefault();

		props.onSubmit({
			id: Math.floor(Math.random() * 10000),
			text: input,
			isComplete: false
		});

		setInput('');
	};

	return (
		<form onSubmit={handleSubmit}>
			{props.edit ? 
			(<>
			<div className='d-flex justify-content-center pb-5'>
				<div className='input-group w-50'>
					<input 
						type="text" 
						placeholder='Update your task' 
						value={input}
						name="text"
						onChange={handleChange}
						ref={inputRef}
						className='form-control'
					/>
					<div className='btn btn-primary'>
							<BsPlusCircleFill 
							onClick={handleSubmit} 
							color='#000'
							fontSize="1.2em"
							/>
					</div>
				</div>
			</div>
			</>) : 
			(<>
			<div className='d-flex justify-content-center pb-3'>
				<div className='input-group w-50'>
					<input 
						type="text" 
						placeholder='Add a task' 
						value={input}
						name="text"
						onChange={handleChange}
						ref={inputRef}
						className='form-control'
					/>
					<div className='btn btn-primary'>
							<BsPlusCircleFill 
							onClick={handleSubmit} 
							color='#000'
							fontSize="1.2em"
							/>
					</div>
				</div>
			</div>
			</>)
			}
			
			
		</form>
	)
}

export default TodoForm