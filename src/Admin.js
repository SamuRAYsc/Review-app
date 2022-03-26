import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { DataGrid } from '@mui/x-data-grid';
import { styled } from '@mui/material/styles';

const Box1 = styled(Box)(({theme}) => ({ backgroundColor: theme.palette.background.default, color: theme.palette.text.secondary,}) )
const columns = [
    { field: 'id', headerName: 'ID' },
    { field: 'name', headerName: 'Name', flex:1, renderCell: (params) => (
        <Link href={`/user/${params.value}`}>{params.value}</Link>
      )},
    { field: 'Admin', headerName: 'Admin', flex:1,}
  ];
  const rows = [ 
    { id: 1, name: 'Snow', Admin: 'yes'},
    { id: 2, name: 'Test', Admin: 'no'},
    { id: 3, name: 'Kek', Admin: 'no'},
    { id: 4, name: 'John', Admin: 'no'},
  ];

function UserHome() {
    return(
        <Box1
        sx={{
        py: 4,
        px: '12vw',
        flex: '1 1 auto',
        }}>
            <p>UserList</p>
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