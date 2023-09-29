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
