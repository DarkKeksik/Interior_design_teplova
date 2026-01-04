import type { FC } from "react"

import { hooksData } from "@shared/hooks"
import { SectionBlack, Headline } from "@shared/ui"

import { BackgroundVideo } from "../"
import * as Styled from "./WelcomeSection.styled.ts"

type TDataBackend = {
  data: {
    title: string
    description: string
  }
}

const WelcomeSection: FC = () => {
  const { dataBackend } = hooksData.useAxios<TDataBackend>({ url: "/page-main-info" })

  return (
    <Styled.WelcomeSection as={SectionBlack} isPadding={false}>
      <BackgroundVideo />
      <Styled.BackgroundDark />

      <Styled.Content>
        <Styled.Texts>
          <Headline>{dataBackend?.data?.title}</Headline>
          <Styled.Description>{dataBackend?.data?.description}</Styled.Description>
        </Styled.Texts>
      </Styled.Content>
    </Styled.WelcomeSection>
  )
}

export default WelcomeSection
