import {  getCharacterById } from "@/api/base"
import { CharacterInfo } from "@/components/character-info"
import { useCharacterStore } from "@/store/store"
import { useLoaderData } from "react-router-dom"
 import {
  useQuery,
} from "@tanstack/react-query"
import { useEffect } from "react"

export const characterLoader = ({ params }) => { //@todo fix type for router
  console.log({ params })  
  return params
}

export const Character = () => {
  const { characterId } = useLoaderData() //@todo fix type for router
  const characters = useCharacterStore(state => state.characters)
  const updateCharacter = useCharacterStore(state => state.updateCharacter)

  const selectedCharacterFromState = characters.find(item => item.id === characterId)
  const enabled = !selectedCharacterFromState
  
  const { data, isError, isLoading: isLoadingQuery } = useQuery({
    queryKey: [characterId], 
    queryFn: () => getCharacterById(characterId as string),
    enabled: enabled
  })

  const selectedCharacter = selectedCharacterFromState ?? data // to avoid "not found" false positive

  useEffect(() => {
    data && updateCharacter(data)
  }, [data, updateCharacter])

  const isLoading = isLoadingQuery && enabled

  if (isLoading) {
    console.log('loading')
    return <div>Loading</div>
  }
  
  if (isError) {
    return <div>Sorry, something went wrong</div>
  }
  
  if (!selectedCharacter) {
    console.log('not found')
    return <div> No files were found. </div>
  }
  

  return <CharacterInfo character={selectedCharacter} />

}