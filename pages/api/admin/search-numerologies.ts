import { NextApiRequest, NextApiResponse } from 'next'
import { COOKIES_KEY } from '@src/models/keys'
import { Input } from '@models/api/admin/getSearchNumerologies'
import { AccountInfo } from '@src/zustand/accountInfo'
import { getSearchNumerologies } from '@utils/api/admin/getSearchNumerologies'
import { safeParseJSON } from '@utils/json'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const requestBody: Input = req.body ?? {}
      const accountInfo = req.cookies[COOKIES_KEY.ACCOUNT_INFO] ?? ''
      const accountInfoJson = safeParseJSON<AccountInfo>(accountInfo)

      const { success, response, error, message } = await getSearchNumerologies({
        ...requestBody,
        accessToken: accountInfoJson.accessToken ?? '',
      })

      if (success && response && !error) {
        return res.status(200).json({
          success: true,
          response,
        })
      } else {
        return res.status(400).json({
          success: false,
          response: null,
          error,
          message,
        })
      }
    } catch (error: unknown) {
      console.log(error)
      res.status(400).json({ success: false, response: null, error: true, message: (error as Error).message })
    }
  } else {
    res.status(400).json({ success: false, response: null, error: true, message: 'Invalid method. POST only.' })
  }
}
