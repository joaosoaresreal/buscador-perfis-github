import { CssBaseline } from "@mui/material"
import { Perfil } from "./pages/Perfil"

import { Theme } from "./theme/ThemeProvider"

function App() {

  return (
    <>
      <Theme>
        <CssBaseline />
        <Perfil />
      </Theme>
    </>
  )
}

export default App
