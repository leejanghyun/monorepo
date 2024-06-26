import styled from '@emotion/styled'
import { Button } from '@leejangheon/ui'
import { ReactNode } from 'react'

interface ErrorBlockProps {
  title: string | ReactNode
  description: string | ReactNode
  button?: ReactNode
  customAction?: {
    text: string
    onClick: () => void
  }
}

function ErrorBlock({
  title,
  description,
  button,
  customAction,
}: ErrorBlockProps) {
  return (
    <MessageContainer>
      <h1
        data-testid="errorBlockTitle"
      >{title}
      </h1>
      <Description
        data-testid="errorBlockDescription"
      >{description}
      </Description>
      {button || (
        <ButtonWrapperBlock>
          <Button
            onClick={customAction?.onClick}
            size="small"
          >
            {customAction?.text }
          </Button>
        </ButtonWrapperBlock>
      )}
    </MessageContainer>
  )
}

const ButtonWrapperBlock = styled.div`
  margin-top: 40px;
`

const MessageContainer = styled.main`
  position: fixed;
  top: 120px;
  left: 0;
  right: 0;
  margin: 0 auto;
  max-width: 328px;
  text-align: center;

  & > h1 {
    margin-top: 40px;
    font-weight: 500;
    word-break: keep-all;
  }
`

const Description = styled.div`
  margin-top: 16px;
`

export default ErrorBlock
