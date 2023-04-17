import { Box } from '@mui/material'

type CardsProps = {
    children: React.ReactNode;
}

export function Card({ children }: CardsProps) {
    return (
        <>
            <Box sx={
                { display: 'grid',
                border: 3, 
                padding: "1%", 
                gap: "2%" }
            }
            >
                {children}
            </Box>
        </>
    )
}