import './LoginForm.css';
import { useState} from 'react';
import {useNavigate} from 'react-router-dom'
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import axios from 'axios'

function LoginForm(props) {
    const [authUsername, setAuthUsername] = useState('');
    const [authPassword, setAuthPassword] = useState('');
    const navigate = useNavigate();
    const register = () => {
        axios({
            method:"post",
            data: {
                username: authUsername,
                password: authPassword
            },
            withCredentials: true,
            url: "http://localhost:8080/register"
        }).then(
            res => console.log(res)
        );
    }
    const login = () => {
        axios({
            method:"post",
            data: {
                username: authUsername,
                password: authPassword
            },
            withCredentials: true,
            url: "http://localhost:8080/login"
        }).then(
            res => {
                if (res.data === false) navigate('/login');
                else{
                    props.onUserChange(res.data);
                    navigate(`/user/${res.data.id}`)
                    console.log(res)
                }
                
            }
        );
    }
    return(
        <Box
            sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            p: 4,
            backgroundColor: 'palette.action.disabledBackground',
      }}
        >
            <Paper variant="outlined"
            sx={{
            p: 3,
            width: '40vw',
            }}> 
                <h1>Login</h1>
                <Stack spacing={3} id="form-inputs">
                    <TextField id="email-input" label="Email" onChange={e => setAuthUsername(e.target.value)}/>
                    <TextField id="password-input" label="Password" onChange={e => setAuthPassword(e.target.value)}/>
                </Stack>
                <Stack id="form-controls"  direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        sx={{
                            mt: 4,
                            mb: 2
                        }}>
                    <Button variant="text" id="registration-button" sx={{p:2}} onClick={register}>Register</Button>
                    <Button variant="contained" id="auth-button" sx={{py:2, px:3}} onClick={login}>LogIn</Button>
                </Stack>
            </Paper>
        </Box>
    )
}

export default LoginForm