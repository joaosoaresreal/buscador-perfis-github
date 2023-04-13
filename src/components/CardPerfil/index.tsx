import { Avatar, Box, Button, TextField, Typography } from "@mui/material";
import { Card } from "../Card";

type CardPerfilProps = {
    user: {
        login: string
        avatar_url: string
        name: string
        html_url: string
    }
}

export function CardPerfil({ user }: CardPerfilProps) {
    return (
        <>
            <Card>



                <Box sx={{

                    backgroundColor: 'primary.dark'
                }} display={"grid"} alignItems={"center"} justifyItems={"center"} padding={6}>

                    <Avatar src="" sx={{ width: 130, height: 130 }} />
                    <Typography gutterBottom variant="h4" component="div">
                        NOME USER
                    </Typography>
                    <Button>Perfil no GitHub</Button>

                </Box>
            </Card>
        </>
    )
}