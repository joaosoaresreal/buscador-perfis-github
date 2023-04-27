import { blueGrey } from '@mui/material/colors'; // PALETA DE CORES
import { ThemeProvider, createTheme } from '@mui/material/styles'; // PROVEDOR DO TEMA E FUNÇÃO QUE CRIA O TEMA

type ThemeProps = {
    children:React.ReactNode
}

const theme = createTheme({
  palette: {
    primary: {
      main: blueGrey[900],
    },
    secondary:{
        main: blueGrey[300],
    },
    background:{
      default: blueGrey[100]
    }
  },
});

export function Theme({children}:ThemeProps) {
  return <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>;
}
