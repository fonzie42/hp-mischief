import { CharacterFolder } from "@/components/character-folder"
import { FoldersWrapper } from "@/components/character-folder/character-folder.styled"
import { useBoundStore } from "@/store/store"
import { useEffect, useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { getAllCharacters } from "@/api/base"
import { Spinner } from "@/components/spinner"

export const ListCharacters = ({
  type,
}: {
  type: "all" | "staff" | "students" | "favorites";
}) => {
  const [filter, setFilter] = useState<string>("")
  const {
    students,
    staff,
    characters,
    allCharacters,
    setCharacters,
    setAllCharacters,
    favorites,
  } = useBoundStore((state) => state)

  const { data = [], isLoading } = useQuery({
    queryKey: ["characters"],
    queryFn: () => getAllCharacters(),
    enabled: allCharacters.length === 0,
  })

  useEffect(() => {
    const hasCharacters = allCharacters.length !== 0
    const hasData = data.length !== 0

    if (!hasCharacters && hasData) {
      setAllCharacters(data)
    }
  }, [setAllCharacters, allCharacters, data])

  useEffect(() => {
    const getDataToUse = () => {
      if (type === "favorites") {
        return allCharacters.filter((item) => favorites.includes(item.id))
      }
      if (type === "staff") {
        return staff
      }

      if (type === "students") {
        return students
      }
      return allCharacters
    }

    const hasCharacters = allCharacters.length !== 0

    if (!hasCharacters) {
      return
    }

    const dataToUse = getDataToUse()
    const lowerCaseFilter = filter.toLocaleLowerCase()

    setCharacters(
      dataToUse.filter((item) => {
        const lowerCaseName = item.name.toLocaleLowerCase()
        return lowerCaseName.includes(lowerCaseFilter)
      })
    )
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter, allCharacters, staff, students, favorites])

  if (isLoading && data.length === 0) {
    return <Spinner />
  }

  if (characters.length === 0) {
    return <div>No files found.</div>
  }

  return (
    <>
      <input
        onChange={(e) => {
          setFilter(e.target.value)
        }}
        value={filter}
      />
      <FoldersWrapper>
        {characters.map(({ id, name }, index) => (
          <CharacterFolder order={index} key={id} label={name} id={id} />
        ))}
      </FoldersWrapper>
    </>
  )
}
