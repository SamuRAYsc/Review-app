import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import {useNavigate} from 'react-router-dom';
import { CardActionArea } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.action.hover,
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const LatestReviewGrid = ({latestReviews}) => {
    const navigate = useNavigate();
    return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {latestReviews.map((review) => (
            <Grid item xs={12} sm={6} md={4} key={review.id}>
                <CardActionArea onClick={() => {navigate(`/review/${review.id}`)}}>
                    <Item  variant="outlined">
                    <Typography sx={{wordWrap: "break-word"}} gutterBottom variant="h3" component="div">
                        {review.name}
                    </Typography>
                    <Typography sx={{wordWrap: "break-word"}} gutterBottom variant="p" component="div">
                        {review.description}
                    </Typography>
                    <Typography sx={{wordWrap: "break-word"}} gutterBottom variant="p" component="div">
                        {review.updatedAt.split('.')[0].replace(/[a-zA-Z]/g, ' ')}
                    </Typography>
                    </Item>
                </CardActionArea>
         </Grid> 
            ))}   
    </Grid>
    )
};

export default LatestReviewGrid;