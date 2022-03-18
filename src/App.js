import './App.css';
import * as React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './LoginForm/LoginForm';
import Navbar from './Navbar/Navbar.js';
import UserHome from './UserHome.js';
import Home from './Home.js';
import Post from './Post.js';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const ColorModeContext = React.createContext({ toggleColorMode: () => {} })

function ThemeSwitchButton() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  return (
    <Box
      sx={{
        position: 'fixed',
        right: 10,
        bottom: 40,
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
        color: 'text.primary',
        borderRadius: 4,
        p: 1,
      }}
    >
      <IconButton onClick={colorMode.toggleColorMode} color="inherit" >
        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </Box>
  );
}

function ToggleColorMode() {
  const [mode, setMode] = React.useState(localStorage.getItem("currentTheme")||'dark');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        localStorage.getItem("currentTheme")==='light' ? localStorage.setItem("currentTheme",'dark') : localStorage.setItem("currentTheme",'light');
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );
  
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  return (
    [colorMode, theme]
  );
}

function App() {
  let [colorMode, theme] = ToggleColorMode();
  return(
  <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
      <div className="App">
        <Navbar/>
        <ThemeSwitchButton />
        <Router>
          <div className='content'>
            <Routes>
              <Route path="/" element={<Home/>} theme={theme}/>
              <Route path="login/" element={<LoginForm/>} theme={theme} />
              <Route path="user/*" element={<UserHome/>} theme={theme}/>
              <Route path="post/*" element={<Post/>} theme={theme}/>
            </Routes>
          </div>
        </Router>
      </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App;
