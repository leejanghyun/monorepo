type ObjectValue<T extends object, K extends keyof T = keyof T> = T[K]

export const FONT_FAMILY_SANS_SERIF = 'Spoqa Han Sans Neo, sans-serif' as const

export const FontSize = {
  9: '9px',
  10: '10px',
  11: '11px',
  12: '12px',
  14: '14px',
  16: '16px',
  18: '18px',
  20: '20px',
  24: '24px',
} as const

export type FontSizeKey = keyof typeof FontSize
export type FontSizeValue = ObjectValue<typeof FontSize>

export const FontWeight = {
  REGULAR: 'normal',
  BOLD: 'bold',
} as const

export type FontWeightKey = keyof typeof FontWeight
export type FontWeightValue = ObjectValue<typeof FontWeight>

export const LineHeight = {
  9: '13px',
  10: '16px',
  11: '16px',
  12: '18px',
  14: '20px',
  16: '22px',
  18: '26px',
  20: '28px',
  24: '32px',
}

export type LineHeightKey = keyof typeof LineHeight
export type LineHeightValue = ObjectValue<typeof LineHeight>

export const LetterSpacing = {
  DEFAULT: 0,
} as const

export type LetterSpacingKey = keyof typeof LetterSpacing
export type LetterSpacingValue = ObjectValue<typeof LetterSpacing>

export const BorderRadius = {
  PX_32: '32px',
  PX_28: '28px',
  PX_24: '24px',
  PX_20: '20px',
  PX_16: '16px',
  PX_12: '12px',
  PX_10: '10px',
  PX_8: '8px',
  PX_4: '4px',
  PX_0: 0,
} as const

export type BorderRadiusKey = keyof typeof BorderRadius
export type BorderRadiusValue = ObjectValue<typeof BorderRadius>

export const Opacity = {
  OPACITY_0: 0,
  OPACITY_0_1: 0.1,
  OPACITY_0_2: 0.2,
  OPACITY_0_3: 0.3,
  OPACITY_0_4: 0.4,
  OPACITY_0_5: 0.5,
  OPACITY_0_6: 0.6,
  OPACITY_0_7: 0.7,
  OPACITY_0_8: 0.8,
  OPACITY_0_9: 0.9,
  OPACITY_1: 1,
}

export type OpacityKey = keyof typeof Opacity
export type OpacityValue = ObjectValue<typeof Opacity>
