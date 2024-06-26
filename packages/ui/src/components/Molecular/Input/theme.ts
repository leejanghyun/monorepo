import { COLOR, ColorValues } from '@ui/styles/color'

export type InputColorType = {
  border: ColorValues
}

export const inputColor: InputColorType = {
  border: COLOR.primary[500],
} as const
