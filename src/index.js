import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { StyledEngineProvider } from '@mui/material/styles';
import {UserConProvider} from './UserContext.js';

ReactDOM.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <UserConProvider>
        <App />
      </UserConProvider>
    </StyledEngineProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
