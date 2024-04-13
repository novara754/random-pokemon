export type PokemonType =
  | "bug"
  | "dark"
  | "dragon"
  | "electric"
  | "fairy"
  | "fighting"
  | "fire"
  | "flying"
  | "ghost"
  | "grass"
  | "ground"
  | "ice"
  | "normal"
  | "poison"
  | "psychic"
  | "rock"
  | "steel"
  | "water";

export type RadixColor =
  | "amber"
  | "blue"
  | "bronze"
  | "brown"
  | "crimson"
  | "cyan"
  | "gold"
  | "grass"
  | "gray"
  | "green"
  | "indigo"
  | "iris"
  | "jade"
  | "lime"
  | "mint"
  | "orange"
  | "pink"
  | "plum"
  | "purple"
  | "red"
  | "ruby"
  | "sky"
  | "teal"
  | "tomato"
  | "violet"
  | "yellow"
  | undefined;

export type Pokemon = {
  id: number;
  name: string;
  spriteUrl: string;
  types: PokemonType[];
};
