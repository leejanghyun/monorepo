import { EventBus, EventCallback } from '@leejangheon/utils'
import axios, {
  AxiosError, AxiosRequestConfig, AxiosResponse,
} from 'axios'
import bcrypt from 'md5'

import {
  AxiosApi, ClientRequestConfig, DefaultConfig,
} from './AxiosApi'

export type AxiosEventType = 'responseSuccess' | 'requestSuccess' | 'requestError' | 'responseError'

export type AxiosMetaData = {
  error: AxiosError
  config: ClientRequestConfig
  response: AxiosResponse
}

/**
 * Client Axios Request 모듈
 */
export class ClientAxiosRequest extends AxiosApi {
  private events: EventBus = new EventBus()

  private static thisInstance: ClientAxiosRequest

  private pending: Map<string, ClientRequestConfig> = new Map() // cancel token을 휘한 config 객체 Hash값 저장소

  /**
   * Singleton Instance 반환
   * @returns Server Axios Request Instance 반환
   */
  public static getInstance(): ClientAxiosRequest {
    if (!this.thisInstance) {
      this.thisInstance = new ClientAxiosRequest({
        ...DefaultConfig,
        isSkipHeader: true, // 응답 헤더 값 무시 유무
        isSkipError: false, // 응답 에러 무시 유무
        isSkipLoading: false,
      })
    }

    return this.thisInstance
  }

  public getPending() {
    return this.pending
  }

  /**
   * 공통 에러 처리 함수
   * @param errorCallback
   */
  public static axiosErrorHandler(errorCallback?: Function) {
    return (error?: AxiosError<any>, ...args: any[]) => {
      try {
        if (axios.isCancel(error)) {
          throw error
        }

        errorCallback?.(error, ...args)
      } catch (error) {
        console.warn(error)
      }
    }
  }

  constructor(config: ClientRequestConfig) {
    super(config)

    const { interceptors } = this.client

    interceptors.request.use(this.onRequestConfig.bind(this), this.onRequestError.bind(this))
    interceptors.response.use(this.onSuccess.bind(this), this.onResponseError.bind(this))
  }

  /**
   * 요청 오류 발생 시
   * @param error 에러 객체
   * @returns 에러 객체
   */
  protected onRequestError(error: AxiosError) {
    this.events.publish('requestError', { error }) // request error event 전달

    return Promise.reject(error)
  }

  /**
   * 응답 성공 콜백
   * @param response Axios 응답 객체
   * @returns 응답 데이터
   */
  protected onSuccess(response: AxiosResponse<any, unknown>) {
    const { config } = response || {}
    const { isSkipHeader } = config as ClientRequestConfig || {} // Header 값 무시 유무

    this.removePending(config)
    this.events.publish('responseSuccess', { response }) // success event 전달

    return isSkipHeader ? response?.data : response
  }

  /**
   * 응답 실패 콜백
   * @param error 에러 객체
   * @returns 응답 에러 객체
   */
  protected onResponseError = async (error: AxiosError<any>) => {
    const { config, response } = error

    if (axios.isCancel(error)) { // cancel token 발생 경우
      return Promise.reject(error)
    }

    if (config) {
      this.removePending(config) // 기존 pending Hash Code Key 제거
    }

    this.events.publish('responseError', { response, config }) // error event 전달

    return Promise.reject(error)
  }

  private removePending(config: AxiosRequestConfig) {
    const hashCodeValue = this.getConfigHashCode(config)

    this.pending.delete(hashCodeValue)
  }

  /**
   * 요청 Interceptor
   * @param config Axios Config 객체
   * @returns  Axios Config 객체
   */
  protected onRequestConfig(config: ClientRequestConfig) {
    const hashCodeValue = this.getConfigHashCode(config)
    const abortController = new AbortController()

    if (this.pending.has(hashCodeValue)) {
      config.signal = abortController.signal
      config.abortController = abortController
      abortController.abort()

      return config
    }

    config.signal = abortController.signal
    config.abortController = abortController

    this.pending.set(hashCodeValue, config)
    this.events.publish('requestSuccess', { config }) // request Success event 전달

    return config
  }

  /**
   * Config 객체를 기준으로 고유한 HashCode 생성
   * - Cancel Token 조건 식별을 위한 고유한 HashCode 생성
   * @param config Axios Config 객체
   * @returns 고유한 HashCode 값
   */
  protected getConfigHashCode({
    method, url, data, params,
  }: ClientRequestConfig) {
    // converter
    const converter = (origin: object): unknown => {
      if (!origin) {
        return ''
      }
      if (typeof origin === 'string') {
        return origin
      }
      if (origin instanceof FormData) {
        const ret: Record<string, FormDataEntryValue> = {}
        origin.forEach((value, key) => {
          ret[key] = value
        })
        return JSON.stringify(ret)
      }
      if (typeof origin === 'object') {
        return JSON.stringify(origin)
      }
      return ''
    }
    let key = (url || '') + (method || '')
    key += converter(params)
    key += converter(data)

    const uniqueHashCodeKey = bcrypt(key)

    return uniqueHashCodeKey
  }

  /**
   * Request 이벤트 등록
   * @param event Request 이벤트
   * @param eventCallback Request 이벤트 콜백
   * @returns Event Id 값
   */
  public addEvent(event: string, eventCallback: EventCallback) {
    return this.events.subscribe(event, eventCallback)
  }

  /**
   * Request 이벤트 복수 등록
   * @param events Request 이벤트 복수
   * @param eventCallback Request 이벤트 콜백
   * @returns Event Id 배열 값
   */
  public addEvents(events: string[], eventCallback: EventCallback) {
    const ids = events.map((event) => this.events.subscribe(event, eventCallback))

    return ids
  }

  /**
   * Request 이벤트 해제
   * @param event 이벤트
   */
  public removeEvent(event: string) {
    this.events.unsubscribeEvent(event)
  }

  /**
   * Request 특정 이벤트 해제
   * @param event 이벤트
   */
  public removeEventByEventId(id: string) {
    this.events.unsubscribe(id)
  }
}

export const clientRequest = <T>(options: ClientRequestConfig): Promise<T> => {
  return ClientAxiosRequest.getInstance()
    .getClient().request(options)
}
