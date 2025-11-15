import { createGlobalStyle } from "styled-components"
import reset from "styled-reset"

const GlobalStyle = createGlobalStyle`
    ${reset}

    * {
        font-family: ${({ theme }) => theme.main && theme.main.font_family_text};
        color: ${({ theme }) => theme.main && theme.main.color_text};
        box-sizing: border-box;

      /* cyrillic-ext */
      @font-face {
        font-family: 'Montserrat';
        font-style: italic;
        font-weight: 100 900;
        font-display: swap;
        src: url("./fonts/Montserrat_italic_ext.woff2") format('woff2');
        unicode-range: U+0460-052F, U+1C80-1C8A, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
      }
      
      /* cyrillic */
      @font-face {
        font-family: 'Montserrat';
        font-style: italic;
        font-weight: 100 900;
        font-display: swap;
        src: url("./fonts/Montserrat_italic.woff2") format('woff2');
        unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
      }
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
    }


`

export default GlobalStyle
