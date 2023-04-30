import { useRouter } from 'next/router'
import { deleteCookie } from 'cookies-next'
import { COOKIES_KEY } from '@models/keys'
import { useBoundStore } from '@src/zustand'

export const useLogOut = () => {
  const router = useRouter()
  const { removeAccountInfo } = useBoundStore((store) => ({
    removeAccountInfo: store.removeAccountInfo,
  }))

  const logOut = () => {
    removeAccountInfo()
    deleteCookie(COOKIES_KEY.ACCOUNT_INFO)

    setTimeout(() => {
      void router.push('/login')
    }, 1000)
  }

  return { logOut }
}
