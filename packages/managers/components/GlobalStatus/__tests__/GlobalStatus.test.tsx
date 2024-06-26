import { fireEvent, screen } from '@testing-library/react'

import {
  render,
} from '@/utils/testUtils'

import GlobalStatus from '../GlobalStatus'

jest.mock('next/router', () => ({
  useRouter: jest.fn(() => ({
    events: {
      on: jest.fn(),
      off: jest.fn(),
      emit: jest.fn(),
    },
  })),
}))

describe('GlobalStatus 컴포넌트', () => {
  test('페이지 움직일떄 로더 노출 유무', async () => {
    render(<GlobalStatus />)

    fireEvent(window, new Event('beforeunload'))

    const loaderElement = await screen.findByTestId('loader')

    expect(loaderElement).toBeInTheDocument()
  })
})
