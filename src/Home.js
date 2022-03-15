import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.action.hover,
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
const Box1 = styled(Box)(({theme}) => ({ backgroundColor: theme.palette.background.default, color: theme.palette.text.secondary,}) )

function Home() {
    return(
        <Box1
        sx={{
        py: 3,
        px: '12vw',
        flex: '1 1 auto',
        }}>
            <p>UserHome</p>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={12} sm={6} md={4}>
                    <Item  variant="outlined">1</Item>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Item  variant="outlined">2</Item>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Item  variant="outlined">3</Item>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Item  variant="outlined">4</Item>
                </Grid>
            </Grid>
        </Box1>

)}

export default Home