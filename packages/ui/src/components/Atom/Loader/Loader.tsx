import styled from '@emotion/styled'
import { COLOR } from '@ui/styles'

export interface LoaderProps {
  open: boolean
}

/**
 * Loader 컴포넌트
 */
function Loader({ open }: LoaderProps) {
  if (!open) {
    return null
  }

  return (
    <Container>
      <LoaderAnimation data-testid="loader" />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`

const LoaderAnimation = styled.div`
  border: 2px solid ${COLOR.wb[0]};
  border-top: 2px solid ${({ theme }) => theme.loader.color};
  border-radius: 50%;
  width: 25px;
  height: 25px;
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`

export default Loader
