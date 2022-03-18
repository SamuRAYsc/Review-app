import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { DataGrid } from '@mui/x-data-grid';
import { styled } from '@mui/material/styles';

const Box1 = styled(Box)(({theme}) => ({ backgroundColor: theme.palette.background.default, color: theme.palette.text.secondary,}) )
const columns = [
    { field: 'id', headerName: 'ID' },
    { field: 'name', headerName: 'Name', flex:1 },
    { field: 'review', headerName: 'review', flex:1, renderCell: (params) => (
        <Link href={`/post/${params.value}`}>{params.value}</Link>
      )},
  ];
  const rows = [ 
    { id: 1, name: 'Snow', review: 'Jon@wntr.bdr'},
    { id: 2, name: 'Test', review: 'test@test.ru'},
    { id: 3, name: 'Kek', review: 'kek@ch.hk'},
    { id: 4, name: 'John', review: 'Jon'},
  ];

function UserHome() {
    return(
        <Box1
        sx={{
        py: 4,
        px: '12vw',
        flex: '1 1 auto',
        }}>
            <p>UserHome</p>
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