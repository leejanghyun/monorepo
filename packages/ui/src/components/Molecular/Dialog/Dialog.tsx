import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { Overlay, OverlayProps } from '@ui/components/Atom'
import { ReactNode } from 'react'

import Portal from '../../Atom/Portal/Portal'

export interface DialogProps extends OverlayProps {
  open: boolean
  useBackDrop?: boolean
  children?: ReactNode
}

export function Dialog({
  open,
  useBackDrop = false,
  children,
  ...rest
}: DialogProps) {
  return (
    <Portal>
      {open && (
      <Container
        useBackDrop={useBackDrop}
        {...rest}
      >
        <Box>
          {children}
        </Box>
      </Container>
      )}
    </Portal>
  )
}

const Container = styled(Overlay)<{ useBackDrop: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;

  ${({ useBackDrop, theme }) => (useBackDrop ? css`
    background-color: ${theme.dialog.backDrop.on};
  ` : css`
    background-color: ${theme.dialog.backDrop.off};
  `)}

  &::before, &::after{
    content: '';
    flex: 1;
    display: block;
    width: 100%;
    min-height: 20px;
  }
`

const Box = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  border-radius: 16px;
  min-width: 500px;
  min-height: 320px;
  background: ${({ theme }) => theme.dialog.background};
  box-shadow: ${({ theme }) => theme.boxShadow[320]};
`
