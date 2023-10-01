import { FC } from "react"

import Skeleton from "react-loading-skeleton"
import * as S from "./character-info.styled"
import { CharacterInfoProps } from "./types"

const CharacterInfo: FC<CharacterInfoProps> = ({ isLoading, character }) => {
  if (isLoading) {
    return <S.Wrapper><Skeleton /></S.Wrapper>
  }

  const {
name
, alternateNames
, species
, gender
, house
, dateOfBirth
, wizard
, ancestry
, eyeColour
, hairColour
, patronus
, hogwartsStudent
, hogwartsStaff
, actor
, alternateActors
, alive
, image
  } = character

  return <S.Wrapper>
    {image && <S.CharacterImage src={image} />}
      <S.Title>{name}</S.Title>
      <S.Subtitle>{alternateNames?.join(', ')}</S.Subtitle>
      <S.Text>Portrayed by: {actor}</S.Text>
    
    <S.Information>
      <S.Term>Species </S.Term> <S.Description>{species}</S.Description>
      <S.Term>Gender </S.Term> <S.Description> {gender}</S.Description>
      <S.Term>House </S.Term> <S.Description> {house}</S.Description>
      <S.Term>Birth </S.Term> <S.Description> {dateOfBirth ?? 'no information'}</S.Description>
      <S.Term>Wizard? </S.Term> <S.Description>{wizard ? 'yes' : 'no'}</S.Description>
      <S.Term>Student? </S.Term> <S.Description>{hogwartsStudent ? 'yes' : 'no'}</S.Description>
      <S.Term>Alive? </S.Term> <S.Description> {alive ? 'yes' : 'no'}</S.Description>
      <S.Term>Staff? </S.Term> <S.Description>{hogwartsStaff ? 'yes' : 'no'}</S.Description>
      <S.Term>Ancestry </S.Term> <S.Description> {ancestry ?? 'no information'}</S.Description>
      <S.Term>Eye-colour </S.Term> <S.Description>{eyeColour ?? 'no information'}</S.Description>
      <S.Term>Hair-colour </S.Term> <S.Description>{hairColour ?? 'no information'}</S.Description>
      <S.Term>Patronus </S.Term> <S.Description> {patronus ?? 'no information'}</S.Description>
      {/* {alternateActors?.length && alternateActors.length > 0 && <S.Term>Actors: </S.Term> <S.Description> {alternateActors}</S.Description>} */}

    </S.Information>
  </S.Wrapper>
}

export default CharacterInfo
