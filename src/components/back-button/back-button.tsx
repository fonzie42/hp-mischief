import { FC } from "react"

import * as S from "./back-button.styled"
import { useNavigate } from "react-router-dom"

export const BackButton: FC = () => {
  const navigate = useNavigate()

  return (
    <S.Wrapper>
      <S.Button onClick={() => navigate("/")}>Return to main page</S.Button>
      <S.Button onClick={() => navigate(-1)}>Go back</S.Button>
    </S.Wrapper>
  )
}
