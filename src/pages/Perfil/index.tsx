import { Box, Button, TextField } from "@mui/material";
import { useState, useEffect } from "react";
import { getUsers } from "../../api/git";
import { CardPerfil } from "../../components/CardPerfil";
import { BaseLayout } from "../../layout/BaseLayout"

export function Perfil() {
    const [users, setUsers] = useState('')
    const [usersLocalizar, setUsersLocalizar] = useState([])
    const [isLoading, setIsLoading] = useState<Boolean>(false)

    
    useEffect(() => {
        async function Localizar() {
            setIsLoading(true)
            setUsersLocalizar(await getUsers(users))
            setIsLoading(false)
        }
        Localizar()
    }, [])
    

    /*
    async function Localizar() {
        setIsLoading(true)
        const localizar = await getUsers(users)
        setIsLoading(false)
  
        if (localizar) {
          setUsersLocalizar(localizar)
        } else {
          setUsersLocalizar([])
        }
  
    }
    */


    return (
        <>
            <BaseLayout appBarTitle="Buscador de Perfis">
                <Box sx={{
                    backgroundColor: 'secondary.dark'
                }} display={"grid"} alignItems={"center"} justifyContent={"center"} padding={6}>
                    <TextField onChange={(e)=> setUsers(e.target.value)} value={users} fullWidth label="Nome de Usuário" id="fullWidth"/>
                    <Button size="large" color="primary" onClick={Localizar}>buscar</Button>
                </Box>

                <CardPerfil />
            </BaseLayout>
        </>
    )
}