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

const LatestReviewGrid = ({latestReviews}) => {
    console.log(latestReviews);
    return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {latestReviews.map((review) => (
            <Grid item xs={12} sm={6} md={4} key={review.id}>
             <Item  variant="outlined">
             <Typography gutterBottom variant="h3" component="div">
                 {review.name}
             </Typography>
             <Typography gutterBottom variant="p" component="div">
                 {review.description}
             </Typography>
             <Typography gutterBottom variant="p" component="div">
                 {review.updatedAt.replace(/[a-zA-Z]/g, ' ')}
             </Typography>
             </Item>
         </Grid> 
            ))}   
    </Grid>
    )
};

export default LatestReviewGrid;