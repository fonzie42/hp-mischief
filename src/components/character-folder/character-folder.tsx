import { FC } from "react"

import { Wrapper } from "./character-folder.styled"
import { CharacterFolderProps } from "./types"

const CharacterFolder: FC<CharacterFolderProps> = ({ label, onClickCallback }) => {
  return <Wrapper onClick={onClickCallback}>{label}</Wrapper>
}

export default CharacterFolder
