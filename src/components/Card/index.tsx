import { List } from '@mui/material'

type CardsProps = {
    children: React.ReactNode;
}

export function Card({children}:CardsProps) {
    return (
        <>
            <List sx={{display:'', border: 3, padding:1, gap: 2}}>
                {children}
            </List>
        </>
    )
}