import { ComponentStory } from '@storybook/react'
import { Button as Component } from '@ui/components/Atom/'

export default {
  title: 'Atoms/Button',
  argTypes: {
    palette: {
      options: ['blue', 'blue-stroke'],
      control: { type: 'radio' },
      onClick: { action: 'clicked' },
    },
    size: {
      options: ['xlarge', 'large', 'medium', 'small'],
      control: { type: 'radio' },
    },
    fullWidth: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    children: {
      control: 'text',
    },
  },
}

const BlueTemplate: ComponentStory<typeof Component> = function ButtonTemplate(argTypes) {
  return (
    <Component
      palette="blue"
      {...argTypes}
    />
  )
}

export const BlueButton = BlueTemplate.bind({})

BlueButton.args = {
  palette: 'blue',
  children: 'Blue 버튼',
}

const BlueStrokeTemplate: ComponentStory<typeof Component> = function BlueStrokeTemplate(argTypes) {
  return (
    <Component
      palette="blue-stroke"
      {...argTypes}
    />
  )
}

export const BlueStrokeButton = BlueStrokeTemplate.bind({})

BlueStrokeButton.args = {
  palette: 'blue-stroke',
  children: 'Blue Stroke 버튼',
}
