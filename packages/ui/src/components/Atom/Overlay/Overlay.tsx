import { css, keyframes } from '@emotion/react'
import styled from '@emotion/styled'

export interface OverlayProps {
  animationDuration?: number
  noAnimate?: boolean
  opacity?: number
  zIndex?: number
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

export const Overlay = styled.div<OverlayProps>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: ${({ zIndex, theme }) => zIndex ?? theme.zIndex.modal};
  background-color: rgba(0, 0, 0, ${(props) => props.opacity ?? 0.5});
  animation: ${fadeIn} ${({ animationDuration = 200 }) => animationDuration / 1000}s forwards ease-out;

  ${({ noAnimate }) => noAnimate && css`
    animation: none;
  `}
`
