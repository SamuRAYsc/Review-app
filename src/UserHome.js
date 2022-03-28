import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { DataGrid } from '@mui/x-data-grid';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { UserContext } from './UserContext';
import { useContext } from 'react';

const Box1 = styled(Box)(({theme}) => ({ backgroundColor: theme.palette.background.default, color: theme.palette.text.secondary,}) )
const columns = [
    { field: 'id', headerName: 'ID' },
    { field: 'name', headerName: 'Name', flex:1,  renderCell: (params) => (
        <Link href={`/review/${params.value.replace(/\s/g, '-')}`} onClick={(e) => {e.stopPropagation();}}>{params.value}</Link>
    )},
    { field: 'updatedAt', headerName: 'last update', flex:1},
  ];
//   const rows = [ 
//     { id: 1, name: 'Snow', review: 'Jon@wntr.bdr'},
//     { id: 2, name: 'Test', review: 'test@test.ru'},
//     { id: 3, name: 'Kek', review: 'kek@ch.hk'},
//     { id: 4, name: 'John', review: 'Jon'},
//   ];

function UserHome() {
    const [reviewlist, setReviewlist] = useState();
    const user = useContext(UserContext);
    useEffect(() => {
        axios.get("https://review-api-2022.herokuapp.com/userreviews",
        { withCredentials:true}
        ).then(res =>{
            console.log(res);
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