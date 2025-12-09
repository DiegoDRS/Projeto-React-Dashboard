import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import { IMaskInput } from "react-imask";

//  Valores iniciais
const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    endereco1: "",
    endereco2: "",
};

//  Regex para validação do telefone
const phoneRegExp = /^(\(?\d{2}\)?\s?)?(9?\d{4}-?\d{4})$/;

// ✅ Validação com Yup
const userSchema = yup.object().shape({
    firstName: yup.string().required("Campo obrigatório"),
    lastName: yup.string().required("Campo obrigatório"),
    email: yup
        .string()
        .email("Digite um email válido")
        .required("Campo obrigatório"),
    contact: yup
        .string()
        .matches(phoneRegExp, "Número de telefone inválido")
        .required("Campo obrigatório"),
    endereco1: yup
        .string()
        .required("Endereço inválido")
        .required("Campo obrigatório"),
});

//  Componente principal
const Form = () => {
    const isNonMobile = useMediaQuery("(min-width:600px)");

    const handleFormSubmit = (values) => {
        console.log(values);
    };

    return (
        <Box m="20px">
            <Header title="Criar Usuário" subtitle="Criar novo usuário" />

            <Formik
                onSubmit={handleFormSubmit}
                initialValues={initialValues}
                validationSchema={userSchema}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleBlur,
                    handleChange,
                    handleSubmit,
                }) => (
                    <form onSubmit={handleSubmit}>
                        <Box
                            display="grid"
                            gap="30px"
                            gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                            sx={{
                                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                            }}
                        >
                            {/* Primeiro Nome */}
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Primeiro Nome"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.firstName}
                                name="firstName"
                                error={!!touched.firstName && !!errors.firstName}
                                helperText={touched.firstName && errors.firstName}
                                sx={{ gridColumn: "span 2" }}
                            />

                            {/* Sobrenome */}
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Sobrenome"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.lastName}
                                name="lastName"
                                error={!!touched.lastName && !!errors.lastName}
                                helperText={touched.lastName && errors.lastName}
                                sx={{ gridColumn: "span 2" }}
                            />

                            {/* Email */}
                            <TextField
                                fullWidth
                                variant="filled"
                                type="email"
                                label="E-mail"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.email}
                                name="email"
                                error={!!touched.email && !!errors.email}
                                helperText={touched.email && errors.email}
                                sx={{ gridColumn: "span 4" }}
                            />

                            {/* Telefone com máscara */}
                            <TextField
                                fullWidth
                                variant="filled"
                                label="Número de Contato"
                                name="contact"
                                value={values.contact}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                InputProps={{
                                    inputComponent: IMaskInput,
                                    inputProps: {
                                        mask: "(00) 00000-0000",
                                    },
                                }}
                                error={!!touched.contact && !!errors.contact}
                                helperText={touched.contact && errors.contact}
                                sx={{
                                    gridColumn: "span 4",
                                    "& input": {
                                        color: "#fff",
                                        fontWeight: 500,
                                    },
                                }}
                            />

                            {/* Endereço */}
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Endereço"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.endereco1}
                                name="endereco1"
                                error={!!touched.endereco1 && !!errors.endereco1}
                                helperText={touched.endereco1 && errors.endereco1}
                                sx={{ gridColumn: "span 4" }}
                            />

                            {/* Botão */}
                            <Box display="flex" mt="20px">
                                <Button type="submit" color="secondary" variant="contained">
                                    Criar Novo Usuário
                                </Button>
                            </Box>
                        </Box>
                    </form>
                )}
            </Formik>
        </Box>
    );
};

export default Form;
