import { useEffect, useState } from 'react'

export const useWindowOffset = () => {
  const [offset, setOffset] = useState<number>(0)

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset)
    }
  }, [])

  return { offset }
}
