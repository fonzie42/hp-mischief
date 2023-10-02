 import {
  useQuery,
} from "@tanstack/react-query";

import { useEffect } from "react";
import { getAllCharacters } from "./api/base";
import { useCharacterStore } from "./store/store";
import { ListCharacters } from "./routes/list-characters";


function App() {
  
  const { data = [], isError, isLoading } = useQuery(['todos'], () => getAllCharacters())

  const setCharacters = useCharacterStore(state => state.setCharacters)

  useEffect(() => {
    setCharacters(data)
  }, [data])

  return (
      <ListCharacters/>
  );
}

export default App;
