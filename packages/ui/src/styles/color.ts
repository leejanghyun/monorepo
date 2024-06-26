type ObjectValue<T extends object, K extends keyof T = keyof T> = T[K]

export const BlackAlphaColor = {
  50: 'rgba(0, 0, 0, 0.04)',
  100: 'rgba(0, 0, 0, 0.08)',
  200: 'rgba(0, 0, 0, 0.14)',
  300: 'rgba(0, 0, 0, 0.20)',
  400: 'rgba(0, 0, 0, 0.30)',
  500: 'rgba(0, 0, 0, 0.45)',
  600: 'rgba(0, 0, 0, 0.60)',
  700: 'rgba(0, 0, 0, 0.70)',
  800: 'rgba(0, 0, 0, 0.80)',
  900: 'rgba(0, 0, 0, 0.90)',
}

export const WhiteAlphaColor = {
  50: 'rgba(255, 255, 255, 0.05)',
  100: 'rgba(255, 255, 255, 0.1)',
  200: 'rgba(255, 255, 255, 0.2)',
  300: 'rgba(255, 255, 255, 0.3)',
  400: 'rgba(255, 255, 255, 0.4)',
  500: 'rgba(255, 255, 255, 0.5)',
  600: 'rgba(255, 255, 255, 0.6)',
  700: 'rgba(255, 255, 255, 0.7)',
  800: 'rgba(255, 255, 255, 0.8)',
  900: 'rgba(255, 255, 255, 0.9)',
}

export const GrayColor = {
  50: '#f8f9fa',
  100: '#eef0f3',
  200: '#e0e2e8',
  300: '#bec5cc',
  400: '#8c9299',
  500: '#6e747a',
  600: '#51565c',
  700: '#36393d',
  800: '#27292D',
  900: '#171819',
} as const

export type GrayColorValue = ObjectValue<typeof GrayColor>

export const PrimaryBlueColor = {
  50: '#f5f9ff',
  100: '#e6f1ff',
  200: '#cce0ff',
  300: '#8AB9FF',
  400: '#3d8bff',
  500: '#0064ff',
  600: '#0052d1',
  700: '#09429F',
  800: '#113063',
  900: '#15223D',
}

export type PrimaryBlueColorValue = ObjectValue<typeof PrimaryBlueColor>

const WhiteBlackColor = {
  0: '#fff',
  1000: '#000',
}

export type WhiteBlackColorValue = ObjectValue<typeof WhiteBlackColor>

export type ColorValues = GrayColorValue | PrimaryBlueColorValue | WhiteBlackColorValue

export const COLOR = {
  wb: {
    ...WhiteBlackColor,
  },
  gray: GrayColor,
  black: BlackAlphaColor,
  white: WhiteAlphaColor,
  primary: PrimaryBlueColor,
}

export type ColorKey = keyof typeof COLOR
export type ColorValue = ObjectValue<typeof COLOR>
