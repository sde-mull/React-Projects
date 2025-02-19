import React, {useState, useRef, useEffect} from 'react';
import '../Styles/Category.css';


function Category(props){

	const [category, setCategory] = useState([])
	const [categoryInput, setSelectCategoryInput] = useState(false);
	const [inputValue, setInputValue] = useState("");
	const inputRef = useRef(null);

	useEffect(() => {
		if (categoryInput && inputRef.current) {
		  inputRef.current.focus();
		}
	  }, [categoryInput]);

	function handleOnClick(){
		setSelectCategoryInput(!categoryInput);
	}

	function handleSubmit(event){
		event.preventDefault()
		if (inputValue.trim() === "") return;
		setCategory([...category, inputValue]);
		setInputValue("");
	}

	function handleOnChange(event){
		setInputValue(event.target.value);
	}

	function handleCategoryClick(event){
		props.onCategorySelect(event.target.textContent);
	}

	return (
		<>
			<div className = "CategoryContainer">
				<div className = "CategoryHeader">
					<h2 className = "CategoryTitle">Category</h2>
					<div className = "CategoryInput">
						<div className = "CategoryInputField">
							<form onSubmit = {handleSubmit}>
								{categoryInput && (
									<input 
										id="categoryInput" 
										type = "text" 
										ref={inputRef}
										placeholder = "Enter Category" 
										value={inputValue} 
										onChange={handleOnChange} 
									/> )}
								{categoryInput && <button id="categorySubmit" type="submit">Create</button> }
							</form>
						</div>
						<div className = "CategoryAddClose">
							{!categoryInput && <p onClick = {handleOnClick}> Add </p>}
							{categoryInput && <p onClick = {handleOnClick}> Close  </p>}
						</div>
					</div>
				</div>
				<div>
					{category.map((value, index) => {
						return (
						<React.Fragment key={index}>
							<div className={`Categories ${props.categorySelected === value ? "CategoriesActive" : ""}`}>
								<p onClick={handleCategoryClick} >{value}</p> 
								<p> X </p>
							</div>
						</React.Fragment>
					)})}
				</div>
			</div>
		</>
	)
}

export default Category;