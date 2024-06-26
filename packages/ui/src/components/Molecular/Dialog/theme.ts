import { COLOR } from '@ui/styles/color'

export type DialogType = {
  backDrop: {
    on: string
    off: string
  },
  background: string
}

export const dialogColor: DialogType = {
  backDrop: {
    on: COLOR.black[600],
    off: COLOR.black[100],
  },
  background: COLOR.wb[0],
}
