import { DataGrid } from "@mui/x-data-grid";
import {  Box, Typography ,CssBaseline} from "@mui/material";
import ActionCell from "./elements/ActionCell";
import StatusSelectCell from "./elements/StatusSelectCell";
import {rows} from './data'
import CalenderSVG from "../../elements/svg/CalenderSVG";
import { getData } from "./data";
export default function MainTable() {
  const {data,isSuccess}= getData();

  const columns = [
    { field: "id", headerName: "ID", flex: 0.1 },
    { field: "domainPrice", headerName: "Domain Price", flex: 0.1 },
    {
      field: "status",
      headerName: "Status",
      flex: 0.2,
      renderCell: (params) => <StatusSelectCell defaultValue={params.value} />,
    },
    {
      field: "createdAt",
      headerName: "Created At",
      flex: 0.2,
      renderCell: (params) => <Typography> <CalenderSVG /> {params.value}</Typography>,
    },
    {
      field: "action",
      headerName: "Action",
      flex: 0.2,
      renderCell: (params) => <ActionCell value={params.value} />,
    },
  ];
 
  return (
    <Box fontFamily='Poppins'  width='95%' maxWidth='97%' fontWeight='500'>
      <CssBaseline/>
   
      <DataGrid rows={ rows}
      hideFooter
      sx={{
        // height:"100%",
        '& .MuiDataGrid-main':{
          height:"100%"
        },
        '& .MuiDataGrid-row':{
          borderRadius:' 11px',
          background: '#FFF',
          height: '70px',
          marginTop: '20.4px',
          '&:hover':{
          boxShadow: '1px 17px 44px 0px rgba(3, 2, 41, 0.07)',
          },
          

        },
        borderRadius:'22px',
        border:'none',

      }}
       columns={columns} pageSize={5} 
   
       checkboxSelection  />
    </Box>
  );
}
