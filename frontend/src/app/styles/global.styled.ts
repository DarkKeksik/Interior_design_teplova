import { createGlobalStyle } from "styled-components"
import reset from "styled-reset"

import { mixinsMediaStyled } from "@shared/ui"

import { fontFamilies } from "./fonts.styled"

const GlobalStyle = createGlobalStyle`
    ${reset}
    ${fontFamilies}

    * {
        color: ${({ theme }) => theme.main && theme.main.color_text};
        box-sizing: border-box;
    }

    body {
        font-family: ${({ theme }) => theme.main && theme.main.font_family_text};
    }


    a {
        text-decoration: none;
    }

    @supports selector(::-webkit-scrollbar) {
        *::-webkit-scrollbar {
            background: ${({ theme }) => theme.main && theme.main.background_black};
            width: 8px;
            border-radius: 0;
        }

        *::-webkit-scrollbar-thumb {
            background: ${({ theme }) => theme.main && theme.main.background_white};
            width: 10px;
            border-radius: 5px;
        }
    }

    body {
        background-color: ${({ theme }) => theme.main.background_black_extra};

        &:has([aria-modal="true"]) {
            overflow: hidden;
        }
    }

    ${mixinsMediaStyled.media.mobile} {
        html {
            font-size: 14px;
        }

        body {
            overflow-x: hidden;
        }
    }


`

export default GlobalStyle
