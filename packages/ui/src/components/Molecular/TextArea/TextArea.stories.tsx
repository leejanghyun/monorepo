import { ComponentStory } from '@storybook/react'
import { useState } from 'react'

import { TextArea as Component } from './index'

export default {
  title: 'Molecular/TextArea',
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

const TextAreaTemplate: ComponentStory<typeof Component> = function TextFieldMultilineTemplate(argTypes) {
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

export const TextArea = TextAreaTemplate.bind({})

TextArea.args = {
  placeholder: '텍스트를 입력해주세요.',
  disabled: false,
}
