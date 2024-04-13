import { Button, Container, Flex } from "@radix-ui/themes";
import { useState } from "react";
import { PokemonCard } from "./PokemonCard";

const NUM_POKEMON = 1_025;

function getRandomId(): number {
  return Math.floor(Math.random() * NUM_POKEMON + 1);
}

export default function App() {
  const [pokemonId, setPokemonId] = useState(getRandomId());

  return (
    <Container size="2" height="100vh">
      <Flex
        direction="column"
        justify="center"
        align="center"
        gap="4"
        height="100%"
      >
        <PokemonCard pokemonId={pokemonId} />

        <Button size="3" onClick={() => setPokemonId(getRandomId())}>
          Random Pokémon
        </Button>
      </Flex>
    </Container>
  );
}
