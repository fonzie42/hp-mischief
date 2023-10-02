
import { CharacterFolder } from "@/components/character-folder"
import { FoldersWrapper } from "@/components/character-folder/character-folder.styled"
import { useBoundStore } from "@/store/store"

export const ListCharacters = () => {
  const { characters } = useBoundStore((state) => state)
  return (
    <div style={{width: '100%'}}>
      <FoldersWrapper>{characters.map(({id, name}, index) => <CharacterFolder order={index} key={id} label={name} id={id} />)}</FoldersWrapper>
    </div>
  )
}