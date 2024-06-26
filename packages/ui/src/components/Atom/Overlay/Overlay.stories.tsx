import { ComponentStory } from '@storybook/react'
import { Overlay as Component } from '@ui/components/Atom/Overlay'

export default {
  title: 'Atoms/Overlay',
  argTypes: {
    opacity: {
      control: {
        type: 'range', min: 0, max: 1, step: 0.1,
      },
    },
  },
}

const OverlayTemplate: ComponentStory<typeof Component> = function OverlayTemplate(argTypes) {
  return (
    <Component
      {...argTypes}
    />
  )
}

export const Overlay = OverlayTemplate.bind({})

Overlay.args = {
  opacity: 0.6,
}
