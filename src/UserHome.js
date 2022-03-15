import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { styled } from '@mui/material/styles';

const Box1 = styled(Box)(({theme}) => ({ backgroundColor: theme.palette.background.default, color: theme.palette.text.secondary,}) )
const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 130 },
    { field: 'mail', headerName: 'Mail', width: 130 },
  ];
  const rows = [ 
    { id: 1, name: 'Snow', mail: 'Jon@wntr.bdr'},
    { id: 2, name: 'Test', mail: 'test@test.ru'},
    { id: 3, name: 'Kek', mail: 'kek@ch.hk'},
    { id: 4, name: 'John', mail: 'Jon'},
    { id: 5, name: 'Snow', mail: 'Jon'},
    { id: 6, name: 'Snow', mail: 'Jon'},
    { id: 7, name: 'Snow', mail: 'Jon'},
    { id: 8, name: 'Snow', mail: 'Jon'},
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
                sx={{
                    height:'86%'
                }}
            />
        </Box1>

)}

export default UserHome