import { fireEvent, screen } from '@testing-library/react'
import { render } from '@ui/utils/testUtils'

import Checkbox from '../Checkbox'

describe('Checkbox component', () => {
  test('라벨 테스트 ', async () => {
    render(<Checkbox label="Test Checkbox" />)
    const checkbox = await screen.getByTestId('checkbox')

    expect(checkbox).toBeInTheDocument()
  })

  test('Disable 테스트', async () => {
    render(<Checkbox
      label="Test Checkbox"
      disabled
    />)
    const customCheckbox = await screen.getByTestId('customCheckbox')

    fireEvent.click(customCheckbox)

    const checkbox = await screen.getByTestId('checkbox')

    expect(checkbox).not.toBeChecked()
  })

  test('클릭 이벤트 테스트', async () => {
    render(<Checkbox label="Test Checkbox" />)
    const checkbox = await screen.getByTestId('checkbox')

    fireEvent.click(checkbox)

    expect(checkbox).toBeChecked()
  })
})
