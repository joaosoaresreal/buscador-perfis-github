import { CssBaseline } from "@mui/material"
import { Perfil } from "./pages/Perfil"

import { Theme } from "./theme/ThemeProvider"
import Footer from "./components/Footer"

function App() {

  return (
    <>
      <Theme>
        <CssBaseline />
        <Perfil />
        <Footer />
      </Theme>
    </>
  )
}

export default App
