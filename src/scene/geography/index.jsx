import { Box } from "@mui/material"
import Header from "../../components/Header"
import { tokens } from "../../theme";
import { useTheme } from '@mui/material';
import GeographyChart from "../../components/GeographyChart"

const Geography = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box m="20px" border={`1px solid ${colors.grey[100]}`} borderRadius="4px" >
            <Header title="Grafico Geografico" subtitle="Grafico simples geografico" />
            <Box height="75vh">
                <GeographyChart />
            </Box>
        </Box>
    )

}

export default Geography;