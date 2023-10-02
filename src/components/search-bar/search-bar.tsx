import { FC } from "react"

import * as S from "./search-bar.styled"
import { SearchBarProps } from "./types"

const SearchBar: FC<SearchBarProps> = ({ onChangeCallback, value, label }) => {
  return (
    <S.Wrapper>
      <S.Text>{label}</S.Text>
      <S.Input
        onChange={(e) => {
          onChangeCallback(e.target.value)
        }}
        value={value}
      />
    </S.Wrapper>
  )
}

export default SearchBar
