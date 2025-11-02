import type { FC } from "react"
import { ThemeProvider } from "styled-components"
import { RouterProvider } from "react-router-dom"

import router from "./routing/Routes"

import themes from "./themes/themes"
import GlobalStyle from "./styles/global.styled"

const App: FC = () => (
  <ThemeProvider theme={themes}>
    <GlobalStyle />
    <RouterProvider router={router} />
  </ThemeProvider>
)

export default App
