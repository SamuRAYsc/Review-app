import './Navbar.css';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';


function Navbar() {
    return(
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
                            mt: 4,
                            mb: 2
                        }}>
                <a href="/">Home</a>
                <a href="/">My reviews</a>
            </Stack>
            <TextField id="fts_input" label="Search" variant="outlined" />
        </Box>
        </nav>
    )
}

export default Navbar