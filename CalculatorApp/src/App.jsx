import Calculator from "./Components/Calculator"
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";

function App() {

  const theme = useTheme();

  return (
    <>
      <Container maxWidth  sx={{ backgroundColor: theme.palette.background.root, minHeight: '100vh', color: 'white', pt: 1}}>
        <Typography variant="h1" component="h1" align="center" sx={{mt: 2}}>
          Simple Calculator
        </Typography>
        <Calculator />
      </Container>
    </>
  )
}

export default App;
