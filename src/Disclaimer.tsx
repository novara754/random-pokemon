import { AlertDialog, Box, Button, Link } from "@radix-ui/themes";

export default function Disclaimer() {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger>
        <Button variant="ghost" color="gray">
          Disclaimer
        </Button>
      </AlertDialog.Trigger>

      <AlertDialog.Content>
        <AlertDialog.Title>Disclaimer</AlertDialog.Title>
        <AlertDialog.Description>
          Pokémon © 2002-2024 Pokémon. © 1995-2024 Nintendo/Creatures Inc./GAME
          FREAK inc. TM, ® and Pokémon character names are trademarks of
          Nintendo.
          <br />
          All data is provided by{" "}
          <Link href="https://pokeapi.co/">https://pokeapi.co/</Link>.
        </AlertDialog.Description>
        <Box mt="5">
          <AlertDialog.Cancel>
            <Button variant="soft" color="gray">
              Close
            </Button>
          </AlertDialog.Cancel>
        </Box>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
}
