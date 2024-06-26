import { ComponentStory } from '@storybook/react'

import { RadioButton as Component } from '.'

export default {
  title: 'Atoms/RadioButton',
  argTypes: {
    checked: {
      control: 'boolean',
    },
  },
}

const Template: ComponentStory<typeof Component> = function CheckboxTemplate({ ...args }) {
  return (
    <Component
      checked
      {...args}
    />
  )
}

export const RadioButton = Template.bind({})

RadioButton.args = {
  checked: false,
}
