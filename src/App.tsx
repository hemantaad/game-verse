import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenres";
import { useState } from "react";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const handleSelectedGenre = (genre: Genre) => {
    setSelectedGenre(genre);
  };
  return (
    <Grid templateColumns={{ base: "1fr", lg: "200px 1fr" }}>
      <GridItem colSpan={{ lg: 2 }}>
        <Navbar />
      </GridItem>
      <Show above="lg">
        <GridItem padding={5}>
          <GenreList onSelectGenre={(genre) => handleSelectedGenre(genre)} />
        </GridItem>
      </Show>
      <GridItem>
        <GameGrid selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  );
}

export default App;
