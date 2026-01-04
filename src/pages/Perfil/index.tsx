import { Box, Button, TextField, Avatar, Typography, CircularProgress, useTheme, useMediaQuery, Grid, Paper, Snackbar, Alert, Container } from "@mui/material";
import { useState, FormEvent } from "react";
import api from "../../api/git";
import { BaseLayout } from "../../layout/BaseLayout"
import { Card } from "../../components/Card";
import { Clear, GitHub, Search } from "@mui/icons-material";

type Users = {
    avatar_url: string
    name: string
    html_url: string
    bio: string
    followers: string
    following: string
    public_repos: string
    location: string
    created_at: string
}

export function Perfil() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const [users, setUsers] = useState<Users>({
        avatar_url: "", html_url: "", name: "", bio: "", location: "",
        followers: "", following: "", public_repos: "", created_at: ""
    });
    const [isLoading, setIsLoading] = useState(false);
    const [isOpenAlert, setIsOpenAlert] = useState(false);
    const [alerta, setAlerta] = useState<{ mensagem: string; tipo: any }>({
        mensagem: '',
        tipo: '',
    });

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault() // PRA ELE Ñ FAZER A SUBMISSÃO
        const form = event.currentTarget
        const inputUserName: HTMLInputElement = form.userName

        if (inputUserName.value.trim() === '') {
            setAlerta({
                tipo: 'error',
                mensagem: 'Informe o nome de usuário'
            });
            return setIsOpenAlert(true);
        } else {
            setIsLoading(true)

            await api.get(inputUserName.value).then((response) => {
                setUsers(response.data);
                setIsLoading(false);
            }).catch(() => {
                setAlerta({
                    tipo: 'error',
                    mensagem: 'Erro ao buscar o nome de usuário informado. Confira se é um nome de usuário válido'
                });
                setIsOpenAlert(true);
                setIsLoading(false);
            })
        }

        inputUserName.value = ""
    }

    const limparBusca = () => {
        setUsers({
            avatar_url: "", html_url: "", name: "", bio: "", location: "",
            followers: "", following: "", public_repos: "", created_at: ""
        })
    }

    return (
        <BaseLayout appBarTitle="Buscador de Perfis">
            <Box display="flex" width="100%" paddingBottom={isMobile ? 8 : 0}>
                <Grid container spacing={2} alignItems="flex-start" justifyContent="center">

                    <Grid item xs={11.5} md={5} lg={4}>
                        <Paper
                            elevation={4}
                            sx={{
                                p: 4,
                                borderRadius: 4,
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 2
                            }}
                        >
                            <Box sx={{ mb: 2 }}>
                                <Typography variant="h5" fontWeight="bold" gutterBottom>
                                    Buscar Dev
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Digite o username do GitHub abaixo para ver os detalhes do perfil.
                                </Typography>
                            </Box>

                            <Box
                                component="form"
                                onSubmit={handleSubmit}
                                display="flex"
                                flexDirection="column"
                                gap={1}
                            >
                                <TextField
                                    name="userName"
                                    label="Nome de Usuário"
                                    variant="outlined"
                                    fullWidth
                                />

                                <Box display="flex" gap={1}>
                                    <Button
                                        onClick={() => limparBusca()}
                                        variant="contained"
                                        size="large"
                                        fullWidth
                                        startIcon={<Clear />}
                                        sx={{ py: 1.5, borderRadius: 2, fontWeight: 'bold' }}
                                        color="secondary"
                                        disabled={users.name == ''}
                                    >
                                        Limpar Busca
                                    </Button>
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        size="large"
                                        fullWidth
                                        startIcon={<Search />}
                                        sx={{ py: 1.5, borderRadius: 2, fontWeight: 'bold' }}
                                        color="secondary"
                                    >
                                        Buscar
                                    </Button>
                                </Box>
                            </Box>
                        </Paper>
                    </Grid>

                    <Grid item xs={11.5} md={7} lg={6}>
                        {isLoading ? (
                            <Box sx={{ textAlign: 'center', py: 10 }}>
                                <CircularProgress />
                                <Typography sx={{ mt: 2 }}>Buscando dados...</Typography>
                            </Box>
                        ) : users.name ? (
                            // O Card entra aqui
                            <Card
                                foto={users.avatar_url}
                                nome_usuario={users.name}
                                bio={users.bio}
                                repositorios_publicos={users.public_repos}
                                seguindo={users.following}
                                seguidores={users.followers}
                                url={users.html_url}
                                data_entrada={users.created_at}
                                localizacao={users.location}
                            />
                        ) : (
                            // Estado vazio (Placeholder)
                            <Paper
                                elevation={0}
                                variant="outlined"
                                sx={{
                                    p: 6,
                                    borderRadius: 4,
                                    borderStyle: 'dashed',
                                    textAlign: 'center',
                                    minHeight: 300,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}
                            >
                                <GitHub sx={{ fontSize: 60, color: 'text.disabled', mb: 2 }} />
                                <Typography color="text.secondary">
                                    O perfil aparecerá aqui.
                                </Typography>
                            </Paper>
                        )}
                    </Grid>
                </Grid>
            </Box>

            <Snackbar open={isOpenAlert} autoHideDuration={3000} onClose={() => setIsOpenAlert(false)}>
                <Alert
                    severity={alerta.tipo}
                    variant="filled"
                    onClose={() => setIsOpenAlert(false)}
                    sx={{ width: '100%', backgroundColor: theme.palette.primary.main }}
                >
                    {alerta.mensagem}
                </Alert>
            </Snackbar>
        </BaseLayout>
    )
}