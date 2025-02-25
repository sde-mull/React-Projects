import React from "react";
import Box from '@mui/material/Box';
import { useTheme } from "@mui/material/styles";
import { useState, useRef } from "react";
import Grid2 from "@mui/material/Grid2";
import Button from "@mui/material/Button";
import Calculate from '../CalculatorLogic/Calculate'

function Calculator() {

  const baseStruct = {
	'numbers': [],
	'operator': null,
	'result': null,
  };

  const theme = useTheme();
  const [display, setDisplay] = useState("0");
  const structure = useRef(baseStruct);
  const [firstInput, setFirstInput] = useState(true);


  function handleButtonClick(item) {

	if (item === "DEL"){
		if (!firstInput){
			setDisplay(display.slice(0,-1));
		}
	}
	else if (item === "="){

		if (display && !firstInput && structure.current.numbers.length < 2){
			structure.current.numbers.push(display);
		}
	
		if (structure.current.numbers.length === 2 && structure.current.operator){
			const result = Calculate(structure.current.operator ? structure.current.operator : item, structure.current.numbers);
			setDisplay(result);
			structure.current.result = result;
			structure.current.numbers.pop();
			structure.current.numbers[0] = result;
			structure.current.operator = null;
		}

		setFirstInput(true);

	}
	else if (item === "C"){
		structure.current = baseStruct;
		setDisplay("0");
	}
	else if (item === "+" || item === "-" || item === "*" || item === "/" || item === "%"){

		if (display && !firstInput && structure.current.numbers.length < 2){
			structure.current.numbers.push(display);
			setDisplay('0');
		}
	
		if (structure.current.numbers.length === 2){
			const result = Calculate(structure.current.operator ? structure.current.operator : item, structure.current.numbers);
			setDisplay(result);
			structure.current.result = result;
			structure.current.numbers.pop();
			structure.current.numbers[0] = result;
		}

		structure.current.operator = item;

		setFirstInput(true);
		
	} 
	else {
		setFirstInput(false);

		if (firstInput && !structure.current.operator){
			structure.current.numbers = [];
		}

		setDisplay((prev) => {{

			if (prev === '0' && item === '0'){
				return item;
			}

			if ((prev === '0' && item != '0' && item != '.') || prev === structure.current.result){
				return(item);
			}

			if (prev.length === 12){
				return(prev);
			}

			if (prev.includes(".") && item === '.'){
				return (prev);
			}

			return (prev + item);
		}})
	}
  }
  
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="85vh"
    >
      <Box 
        bgcolor={theme.palette.background.default} 
        width={600} 
        height={1000}
        p={1}
        borderRadius={2}
      >
        <Box
          sx={{
            bgcolor: theme.palette.primary.screen,
            color: "#fff",
            fontSize: "5rem",
            textAlign: "right",
            minHeight: "150px",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            px: 1,
            borderRadius: 5,
          }}
        >
        {display}
        </Box>
		<Grid2 container spacing={1} sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
		{["DEL", "C", "%", "/"].map((item) => (
            <Grid2 xs={3} key={item}>
              <Button
                sx={{ width: "135px", height: "160px", fontSize: "2rem"}}
                variant="contained"
                color={item === "C" || item === 'DEL' ? "error" : item === "=" ? "success" : "primary"}
                onClick={() => handleButtonClick(item)}
              >
                {item}
              </Button>
            </Grid2>
          ))}
          {["7", "8", "9", "*"].map((item) => (
            <Grid2 xs={3} key={item}>
              <Button variant="contained" sx={{ width: "135px", height: "160px", fontSize: "2rem"}} onClick={() => handleButtonClick(item)}>
                {item}
              </Button>
            </Grid2>
          ))}
          {["4", "5", "6", "+"].map((item) => (
            <Grid2 xs={3} key={item}>
              <Button sx={{ width: "135px", height: "160px", fontSize: "2rem"}} variant="contained" onClick={() => handleButtonClick(item)}>
                {item}
              </Button>
            </Grid2>
          ))}
          {["1", "2", "3", "-"].map((item) => (
            <Grid2 xs={3} key={item}>
              <Button sx={{ width: "135px", height: "160px", fontSize: "2rem"}} variant="contained" onClick={() => handleButtonClick(item)}>
                {item}
              </Button>
            </Grid2>
          ))}
          {["0", ".", "="].map((item) => (
            <Grid2 xs={item === "=" ? 6 : 3} key={item}>
              <Button
                sx={{ width: item === '=' ? "270px" : "135px", height: "160px", fontSize: "2rem"}}
                variant="contained"
                color={item === "C" ? "error" : item === "=" ? "success" : "primary"}
                onClick={() => handleButtonClick(item)}
              >
                {item}
              </Button>
            </Grid2>
          ))}
        </Grid2>
      </Box>
    </Box>
  );
}

export default Calculator;
