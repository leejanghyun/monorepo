import { Checkbox as Component } from '.'

export default {
  title: 'Atoms/Checkbox',
  argTypes: {
    checked: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
}

const Template = function CheckboxTemplate(args) {
  return (
    <Component
      {...args}
    />
  )
}

export const Checkbox = Template.bind({
  checked: true,
})
