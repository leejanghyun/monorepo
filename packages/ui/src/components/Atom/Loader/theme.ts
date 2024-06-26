import { COLOR } from '@ui/styles/color'

export type LoaderColorType = {
  color: string
}

export const loaderColor: LoaderColorType = {
  color: COLOR.primary[500],
} as const
