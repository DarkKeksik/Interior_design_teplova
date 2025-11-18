import styled, { css } from "styled-components"

type TChartGantt = {
  widthCol: number
}

const commonStylesWidth = css`
  width: 100%;
`

const commonStylesBG = css``

export const ChartHeaderCustom = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  background: #2a2a2a;
  min-height: 50px;
  border-radius: 5px 5px 0 0;
  position: sticky;
  top: 50px;
  z-index: 1;
  border-bottom: 1px solid #fffff0;
  background: #1b1b1b;
`

export const ChartColsRowsCustom = styled.div`
  position: relative;
  border-radius: 0 0 5px 5px;
  background-color: #2a2a2a;
  box-shadow: 0 0 100px #1b1b1b inset;
  overflow: hidden;
`

export const RowsCustom = styled.div`
  position: absolute;
  top: 0;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Mount = styled.p`
  font-size: 0.875rem;
  text-align: center;
  border-right: 1px solid #fffff0;

  &:last-of-type {
    border-right: 0;
  }
`

export const ChartGantt = styled.div<TChartGantt>`
  font-family: ${({ theme }) => theme.main && theme.main.font_family_text};
  width: 100%;

  & {
    svg,
    ._9w8d5,
    ._3eULf,
    ._CZjuD {
      ${commonStylesWidth}
    }

    ._3zRJQ {
      fill: #fffff0;
      font-size: 1rem;
      font-weight: 400;
    }

    .grid {
      display: none;
    }

    .content {
      ${({ widthCol }) =>
        widthCol &&
        css`
          transform: translateX(-${widthCol}px);
        `}
    }

    ._CZjuD > svg {
      display: none;
    }

    .calendar {
      display: none;
    }

    .calendarTop {
      display: none;
    }

    ._3KcaM {
      fill: #fffff0;
      font-size: 1.1rem;
      transform: translateY(5px);
    }

    .today rect {
      fill: none;
    }

    ._9w8d5 {
      fill: #fffff0;
      transform: translateY(-10px);

      &:first-of-type {
        display: none;
      }
      &:last-of-type {
        display: none;
      }
    }

    ._35nLX {
      fill: ${({ theme }) => theme.main && theme.main.background_black_extra};
    }

    ._3ZbQT,
    ._2dZTy,
    ._35nLX,
    ._3_ygE {
      ${commonStylesBG}
    }

    ._3eULf {
      border-radius: 10px;
      overflow: hidden;
    }
  }
`
