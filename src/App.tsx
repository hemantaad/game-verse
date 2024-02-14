import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenres";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  const handleSelectedGenre = (genre: Genre) => {
    setGameQuery({ ...gameQuery, genre });
  };
  const handleSelectedPlatform = (platform: Platform) => {
    setGameQuery({ ...gameQuery, platform });
  };
  const handleSelectSortOrder = (sortOrder: string) => {
    setGameQuery({ ...gameQuery, sortOrder });
  };
  return (
    <Grid templateColumns={{ base: "1fr", lg: "200px 1fr" }}>
      <GridItem colSpan={{ lg: 2 }}>
        <Navbar />
      </GridItem>
      <Show above="lg">
        <GridItem padding={5}>
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectGenre={handleSelectedGenre}
          />
        </GridItem>
      </Show>
      <GridItem>
        <HStack marginLeft="10" spacing={5}>
          <PlatformSelector
            selectedPlatform={gameQuery.platform}
            onSelectPlatform={handleSelectedPlatform}
          />
          <SortSelector
            sortOrder={gameQuery.sortOrder}
            onSelectSortOrder={handleSelectSortOrder}
          />
        </HStack>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
