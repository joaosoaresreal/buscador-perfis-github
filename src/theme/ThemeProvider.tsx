import { indigo } from '@mui/material/colors'; // PALETA DE CORES
import { ThemeProvider, createTheme } from '@mui/material/styles'; // PROVEDOR DO TEMA E FUNÇÃO QUE CRIA O TEMA

type ThemeProps = {
    children:React.ReactNode
}

const theme = createTheme({
  palette: {
    primary: {
      main: indigo[800],
    },
    secondary:{
        main: indigo[400],
    }
  },
});

export function Theme({children}:ThemeProps) {
  return <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>;
}
