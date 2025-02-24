import React from "react";
import Box from '@mui/material/Box';
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import Grid2 from "@mui/material/Grid2";
import Button from "@mui/material/Button";
import Calculate from '../CalculatorLogic/Calculate'

function Calculator() {

  const initialObj = {
	'numbers': [],
	'operation': '',
	'result': 0
  };
  const theme = useTheme();
  const [display, setDisplay] = useState("0");
  const [structure, setStructure] = useState(initialObj);

  function handleButtonClick(item) {

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
          {["7", "8", "9", "/"].map((item) => (
            <Grid2 xs={3} key={item}>
              <Button variant="contained" sx={{ width: "135px", height: "200px", fontSize: "2rem"}} onClick={() => handleButtonClick(item)}>
                {item}
              </Button>
            </Grid2>
          ))}
          {["4", "5", "6", "*"].map((item) => (
            <Grid2 xs={3} key={item}>
              <Button sx={{ width: "135px", height: "200px", fontSize: "2rem"}} variant="contained" onClick={() => handleButtonClick(item)}>
                {item}
              </Button>
            </Grid2>
          ))}
          {["1", "2", "3", "-"].map((item) => (
            <Grid2 xs={3} key={item}>
              <Button sx={{ width: "135px", height: "200px", fontSize: "2rem"}} variant="contained" onClick={() => handleButtonClick(item)}>
                {item}
              </Button>
            </Grid2>
          ))}
          {["0", "C", "=", "+"].map((item) => (
            <Grid2 xs={3} key={item}>
              <Button
                sx={{ width: "135px", height: "200px", fontSize: "2rem"}}
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
