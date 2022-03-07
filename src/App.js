import './App.css';
import * as React from 'react';
import LoginForm from './LoginForm/LoginForm';
import Navbar from './Navbar/Navbar.js';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function ThemeSwitchButton() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  return (
    <Box
      sx={{
        position: 'fixed',
        right: 0,
        bottom: 40,
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
        color: 'text.primary',
        borderRadius: 4,
        p: 1,
      }}
    >
      <IconButton onClick={colorMode.toggleColorMode} color="inherit">
        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </Box>
  );
}

function ToggleColorMode() {
  const [mode, setMode] = React.useState('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
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
        <ThemeSwitchButton/>
        <div className='content'>
          <h1>Content section</h1>
          <LoginForm/>
        </div>
      </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

// function App() {
  
//   return (
//     <ColorModeContext.Provider value={colorMode}>
//     <ThemeProvider theme={theme}></ThemeProvider>
      // <div className="App">
      //   <Navbar/>
      //   <div className='content'>
      //     <h1>Content section</h1>
      //     <LoginForm/>
      //   </div>
      // </div>
//     </ThemeProvider>
//     </ColorModeContext.Provider>
//   );
// }

export default App;
