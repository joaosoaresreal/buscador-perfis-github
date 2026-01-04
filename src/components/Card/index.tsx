import { CalendarMonth, LocationOn, OpenInNew } from "@mui/icons-material"
import { Avatar, Box, Button, Typography, useMediaQuery, useTheme, Paper, Grid, Divider, Stack } from "@mui/material"

type CardsProps = {
    foto: string
    nome_usuario: string
    bio: string
    url: string
    repositorios_publicos: string
    seguindo: string
    seguidores: string
    localizacao?: string
    data_entrada: string
}

export function Card({
    foto,
    nome_usuario,
    bio,
    url,
    repositorios_publicos,
    seguindo,
    seguidores,
    localizacao,
    data_entrada,
}: CardsProps) {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"))
    const isTablet = useMediaQuery(theme.breakpoints.down("md"))

    return (
        <Paper
            elevation={3}
            sx={{
                borderRadius: 3,
                overflow: "hidden",
                width: "100%",
                height: "100%",
            }}
        >
            <Box
                sx={{
                    height: { xs: 6, sm: 8, md: 10 },
                    bgcolor: "primary.main",
                    background: `linear-gradient(90deg, ${theme.palette.background.paper}, ${theme.palette.secondary.main})`,
                }}
            />

            <Box sx={{ p: { xs: 2.5, sm: 3, md: 4, lg: 5 } }}>
                <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} alignItems="center">
                    <Grid item xs={12} sm={12} md="auto" sx={{ display: "flex", justifyContent: "center" }}>
                        <Avatar
                            src={foto}
                            alt={nome_usuario}
                            sx={{
                                width: { xs: 100, sm: 120, md: 140 },
                                height: { xs: 100, sm: 120, md: 140 },
                                border: "4px solid",
                                borderColor: "background.paper",
                                boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
                            }}
                        />
                    </Grid>

                    <Grid item xs={12} sm={12} md>
                        <Box>
                            <Stack
                                direction={{ xs: "column", sm: "row" }}
                                alignItems={{ xs: "center", sm: "flex-start", md: "center" }}
                                justifyContent="space-between"
                                spacing={2}
                                sx={{ mb: 2 }}
                            >
                                <Box sx={{ textAlign: { xs: "center", sm: "left" }, width: { xs: "100%", sm: "auto" } }}>
                                    <Typography
                                        variant={isMobile ? "h5" : isTablet ? "h4" : "h4"}
                                        fontWeight="800"
                                        sx={{
                                            lineHeight: 1.2,
                                            wordBreak: "break-word",
                                        }}
                                    >
                                        {nome_usuario}
                                    </Typography>
                                    {localizacao && (
                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                            sx={{
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: { xs: "center", sm: "flex-start" },
                                                mt: 0.5,
                                                gap: 0.5,
                                            }}
                                        >
                                            <LocationOn fontSize="small" /> {localizacao}
                                        </Typography>
                                    )}
                                </Box>

                                <Button
                                    variant="contained"
                                    color="secondary"
                                    size="small"
                                    fullWidth={isMobile}
                                    endIcon={<OpenInNew />}
                                    onClick={() => window.open(url, "_blank")}
                                    sx={{
                                        borderRadius: 2,
                                        textTransform: "none",
                                        fontWeight: "bold",
                                        px: 1,
                                        py: 1,
                                    }}
                                >
                                    Ver Perfil
                                </Button>
                            </Stack>

                            <Typography
                                variant={isMobile ? "body2" : "body1"}
                                color="text.secondary"
                                sx={{
                                    mb: { xs: 2, sm: 3 },
                                    fontStyle: bio ? "italic" : "normal",
                                    textAlign: { xs: "center", sm: "left" },
                                    lineHeight: 1.6,
                                }}
                            >
                                {bio || "Este usuário não possui uma biografia."}
                            </Typography>

                            <Divider sx={{ my: { xs: 2, sm: 3 } }} />

                            <Box
                                sx={{
                                    display: "flex",
                                    flexWrap: { xs: "wrap", sm: "nowrap" },
                                    justifyContent: { xs: "space-around", sm: "flex-start" },
                                    gap: { xs: 2, sm: 3, md: 4 },
                                    mb: { xs: 2, sm: 3 },
                                }}
                            >
                                <Box sx={{ textAlign: "center", minWidth: { xs: 80, sm: 100 } }}>
                                    <Typography
                                        variant="caption"
                                        color="text.secondary"
                                        sx={{
                                            textTransform: "uppercase",
                                            letterSpacing: 0.5,
                                            fontSize: { xs: "0.65rem", sm: "0.75rem" },
                                            display: "block",
                                            mb: 0.5,
                                        }}
                                    >
                                        Repositórios
                                    </Typography>
                                    <Typography variant={isMobile ? "h6" : "h5"} fontWeight="bold" color="text.secondary">
                                        {repositorios_publicos}
                                    </Typography>
                                </Box>

                                <Box sx={{ textAlign: "center", minWidth: { xs: 80, sm: 100 } }}>
                                    <Typography
                                        variant="caption"
                                        color="text.secondary"
                                        sx={{
                                            textTransform: "uppercase",
                                            letterSpacing: 0.5,
                                            fontSize: { xs: "0.65rem", sm: "0.75rem" },
                                            display: "block",
                                            mb: 0.5,
                                        }}
                                    >
                                        Seguidores
                                    </Typography>
                                    <Typography variant={isMobile ? "h6" : "h5"} fontWeight="bold" color="text.secondary">
                                        {seguidores}
                                    </Typography>
                                </Box>

                                <Box sx={{ textAlign: "center", minWidth: { xs: 80, sm: 100 } }}>
                                    <Typography
                                        variant="caption"
                                        color="text.secondary"
                                        sx={{
                                            textTransform: "uppercase",
                                            letterSpacing: 0.5,
                                            fontSize: { xs: "0.65rem", sm: "0.75rem" },
                                            display: "block",
                                            mb: 0.5,
                                        }}
                                    >
                                        Seguindo
                                    </Typography>
                                    <Typography variant={isMobile ? "h6" : "h5"} fontWeight="bold" color="text.secondary">
                                        {seguindo}
                                    </Typography>
                                </Box>
                            </Box>

                            <Box sx={{ textAlign: { xs: "center", sm: "left", md: "right" } }}>
                                <Typography
                                    variant="caption"
                                    color="text.primary"
                                    sx={{
                                        display: "inline-flex",
                                        alignItems: "center",
                                        gap: 0.5,
                                        fontSize: { xs: "0.7rem", sm: "0.75rem" },
                                    }}
                                >
                                    <CalendarMonth fontSize="inherit" />
                                    Membro desde: {new Date(data_entrada).toLocaleDateString("pt-BR")}
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Paper>
    )
}
