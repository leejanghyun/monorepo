import { css, Theme } from '@emotion/react'

export function global(theme: Theme) {
  return css`
    html,
    body {
      background: ${theme.background};
      font-size: ${theme.font[14].size};
      line-height: ${theme.font[14].lineHeight};
      color: ${theme.text};
      font-weight: 250;
    }
    body {
      padding-right: constant(safe-area-inset-right);
      padding-left: constant(safe-area-inset-left);
      padding-right: env(safe-area-inset-right);
      padding-left: env(safe-area-inset-left);
    }
    #__next {
      position: relative;
    }
  `
}
