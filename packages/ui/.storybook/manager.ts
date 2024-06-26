
import { addons } from '@storybook/addons'
import { create } from '@storybook/theming'

addons.setConfig({
    theme: create({
      base: 'light',
      brandTitle: 'Design System',
      brandTarget: '_self',
      colorPrimary: 'hotpink', 
    }),
  })