import axios, {
  AxiosError, AxiosInstance, AxiosRequestConfig,
} from 'axios'

import { Api } from '@/constants'

/** 공통 응답 타입 */
export type CommonResponse = {
  status: number;
  statusText: string
  data: unknown;
  message: string;
}

export const DefaultConfig: AxiosRequestConfig = {
  timeout: Api.Config.DefaultTimeout,
  withCredentials: true,
} as const

/**
 * 클라이언트 Request Custom Config 타입 정의
 */
export interface ClientRequestConfig extends AxiosRequestConfig {
  isSkipHeader?: boolean; // Header 값 무시 유무
  isSkipError?: boolean // 응답 에러 토스트 무시 유무
  abortController?: AbortController
  isSkipLoading?: boolean // request 미응답 시 로딩 노출 유무
}

/**
 * AxiosApi(부모 클래스) 객체 정의
 */
export class AxiosApi {
  protected client: AxiosInstance

  constructor(config: ClientRequestConfig) {
    this.client = axios.create(config)
  }

  protected onRequestConfig(config: AxiosRequestConfig<ClientRequestConfig>) {
    return config
  }

  protected onRequestError(error: AxiosError) {
    return Promise.reject(error)
  }

  public getClient() {
    return this.client
  }

  protected parseBlobToJson = async function parseBlobToJson(blob: Blob): Promise<any> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()

      reader.onload = () => {
        try {
          const jsonString = reader.result as string
          const jsonData = JSON.parse(jsonString)
          resolve(jsonData)
        } catch (error) {
          reject(error)
        }
      }

      reader.onerror = (error) => {
        reject(error)
      }

      reader.readAsText(blob)
    })
  }
}
