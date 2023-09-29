import { Character, CharacterValidator } from "../../types/character";

export const ParseDataToCharacter = (rawData: unknown): Character | null => {
  if (!rawData || typeof rawData !== "object") {
    return null;
  }

  const {
    id,
    name,
    species,
    gender,
    house,
    dateOfBirth,
    yearOfBirth,
    wizard,
    ancestry,
    eyeColour,
    hairColour,
    wand,
    patronus,
    hogwartsStudent,
    hogwartsStaff,
    actor,
    alive,
    image,
    alternate_names: alternateNames,
    alternate_actors: alternateActors,
  } = rawData as any;

  const maybeCharacter = {
    id,
    name,
    species,
    gender,
    house: house || undefined,
    dateOfBirth: dateOfBirth || undefined,
    yearOfBirth: yearOfBirth || undefined,
    wizard,
    ancestry: ancestry || undefined,
    eyeColour: eyeColour || undefined,
    hairColour: hairColour || undefined,
    wand,
    patronus: patronus || undefined,
    hogwartsStudent,
    hogwartsStaff,
    actor: actor || undefined,
    alive,
    image,
    alternateNames,
    alternateActors,
  } as Character;

  const isValid = (
    Object.keys(CharacterValidator) as Array<keyof Character>
  ).reduce((previous, key) => {
    const hasCorrectProperty = CharacterValidator[key](maybeCharacter[key]);
    return hasCorrectProperty && previous;
  }, true);

  return isValid ? maybeCharacter : null;
};
