import { mediaQueries } from "@/styles";
import styled from "styled-components";

export const Wrapper = styled.div`
  background: #c8ad80;
  padding: 32px;
  margin: 8px;
  background-image: url("https://images.unsplash.com/photo-1615800098746-73af8261e3df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80");
  background-blend-mode: overlay;
  // add border and internal border
`;

export const Information = styled.div`
  font-family: "Special Elite", cursive;
  letter-spacing: 2px;
  margin: 0;
  display: grid;
  flex-direction: column;
  grid-template-columns: 140px 1fr;
  text-align: right;
  ${mediaQueries.tablet`
  // display: flex;
  // flex-direction: row;
  `};
`;
export const Term = styled.div`
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 18px;
  // border-bottom: 1px dotted black;
`;

export const Description = styled.div`
  padding-left: 1rem;
  margin: 0 1rem;
  text-align: left;
  border-bottom: 1px dotted black;
`;

export const CharacterImage = styled.img`
  object-fit: cover;
  width: 160px;
  height: 240px;
`;

export const InfoWrapper = styled.div`
  display: flex;
  margin: 8px;
  border-bottom: 1px dotted black;
`;

export const Title = styled.h2`
  font-family: "Jim Nightshade", cursive;
  font-size: 44px;
  margin: 8px 0px;
`;

export const Subtitle = styled.h2`
  font-style: italic;
  font-family: "Jim Nightshade", cursive;
  font-size: 18px;
  margin: 8px 0px;
`;

export const Text = styled.p`
  font-family: "Special Elite", cursive;
  letter-spacing: 2px;
  margin: 0;
`;
