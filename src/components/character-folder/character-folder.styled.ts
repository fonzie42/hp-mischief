import { mediaQueries } from "@/styles"
import styled, { css, keyframes } from "styled-components"
import { NavLink } from "react-router-dom"

const reveal = keyframes`
  from {
    transform: skew(10deg, -10deg) translate3d(100%,100px,0);
  }
  
  to {
    transform: skew(10deg, -10deg) translate3d(0,0,0);
  }
`

export const Wrapper = styled(NavLink)<{ $animationDelay: string | null }>`
  color: #2b2b2b;
  background: #c8ad80;
  padding: 8px 20px;
  background-image: url("https://images.unsplash.com/photo-1615800098746-73af8261e3df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80");
  background-blend-mode: overlay;
  border: 2px solid black;
  border-radius: 10px 10px 0 0;
  height: 110px;
  margin-bottom: -50px;
  font-family: "Jim Nightshade", cursive;
  font-size: 36px;
  text-align: left;
  transition: 1s;
  margin-left: 2em;
  margin-right: -2em;
  display: flex;
  box-shadow: 16px -8px 14px 5px rgba(0, 0, 0, 0.15);
  margin-left: 2em;
  transform: skew(10deg, -10deg);

  &:visited {
    color: #4d4d4d;
  }

  ${({ $animationDelay }) =>
    $animationDelay &&
    css`
      animation: ${reveal} 0.4s cubic-bezier(0.25, 0.25, 0.25, 1.25);
      animation-delay: ${$animationDelay};
    `}

  &:hover {
    transform: translateY(-10px) skew(0deg, 0deg);
    margin-top: -20px;
  }

  ${mediaQueries.mobileTiny`
    margin-right: -30px;
    font-size: 32px;
    height: 80px;
    width: 290px;
    padding: 0
    margin-bottom: -40px;

    &:hover {
      transform: skew(0deg, 0deg);
    }
  `}

  ${mediaQueries.tablet`
    font-size: 44px;
    height: 170px;
    margin-bottom: -120px;
  `}
`

export const FoldersWrapper = styled.div`
  width: 100%;
  padding-top: 64px;
  padding-bottom: 250px;
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
