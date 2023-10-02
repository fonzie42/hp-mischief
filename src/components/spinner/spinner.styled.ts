import styled, { keyframes } from "styled-components";

const loadingStone = keyframes`
  80%, 100% {
      left: -53px;
  }
`
const loadingWand = keyframes`
  80%, 100% {
  left: -2.5px;
  }
`

export const AnimationWrapper = styled.div`
`

// inspired by this pen: https://codepen.io/afonsopacifer/pen/GZrxzq

export const Veil = styled.div`
width: 0;
  height: 0;
  border-right: 80px solid transparent;
  border-bottom: 140px solid #fff;
  border-left: 80px solid transparent;
  position: relative;

  &:after {
  width: 0;
  height: 0;
  border-right: 90px solid transparent;
  border-bottom: 160px solid #000;
  border-left: 90px solid transparent;
  position: absolute;
  top: -13.5px;
  left: -90px;
  z-index: -1;
  content: "";
}
  `
export const Stone = styled.div`
animation: ${loadingStone} 1.5s cubic-bezier(0.17, 0.37, 0.43, 0.67) forwards;
 width: 95px;
  height: 95px;
  border: 5px solid #000;
  border-radius: 50%;
  position: relative;

    left: -200px;
  bottom: -41px;
  transition: left 1s;
  `

export const Wand = styled.div`
animation: ${loadingWand} 1.5s cubic-bezier(0.17, 0.37, 0.43, 0.67) forwards;
 width: 5px;
  height: 145px;
  background: #000;
  position: absolute;
  top: 0px;
     left: 110px;
  transition: left 1s;
  `



