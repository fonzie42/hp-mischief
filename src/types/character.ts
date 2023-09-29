import {
  Gender,
  House,
  Species,
  Ancestry,
  EyeColour,
  HairColour,
  Wand,
  Patronus,
} from "./base";

import {
  isString,
  isNumber,
  isBoolean,
  isStringArray,
  isOfGender,
  isOfSpecies,
  isOfPatronus,
  isOfHouse,
  isOfAncestry,
  isOfEyeColour,
  isOfHairColour,
  optional,
} from "./type-guards";

export type Character = {
  id: string;
  name: string;
  alternateNames?: string[];
  species: Species;
  gender: Gender;
  house?: House;
  dateOfBirth?: string;
  yearOfBirth?: number;
  wizard: boolean;
  ancestry?: Ancestry;
  eyeColour?: EyeColour;
  hairColour?: HairColour;
  wand?: Wand;
  patronus?: Patronus;
  hogwartsStudent: boolean;
  hogwartsStaff: boolean;
  actor?: string;
  alternateActors?: string[];
  alive: boolean;
  image: string;
};

export const CharacterValidator: Record<
  keyof Character,
  (property: unknown) => boolean
> = {
  id: isString,
  name: isString,
  dateOfBirth: (data) => optional(data, isString),
  yearOfBirth: (data) => optional(data, isNumber),
  wizard: isBoolean,
  hogwartsStudent: isBoolean,
  hogwartsStaff: isBoolean,
  actor:  (data) => optional(data, isString),
  alive: isBoolean,
  image: isString,
  alternateNames:  (data) => optional(data, isStringArray),
  alternateActors:  (data) => optional(data, isStringArray),
  species: isOfSpecies,
  gender: isOfGender,
  house:  (data) => optional(data, isOfHouse),
  ancestry:  (data) => optional(data, isOfAncestry),
  eyeColour:  (data) => optional(data, isOfEyeColour),
  hairColour:  (data) => optional(data, isOfHairColour),
  wand: () => true, // @todo fix this
  patronus:  (data) => optional(data, isOfPatronus),
};
