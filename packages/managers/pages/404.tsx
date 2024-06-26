import ErrorBlock from '@/components/ErrorBlock'

function NotFoundErrorPage() {
  return (
    <ErrorBlock
      title="페이지를 찾을 수 없어요."
      description={(
        <>
          입력하신 주소는 존재하지 않는 페이지입니다.<br />
          다시 한 번 확인 후 이용해주세요. (-404)
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

export default NotFoundErrorPage
