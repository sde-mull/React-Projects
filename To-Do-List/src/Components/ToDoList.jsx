import React, {useState, useRef, useEffect, use} from 'react';
import '../Styles/ToDoList.css';


function ToDoList({categorySelected}){
	
	const [ToDoListObj, setToDoListObj] = useState({});
	const [inputValue, setInputValue] = useState("");
	const inputRef = useRef(null);

	function handleOnChange(event){
		setInputValue(event.target.value);
	}

	function handleSubmit(event){
		event.preventDefault()
		if (inputValue.trim() === "") return;

		setToDoListObj((prevToDoList) => {
			const updatedList = {...prevToDoList};

			if (!updatedList[categorySelected]) {
				updatedList[categorySelected] = [];
			}
			
			if (updatedList[categorySelected].includes(inputValue)) {
				return updatedList;
			} else {
				updatedList[categorySelected] = [...updatedList[categorySelected], inputValue];
			}
			return updatedList;
		});

		setInputValue("");
	}

	useEffect(() => {
		if (categorySelected && inputRef.current) {
		  inputRef.current.focus();
		}
	  }
	, [categorySelected]);
	
	return (
		<>
			<div className='ToDoContainer'>
				<ul>
        			{ToDoListObj[categorySelected]?.map((todo, index) => (
          			<li key={index}> {todo}</li>
        		))}
      			</ul>
				{categorySelected && <form className = "InputToDo" onSubmit = {handleSubmit}>
					{(	
						<input 
							id = "ToDoListInput" 
							type = "text"
							ref = {inputRef}
							placeholder = "Enter a To Do..."
							onChange = {handleOnChange}
							value = {inputValue}
						/> 
					)}
					{ <button id="ToDoListSubmit" type="submit">Add</button> }
				</form>}
			</div>
		</>
	
	)
}

export default ToDoList;