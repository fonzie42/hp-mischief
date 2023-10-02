import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  width: 100%;
  font-family: "Special Elite", "Jim Nightshade", cursive;
  background-image: url(https://images.unsplash.com/photo-1547756536-cde3673fa2e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2141&q=80);
  overflow-x: hidden;
  overflow-y: auto;
  background-repeat: no-repeat;
  background-attachment: fixed;

  &:before {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    backdrop-filter: blur(3px) grayscale(42%);
    pointer-events: none; /* make the overlay click-through */
  }
} 

html {
  width: 100%;

} 
#root { 
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
`
