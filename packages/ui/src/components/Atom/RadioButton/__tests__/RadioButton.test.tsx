import { fireEvent, screen } from '@testing-library/react'
import { render } from '@ui/utils/testUtils'

import RadioButton from '../RadioButton'

describe('RadioButton.test component', () => {
  test('라벨 테스트 ', async () => {
    render(<RadioButton label="Test RadioButton" />)
    const radioButton = await screen.getByTestId('radioButton')

    expect(radioButton).toBeInTheDocument()
  })

  test('Disable 테스트', async () => {
    render(<RadioButton
      label="Test Label"
      disabled
    />)
    const customRadioButton = await screen.getByTestId('customRadioButton')

    fireEvent.click(customRadioButton)

    const radioButton = await screen.getByTestId('radioButton')

    expect(radioButton).not.toBeChecked()
  })

  test('클릭 이벤트 테스트', async () => {
    render(<RadioButton label="Test radioButton" />)
    const radioButton = await screen.getByTestId('radioButton')

    fireEvent.click(radioButton)

    expect(radioButton).toBeChecked()
  })
})
