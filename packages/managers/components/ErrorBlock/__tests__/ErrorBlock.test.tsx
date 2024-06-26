import { fireEvent, screen } from '@testing-library/react'

import {
  render,
} from '@/utils/testUtils'

import ErrorBlock from '../ErrorBlock'

describe('ErrorBlock 컴포넌트', () => {
  test('Title Description 렌더링 테스트', async () => {
    const title = '제목'
    const description = '설명서'

    render(<ErrorBlock
      title={title}
      description={description}
    />)

    const titleElement = await screen.findByTestId('errorBlockTitle')
    const descriptionElement = await screen.findByTestId('errorBlockDescription')

    expect(titleElement).toBeInTheDocument()
    expect(descriptionElement).toBeInTheDocument()
  })

  test('버튼 컴포넌트 Rendering Test', async () => {
    const title = '제목'
    const description = '설명서'
    const buttonText = '버튼'

    render(
      <ErrorBlock
        title={title}
        description={description}
        button={(
          <button
            data-testid="errorBlockButton"
            type="button"
          >{buttonText}
          </button>
)}
      />,
    )

    const buttonElement = await screen.findByTestId('errorBlockButton')

    expect(buttonElement).toBeInTheDocument()
  })

  test('onClick 이벤트 호출 유무', async () => {
    const title = '제목'
    const description = '설명서'
    const buttonText = '버튼'
    const customAction = {
      text: buttonText,
      onClick: jest.fn(),
    }

    render(<ErrorBlock
      title={title}
      description={description}
      customAction={customAction}
    />)

    const buttonElement = await screen.findByTestId('button')

    fireEvent.click(buttonElement)
    expect(customAction.onClick).toHaveBeenCalledTimes(1)
  })
})
