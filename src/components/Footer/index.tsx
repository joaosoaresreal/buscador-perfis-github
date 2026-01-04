import { Box, Typography, useTheme } from "@mui/material";

export default function Footer() {
    const theme = useTheme();
    const ano = new Date(Date.now()).getFullYear();

    return (
        <Box width="100%" py={1} bottom={0} position="fixed" sx={{
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
        }}>
            <Box display="flex" flexDirection="row" alignItems="center" justifyContent="center" textAlign="center" gap={0.5}>
                <Typography>
                    Desenvolvido por ©
                </Typography>

                <Box
                    component="img"
                    src="./logo_js.svg"
                    width="50px"
                    sx={{ verticalAlign: 'middle' }}
                />

                <Typography
                    component="a"
                    href="http://www.joaosoares.com.br"
                    target="_blank"
                    sx={{
                        textDecoration: 'none',
                        color: 'inherit',
                        cursor: 'pointer',
                        '&:hover': { textDecoration: 'underline' },
                        fontWeight: 'bold',
                    }}
                >
                    joaosoaresreal
                </Typography>

                <Typography>- {ano}</Typography>
            </Box>

        </Box>
    )
}
