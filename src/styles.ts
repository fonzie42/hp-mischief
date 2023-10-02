import { css } from "styled-components"
import { Styles } from "styled-components/dist/types"

export const mediaQueries = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  mobileTiny: (template: Styles<object>, ...args: any) => css`
    @media screen and (max-width: 374px) {
      ${css(template, ...args)}
    }
  `,

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  tablet: (template: Styles<object>, ...args: any) => css`
    @media screen and (min-width: 700px) {
      ${css(template, ...args)}
    }
  `,

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  desktopSmall: (template: Styles<object>, ...args: any) => css`
    @media screen and (min-width: 950px) {
      ${css(template, ...args)}
    }
  `,

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  desktopLarge: (template: Styles<object>, ...args: any) => css`
    @media screen and (min-width: 1200px) {
      ${css(template, ...args)}
    }
  `,
}
