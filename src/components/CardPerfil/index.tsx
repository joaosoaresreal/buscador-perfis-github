import { Avatar, Box, Button, TextField, Typography } from "@mui/material";
import { Card } from "../Card";

export function CardPefil() {
    return (
        <>
            <Card>
                <Box sx={{
                    
                    backgroundColor: 'secondary.dark'
                }} display={"grid"} alignItems={"center"} justifyContent={"center"} padding={6}>
                    <TextField fullWidth label="Nome de Usuário" id="fullWidth" />
                    <Button size="large" color="primary">buscar</Button>
                </Box>


                <Box sx={{

                    backgroundColor: 'primary.dark'
                }} display={"grid"} alignItems={"center"} justifyItems={"center"} padding={6}>

                        <Avatar src="https://randomuser.me/api/portraits/men/3.jpg" sx={{ width: 130, height: 130 }} />
                        <Typography gutterBottom variant="h4" component="div">
                            NOME USER
                        </Typography>
                        <Button>Perfil no GitHub</Button>

                </Box>
            </Card>
        </>
    )
}