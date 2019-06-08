import { useState } from 'react'

export const useLocalStorage = (key, defaultValue) => {
  let [value, setValue] = useState(() => {
    try {
      let storedValue = localStorage.getItem(key)
      if (storedValue) {
        return JSON.parse(storedValue)
      }
      return defaultValue
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err)
    }
  })

  const setValueAndStore = newValue => {
    localStorage.setItem(key, JSON.stringify(newValue))
    setValue(newValue)
  }

  return [value, setValueAndStore]
}
