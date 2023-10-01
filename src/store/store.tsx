import { Character } from "@/types/character"
import { create } from "zustand"

type State = {
  characters: Character[];
  setCharacters: (characterData: Character[]) => void;
  updateCharacter: (characterData: Character) => void;
};

function upsert<T>(
  data: T[],
  item: T,
  filterFunction: (argument: T) => boolean
) {
  const newData = data.filter(filterFunction)
  return [...newData, item]
}

export const useCharacterStore = create<State>((set) => ({
  characters: [],

  setCharacters: (characterData: Character[]) =>
    set((_state) => ({ characters: characterData })),

  updateCharacter: (characterData: Character) =>
    set((state) => ({
      characters: upsert(
        state.characters,
        characterData,
        (item) => item.id !== characterData.id
      ),
    })),
}))
