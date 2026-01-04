import { ThemeProvider, createTheme } from '@mui/material/styles'; // PROVEDOR DO TEMA E FUNÇÃO QUE CRIA O TEMA

type ThemeProps = {
  children: React.ReactNode
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#181717',       // mantém o tom do logo GitHub
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#0366d6',       // azul GitHub
      contrastText: '#ffffff',
    },
    background: {
      default: '#0d1117',    // fundo geral
      paper: '#161b22',      // fundo dos cards/paper
    },
    text: {
      primary: '#c9d1d9',    // texto principal claro
      secondary: '#8b949e',  // texto secundário apagado
    },
    success: {
      main: '#28a745',       // verde GitHub
    },
    error: {
      main: '#d73a49',       // vermelho GitHub
    },
    warning: {
      main: '#ffd33d',       // amarelo GitHub
    },
    info: {
      main: '#79b8ff',       // azul claro GitHub
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
  components: {
    MuiTextField: { // AJuste na cor do <TextField/> quando esta em Dark
      styleOverrides: {
        root: {
          '& .MuiInputLabel-root': {
            color: '#8b949e', // Cor do label padrão no modo escuro
          },
          '& .MuiInputLabel-root.Mui-focused': {
            color: '#8b949e', // Cor do label ao focar no modo escuro
          },
          '& .MuiInputBase-input': {
            color: '#8b949e', // Cor do texto digitado no modo escuro
          },
          '& .MuiOutlinedInput-root': {
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: '#8b949e', // Cor da borda padrão
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: '#8b949e', // Cor da borda no hover
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: '#8b949e !important', // Cor da borda ao focar
            },
          }
        },
      },
    },
  },
});

export function Theme({ children }: ThemeProps) {
  return <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>;
}
