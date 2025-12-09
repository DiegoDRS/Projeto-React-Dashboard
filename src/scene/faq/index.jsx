import { Box, Typography, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme"

const FAQ = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box m="20px">
            <Header title="FAQ" subtitle="Pagina Perguntas frequentes" />

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Perguntas importantes

                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores iste ratione et laborum, culpa magni quam modi sit consectetur eveniet, ex aperiam hic! Neque et assumenda ipsam, optio odit fugiat!
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Perguntas importantes

                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores iste ratione et laborum, culpa magni quam modi sit consectetur eveniet, ex aperiam hic! Neque et assumenda ipsam, optio odit fugiat!
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Perguntas importantes

                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores iste ratione et laborum, culpa magni quam modi sit consectetur eveniet, ex aperiam hic! Neque et assumenda ipsam, optio odit fugiat!
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Perguntas importantes

                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores iste ratione et laborum, culpa magni quam modi sit consectetur eveniet, ex aperiam hic! Neque et assumenda ipsam, optio odit fugiat!
                    </Typography>
                </AccordionDetails>
            </Accordion>

        </Box>
    )

}


export default FAQ