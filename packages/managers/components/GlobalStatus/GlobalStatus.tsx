import { Loader } from '@leejangheon/ui'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import {
  AxiosMetaData, ClientAxiosRequest,
  ClientRequestConfig, CommonResponse,
} from '@/utils'

/**
 * 전역 상태 처리 컴포넌트
 */
function GlobalStatus() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [isHrefTag, setIsHrefTag] = useState(false)

  /**
   * Loader 숨김 처리
   */
  const hideLoader = () => {
    const clientInstance = ClientAxiosRequest.getInstance()
    const configs = Array.from(clientInstance.getPending().values())
    const filters = configs.filter((config) => !config.isSkipLoading)
    const isSkipLoading = filters.length > 0

    if (!isSkipLoading) {
      setLoading(false)
    }
  }

  /**
   * Request 모듈 이벤트 초기화
   */
  useEffect(() => {
    const clientInstance = ClientAxiosRequest.getInstance()

    /**
     * Request 성공 요청 발생 시 Callback 처리
     */
    clientInstance.addEvent('requestSuccess', ({ config }: AxiosMetaData) => {
      const { isSkipLoading } = config || {}

      if (!isSkipLoading) {
        setLoading(true)
      }
    })

    /**
     * Response 성공 응답 발생 시 Callback 처리
     */
    clientInstance.addEvent('responseSuccess', () => {
      hideLoader()
    })

    /**
     * Response 에러 응답 발생 시 Callback 처리
     */
    clientInstance.addEvent('responseError', async ({ response, config }: AxiosMetaData) => {
      const { isSkipError } = config as ClientRequestConfig || {}
      const { data } = response || {}

      if (!isSkipError) {
        const { message } = data as CommonResponse || {}

        alert(message)
      }

      hideLoader()
    })

    return () => {
      clientInstance.removeEvent('requestSuccess')
      clientInstance.removeEvent('responseError')
      clientInstance.removeEvent('responseSuccess')
    }
  }, [router])

  // 이벤트 리스너 등록
  useEffect(() => {
    // 이동 시작 핸들러
    const handleStart = () => {
      if (isHrefTag) {
        return
      }
      setLoading(true)
    }

    // 이동 완료후 핸들러
    const handleComplete = () => {
      setLoading(false)
    }

    document.addEventListener('click', (e: Event) => {
      const { srcElement } = e || {}
      const { href } = srcElement as HTMLAnchorElement || {}
      const isLinkTag = !!href

      if (isLinkTag) {
        setLoading(false)
        setIsHrefTag(true)
      }
    })

    window.addEventListener('beforeunload', handleStart)
    router.events.on('routeChangeError', handleComplete)
    router.events.on('routeChangeComplete', handleComplete)

    // Cleanup event listeners
    return () => {
      window.removeEventListener('beforeunload', handleStart)
      router.events.off('routeChangeError', handleComplete)
      router.events.off('routeChangeComplete', handleComplete)
    }
  }, [router, isHrefTag])

  if (!loading) {
    return null
  }

  return (
    <Loader open />
  )
}

export default GlobalStatus
