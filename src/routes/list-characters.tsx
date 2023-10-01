
import { CharacterFolder } from "@/components/character-folder";
import { FoldersWrapper } from "@/components/character-folder/character-folder.styled";
import { useCharacterStore } from "@/store/store";

export const ListCharacters = () => {
  const characters = useCharacterStore(state => state.characters)
  
  return (
    <div style={{width: '100%'}}>
      <FoldersWrapper>{characters.map(({id, name}, index) => <CharacterFolder order={index} key={id} label={name} id={id} />)}</FoldersWrapper>
    </div>
  )
}