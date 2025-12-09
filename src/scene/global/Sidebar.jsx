import { useState } from "react";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { Sidebar as ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { tokens } from "../../theme";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlinedIcon from "@mui/icons-material/PieChartOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";

const Item = ({ title, to, icon, select, setSelected }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <MenuItem
            active={select === title}
            style={{ color: colors.grey[100] }}
            onClick={() => setSelected(title)}
            icon={icon}
            component={<Link to={to} />}
        >
            <Typography>{title}</Typography>
        </MenuItem>
    );
};

const Sidebar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState("Dashboard");

    return (
        <Box
            sx={{
                "& .ps-sidebar-container": {
                    backgroundColor: `${colors.primary[400]} !important`,
                },
                "& .pro-icon-wrapper": {
                    backgroundColor: "transparent !important",
                },
                "& .pro-inner-item": {
                    padding: "5px 35px 5px 20px !important",
                },
                "& .pro-inner-item:hover": {
                    color: "#868dfb !important",
                },
                "& .pro-menu-item.active": {
                    color: "#6870fa !important",
                },
            }}
        >
            <ProSidebar collapsed={isCollapsed}>
                <Menu iconShape="square">
                    {/* TOPO DO SIDEBAR */}
                    <MenuItem
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        icon={<MenuOutlinedIcon />}
                        style={{
                            margin: "10px 0 20px 0",
                            color: colors.grey[100],
                        }}
                    >
                        {!isCollapsed && (
                            <Box
                                display="flex"
                                justifyContent="space-between"
                                alignItems="center"
                                ml="15px"
                            >
                                <Typography variant="h3" color={colors.grey[100]}>
                                    ADMIN
                                </Typography>
                            </Box>
                        )}
                    </MenuItem>

                    {/* PERFIL DO USUÁRIO */}
                    {!isCollapsed && (
                        <Box mb="25px">
                            <Box display="flex" justifyContent="center" alignItems="center">
                                <img
                                    alt="profile-user"
                                    width="100px"
                                    height="100px"
                                    src={`../../assets/user.png`}
                                    style={{ cursor: "pointer", borderRadius: "50%" }}
                                />
                            </Box>
                            <Box textAlign="center">
                                <Typography
                                    variant="h2"
                                    color={colors.grey[100]}
                                    fontWeight="bold"
                                    sx={{ m: "10px 0 0 0" }}
                                >
                                    Diego
                                </Typography>
                                <Typography variant="h5" color={colors.greenAccent[500]}>
                                    Administrador Geral
                                </Typography>
                            </Box>
                        </Box>
                    )}

                    {/* ITENS DO MENU */}
                    <Box paddingLeft={isCollapsed ? undefined : "10%"}>
                        <Item
                            title="Dashboard"
                            to="/"
                            icon={<HomeOutlinedIcon />}
                            select={selected}
                            setSelected={setSelected}
                        />
                        <Typography
                            variant="h6"
                            color={colors.grey[300]}
                            sx={{ m: "15px 0 5px 20px" }}
                        >
                            Dados
                        </Typography>
                        <Item
                            title="Gerenciar Equipe"
                            to="/team"
                            icon={<PeopleOutlinedIcon />}
                            select={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Informação de Contatos"
                            to="/contacts"
                            icon={<ContactsOutlinedIcon />}
                            select={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Saldo de Faturas"
                            to="/invoices"
                            icon={<ReceiptOutlinedIcon />}
                            select={selected}
                            setSelected={setSelected}
                        />
                        <Typography
                            variant="h6"
                            color={colors.grey[300]}
                            sx={{ m: "15px 0 5px 20px" }}
                        >
                            Paginas
                        </Typography>
                        <Item
                            title="Perfil"
                            to="/form"
                            icon={<PersonOutlinedIcon />}
                            select={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Calendario"
                            to="/calendar"
                            icon={<CalendarTodayOutlinedIcon />}
                            select={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Duvidas"
                            to="/faq"
                            icon={<HelpOutlinedIcon />}
                            select={selected}
                            setSelected={setSelected}
                        />
                        <Typography
                            variant="h6"
                            color={colors.grey[300]}
                            sx={{ m: "15px 0 5px 20px" }}
                        >
                            Graficos
                        </Typography>
                        <Item
                            title="Grafico de Barras"
                            to="/bar"
                            icon={<BarChartOutlinedIcon />}
                            select={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Grafico Torta"
                            to="/pie"
                            icon={<PieChartOutlinedIcon />}
                            select={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Grafico de Linhas"
                            to="/line"
                            icon={<TimelineOutlinedIcon />}
                            select={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Grafico Geográfico"
                            to="/geography"
                            icon={<MapOutlinedIcon />}
                            select={selected}
                            setSelected={setSelected}
                        />
                    </Box>
                </Menu>
            </ProSidebar>
        </Box>
    );
};

export default Sidebar;
