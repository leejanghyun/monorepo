import { CustomThemeProvider } from '../src/context/CustomThemeProvider'
import React from 'react';

const storyOrder = [
  'Atoms', ['Button', 'Loader', 'Overlay'],
  'Molecular', ['Dialog'],
  'Organism', [],
  'Template',[]
]

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: storyOrder
    }
  },
}

export const decorators = [
  (Story) => {
    return (
        <CustomThemeProvider>
          <Story />
        </CustomThemeProvider>
    )
  },
]
