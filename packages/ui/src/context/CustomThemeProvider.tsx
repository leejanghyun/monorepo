import { Global, ThemeProvider } from '@emotion/react'
import { reset } from '@ui/styles/reset'
import {
  ReactNode, useState,
} from 'react'

import { global, mode } from '../styles'

export function CustomThemeProvider({ children }: { children: ReactNode }) {
  const [theme] = useState(mode.origin)

  return (
    <ThemeProvider theme={theme}>
      <Global styles={[reset, global(theme)]} />
      {children}
    </ThemeProvider>
  )
}
