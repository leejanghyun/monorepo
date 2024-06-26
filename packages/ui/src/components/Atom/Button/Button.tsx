import { css } from '@emotion/react'
import styled from '@emotion/styled'
import {
  memo, ReactNode,
} from 'react'

export type ButtonSize = 'xlarge' | 'large' | 'medium' | 'small'
export type ButtonPalette = 'blue' | 'blue-stroke'

type ButtonProps = {
  type?: 'button' | 'submit'
  size?: ButtonSize
  palette?: ButtonPalette
  disabled?: boolean
  fullWidth?: boolean
  loading?: boolean
  children: ReactNode
  onClick?: () => void
}

function Button({
  type = 'button',
  size = 'xlarge',
  palette = 'blue',
  disabled,
  fullWidth,
  loading,
  children,
  onClick,
}: ButtonProps) {
  return (
    <ButtonItem
      type={type}
      data-testid="button"
      size={size}
      palette={palette}
      disabled={disabled || loading}
      fullWidth={fullWidth}
      onClick={onClick}
    >
      {children}
    </ButtonItem>
  )
}

const ButtonItem = styled.button<ButtonProps>`
  display: inline-flex;
  position: relative;
  align-items: center;
  justify-content: center;
  gap: 4px;
  border-radius: 8px;
  font-weight: 500;
  overflow: hidden;

  &:disabled {
    cursor: not-allowed;
  }
  &:not(:disabled) {
    &::before {
      content: '';
      display: none;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    & > svg {
      vertical-align: middle;
    }
  }

  ${({ fullWidth }) => fullWidth && css`width: 100%;`}

  ${({ theme, size, palette }) => {
    const isStrokePalette: boolean = !!palette?.includes('stroke')

    switch (size) {
      case 'large':
        return css`
          padding: ${isStrokePalette ? '13px 19px' : '13px 20px'};
          min-height: 48px;
          font-size: ${theme.font[16].size};
          line-height: ${theme.font[16].lineHeight};
        `
      case 'medium':
        return css`
          padding: ${isStrokePalette ? '9px 15px' : '9px 16px'};
          min-height: 40px;
          font-size: ${theme.font[14].size};
          line-height: ${theme.font[14].lineHeight};
        `
      case 'small':
        return css`
          padding: ${isStrokePalette ? '6px 11px' : '6px 12px'};
          min-height: 32px;
          font-size: ${theme.font[12].size};
          line-height: ${theme.font[12].lineHeight};
        `
      default: // xlarge
        return css`
          padding: ${isStrokePalette ? '15px 23px' : '15px 24px'};
          min-height: 56px;
          font-size: ${theme.font[18].size};
          line-height: ${theme.font[18].lineHeight};
        `
    }
  }}

  ${({ theme, disabled, palette }) => {
    switch (palette) {
      case 'blue-stroke':
        return css`
          border-width: 1px;
          border-style: solid;
          border-color: ${disabled ? theme.button.stroke.disabled.border : theme.button.stroke.border};
          background-color: ${theme.button.stroke.background};
          color: ${disabled ? theme.button.stroke.disabled.text : theme.button.stroke.text};
        `
      default: // blue
        return css`
          background-color: ${disabled ? theme.button.color.disabled.background : theme.button.color.background};
          color: ${disabled ? theme.button.color.disabled.text : theme.button.color.text};
        `
    }
  }}
`

export default memo(Button)
