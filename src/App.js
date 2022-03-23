import './App.css';
import * as React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './LoginForm/LoginForm';
import Navbar from './Navbar/Navbar.js';
import UserHome from './UserHome.js';
import Home from './Home.js';
import Post from './Post.js';
import Admin from './Admin.js';
import NotFound from './404.js';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { UserContext } from './UserContext';
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

function ToggleTheme() {
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
  const [colorMode, theme] = ToggleTheme();
  const user = React.useContext(UserContext)
  return(
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
      <div className="App">
        <Navbar/>
        <ThemeSwitchButton />
        <Router>
          <div className='content'>
            <Routes>
              {
                user ? (
                  <>
                  {user.isAdmin ? (<Route path="admin/" element={<Admin />} theme={theme} />) : null }
              <Route path="userHome/*" element={<UserHome />} theme={theme}/>
                </>
                ):(
                <Route path="login/" element={<LoginForm />} theme={theme} />
                )
              }
              <Route path="/" element={<Home/>} theme={theme}/>
              <Route path="post/*" element={<Post/>} theme={theme}/>
              <Route path="*" element={<NotFound/>} theme={theme}/>
            </Routes>
          </div>
        </Router>
      </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App;
