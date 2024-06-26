import ErrorBlock from '@/components/ErrorBlock'

function InternalServerErrorPage() {
  return (
    <ErrorBlock
      title="페이지를 표시할 수 없어요."
      description={(
        <>
          예상하지 못한 오류가 발생했습니다.<br />
          일시적인 현상이거나 네트워크 문제일 수 있으니,<br />
          잠시 후 다시 시도해주세요. (-500)
        </>
      )}
      customAction={{
        text: '홈으로 가기',
        onClick: () => {
          window.location.href = '/'
        },
      }}
    />
  )
}

export default InternalServerErrorPage
