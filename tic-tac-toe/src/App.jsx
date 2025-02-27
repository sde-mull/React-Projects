import MainPage from "./Pages/MainPage"
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import theme from './Styles/Themes';
import { ThemeProvider} from '@mui/material/styles';

function App() {

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Container maxWidth={false} sx={{bgcolor:'grey', height:'100vh', width:'100vw', m: '0', p: '0'}}>
          <MainPage />
        </Container>
      </ThemeProvider>
    </>
  )
}

export default App
