import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { DataGrid } from '@mui/x-data-grid';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Box1 = styled(Box)(({theme}) => ({ backgroundColor: theme.palette.background.default, color: theme.palette.text.secondary,}) )

function UserHome() {
  const [userlist, setUserlist] = useState();
  
  const columns = [
    { field: 'id', headerName: 'ID' },
    { field: 'email', headerName: 'Name', flex:1, renderCell: (params) => (
      <Link href={`/user/${params.value}`}>{params.value}</Link>
      )},
      { field: 'isAdmin', headerName: 'Admin', flex:1,}
    ];
    useEffect(() => {
        axios.get("https://review-api-2022.herokuapp.com/userlist",
        { withCredentials:true}
        ).then(res =>{
            setUserlist(res.data);
        })
    },[])
    const rows = userlist;

    return(
        <Box1
        sx={{
        py: 4,
        px: '12vw',
        flex: '1 1 auto',
        }}>
            <Typography gutterBottom variant="h3" component="div">
                List of Users
            </Typography>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={8}
                rowsPerPageOptions={[10]}
                checkboxSelection
                sx={{
                    height:'70%'
                }}
            />
        </Box1>

)}

export default UserHome