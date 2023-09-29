import { css } from 'styled-components';

export const mediaQueries = {
  mobileTiny: (template, ...args) => css`
    @media screen and (max-width: 374px) {
      ${css(template, ...args)}
    }
  `,

  tablet: (template, ...args) => css`
    @media screen and (min-width: 700px) {
      ${css(template, ...args)}
    }
  `,

  desktopSmall: (template, ...args) => css`
    @media screen and (min-width: 950px) {
      ${css(template, ...args)}
    }
  `,

  desktopLarge: (template, ...args) => css`
    @media screen and (min-width: 1200px) {
      ${css(template, ...args)}
    }
  `
};
