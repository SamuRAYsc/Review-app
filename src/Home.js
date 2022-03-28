import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardMedia, CardContent } from '@mui/material';
import {useNavigate} from 'react-router-dom';
import {useEffect, useState} from 'react';
import axios from 'axios';
import LatestReviewGrid from './latestReviewGrid';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.action.hover,
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const Box1 = styled(Box)(({theme}) => ({ backgroundColor: theme.palette.background.default, color: theme.palette.text.secondary,}) );

function Home() {
    const [latestReviews, setLatestReviews] = useState(null); 
    const navigate = useNavigate();
    useEffect(() => {
        axios.get("https://review-api-2022.herokuapp.com/latestReviews",
        { withCredentials:true}
        ).then(res =>{
            console.log(res);
            setLatestReviews(res.data);
        })
    },[])

    return(
        <Box1
        sx={{
        py: 3,
        px: '12vw',
        flex: '1 1 auto',
        }}>
            <Typography gutterBottom variant="h3" component="div">
                Categories
            </Typography>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={12} sm={6} md={4}>
                    <Item  variant="outlined">
                        <CardActionArea onClick={() => {navigate('/category')}}>
                            <CardMedia
                            component="img"
                            height="340"
                            image="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/fall-movies-index-1628968089.jpg"
                            alt="movies"
                            />
                            <CardContent>
                            <Typography variant="h4" component="div">
                                Movies
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Item>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Item  variant="outlined">
                        <CardActionArea onClick={() => {navigate('/category')}}>
                            <CardMedia
                            component="img"
                            height="340"
                            image="https://static-cdn.jtvnw.net/ttv-boxart/26936-285x380.jpg"
                            alt="music"
                            />
                            <CardContent>
                            <Typography variant="h4" component="div">
                                Music
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Item>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Item  variant="outlined">3</Item>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Item  variant="outlined">4</Item>
                </Grid>
            </Grid>
            <Typography gutterBottom variant="h3" component="div">
                Reviews
            </Typography>
            {latestReviews && <LatestReviewGrid latestReviews={latestReviews}></LatestReviewGrid>}
        </Box1>

)}

export default Home