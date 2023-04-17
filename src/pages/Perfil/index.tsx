import { Box, Button, TextField, Avatar, Typography } from "@mui/material";
import { useState, useRef } from "react";
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';
import { getUsers } from "../../api/git";
//import { CardPerfil } from "../../components/CardPerfil";
import { BaseLayout } from "../../layout/BaseLayout"
import { Card } from "../../components/Card";

type UserProps = {
    user: {
        login: string
        avatar_url: string
        name: string
        html_url: string
    }
}

const queryClient = new QueryClient()

export function Perfil() {
    const [users, setUsers] = useState([])
    const inputRef = useRef(null)
    //const [usersLocalizar, setUsersLocalizar] = useState([])
    //const [isLoading, setIsLoading] = useState<Boolean>(false)

    /*    
    useEffect(() => {
        async function Localizar() {
            setIsLoading(true)
            setUsersLocalizar(await getUsers(users))
            setIsLoading(false)
        }
        Localizar()
    }, [])
    */

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

    const handleClick = () => {
        const username = inputRef.current
        console.log(username)
    }

    /*
    const { data, isLoading } = useQuery({
        queryKey: ["user-github"],
        queryFn: () => { getUsers(users) }
    })*/


    return (
        <>
            <QueryClientProvider client={queryClient}>
                <BaseLayout appBarTitle="Buscador de Perfis">
                    <Card>
                        <Box
                            sx={{
                                display: "grid",
                                alignItems: "center",
                                justifyContent: "center",
                                padding: "6px",
                                gap: "2%",
                                color: "red"
                            }
                            }
                        >

                            <TextField value={setUsers} ref={inputRef} fullWidth label="Nome de Usuário" id="fullWidth" />
                            <Button onClick={handleClick} size="large" color="primary" >buscar</Button>
                        </Box>

                        <Box sx={{
                            backgroundColor: 'primary.dark',
                            gap: "4%"
                        }} display={"grid"} alignItems={"center"} justifyItems={"center"} padding={6}>

                            <Avatar src="" sx={{ width: 130, height: 130 }} />
                            <Typography gutterBottom variant="h4" component="div">
                                NOME USER
                            </Typography>
                            <a target="_blank" href={`https://api.github.com/users/${users}`}>Perfil no GitHub</a>

                        </Box>

                    </Card>


                    {/*<CardPerfil />*/}
                </BaseLayout>
            </QueryClientProvider>
        </>
    )
}