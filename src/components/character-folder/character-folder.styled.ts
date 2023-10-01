import { mediaQueries } from "@/styles";
import styled, {css, keyframes} from "styled-components";
import {
  NavLink,
} from "react-router-dom";

const reveal = keyframes`
from {transform: skew(10deg, -10deg) translate3d(100%,100px,0)}
to {transform: skew(10deg, -10deg) translate3d(0,0,0)}
`

export const Wrapper = styled(NavLink)<{animationDelay: string | null}>`
  background: #c8ad80;
  padding: 8px 20px;
  background-image: url("https://images.unsplash.com/photo-1615800098746-73af8261e3df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80");
  background-blend-mode: overlay;
  border: 2px solid black;
  border-radius: 10px 10px 0 0;

  ${({ animationDelay }) => 
  css`
  transform: skew(10deg, -10deg) translate3d(100%,100px,0);
  animation: ${reveal} .4s;
  animation-delay: ${animationDelay};
  `
  }

  height: 110px;
  margin-bottom: -50px;
  font-family: "Jim Nightshade", cursive;
  font-size: 36px;
  text-align: left;
  transition: 1s;
  margin-left: 2em;
  margin-right: -2em;
  display: flex;


  &:hover {
    transform:  translateY(-10px) skew(0deg, 0deg);
    margin-top: -20px;
  }

  transform: skew(10deg, -10deg);
  box-shadow: 16px -8px 14px 5px rgba(0, 0, 0, 0.15);
  margin-left: 2em;

  ${mediaQueries.mobileTiny`
    margin-right: -30px;
    font-size: 32px;
    height: 80px;
    width: 290px;
    padding: 0;
    
    margin-bottom: -40px;
    &:hover {
      transform: skew(0deg, 0deg);
    }
  `}
  
  ${mediaQueries.tablet`
     font-size: 44px;
  `}
`;

export const FoldersWrapper = styled.div`
  width: 100%;
  padding: 64px 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  
  ${mediaQueries.mobileTiny`
  
padding: 64px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  `}
`