export const enum PersisHelper {
  Session = 'sessionStorage',
  Local = 'localStorage',
}

export interface PersistHelperOptionObject {
  strict?: boolean
}

export type PersistHelperOption = PersistHelperOptionObject | null | undefined

export function persistHelper<T = string>(
  storageKeyName = '',
  storageType = PersisHelper.Local,
) {
  function getItem<V = T>(options?: PersistHelperOption): V | null {
    const { strict = false } = options ?? {}

    try {
      return JSON.parse(decodeURIComponent(atob(window[storageType].getItem(storageKeyName) as string)))
    } catch (exception) {
      if (strict) {
        throw exception
      }
      return null
    }
  }

  function setItem<V = T | Partial<T>>(value: V, options?: PersistHelperOption): void | boolean {
    const { strict = false } = options ?? {}

    try {
      window[storageType].setItem(storageKeyName, btoa(encodeURIComponent(JSON.stringify(value))))
      return true
    } catch (exception) {
      if (strict) {
        throw exception
      }
      return false
    }
  }

  function removeItem(options?: PersistHelperOption): void | boolean {
    const { strict = false } = options ?? {}

    try {
      window[storageType].removeItem(storageKeyName)
      return true
    } catch (exception) {
      if (strict) {
        throw exception
      }
      return false
    }
  }

  return {
    getItem,
    setItem,
    removeItem,
  }
}
