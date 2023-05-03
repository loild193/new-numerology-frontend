import { API_ENDPOINT, DEFAULT_HEADERS, Error, Response } from '@models/api'
import { Input, ServerResponse } from '@models/api/admin/detailUser'

export const detailUser = async (
  input: Input,
  additionalHeaders: Record<string, string> = {},
): Promise<Response<ServerResponse>> => {
  const { id, accessToken } = input ?? {}

  if (!id) {
    return { success: false, response: null, message: 'Missing id' }
  }

  try {
    const detailUserResponse = await fetch(`${API_ENDPOINT}/api/v1/users/${id}`, {
      method: 'GET',
      headers: {
        ...DEFAULT_HEADERS,
        ...additionalHeaders,
        Authorization: `Bearer ${accessToken}`,
      },
    })
    if (detailUserResponse.ok) {
      const detailUserRawResponse = (await detailUserResponse.json()) as Response<ServerResponse>
      if (detailUserRawResponse.success) {
        return { success: detailUserRawResponse.success, response: detailUserRawResponse.response }
      } else {
        return { success: false, response: null, message: detailUserRawResponse.message }
      }
    } else {
      const detailUserRawResponse = (await detailUserResponse.json()) as { error: Error }
      return { success: false, response: null, message: detailUserRawResponse.error.message }
    }
  } catch (error) {
    console.error('[detailUser]: ', error)
    return { success: false, response: null, message: 'Internal server error' }
  }
}
