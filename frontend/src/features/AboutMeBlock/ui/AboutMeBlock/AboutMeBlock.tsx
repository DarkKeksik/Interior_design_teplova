import type { FC } from "react"

import { RequestProjectBlock } from "@entities/index"
import { Headline } from "@shared/ui"

import * as Styled from "./AboutMeBlock.styled"

const dataAboutMe = [
  {
    title: "10 лет",
    description: (
      <span>
        Нахожу общий язык с клиентами <br /> на протяжении 10 лет!
      </span>
    ),
  },
  {
    title: "70+",
    description: (
      <span>
        Более 70 проектов <br /> реализованно в срок
      </span>
    ),
  },
  {
    title: "12",
    description: (
      <p>
        Двенадцать и более упоминаний
        <br />в СМИ и статей на популяпных дизайнерских сайтах
      </p>
    ),
  },
]

const AboutMeBlock: FC = () => {
  return (
    <Styled.AboutMeBlock>
      <Styled.Headline>Oбо мне</Styled.Headline>
      <Styled.InfoBlocks>
        {dataAboutMe.map(({ title, description }) => (
          <Styled.InfoBlock>
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
