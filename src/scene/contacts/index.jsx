import { Box, Grid } from "@mui/material";
import { DataGrid, GridToolbar, GridToolbarQuickFilter } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
// Pagina onde vão ser chamados os dados via API usada no projeto



const Contacts  = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const columns = [
        { field: "id", headerName: "ID", flex: 0.5 },
        { field: "registrarId", headerName: "Registrar ID" },

        {
            field: "name",
            headerName: "Nome",
            flex: 1,
            cellClassName: "name-column--cell",

        },
        {
            field: "age",
            headerName: "Idade",
            type: "number",
            headerAlign: "left",
            align: "left",


        },
        {
            field: "phone",
            headerName: "Numero de Telefone",
            flex: 1,

        },
        {
            field: "email",
            headerName: "Email",
            flex: 1,

        },
          {
            field: "address",
            headerName: "Endereço",
            flex: 1,

        },
          {
            field: "city",
            headerName: "Cidade",
            flex: 1,

        },
          {
            field: "ZipCode",
            headerName: "CEP",
            flex: 1,

        },
      
    ];
                // Area abaixo é onde estiliza a tabela(ex: "& .MuiDataGrid-root" é uma classe)
    return (
        <Box m="20px">
            <Header title="Contatos" subtitle="Lista de Contatos para referencia futura" />
            <Box
                m="40px 0 0 0"
                height="75vh"
                sx={{
                    "& .MuiDataGrid-root": {
                        border: "none",
                    },
                    "& .MuiDataGrid-cell": {
                        borderBottom: "none"
                    },
                    "& .name-column--cell": {
                        color: colors.greenAccent[300]
                    },
                    "& .MuiDataGrid-columnHeaders": {
                        backgroundColor: colors.blueAccent[700],
                        borderBottom: "none"
                    },
                    "& .MuiDataGrid-virtualScroller": {
                        backgroundColor: colors.primary[400]
                    },
                    "& .MuiDataGrid-footerContainer": {
                        borderTop: "none",
                        backgroundColor: colors.blueAccent[700]
                    },
                    "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                        color: `${colors.grey[100]} !important`,
                    },
                }}>


                <DataGrid
                    rows={mockDataContacts}
                    columns={columns} components = {{Toolbar: GridToolbar}} />
            </Box>
        </Box>
    )

}

export default Contacts;