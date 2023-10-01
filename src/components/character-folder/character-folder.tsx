import { FC } from "react"

import { Wrapper } from "./character-folder.styled"
import { CharacterFolderProps } from "./types"

const CharacterFolder: FC<CharacterFolderProps> = ({ label, id }) => {
  return <Wrapper to={`character/${id}`}>{label}</Wrapper>
}

export default CharacterFolder
