import type { FC } from "react"

import { Link } from "react-router-dom"

import { TitleSection, Button } from "@shared/ui"
import { hooksVirtualScroll } from "@shared/hooks"

import * as Styled from "./NotFoundPage.styled"

const NotFoundPage: FC = () => {
  hooksVirtualScroll.useScrollTop({})

  return (
    <Styled.PageWrap>
      <Styled.BoxScene>
        <Styled.Box>
          <Styled.Front>4</Styled.Front>
          <Styled.Back>0</Styled.Back>
          <Styled.Right>4</Styled.Right>
          <Styled.Left>0</Styled.Left>
          <Styled.Top>
            <Styled.SubText>err</Styled.SubText>0<Styled.SubText>or</Styled.SubText>
          </Styled.Top>
          <Styled.Bottom>0</Styled.Bottom>
        </Styled.Box>
      </Styled.BoxScene>

      <Styled.Description>
        <Styled.Title as={TitleSection}>404 | Not Found</Styled.Title>
        <Link to="/">
          <Button>На главную</Button>
        </Link>
      </Styled.Description>
    </Styled.PageWrap>
  )
}

export default NotFoundPage
