import { createGlobalStyle } from "styled-components"
import reset from "styled-reset"

const GlobalStyle = createGlobalStyle`
    ${reset}

    * {
        font-family: ${({ theme }) => theme.main && theme.main.font_family_text};
        color: ${({ theme }) => theme.main && theme.main.color_text};
        box-sizing: border-box;
    }

    a {
        text-decoration: none;
    }

    .flex-center-center {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .h-w-100 {
        height: 100%;
        width: 100%;
    }

    .p-20 {
        padding: 20px;
    }
`

export default GlobalStyle
