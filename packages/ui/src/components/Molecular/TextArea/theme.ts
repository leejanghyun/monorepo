import { COLOR, ColorValues } from '@ui/styles/color'

export type TextAreaColorType = {
  border: ColorValues
}

export const textAreaColor: TextAreaColorType = {
  border: COLOR.primary[500],
} as const
