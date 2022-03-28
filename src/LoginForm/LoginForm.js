import './LoginForm.css';
import { useState} from 'react';
import {useNavigate} from 'react-router-dom'
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import axios from 'axios'

function LoginForm() {
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
            url: "https://review-api-2022.herokuapp.com/register"
        }).then(
            res => console.log(res)
        );
    }
    const login = () => { 
        axios.post("https://review-api-2022.herokuapp.com/login",{
                username: authUsername,
                password: authPassword
            },{
                withCredentials: true,
        }).then(
            res => { if (res.data === 'Login Failed! Try again') {
                setAuthUsername('');
                setAuthPassword('');
            } else {
                navigate(-1);
            }
            }
        ).catch(err => {
            setAuthUsername('');
            setAuthPassword('');
        })
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
      px={{xs:'10vw', sm:'20vw', md:'30vw'}}
        >
            <Paper variant="outlined"
            sx={{
            p: 3,
            width:'100%'
            }}
            > 
                <Typography gutterBottom variant="h3" component="div">
                Login
                </Typography>
                <Stack spacing={3} id="form-inputs">
                    <TextField id="email-input" label="Email" value={authUsername} onChange={e => setAuthUsername(e.target.value)}/>
                    <TextField id="password-input" label="Password" value={authPassword} onChange={e => setAuthPassword(e.target.value)}/>
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