import { Box, Button, TextField, Avatar, Typography, CircularProgress } from "@mui/material";
import { useState, FormEvent } from "react";
import { getUsers } from "../../api/git";
//import { CardPerfil } from "../../components/CardPerfil";
import { BaseLayout } from "../../layout/BaseLayout"
import { Card } from "../../components/Card";

type Users = {
    //login: string
    avatar_url: string
    name: string
    html_url: string
    bio: string
    followers: string
    following: string
    public_repos: string

}

export function Perfil() {
    const [users, setUsers] = useState<Users>({
        avatar_url: "", html_url: "", name: "", bio: "",
        followers: "", following: "", public_repos: ""
    })
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault() // PRA ELE Ñ FAZER A SUBMISSÃO
        const form = event.currentTarget
        const inputUserName: HTMLInputElement = form.userName
        setIsLoading(true)
        setUsers(await getUsers(inputUserName.value))
        setIsLoading(false)
    }

    return (
        <>
            <BaseLayout appBarTitle="Buscador de Perfis">
                <Card>
                    <Box
                        sx={{
                            display: "grid",
                            alignItems: "center",
                            justifyContent: "center",
                            padding: "10px",
                            gap: "2%",
                        }
                        }
                    >
                        <form onSubmit={handleSubmit}>
                            <TextField name="userName" fullWidth label="Nome de Usuário" id="fullWidth" />
                            <Button type="submit" variant="contained" fullWidth size="large" color='secondary'>buscar</Button>
                        </form>
                    </Box>

                    <Box sx={{
                        gap: "4%",
                    }} display={"grid"} alignItems={"center"} justifyItems={"center"} padding={6}>

                        {isLoading ? <CircularProgress /> : (
                            <>
                                <Avatar src={users.avatar_url} sx={{ width: 130, height: 130 }} />
                                <Typography gutterBottom variant="h4" textAlign={"center"} component="div">
                                    {users.name}
                                </Typography>
                                <Typography variant="h6" textAlign={"center"}>
                                    {users.bio}
                                </Typography>
                                <Box>
                                    <Typography>
                                        Seguindo: {users.followers}
                                    </Typography>
                                    <Typography>
                                        Seguidores: {users.following}
                                    </Typography>
                                    <Typography>
                                        Repositorios: {users.public_repos}
                                    </Typography>
                                </Box>
                                <a target="_blank" href={users.html_url}>Perfil no GitHub</a>
                            </>
                        )}


                    </Box>
                </Card>
            </BaseLayout>
        </>
    )
}