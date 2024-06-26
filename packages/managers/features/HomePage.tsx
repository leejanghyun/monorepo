import styled from '@emotion/styled'

import { FrameLayout } from '@/components/FrameLayout'

function HomePage({ title }: any) {
  console.log(title)
  return (
    <FrameLayout>
      <h1>Home Page</h1>

      <Span>ㅇㅇㄴㅁㅇㅁㄴ</Span>
      <Button>Click me</Button>
    </FrameLayout>

  )
}

const Button = styled.button`
  color: red;
`

const Span = styled.span`
  & + ${Button} {
    color: blue
  }
`

const Button1 = styled.button``

const Span1 = styled.span`
  color: red;

  & + ${Button1} {
    color: blue;
  }
`
export default HomePage
