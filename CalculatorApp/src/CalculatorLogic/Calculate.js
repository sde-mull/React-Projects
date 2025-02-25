

function Calculate(operator, numbers){

	let result = null;

	switch(operator){
		case '+':
			result = Number(numbers[0]) + Number(numbers[1]);
			return (result % 1 === 0) ? result.toString() : result.toFixed(2).toString();
		case "-":
			result = Number(numbers[0]) - Number(numbers[1]);
			return (result % 1 === 0) ? result.toString() : result.toFixed(2).toString();
		case "/":
			result = Number(numbers[0]) / Number(numbers[1]);
			return (result % 1 === 0) ? result.toString() : result.toFixed(2).toString();
		case "*":
			result = Number(numbers[0]) * Number(numbers[1]);
			return (result % 1 === 0) ? result.toString() : result.toFixed(2).toString();
		case "%":
			result = Number(numbers[0]) % Number(numbers[1]);
			return (result % 1 === 0) ? result.toString() : result.toFixed(2).toString();
		default:
			console.log("Can't do this type of operation: " + operator);
	}

	return 0;
}

export default Calculate;