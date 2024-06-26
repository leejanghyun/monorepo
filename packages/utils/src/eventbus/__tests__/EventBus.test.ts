import { EventBus } from '../EventBus'

describe('EventBus', () => {
  let eventBus: EventBus
  let mockCallback: jest.Mock

  beforeEach(() => {
    eventBus = new EventBus()
    mockCallback = jest.fn()
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  test('subscribe 호출 성공 유무', () => {
    const eventId = eventBus.subscribe('testEvent', mockCallback)

    eventBus.publish('testEvent', 'testData')

    expect(mockCallback).toHaveBeenCalledWith('testData')
    eventBus.unsubscribe(eventId)
  })

  test('subscribe 함수 unique id 반환', () => {
    const eventId1 = eventBus.subscribe('testEvent', mockCallback)
    const eventId2 = eventBus.subscribe('testEvent', mockCallback)

    expect(eventId1).not.toBe(eventId2)

    eventBus.unsubscribe(eventId1)
    eventBus.unsubscribe(eventId2)
  })

  test('unsubscribe 호출시 callback 해제', () => {
    const eventId = eventBus.subscribe('testEvent', mockCallback)

    eventBus.unsubscribe(eventId)
    eventBus.publish('testEvent', 'testData')

    expect(mockCallback).not.toHaveBeenCalled()
  })

  test('unsubscribeEvent 테스트', () => {
    eventBus.unsubscribeEvent('testEvent')
    eventBus.publish('testEvent', 'testData')

    expect(mockCallback).not.toHaveBeenCalled()
  })

  test('clear 함수 테스트', () => {
    eventBus.subscribe('testEvent', mockCallback)

    eventBus.clear()
    eventBus.publish('testEvent', 'testData')

    expect(mockCallback).not.toHaveBeenCalled()
  })
})
