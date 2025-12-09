import { Box } from "@mui/icons-material"
import Header from "../../components/Header"
import BarChart from "../../data/dadosGrafico"

const Bar = () => {
    return (
        <Box m="20px">
            <Header title="Bar Chart" subtitle="Simple Bar Chart" />
            <Box height="75vh">
                <BarChart />
            </Box>
        </Box>
    )

}

export default Bar;