import { mediaQueries } from "@/styles"
import styled, { css, keyframes } from "styled-components"

const reveal = keyframes`

  from {transform: translate3d(-110%, 100%,0) rotate(90deg);}
  to {transform: translate3d(0) rotate(0);}
`

export const Wrapper = styled.div`
  background: #c8ad80;
  background-image: url("https://images.unsplash.com/photo-1615800098746-73af8261e3df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80");
  background-blend-mode: overlay;
  margin: auto;
  margin-top: 32px;
  text-align: center;
  box-shadow: inset 0px 0px 16px 7px #e4b972;
  animation: ${reveal} 1s forwards cubic-bezier(0.25, 0.25, 0.25, 1.25);
  padding: 32px;

  ${mediaQueries.mobileTiny`
    width: calc(100vw - 16px);
    padding: 32px 8px;
  `}

  ${mediaQueries.tablet`
    padding: 32px;
  `}
`

export const Information = styled.div<{ $noMarginTop?: boolean }>`
  font-family: "Special Elite", cursive;
  letter-spacing: 2px;
  margin: 0;
  display: grid;
  flex-direction: column;
  grid-template-columns: 140px 1fr;
  text-align: right;

  ${mediaQueries.tablet`
    grid-template-columns: 140px 1fr 140px 1fr;
  `};

  ${({ $noMarginTop }) =>
    $noMarginTop
      ? css`
          margin-top: 0;
        `
      : css`
          margin-top: 48px;
        `}
`
export const Term = styled.div`
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 18px;
  // border-bottom: 1px dotted black;
`

export const Description = styled.div`
  padding-left: 1rem;
  margin: 0 1rem;
  text-align: left;
  border-bottom: 1px dotted black;
`

export const CharacterImage = styled.img`
  object-fit: cover;
  width: 160px;
  height: 240px;
`

export const InfoWrapper = styled.div`
  display: flex;
  margin: 8px;
  border-bottom: 1px dotted black;
`

export const Title = styled.h2`
  font-family: "Jim Nightshade", cursive;
  font-size: 44px;
  margin: 8px 0px;
`

export const Subtitle = styled.h2`
  font-style: italic;
  font-family: "Jim Nightshade", cursive;
  font-size: 18px;
  margin: 8px 0px;
`

export const FavoriteButton = styled.button<{ $isFavorite?: boolean }>`
  background: ${({ $isFavorite }) => ($isFavorite ? "#ff9f00" : "white")};
  border: none;
  padding: 8px;
  margin: 8px;
`

export const Text = styled.p`
  font-family: "Special Elite", cursive;
  letter-spacing: 2px;
  margin: 0;
`
