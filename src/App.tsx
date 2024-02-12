import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";

function App() {
  return (
    <Grid templateColumns={{ lg: "repeat(2, 1fr)" }}>
      <GridItem colSpan={{ lg: 2 }}>
        <Navbar />
      </GridItem>
      <Show above="lg">
        <GridItem>Aside</GridItem>
      </Show>
      <GridItem>
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
