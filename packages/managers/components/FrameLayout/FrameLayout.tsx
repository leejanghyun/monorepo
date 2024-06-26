import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { COLOR } from '@leejangheon/ui'
import {
  PropsWithChildren,
} from 'react'

import { GlobalStatus } from '../GlobalStatus'

interface FrameLayoutProps {
  responsive?: boolean
}

function FrameLayout({
  responsive = false,
  children,
}: PropsWithChildren<FrameLayoutProps>) {
  return (
    <>
      <Layout
        responsive={responsive}
      >
        <Header />
        {children}
      </Layout>
      <GlobalStatus />
    </>
  )
}

const Header = styled.header`
  position: sticky;
  padding: 10px 0;
  top: 0;
  height: 60px;
  background-color: ${COLOR.primary[100]};
  z-index: 999999;
`

const Layout = styled.div<{ responsive: boolean }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;

  ${({ responsive }) => !responsive && css`
    min-width: 1440px;
  `}
`

export default FrameLayout
