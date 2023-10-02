import { useQuery } from "@tanstack/react-query"

import { useEffect, useState } from "react"
import { getAllCharacters } from "../api/base"
import { useBoundStore } from "../store/store"
import { Spinner } from "../components/spinner"
import * as S from "./Home.styled"

export const Home = () => {
  const [initialLoading, setInitialLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setInitialLoading(false)
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  const { data = [], isLoading } = useQuery(["characters"], () =>
    getAllCharacters()
  )

  const { setAllCharacters } = useBoundStore((state) => ({
    setAllCharacters: state.setAllCharacters,
  }))

  useEffect(() => {
    if (data.length === 0) {
      return
    }
    setAllCharacters(data)
  }, [data, setAllCharacters])

  if (isLoading || initialLoading) {
    return <Spinner />
  }

  return (
    <S.PageListWrapper>
      <S.StyledLink to="/characters">All Files</S.StyledLink>
      <S.StyledLink to="/students">{"Students' Files"}</S.StyledLink>
      <S.StyledLink to="/staff">{"Staff's Files"}</S.StyledLink>
      <S.StyledLink to="/favorites">Saved Files</S.StyledLink>
    </S.PageListWrapper>
  )
}
