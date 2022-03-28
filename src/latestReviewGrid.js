import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.action.hover,
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const latestReviewGrid = (latestReviews) => {
    console.log(latestReviews);
    return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} sm={6} md={4}>
            <Item  variant="outlined">1</Item>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
            <Item  variant="outlined">2</Item>
        </Grid>
                
    </Grid>
    )
};

export default latestReviewGrid;