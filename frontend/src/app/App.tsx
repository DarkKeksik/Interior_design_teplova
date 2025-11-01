import type { FC } from "react"
import { ThemeProvider } from "styled-components"

import themes from "./themes/themes"
import GlobalStyle from "./styles/global.styled"

import MainPage from "@pages/MainPage/MainPage"

/** @TODO Should make BuildProviderTree */
const App: FC = () => (
  <ThemeProvider theme={themes}>
    <GlobalStyle />
    <MainPage />
  </ThemeProvider>
)

export default App
