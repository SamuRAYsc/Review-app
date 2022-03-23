import {Link} from "react-router-dom"
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const Box1 = styled(Box)(({theme}) => ({ backgroundColor: theme.palette.background.default, color: theme.palette.text.secondary,}) )
const Link1 = styled(Link)(({theme}) => ({color: theme.palette.text.primary}))
const NotFound = () => {
    return(
        <Box1
        sx={{
        py: 3,
        px: '12vw',
        flex: '1 1 auto',
        }}>
            <h2>OPS!</h2>
            <h4>Nothing here</h4>
            <Link1 to="/" >Back to main</Link1>
        </Box1>
    )
} 

export default NotFound;