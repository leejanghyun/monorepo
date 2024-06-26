import { ComponentStory } from '@storybook/react'
import { useState } from 'react'

import { TextInput as Component } from './index'

export default {
  title: 'Molecular/TextInput',
  component: Component,
  argTypes: {
    disabled: {
      control: 'boolean',
    },
    placeholder: {
      control: 'text',
    },
  },
}

const InputTemplate: ComponentStory<typeof Component> = function TextFieldMultilineTemplate(argTypes) {
  const [value, setValue] = useState('')

  return (
    <Component
      {...argTypes}
      value={value}
      onChange={(value: string) => {
        setValue(value)
      }}
    />
  )
}

export const TextInput = InputTemplate.bind({})

TextInput.args = {
  placeholder: '텍스트를 입력해주세요.',
  disabled: false,
}
