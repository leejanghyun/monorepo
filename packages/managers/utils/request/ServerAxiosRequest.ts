import {
  AxiosError, AxiosRequestConfig, AxiosResponse,
} from 'axios'

import { AxiosApi, DefaultConfig } from './AxiosApi'

/**
 * Server Axios Request 모듈
 */
class ServerAxiosRequest extends AxiosApi {
  private static thisInstance: ServerAxiosRequest // singleton instance

  /**
   * Singleton Instance 반환
   * @returns Server Axios Request Instance 반환
   */
  public static getInstance(): ServerAxiosRequest {
    if (!this.thisInstance) {
      this.thisInstance = new ServerAxiosRequest(DefaultConfig)
    }

    return this.thisInstance
  }

  constructor(config: AxiosRequestConfig) {
    super(config)

    const { interceptors } = this.client

    interceptors.request.use(this.onRequestConfig.bind(this), this.onRequestError.bind(this))
    interceptors.response.use(this.onSuccess.bind(this), this.onResponseError.bind(this))
  }

  protected onSuccess(response: AxiosResponse) {
    return response?.data ?? response
  }

  protected onResponseError = async (error: AxiosError<any>) => {
    return Promise.reject(error)
  }
}

export const serverRequest = <T>(options: AxiosRequestConfig): Promise<T> => {
  return ServerAxiosRequest.getInstance().getClient().request(options)
}