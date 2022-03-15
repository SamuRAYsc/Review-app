import './Navbar.css';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';


function Navbar() {
    return(
        <Paper sx={{ borderRadius: 0 }}>
            <nav className="navbar">
            <Box
                sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',
                p: 1,
                }}
            >
                <h1>Username</h1>
                <Stack id="nav-links"  direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                            sx={{
                                typography: 'body1',
                                '& > :not(style) + :not(style)': {
                                ml: 2,
                                },
                            }}
                            >
                    <Link href="/" >Home</Link>
                    <Link href="/user" >My reviews</Link>
                    <Link href="/login" >Login</Link>
                </Stack>
                <TextField id="fts_input" label="Search" variant="outlined" />
            </Box>
            </nav>
        </Paper>
    )
}

export default Navbar