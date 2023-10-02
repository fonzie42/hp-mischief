import { Character } from "@/types/character"
import { create, StateCreator } from "zustand"
import { upsert } from "./utils"
import { House } from "@/types/base"

import { persist } from "zustand/middleware"

type CharactersSlice = {
  characters: Character[];
  setCharacters: (characterData: Character[]) => void;
  updateCharacter: (characterData: Character) => void;

  allCharacters: Character[];
  setAllCharacters: (characterData: Character[]) => void;

  staff: Character[];

  students: Character[];
};

type UserSLice = {
  favorites: string[];
  setFavorites: (newFavorites: string[]) => void;
  addFavorites: (newFavorite: string) => void;
  removeFavorite: (favoriteToRemove: string) => void;

  house: House | null;
  setHouse: (newHouse: House | null) => void;
};

type Slices = CharactersSlice & UserSLice;

export const createCharactersSlice: StateCreator<
  Slices,
  [],
  [],
  CharactersSlice
> = (set) => ({
  allCharacters: [],
  characters: [],
  staff: [],
  students: [],

  setCharacters: (characterData: Character[]) =>
    set((_state) => ({ characters: characterData })),

  setAllCharacters: (characterData: Character[]) =>
    set((_state) => ({
      allCharacters: characterData,
      characters: characterData,
      staff: characterData.filter((item) => item.hogwartsStaff),
      students: characterData.filter((item) => item.hogwartsStudent),
    })),

  updateCharacter: (characterData: Character) =>
    set((state) => ({
      characters: upsert(
        state.characters,
        characterData,
        (item) => item.id !== characterData.id
      ),
    })),
})

export const createUserSlice: StateCreator<Slices, [], [], UserSLice> = (
  set
) => ({
  favorites: [],
  setFavorites: (newFavorites: string[]) =>
    set((_state) => ({ favorites: newFavorites })),
  addFavorites: (newFavorite: string) =>
    set((state) => ({
      favorites: [...new Set([...state.favorites, newFavorite])],
    })),
  removeFavorite: (favoriteToRemove: string) =>
    set((state) => ({
      favorites: state.favorites.filter((item) => item !== favoriteToRemove),
    })),
  house: null,
  setHouse: (newHouse) => set((_state) => ({ house: newHouse })),
})

export const useBoundStore = create<Slices>()(
  persist(
    (...a) => ({
      ...createCharactersSlice(...a),
      ...createUserSlice(...a),
    }),
    {
      name: "local-storage",
      partialize: (state) => ({
        favorites: state.favorites,
        house: state.house,
      }),
    }
  )
)
