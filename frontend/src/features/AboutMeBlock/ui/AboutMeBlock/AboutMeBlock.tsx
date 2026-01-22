import type { FC } from "react"

import { hooksData } from "@shared/hooks"
import { RequestProjectBlock } from "@entities/index"
import { TitleSection, Preloader } from "@shared/ui"

import { dataAboutMe } from "../../config"

import * as Styled from "./AboutMeBlock.styled"

type TDataBackend = {
  data: {
    description: {
      title: string
      description: string
    }[]
  }
}

const AboutMeBlock: FC = () => {
  const { dataBackend, isLoading } = hooksData.useAxios<TDataBackend>({
    url: "/about-me?populate=description",
  })

  return (
    <Styled.AboutMeBlock>
      <TitleSection>Oбо мне</TitleSection>

      {isLoading ? (
        <Styled.WrapPreloader>
          <Preloader />
        </Styled.WrapPreloader>
      ) : (
        <Styled.InfoBlocks>
          {dataBackend?.data?.description.map(({ title, description }, id) => (
            <Styled.InfoBlock key={id}>
              <Styled.Title>{title}</Styled.Title>
              <Styled.Description>{description}</Styled.Description>
            </Styled.InfoBlock>
          ))}
          <RequestProjectBlock />
        </Styled.InfoBlocks>
      )}
    </Styled.AboutMeBlock>
  )
}

export default AboutMeBlock
