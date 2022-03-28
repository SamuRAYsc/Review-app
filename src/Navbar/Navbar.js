import './Navbar.css';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { UserContext } from '../UserContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const user = useContext(UserContext);
    const navigate = useNavigate();
    return(
        <Paper sx={{ borderRadius: 0 }}>
            <nav className="navbar">
            <Box
                sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',
                p: 1,
                flexWrap: 'wrap',
                }}
            >
                <h1>{user?.email ||'Guest'}</h1>
                <Stack id="nav-links"  direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                            sx={{
                                typography: 'body1',
                                '& > :not(style) + :not(style)': {
                                ml: 2,
                                },
                            }}
                            py={{xs:2, sm:0}}
                            order={{xs: 1, sm: 0 }}
                            >
                    <Link onClick={navigate("/")} >Home</Link>
                    {user ? (<>
                        {user.isAdmin ? (<Link onClick={navigate("/admin")} >Admin</Link>) :
                        <Link onClick={navigate("/userHome")} >My reviews</Link>}
                        <Link onClick={() => {
                            axios.get("https://review-api-2022.herokuapp.com/logout",{ withCredentials:true});
                            navigate('/');
                        }}>LogOut</Link>
                        </>
                    ):(
                        <Link onClick={navigate("/login")} >Login</Link>
                    )}

                </Stack>
                <TextField id="fts_input" label="Search" variant="outlined" />
            </Box>
            </nav>
        </Paper>
    )
}

export default Navbar