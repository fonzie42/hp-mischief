import styled from "styled-components"
import { NavLink } from "react-router-dom"

export const PageListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  justify-content: center;
`

export const StyledLink = styled(NavLink)`
  color: #ffffff;
  height: 60px;
  width: 220px;
  padding: 0px 20px;
  background: #000000;
  display: grid;
  place-items: center;
  margin: 8px;
  border-radius: 4px;
  font-size: 24px;
  text-decoration: none;
`