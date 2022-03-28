import {Link} from "react-router-dom"
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

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
            <Typography gutterBottom variant="h2" component="div">
                OPS!
            </Typography>
            <Typography gutterBottom variant="h4" component="div">
                Nothing here
            </Typography>
            <Link1 to="/" >Back to main</Link1>
        </Box1>
    )
} 

export default NotFound;