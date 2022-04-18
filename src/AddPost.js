import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { useContext } from 'react';

const Box1 = styled(Box)(({theme}) => ({ backgroundColor: theme.palette.background.default, color: theme.palette.text.secondary,}) )

function AddPost() {
    return(
        <Box1
        sx={{
        py: 4,
        px: '12vw',
        flex: '1 1 auto',
        }}>
            <Typography gutterBottom variant="h3" component="div">
                New review creation
            </Typography>
        </Box1>

    )
}

export default AddPost