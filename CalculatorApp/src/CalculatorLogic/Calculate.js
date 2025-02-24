

function Calculate(operator, numbers){

	switch(operator){
		case '+':
			return ((Number(numbers[0]) + Number(numbers[1])).toString());
		case "-":
			return ((Number(numbers[0]) - Number(numbers[1])).toString());
		case "/":
			return ((Number(numbers[0]) / Number(numbers[1])).toString());
		case "*":
			return ((Number(numbers[0]) * Number(numbers[1])).toString());
		default:
			console.log("Can't do this type of operation: " + operator);
	}

	return 0;
}

export default Calculate;