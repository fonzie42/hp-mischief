import { FC } from "react"

import * as S from "./spinner.styled"

export const Spinner: FC = () => {
  return (
    <S.AnimationWrapper>
      <S.Veil>
        <S.Stone />
        <S.Wand />
      </S.Veil>
    </S.AnimationWrapper>
  )
}
