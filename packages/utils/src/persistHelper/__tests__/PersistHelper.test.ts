import { PersisHelper, persistHelper } from '../PersistHelper'

describe('persistHelper', () => {
  const storageKeyName = 'testKey'
  const storageType = PersisHelper.Local

  beforeEach(() => {
    window = { localStorage: {} } as any

    window[storageType].setItem(storageKeyName, '')
  })

  it('LocalStorage 삽입 테스트', () => {
    const helper = persistHelper(storageKeyName, storageType)
    const testData = 'value'

    helper.setItem(testData)

    const retrievedData = helper.getItem()

    expect(retrievedData).toEqual(testData)
  })

  it('LocalStorage 제거 테스트', () => {
    const helper = persistHelper(storageKeyName, storageType)
    const testData = 'value'

    helper.setItem(testData)
    helper.removeItem()

    const retrievedData = helper.getItem()

    expect(retrievedData).toBeNull()
  })
})
