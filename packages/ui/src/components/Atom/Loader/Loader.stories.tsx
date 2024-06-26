import { ComponentStory } from '@storybook/react'
import { Loader as Component } from '@ui/components/Atom/Loader'

export default {
  title: 'Atoms/Loader',
  argTypes: {
    open: {
      control: 'boolean',
    },
  },
}

const LoaderTemplate: ComponentStory<typeof Component> = function LoaderTemplate(argTypes) {
  return (
    <Component {...argTypes} />
  )
}

export const Loader = LoaderTemplate.bind({})

Loader.args = {
  open: true,
}
