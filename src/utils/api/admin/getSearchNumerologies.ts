import { API_ENDPOINT, DEFAULT_HEADERS, Error, Response } from '@models/api'
import { Input, ServerResponse } from '@models/api/admin/getSearchNumerologies'

export const getSearchNumerologies = async (
  input: Input,
  additionalHeaders: Record<string, string> = {},
): Promise<Response<ServerResponse>> => {
  const { id, startPage, limit, accessToken } = input ?? {}

  const queryString = new URLSearchParams()

  queryString.set('startPage', startPage.toString())
  queryString.set('limit', limit.toString())

  try {
    const getSearchRecordsResponse = await fetch(
      `${API_ENDPOINT}/api/v1/users/${id}/search-numerology?${queryString.toString()}`,
      {
        method: 'GET',
        headers: {
          ...DEFAULT_HEADERS,
          ...additionalHeaders,
          Authorization: `Bearer ${accessToken}`,
        },
      },
    )
    if (getSearchRecordsResponse.ok) {
      const getSearchRecordsRawResponse = (await getSearchRecordsResponse.json()) as Response<ServerResponse>
      if (getSearchRecordsRawResponse.success) {
        return { success: getSearchRecordsRawResponse.success, response: getSearchRecordsRawResponse.response }
      } else {
        return { success: false, response: null, message: getSearchRecordsRawResponse.message }
      }
    } else {
      const getSearchRecordsRawResponse = (await getSearchRecordsResponse.json()) as { error: Error }
      return { success: false, response: null, message: getSearchRecordsRawResponse.error.message }
    }
  } catch (error) {
    console.error('[getSearchNumerologies]: ', error)
    return { success: false, response: null, message: 'Internal server error' }
  }
}
