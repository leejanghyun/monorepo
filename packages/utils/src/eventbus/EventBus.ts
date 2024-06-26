import { v4 as uuid } from 'uuid'

export type EventCallback = Function

export interface EventMap {
  [eventName: string]: Record<string, EventCallback>
}

/**
 * 이벤트 버스 클래스 객체
 */
export class EventBus {
  private events: EventMap = {}

  /**
   * 전테 이벤트 제거
   */
  public clear(): void {
    this.events = {}
  }

  /**
   * 이벤트 전송 함수
   * @param event 이벤트 명
   * @param data 전송 할 데이터
   */
  public publish(event: string, data?: any): void {
    const eventPool = this.events[event]

    if (!eventPool) {
      return
    }

    const funcIds = Object.keys(eventPool)
    const len = funcIds.length

    for (let i = 0; i < len; i += 1) {
      const funcId = funcIds[i]

      eventPool[funcId]?.(data)
    }
  }

  /**
   * 이벤트 수신 함수
   * @param event 이벤트 명
   * @param callback 이벤트 실행 함수
   * @returns 이벤트 아이디
   */
  public subscribe(event: string, callback: EventCallback): string {
    if (!this.events[event]) {
      this.events[event] = {}
    }

    let hasSameId = false
    let uniqueId = ''

    while (!hasSameId) {
      const eventObj = this.events[event]
      const funcIds = Object.keys(eventObj)
      const len = funcIds.length

      uniqueId = uuid()
      hasSameId = true

      if (len) {
        for (let i = 0; i < len; i += 1) {
          const funcId = funcIds[i]

          if (funcId === uniqueId) {
            hasSameId = false
            break
          }
        }
      }
    }

    this.events[event][uniqueId] = callback
    return uniqueId
  }

  /**
   * 이벤트 해제
   * @param id 이벤트 아이디
   */
  public unsubscribe(id: string): void {
    const eventKeys = Object.keys(this.events)
    const len = eventKeys.length

    for (let i = 0; i < len; i += 1) {
      const event = eventKeys[i]

      if (this.events[event][id]) {
        delete this.events[event][id]

        if (!Object.keys(this.events[event]).length) {
          delete this.events[event]
        }
        break
      }
    }
  }

  /**
   * 이벤트 해제
   * @param eventName 이벤트 명
   */
  public unsubscribeEvent(eventName: string): void {
    delete this.events[eventName]
  }
}

const eventBus = new EventBus()

export default eventBus
