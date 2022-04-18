import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { DataGrid } from '@mui/x-data-grid';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { UserContext } from './UserContext';
import { useContext } from 'react';
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom'
import Stack from '@mui/material/Stack';

const Box1 = styled(Box)(({theme}) => ({ backgroundColor: theme.palette.background.default, color: theme.palette.text.secondary,}) )
const columns = [
    { field: 'id', headerName: 'ID' },
    { field: 'name', headerName: 'Name', flex:1,  renderCell: (params) => (
        <Link href={`/review/${params.value.replace(/\s/g, '-')}`} onClick={(e) => {e.stopPropagation();}}>{params.value}</Link>
    )},
    { field: 'updatedAt', headerName: 'last update', flex:1, renderCell: (params) => (
        <Typography sx={{wordWrap: "break-word"}} gutterBottom variant="p" component="div">
            {params.value.split('.')[0].replace(/[a-zA-Z]/g, ' ')}
        </Typography>
    )},
  ];

function UserHome() {
    const [reviewlist, setReviewlist] = useState();
    const navigate = useNavigate();
    const user = useContext(UserContext);
    useEffect(() => {
        axios.get("https://review-api-2022.herokuapp.com/userreviews",
        { withCredentials:true}
        ).then(res =>{
            setReviewlist(res.data);
        })
    },[])
    const rows = reviewlist;
    return(
        <Box1
        sx={{
        py: 4,
        px: '12vw',
        flex: '1 1 auto',
        }}>
            <Typography gutterBottom variant="h3" component="div">
            {user ? (`${user.email}'s`) : 'My'} reviews
            </Typography>
            <Stack id="posts-controls"  direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        sx={{
                            mt: 3,
                            mb: 2
                        }}>
                <Button variant="contained" id="new_post_button" sx={{py:1, px:2}} onClick={() => {navigate('/')}}>Add post</Button>
                <Button variant="contained" id="edit_post_button" sx={{py:1, px:2}} onClick={() => {navigate('/')}}>Edit post</Button>
                <Button variant="contained" id="delete_selected_posts_button" sx={{py:1, px:2}} onClick={() => {navigate('/')}}>Delete selected posts</Button>
            </Stack>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={8}
                rowsPerPageOptions={[10]}
                checkboxSelection
                columnVisibilityModel={{
                    id: false,
                }}
                sx={{
                    height:'70%'
                }}
            />
        </Box1>

)}

export default UserHome