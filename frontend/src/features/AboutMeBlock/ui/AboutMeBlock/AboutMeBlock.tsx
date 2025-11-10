import type { FC } from "react"

import { RequestProjectBlock } from "@entities/index"

import { dataAboutMe } from "../../config"

import * as Styled from "./AboutMeBlock.styled"

const AboutMeBlock: FC = () => {
  return (
    <Styled.AboutMeBlock>
      <Styled.Headline>Oбо мне</Styled.Headline>
      <Styled.InfoBlocks>
        {dataAboutMe.map(({ title, description }, id) => (
          <Styled.InfoBlock key={id}>
            <Styled.Title>{title}</Styled.Title>
            <Styled.Description>{description}</Styled.Description>
          </Styled.InfoBlock>
        ))}
        <RequestProjectBlock />
      </Styled.InfoBlocks>
    </Styled.AboutMeBlock>
  )
}

export default AboutMeBlock
