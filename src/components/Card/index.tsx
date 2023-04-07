import { List } from '@mui/material'

type CardsProps = {
    children: React.ReactNode;
}

export function Card({children}:CardsProps) {
    return (
        <>
            <List>
                {children}
            </List>
        </>
    )
}