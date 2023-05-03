import { API_ENDPOINT, DEFAULT_HEADERS, Error, Response } from '@models/api'
import { Input, ServerResponse } from '@models/api/admin/getUsers'

export const getUsers = async (
  input: Input,
  additionalHeaders: Record<string, string> = {},
): Promise<Response<ServerResponse>> => {
  const { keyword, filter, startPage, limit, accessToken } = input ?? {}

  const queryString = new URLSearchParams()

  queryString.set('startPage', startPage.toString())
  queryString.set('limit', limit.toString())
  if (keyword) {
    queryString.set('keyword', keyword)
  }
  if (filter) {
    queryString.set('filter', filter)
  }

  try {
    const getUsersResponse = await fetch(`${API_ENDPOINT}/api/v1/users?${queryString.toString()}`, {
      method: 'GET',
      headers: {
        ...DEFAULT_HEADERS,
        ...additionalHeaders,
        Authorization: `Bearer ${accessToken}`,
      },
    })
    if (getUsersResponse.ok) {
      const getUsersRawResponse = (await getUsersResponse.json()) as Response<ServerResponse>
      if (getUsersRawResponse.success) {
        return { success: getUsersRawResponse.success, response: getUsersRawResponse.response }
      } else {
        return { success: false, response: null, message: getUsersRawResponse.message }
      }
    } else {
      const getUsersRawResponse = (await getUsersResponse.json()) as { error: Error }
      return { success: false, response: null, message: getUsersRawResponse.error.message }
    }
  } catch (error) {
    console.error('[getUsers]: ', error)
    return { success: false, response: null, message: 'Internal server error' }
  }
}
