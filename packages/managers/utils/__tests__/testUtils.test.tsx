import {
  render,
} from '@/utils/testUtils'

const NEXT_ID = '__next'
const PORTAL_ID = '__portal'

describe('Test Util 테스트', () => {
  it('필요한 Dom Container Mount 여부 (id=__next, id=__portal)', () => {
    render(<div />)

    const targets = [NEXT_ID, PORTAL_ID]

    targets.forEach((id: string) => {
      expect(document.getElementById(id)).toBeInTheDocument()
    })
  })
})
