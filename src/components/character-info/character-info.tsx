import { FC } from "react"

import Skeleton from "react-loading-skeleton"
import * as S from "./character-info.styled"
import { CharacterInfoProps } from "./types"
import { useBoundStore } from "@/store/store"
import { BackButton } from "../back-button"

const CharacterInfo: FC<CharacterInfoProps> = ({ isLoading, character }) => {
  const { favorites, addFavorites, removeFavorite } = useBoundStore()

  if (isLoading) {
    return (
      <S.Wrapper>
        <Skeleton />
      </S.Wrapper>
    )
  }

  const {
    id,
    name,
    alternateNames,
    species,
    gender,
    house,
    dateOfBirth,
    wizard,
    ancestry,
    eyeColour,
    hairColour,
    patronus,
    hogwartsStudent,
    hogwartsStaff,
    actor,
    alternateActors,
    alive,
    image,
    wand,
  } = character
  const isFavorite = favorites.find((item) => item === id)
  const onFavoriteCallback = () =>
    isFavorite ? removeFavorite(id) : addFavorites(id)

  const favoriteText = isFavorite ? "Remove Favorite" : "Add to favorite"

  const shouldRenderAlternateActors =
    alternateActors && alternateActors.length > 0

  const wood = wand?.wood
  const core = wand?.core
  const length = wand?.length

  return (
    <S.Wrapper>
      <BackButton />
      {image && <S.CharacterImage src={image} />}
      <S.Title>{name}</S.Title>
      <S.Subtitle>{alternateNames?.join(", ")}</S.Subtitle>
      {actor && <S.Text>Portrayed by: {actor}</S.Text>}

      <S.FavoriteButton onClick={onFavoriteCallback} $isFavorite={!!isFavorite}>
        {favoriteText}
      </S.FavoriteButton>

      <S.Information>
        <S.Term>Species </S.Term> <S.Description>{species}</S.Description>
        <S.Term>Gender </S.Term> <S.Description> {gender}</S.Description>
        <S.Term>House </S.Term> <S.Description> {house ?? "N/A"}</S.Description>
        <S.Term>Birth </S.Term>
        <S.Description> {dateOfBirth ?? "no information"}</S.Description>
        <S.Term>Wizard? </S.Term>
        <S.Description>{wizard ? "yes" : "no"}</S.Description>
        <S.Term>Student? </S.Term>
        <S.Description>{hogwartsStudent ? "yes" : "no"}</S.Description>
        <S.Term>Alive? </S.Term>
        <S.Description> {alive ? "yes" : "no"}</S.Description>
        <S.Term>Staff? </S.Term>
        <S.Description>{hogwartsStaff ? "yes" : "no"}</S.Description>
        <S.Term>Ancestry </S.Term>
        <S.Description> {ancestry ?? "no information"}</S.Description>
        <S.Term>Eye-colour </S.Term>
        <S.Description>{eyeColour ?? "no information"}</S.Description>
        <S.Term>Hair-colour </S.Term>
        <S.Description>{hairColour ?? "no information"}</S.Description>
        <S.Term>Patronus </S.Term>
        <S.Description> {patronus ?? "no information"}</S.Description>
        {shouldRenderAlternateActors && (
          <>
            <S.Term>Actors: </S.Term>
            <S.Description> {alternateActors.join(", ")}</S.Description>
          </>
        )}
      </S.Information>

      <S.Subtitle>Wand</S.Subtitle>
      <S.Information $noMarginTop>
        <S.Term>Wood </S.Term>
        <S.Description>{wood || "no information"}</S.Description>
        <S.Term>Core </S.Term>
        <S.Description>{core || "no information"}</S.Description>
        <S.Term>Length </S.Term>
        <S.Description>
          {length ? `${length} inches` : "no information"}
        </S.Description>
      </S.Information>
    </S.Wrapper>
  )
}

export default CharacterInfo
