import { COLOR, ColorValues } from '@ui/styles/color'

export type ButtonColorType = {
  color: {
    text: ColorValues
    background: ColorValues
    disabled: {
      text: ColorValues,
      background: ColorValues,
    }
  },
  stroke: {
    text: ColorValues
    border: ColorValues
    background: ColorValues
    disabled: {
      text: ColorValues
      border: ColorValues
    }
  },
}

export const buttonColor: ButtonColorType = {
  color: {
    text: COLOR.wb[0],
    background: COLOR.primary[500],
    disabled: {
      text: COLOR.gray[300],
      background: COLOR.gray[100],
    },
  },
  stroke: {
    text: COLOR.primary[500],
    border: COLOR.primary[400],
    background: COLOR.wb[0],
    disabled: {
      text: COLOR.gray[200],
      border: COLOR.gray[100],
    },
  },
} as const
