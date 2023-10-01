import styled from "styled-components";

export const Wrapper = styled.div`
  background: #c8ad80;
  padding: 8px 20px;
  background-image: url("https://images.unsplash.com/photo-1615800098746-73af8261e3df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80");
  background-blend-mode: overlay;
  border: 2px solid black;
  border-radius: 10px 10px 0 0;

  height: 110px;
  margin-bottom: -50px;
  font-family: "Jim Nightshade", cursive;
  font-size: 44px;
  text-align: left;
  transition: 1s;

  &:hover {
    transform: skew(0deg, 0deg) translateY(-10px);
    margin-top: -20px;
  }

  transform: skew(10deg, -10deg);
  box-shadow: 16px -8px 14px 5px rgba(0, 0, 0, 0.15);
`;
