import {
  Badge,
  Box,
  Card,
  Flex,
  Heading,
  Link,
  Spinner,
} from "@radix-ui/themes";
import { useEffect, useState } from "react";
import type { Pokemon, PokemonType, RadixColor } from "./defs";

function capitalize(str: string): string {
  return str[0].toUpperCase() + str.slice(1);
}

function getColorForType(type: PokemonType): RadixColor {
  const map: Record<PokemonType, RadixColor> = {
    normal: "bronze",
    fire: "orange",
    water: "blue",
    electric: "yellow",
    grass: "grass",
    ice: "sky",
    fighting: "red",
    poison: "plum",
    ground: "gold",
    flying: "iris",
    psychic: "crimson",
    bug: "lime",
    rock: "gold",
    ghost: "violet",
    dragon: "purple",
    dark: "brown",
    steel: "gray",
    fairy: "pink",
  } as const;

  return map[type];
}

export function PokemonCard({ pokemonId }: { readonly pokemonId: number }) {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      setPokemon(null);

      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonId}`,
      );
      const data = await response.json();

      setPokemon({
        id: data.id,
        name: data.species.name,
        spriteUrl: data.sprites.other["official-artwork"].front_default,
        types: data.types.map(
          (type: { type: { name: string } }) => type.type.name as PokemonType,
        ),
      });
    };

    void fetchPokemon();
  }, [pokemonId]);

  const view = () => (
    <>
      <img
        width="256px"
        height="256px"
        src={pokemon!.spriteUrl}
        alt={pokemon!.name}
      />

      <Heading>{capitalize(pokemon!.name)}</Heading>
      <Heading size="2" color="gray">
        #{pokemon!.id.toString().padStart(4, "0")}
      </Heading>

      <Flex direction="row" gap="2">
        {pokemon!.types.map((type, idx) => (
          <Badge key={idx} color={getColorForType(type)}>
            {type.toUpperCase()}
          </Badge>
        ))}
      </Flex>

      <Link
        target="_blank"
        href={`https://pokemondb.net/pokedex/${pokemon!.name}`}
        color="ruby"
        mt="5"
      >
        View on Pokémon Database
      </Link>
    </>
  );

  return (
    <Card>
      <Box width="350px" height="450px">
        <Flex
          direction="column"
          justify="center"
          align="center"
          gap="2"
          height="100%"
        >
          {pokemon ? view() : <Spinner />}
        </Flex>
      </Box>
    </Card>
  );
}
