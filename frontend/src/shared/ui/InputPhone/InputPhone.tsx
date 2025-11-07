import type { FC } from "react"
import { useState } from "react"

import ReactInput from "input-format/react"
import { parseDigit, templateParser, templateFormatter } from "input-format"

import * as Styled from "./InputPhone.styled"

const InputPhone: FC = () => {
  const [phone, setPhone] = useState<any>("")

  return (
    <Styled.Wrap>
      <Styled.InputPhone
        as={ReactInput}
        value={phone}
        onChange={setPhone}
        parse={templateParser("+x (xxx) xxx-xxxx", parseDigit)}
        format={templateFormatter("+7 (xxx) xxx-xxxx")}
        name="phone"
        placeholder="+7 (xxx) xxx-xxxx"
      />
    </Styled.Wrap>
  )
}

export default InputPhone
