import { deleteCookie } from 'cookies-next'
import jwt from 'jsonwebtoken'
import { COOKIES_KEY } from '@src/models/keys'
import dayjs from '@utils/dayjs'
import { ROLE } from '@models/api/authentication/login'

export enum STATUS_ACCESS_TOKEN {
  EXPIRED = 'EXPIRED',
  UNEXPIRED = 'UNEXPIRED',
  NO_ACCESS_TOKEN = 'NO_ACCESS_TOKEN',
  INVALID = 'INVALID',
}

type AccessTokenData = {
  id: string
  role: ROLE
}

export function checkAccessToken(accessToken = ''): { data: AccessTokenData | null; status: STATUS_ACCESS_TOKEN } {
  if (accessToken) {
    try {
      const accessTokenData = jwt.decode(accessToken)
      if (accessTokenData && typeof accessTokenData !== 'string') {
        const isTokenExpired = dayjs.utc().valueOf() > (accessTokenData as any).exp * 1000

        if (isTokenExpired) {
          return { data: null, status: STATUS_ACCESS_TOKEN.EXPIRED }
        }

        return { data: { id: accessTokenData.id, role: accessTokenData.role }, status: STATUS_ACCESS_TOKEN.UNEXPIRED }
      }

      return { data: null, status: STATUS_ACCESS_TOKEN.NO_ACCESS_TOKEN }
    } catch (error) {
      deleteCookie(COOKIES_KEY.ACCOUNT_INFO)
      return { data: null, status: STATUS_ACCESS_TOKEN.INVALID }
    }
  } else {
    return { data: null, status: STATUS_ACCESS_TOKEN.NO_ACCESS_TOKEN }
  }
}
