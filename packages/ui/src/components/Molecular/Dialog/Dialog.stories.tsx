import { ComponentStory } from '@storybook/react'
import { Dialog as Component } from '@ui/components/Molecular/Dialog'

export default {
  title: 'Molecular/Dialog',
  argTypes: {
    open: {
      control: 'boolean',
    },
    useBackDrop: {
      control: 'boolean',
    },
  },
}

const DialogTemplate: ComponentStory<typeof Component> = function DialogTemplate(argTypes) {
  return (
    <Component {...argTypes} />
  )
}

export const Dialog = DialogTemplate.bind({})

Dialog.args = {
  open: true,
  useBackDrop: true,
}
