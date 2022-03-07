import './LoginForm.css';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

function LoginForm() {
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
            p: 2,
            width: '40vw',
            }}> 
                <h1>Login</h1>
                <Stack spacing={2} id="form-inputs">
                    <TextField id="email-input" label="Email" />
                    <TextField id="password-input" label="Password" />
                </Stack>
                <Stack id="form-controls"  direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        sx={{
                            mt: 4,
                            mb: 2
                        }}>
                    <Button variant="text" id="registration-button" sx={{p:2}}>Register</Button>
                    <Button variant="contained" id="auth-button" sx={{py:2, px:3}}>LogIn</Button>
                </Stack>
            </Paper>
        </Box>
    )
}

export default LoginForm