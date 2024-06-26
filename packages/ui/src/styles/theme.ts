import { checkboxColor, CheckboxColorType } from '@ui/components/Atom/Checkbox/theme'
import { loaderColor, LoaderColorType } from '@ui/components/Atom/Loader/theme'
import { radioButtonColor, RadioButtonColorType } from '@ui/components/Atom/RadioButton/theme'
import { dialogColor, DialogType } from '@ui/components/Molecular/Dialog/theme'
import { inputColor, InputColorType } from '@ui/components/Molecular/Input/theme'
import { textAreaColor, TextAreaColorType } from '@ui/components/Molecular/TextArea/theme'

import { buttonColor, ButtonColorType } from '../components/Atom/Button/theme'
import { COLOR, ColorValues } from './color'
import { font } from './font'

export interface ThemeStyleElements {
  font: typeof font
  color: typeof COLOR
  button: ButtonColorType
  dialog: DialogType
  textArea: TextAreaColorType
  loader: LoaderColorType
  zIndex: Record<string, number>
  background: ColorValues
  text: ColorValues
  input: InputColorType
  boxShadow: Record<number, string>
  checkbox: CheckboxColorType
  radioButton: RadioButtonColorType
  width: {
    narrow: string
    wide: string
  },
  footer: {
    background: string
    text: string
  }
}

export interface ThemeMode {
  origin: ThemeStyleElements,
}

export interface Theme {
  mode: ThemeMode
}

export const theme: Theme = {
  mode: {
    origin: {
      font,
      color: COLOR,
      button: buttonColor,
      loader: loaderColor,
      dialog: dialogColor,
      input: inputColor,
      textArea: textAreaColor,
      zIndex: {
        toast: 1020,
        modal: 1010,
        dimmed: 1000,
        popover: 130,
        tooltip: 120,
        select: 110,
        header: 100,
        menu: 90,
        default: 1,
        below: -1,
      },
      background: COLOR.wb[0],
      text: COLOR.gray[900],
      footer: {
        background: COLOR.wb[0],
        text: COLOR.gray[400],
      },
      boxShadow: {
        320: `0 8px 16px ${COLOR.black[100]}`,
        340: `0 6px 12px ${COLOR.black[200]}`,
        360: `0 4px 8px ${COLOR.black[300]}`,
      },
      checkbox: checkboxColor,
      radioButton: radioButtonColor,
      width: {
        narrow: '328px',
        wide: '502px',
      },
    },
  },
}

declare module '@emotion/react' {
  export interface Theme extends ThemeStyleElements {}
}

interface ThemeGroup {
  origin: ThemeStyleElements
}

export const mode: ThemeGroup = {
  origin: { ...theme.mode.origin },
}
