import { createGlobalStyle } from "styled-components"
import reset from "styled-reset"

import { fontFamilies } from "./fonts.styled"

const GlobalStyle = createGlobalStyle`
    ${reset}
    ${fontFamilies}

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

    @supports selector(::-webkit-scrollbar) {
        body {
            &::-webkit-scrollbar {
                background: ${({ theme }) => theme.main && theme.main.background_black};
                width: 8px;
                border-radius: 0;
            }
            &::-webkit-scrollbar-thumb {
                background: ${({ theme }) => theme.main && theme.main.background_white};
                width: 10px;
                border-radius: 5px;
            }
        }
    }
    
    body {
        background-color: ${({ theme }) => theme.main.background_black_extra};

        &:has([aria-modal="true"]) {
            overflow: hidden;
        }
    }


`

export default GlobalStyle
