import { fireEvent } from '@testing-library/react'
import { render } from '@ui/utils/testUtils'

import Button from '../Button'

describe('Button Component', () => {
  test('onClick 호출 유무 확인', () => {
    const onClickMock = jest.fn()
    const { getByText } = render(<Button onClick={onClickMock}>Click me</Button>)

    fireEvent.click(getByText('Click me'))

    expect(onClickMock).toHaveBeenCalled()
  })
})
