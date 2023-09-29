import {
  ALL_ANCESTRIES,
  ALL_EYE_COLOUR,
  ALL_GENDERS,
  ALL_HAIR_COLOUR,
  ALL_HOUSES,
  ALL_PATRONUS,
  ALL_SPECIES,
  ALL_WAND_CORE,
  ALL_WAND_WOOD,
} from "./CONSTANTS";

import {
  Ancestry,
  EyeColour,
  Gender,
  HairColour,
  House,
  Patronus,
  Species,
  WandCore,
  WandWood,
} from "./base";
import { Character, CharacterValidator } from "./character";

export const optional = <T>(
  data: unknown,
  callback: (property: unknown) => property is T
): data is T | undefined => (data === undefined ? true : callback(data));

export const isString = (property: unknown): property is string =>
  typeof property === "string";

export const isNumber = (property: unknown): property is string =>
  typeof property === "number";

export const isBoolean = (property: unknown): property is string =>
  typeof property === "boolean";

export const isStringArray = (property: unknown): property is string[] => {
  if (!Array.isArray(property)) {
    console.log('not array', property)
    return false;
  }

  const hasInvalidValue = property.some((value) => typeof value !== "string")
  return !hasInvalidValue;

};

export const isObject = (value: unknown): value is object => {
  if (!value || typeof value !== "object") {
    return false;
  }
  return true;
};

export const isOfSpecies = (property: unknown): property is Species =>
  typeof property === "string" &&
  ALL_SPECIES.some((value) => value === property);

export const isOfGender = (property: unknown): property is Gender =>
  typeof property === "string" &&
  ALL_GENDERS.some((value) => value === property);

export const isOfHouse = (property: unknown): property is House =>
  typeof property === "string" &&
  ALL_HOUSES.some((value) => value === property);

export const isOfAncestry = (property: unknown): property is Ancestry =>
  typeof property === "string" &&
  ALL_ANCESTRIES.some((value) => value === property);

export const isOfEyeColour = (property: unknown): property is EyeColour =>
  typeof property === "string" &&
  ALL_EYE_COLOUR.some((value) => value === property);

export const isOfHairColour = (property: unknown): property is HairColour =>
  typeof property === "string" &&
  ALL_HAIR_COLOUR.some((value) => value === property);

export const isOfWandWood = (property: unknown): property is WandWood =>
  typeof property === "string" &&
  ALL_WAND_WOOD.some((value) => value === property);

export const isOfWandCore = (property: unknown): property is WandCore =>
  typeof property === "string" &&
  ALL_WAND_CORE.some((value) => value === property);

export const isOfPatronus = (property: unknown): property is Patronus =>
  typeof property === "string" &&
  ALL_PATRONUS.some((value) => value === property);

export const isCharacter = (data: unknown): data is Character => {
  const maybeCharacter = data as Character;
  const isValid = (
    Object.keys(CharacterValidator) as Array<keyof Character>
  ).reduce((previous, key) => {
    const hasCorrectProperty = CharacterValidator[key](maybeCharacter[key]);

    return hasCorrectProperty && previous;
  }, true);

  return isValid;
};
