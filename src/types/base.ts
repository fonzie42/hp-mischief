import {
  ALL_SPECIES,
  ALL_GENDERS,
  ALL_HOUSES,
  ALL_ANCESTRIES,
  ALL_EYE_COLOUR,
  ALL_HAIR_COLOUR,
  ALL_WAND_WOOD,
  ALL_WAND_CORE,
  ALL_PATRONUS,
} from "./CONSTANTS";

export type Species = (typeof ALL_SPECIES)[number];

export type Gender = (typeof ALL_GENDERS)[number];

export type House = (typeof ALL_HOUSES)[number];

export type Ancestry = (typeof ALL_ANCESTRIES)[number];

export type EyeColour = (typeof ALL_EYE_COLOUR)[number];

export type HairColour = (typeof ALL_HAIR_COLOUR)[number];

export type WandWood = (typeof ALL_WAND_WOOD)[number];

export type WandCore = (typeof ALL_WAND_CORE)[number];

export type Wand = {
  wood: WandWood;
  core?: WandCore;
  length?: number;
};

export type Patronus = (typeof ALL_PATRONUS)[number];
