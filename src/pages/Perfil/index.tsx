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

}

export function Perfil() {
    const [users, setUsers] = useState<Users>({ avatar_url: "", html_url: "", name: "" })
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
                            <Button type="submit" fullWidth size="large" color="primary">buscar</Button>
                        </form>
                    </Box>

                    <Box sx={{
                        gap: "4%"
                    }} display={"grid"} alignItems={"center"} justifyItems={"center"} padding={6}>

                        {isLoading ? <CircularProgress /> : (
                            <>
                                <Avatar src={users.avatar_url} sx={{ width: 130, height: 130 }} />
                                <Typography gutterBottom variant="h4" component="div">
                                    {users.name}
                                </Typography>
                                <a target="_blank" href={users.html_url}>Perfil no GitHub</a>
                            </>
                        )}


                    </Box>
                </Card>
            </BaseLayout>
        </>
    )
}