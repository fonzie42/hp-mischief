import { FC } from "react"

import { Wrapper } from "./character-folder.styled"
import { CharacterFolderProps } from "./types"

const MAX_ANIMATION = 30

const CharacterFolder: FC<CharacterFolderProps> = ({ label, id, order }) => {
  const shouldAnimate = order < MAX_ANIMATION
  const animationDelay = shouldAnimate ? `${order*0.09}s` : null

  return <Wrapper to={`character/${id}`} animationDelay={animationDelay}>{label}</Wrapper>
}

export default CharacterFolder
